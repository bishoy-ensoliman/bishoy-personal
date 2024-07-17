#!/bin/bash
cd ~/projects/bishoy-personal
git pull
docker build . -t localhost:32000/personal-site:latest
docker push localhost:32000/personal-site:latest
docker image prune -f
# TODO use helm charts
microk8s kubectl apply -f ./kubernetes/namespace.yaml
microk8s kubectl apply -f ./kubernetes/personalsite-deployment.yaml
microk8s kubectl apply -f ./kubernetes/personalsite-service.yaml
microk8s kubectl apply -f ./kubernetes/ingress.yaml
microk8s kubectl rollout restart deployments/personalsite -n bishoy-personalsite