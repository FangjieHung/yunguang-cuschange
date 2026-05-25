# CMS Deployment Guide

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Build Process](#build-process)
- [Deployment Environments](#deployment-environments)
- [Deployment Procedures](#deployment-procedures)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring & Logging](#monitoring--logging)
- [Troubleshooting](#troubleshooting)
- [Rollback Procedures](#rollback-procedures)

## Pre-Deployment Checklist

### Code Quality

- [ ] All tests passing: `npx nx test cms --coverage`
- [ ] Test coverage > 80%: Review `coverage/apps/cms/index.html`
- [ ] No lint errors: `npx nx lint cms`
- [ ] Code reviewed and approved
- [ ] Commit message follows conventional commits

### Build Verification

- [ ] Development build succeeds: `npx nx build cms`
- [ ] Production build succeeds: `npx nx build cms --configuration production`
- [ ] Bundle size verified (main < 500KB, gzipped < 150KB)
- [ ] No build warnings in production
- [ ] Source maps excluded from production build

### Environment Configuration

- [ ] Environment files updated (`environment.ts`, `environment.prod.ts`)
- [ ] API endpoints verified
- [ ] Feature flags configured
- [ ] Analytics enabled
- [ ] Sentry DSN configured (if using error tracking)
- [ ] Database connections tested

### Security

- [ ] JWT secret keys are secure
- [ ] API rate limiting configured
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] No hardcoded secrets in code
- [ ] Security headers configured

### Performance

- [ ] Lazy loading verified
- [ ] Caching strategy configured
- [ ] CDN configured for assets
- [ ] Service worker configured (if applicable)
- [ ] Database indexes optimized

### Accessibility

- [ ] Accessibility audit passed: WCAG 2.1 AA
- [ ] No console errors in production
- [ ] Keyboard navigation tested
- [ ] Screen reader compatibility verified

## Build Process

### Step 1: Clean Build

```bash
# Remove previous build artifacts
rm -rf dist/apps/cms

# Clear npm cache
npm cache clean --force
```

### Step 2: Install Dependencies

```bash
# Install all dependencies
npm install

# Verify installation
npm list

# Check for vulnerabilities
npm audit
```

### Step 3: Run Tests

```bash
# Run all tests
npx nx test cms --coverage

# Verify coverage meets targets
# Statements: > 80%
# Branches: > 75%
# Functions: > 80%
# Lines: > 80%
```

### Step 4: Build Application

```bash
# Development build (if needed for testing)
npx nx build cms --configuration development

# Production build
npx nx build cms --configuration production

# Build output location: dist/apps/cms/
```

### Step 5: Verify Build Output

```bash
# Check build size
du -sh dist/apps/cms/

# List build files
ls -lh dist/apps/cms/

# Verify no source maps
ls -la dist/apps/cms/*.js.map 2>&1 | grep -c "cannot access" > 0

# Check for build errors
npx nx build cms --configuration production 2>&1 | grep -i error
```

### Step 6: Generate Build Report

```bash
# Analyze bundle (requires webpack analyzer)
# npx webpack-bundle-analyzer dist/apps/cms/stats.json

# Create deployment report
cat > dist/apps/cms/BUILD_REPORT.txt << EOF
Build Date: $(date)
Git Commit: $(git rev-parse HEAD)
Git Branch: $(git rev-parse --abbrev-ref HEAD)
Build Size: $(du -sh dist/apps/cms/ | cut -f1)
Test Coverage: [From coverage report]
Build Status: SUCCESS
EOF
```

## Deployment Environments

### Development Environment

**URL**: `https://cms-dev.example.com`

```typescript
// environment.ts (Development)
export const environment = {
  production: false,
  apiUrl: 'http://api-dev.example.com/api',
  useMockApi: false,
  apiTimeout: 30000,
  cacheEnabled: true,
  cacheDuration: 3600000,
  loggingLevel: 'debug',
  appVersion: '1.0.0-beta',
};
```

### Staging Environment

**URL**: `https://cms-staging.example.com`

```typescript
// environment.staging.ts (Staging)
export const environment = {
  production: true,
  apiUrl: 'https://api-staging.example.com/api',
  useMockApi: false,
  apiTimeout: 15000,
  cacheEnabled: true,
  cacheDuration: 7200000,
  loggingLevel: 'warn',
  appVersion: '1.0.0',
  sentry: {
    dsn: 'https://staging@sentry.io/...',
  },
  analytics: {
    enabled: true,
  },
};
```

### Production Environment

**URL**: `https://cms.example.com`

```typescript
// environment.prod.ts (Production)
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com/api',
  useMockApi: false,
  apiTimeout: 15000,
  cacheEnabled: true,
  cacheDuration: 7200000,
  loggingLevel: 'error',
  appVersion: '1.0.0',
  sentry: {
    dsn: 'https://production@sentry.io/...',
  },
  analytics: {
    enabled: true,
  },
};
```

## Deployment Procedures

### Standard Web Server (Nginx/Apache)

#### Step 1: Build Application

```bash
npx nx build cms --configuration production
```

#### Step 2: Configure Web Server

**Nginx Configuration**:

```nginx
server {
    listen 443 ssl http2;
    server_name cms.example.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self'" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;
    gzip_min_length 1000;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing: all URLs go to index.html
    location / {
        root /var/www/cms;
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # API proxy (if backend on different server)
    location /api {
        proxy_pass https://api.example.com;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### Step 3: Deploy Files

```bash
# Upload build files
scp -r dist/apps/cms/* user@server:/var/www/cms/

# Or using rsync
rsync -avz dist/apps/cms/ user@server:/var/www/cms/

# Set permissions
ssh user@server "chmod -R 755 /var/www/cms"
```

#### Step 4: Restart Web Server

```bash
# Reload Nginx
ssh user@server "sudo systemctl reload nginx"

# Or restart
ssh user@server "sudo systemctl restart nginx"
```

### Docker Deployment

#### Step 1: Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build:cms -- --configuration production

# Production stage
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf
COPY cms.conf /etc/nginx/conf.d/default.conf

# Copy build files
COPY --from=builder /app/dist/apps/cms /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Step 2: Build Docker Image

```bash
# Build image
docker build -t cms:1.0.0 .

# Tag for registry
docker tag cms:1.0.0 registry.example.com/cms:1.0.0
docker tag cms:1.0.0 registry.example.com/cms:latest
```

#### Step 3: Push to Registry

```bash
# Login to registry
docker login registry.example.com

# Push image
docker push registry.example.com/cms:1.0.0
docker push registry.example.com/cms:latest
```

#### Step 4: Deploy Container

```bash
# Pull latest image
docker pull registry.example.com/cms:latest

# Run container
docker run -d \
  --name cms \
  --restart always \
  -p 80:80 \
  -p 443:443 \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  registry.example.com/cms:latest

# Verify running
docker ps | grep cms
```

### Kubernetes Deployment

#### Step 1: Create Deployment Manifest

```yaml
# cms-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cms
  labels:
    app: cms
spec:
  replicas: 3
  selector:
    matchLabels:
      app: cms
  template:
    metadata:
      labels:
        app: cms
    spec:
      containers:
      - name: cms
        image: registry.example.com/cms:1.0.0
        ports:
        - containerPort: 80
        - containerPort: 443
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 10
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
        env:
        - name: API_URL
          value: "https://api.example.com/api"
        - name: ENVIRONMENT
          value: "production"

---
apiVersion: v1
kind: Service
metadata:
  name: cms-service
spec:
  selector:
    app: cms
  ports:
  - port: 80
    targetPort: 80
  - port: 443
    targetPort: 443
  type: LoadBalancer

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: cms-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: cms
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

#### Step 2: Deploy to Kubernetes

```bash
# Apply deployment
kubectl apply -f cms-deployment.yaml

# Verify deployment
kubectl get deployment cms
kubectl get pods -l app=cms
kubectl get svc cms-service

# Check logs
kubectl logs -l app=cms -f

# Rollout status
kubectl rollout status deployment/cms
```

## CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy-cms.yml
name: Deploy CMS

on:
  push:
    branches: [main]
    paths:
      - 'apps/cms/**'
      - 'libs/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      
      - run: npx nx test cms --coverage
      
      - run: npx nx build cms --configuration production
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/apps/cms/coverage-final.json
      
      - name: Build Docker image
        run: docker build -t cms:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          docker tag cms:${{ github.sha }} registry.example.com/cms:latest
          docker push registry.example.com/cms:${{ github.sha }}
          docker push registry.example.com/cms:latest
      
      - name: Deploy to production
        run: |
          kubectl set image deployment/cms \
            cms=registry.example.com/cms:${{ github.sha }}
          kubectl rollout status deployment/cms
```

## Monitoring & Logging

### Application Monitoring

```typescript
// Configure Sentry
import * as Sentry from "@sentry/angular";

Sentry.init({
  dsn: environment.sentry.dsn,
  environment: environment.production ? 'production' : 'development',
  tracesSampleRate: environment.production ? 0.1 : 1.0,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### Error Tracking

```bash
# Monitor Sentry dashboard
https://sentry.io/organizations/your-org/issues/

# View error trends
# Set up alerts for critical errors
# Create custom dashboards
```

### Performance Monitoring

```typescript
// Monitor Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

### Log Aggregation

```bash
# View application logs
kubectl logs -l app=cms --tail=100

# Stream logs
kubectl logs -l app=cms -f

# Export logs
kubectl logs -l app=cms > cms-logs.txt
```

## Troubleshooting

### Build Failures

```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules dist
npm install
npx nx build cms --configuration production

# Check for errors
npx nx build cms --verbose
```

### Deployment Issues

```bash
# Check web server logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# Check application availability
curl -I https://cms.example.com

# Test API connectivity
curl -I https://api.example.com/api/health
```

### Performance Issues

```bash
# Check bundle size
npx webpack-bundle-analyzer dist/apps/cms/stats.json

# Check network waterfall
# Use Chrome DevTools Network tab

# Check Core Web Vitals
# Use PageSpeed Insights
```

### Docker Issues

```bash
# Check container logs
docker logs cms

# Inspect container
docker inspect cms

# Execute command in container
docker exec -it cms /bin/sh

# Test health endpoint
docker exec cms wget -O- http://localhost/health
```

## Rollback Procedures

### Rolling Back a Deployment

#### Web Server Rollback

```bash
# Keep previous version
cp -r /var/www/cms /var/www/cms-backup-v1.0.0
cp -r /var/www/cms-v0.9.9 /var/www/cms

# Restart web server
sudo systemctl reload nginx

# Verify
curl https://cms.example.com/api/version
```

#### Docker Rollback

```bash
# Stop current container
docker stop cms

# Run previous version
docker run -d \
  --name cms \
  --restart always \
  -p 80:80 \
  -p 443:443 \
  registry.example.com/cms:0.9.9

# Verify
curl https://cms.example.com
```

#### Kubernetes Rollback

```bash
# Check rollout history
kubectl rollout history deployment/cms

# Rollback to previous revision
kubectl rollout undo deployment/cms

# Rollback to specific revision
kubectl rollout undo deployment/cms --to-revision=2

# Verify
kubectl rollout status deployment/cms
```

### Rollback Testing

```bash
# Before rollback, verify previous version
kubectl get deployments -o wide | grep cms

# Check pod readiness
kubectl get pods -l app=cms

# Monitor health after rollback
kubectl logs -l app=cms -f
```

---

**Document Version**: 1.0
**Last Updated**: May 2026
**Maintained By**: DevOps Team
