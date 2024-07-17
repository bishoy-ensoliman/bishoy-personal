#!/bin/bash
cd ~/projects/bishoy-personal
git pull
docker build . -t localhost:32000/personal-site:latest
docker push localhost:32000/personal-site:latest
docker image prune -f
microk8s kubectl apply -f namespace.yaml
microk8s kubectl apply -f personal-site-deployment.yaml
microk8s kubectl apply -f personal-site-service.yaml
microk8s kubectl apply -f personal-site-ingress.yaml