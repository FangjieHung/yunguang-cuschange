# API Documentation

## Base URL
- **Development**: `http://localhost:3000/api`
- **Production**: `https://api.example.com/api`

## Authentication

All requests require JWT token in Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Response Format

### Success Response
```json
{
  "data": {...},
  "success": true,
  "timestamp": "2024-05-25T10:00:00Z"
}
```

### Error Response
```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2024-05-25T10:00:00Z"
}
```

## Endpoints

### Authentication

#### Login
- **POST** `/auth/login`
- **Request**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**: `{ token: string, user: User }`

### Applications

#### List Applications
- **GET** `/applications?page=1&limit=20`
- **Response**: `{ data: Application[], total: number }`

#### Get Application
- **GET** `/applications/:id`
- **Response**: `{ data: Application }`

#### Create Application
- **POST** `/applications`
- **Request**: `Application`
- **Response**: `{ data: Application }`

#### Update Application
- **PUT** `/applications/:id`
- **Request**: `Partial<Application>`
- **Response**: `{ data: Application }`

#### Approve Application
- **POST** `/applications/:id/approve`
- **Request**: `{ comment: string }`
- **Response**: `{ success: true }`

### Dashboard

#### Get Dashboard Stats
- **GET** `/dashboard/stats`
- **Response**:
  ```json
  {
    "totalSubmitted": 12,
    "underReview": 6,
    "approved": 4,
    "trendData": [...]
  }
  ```

### Notifications

#### Get Notifications
- **GET** `/notifications?unreadOnly=false`
- **Response**: `{ data: Notification[] }`

#### Send Notification
- **POST** `/notifications`
- **Request**: `Notification`
- **Response**: `{ data: Notification }`

### Reports

#### Generate Report
- **POST** `/reports/generate`
- **Request**: `ReportConfig`
- **Response**: `{ data: Report, downloadUrl: string }`

## Error Codes

- `401` - Unauthorized (invalid token)
- `403` - Forbidden (no permission)
- `404` - Not found
- `400` - Bad request
- `500` - Server error

## Rate Limiting

- Rate limit: 1000 requests/hour
- Header: `X-RateLimit-Remaining: 999`

## Pagination

```
GET /applications?page=1&limit=20&sort=-createdAt

Response:
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

**Document Version**: 1.0
