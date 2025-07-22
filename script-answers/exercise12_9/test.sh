#!/bin/sh

RESPONSE=$(curl -s http://app:8080)

if [ "$RESPONSE" = "Hello World!" ]; then
  echo "Test passed!"
  exit 0
else
  echo "Test failed. Got: $RESPONSE"
  exit 1
fi