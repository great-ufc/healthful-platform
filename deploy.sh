#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -A
git commit -m 'New deployment'
git push -f git@github.com:great-ufc/healthful-platform.git main:gh-pages

cd -