#!/bin/bash
set -euo pipefail

dotenv_get () {
  local key="$1"
  # grabs the last occurrence of KEY=... and keeps everything after the first =
  local line
  line="$(grep -E "^${key}=" .env 2>/dev/null | tail -n 1 || true)"
  if [ -z "$line" ]; then
    echo ""
    return 0
  fi
  local val="${line#*=}"
  # strip surrounding quotes (single or double) + CR
  val="${val%$'\r'}"
  val="${val%\"}"; val="${val#\"}"
  val="${val%\'}"; val="${val#\'}"
  echo "$val"
}

MEM_LIMIT="$(dotenv_get MEM_LIMIT)"

MEM_LIMIT="${MEM_LIMIT:-512}"

while true ; do
  node --max-old-space-size=${MEM_LIMIT} ./src/index.js
  echo "======================Restarting..."
  sleep 1m
done