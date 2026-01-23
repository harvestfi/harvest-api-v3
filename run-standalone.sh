#!/bin/bash

while true ; do
  node --expose-gc ./src/index.js
  echo "======================Restarting..."
done