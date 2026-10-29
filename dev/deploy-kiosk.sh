#!/bin/bash
# Copies the built plugin to the kiosk (no rsync there): dev/deploy-kiosk.sh [host]
set -e
HOST=${1:-10.0.2.254}
cd "$(dirname "$0")/.."
tar czf - --exclude='.git' --exclude='.github' --exclude='.scripts' --exclude='dist' --exclude='latest_release.md' --exclude='node_modules' --exclude='src' --exclude='tests' --exclude='dev' --exclude='build.mjs' --exclude='package*.json' --exclude='.gitignore' --exclude='.DS_Store' -s ',^\.,com.ncsender.nccam,' . \
  | ssh root@$HOST 'cd /root/.config/ncSender/plugins && rm -rf com.ncsender.nccam && tar xzmf - && chown -R root:root com.ncsender.nccam && echo deployed'
