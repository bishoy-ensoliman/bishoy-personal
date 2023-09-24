#!/bin/bash
git pull
docker compose build
docker image prune -f
docker compose up -d