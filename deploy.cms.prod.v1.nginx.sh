#!/bin/sh
git pull
docker build -f ./dockerfiles/dockerfile.cms.prod.nginx -t tslmai-angular16-cms-v1:latest .
docker ps -a -q --filter "name=tslmai-angular16-cms-v1" | grep -q . && docker rm -f tslmai-angular16-cms-v1
docker run --detach \
    --name tslmai-angular16-cms-v1 \
    --env "VIRTUAL_HOST=cms.tslmai.org.tw" \
    --env "VIRTUAL_PORT=80" \
    --env "LETSENCRYPT_HOST=cms.tslmai.org.tw" \
    --env "LETSENCRYPT_EMAIL=alert@starxfuture.com" \
    --restart unless-stopped \
    tslmai-angular16-cms-v1:latest
docker image prune -f
