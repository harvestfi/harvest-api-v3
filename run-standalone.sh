#!/usr/bin/env bash
set -euo pipefail

dotenv_get () {
  local key="$1"
  local file="${2:-.env}"
  [ -f "$file" ] || { echo ""; return 0; }

  local line
  line="$(grep -E "^${key}=" "$file" 2>/dev/null | tail -n 1 || true)"
  [ -n "$line" ] || { echo ""; return 0; }

  local val="${line#*=}"
  val="${val%$'\r'}"
  val="${val%\"}"; val="${val#\"}"
  val="${val%\'}"; val="${val#\'}"
  echo "$val"
}

# 1) Prefer real environment (Heroku config vars or exported locally)
# 2) Fallback to .env if present
# 3) Default
if [ -z "${MEM_LIMIT:-}" ]; then
  MEM_LIMIT="$(dotenv_get MEM_LIMIT)"
fi
MEM_LIMIT="${MEM_LIMIT:-512}"

echo "Using MEM_LIMIT=${MEM_LIMIT} MB"

while true; do
  node "--max-old-space-size=${MEM_LIMIT}" ./src/index.js
  echo "======================Restarting..."
  sleep 60
done