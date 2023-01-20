#!/usr/bin/env sh
set -e
yarn run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:gaycookie/PoGO-QR-Gen.git master:gh-pages

cd -