#!/bin/bash
cd ~/projects/bishoy-personal
git pull
docker compose build
docker image prune -f
docker compose up -d