#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cp -R src/.github src/.vuepress/dist
cd src/.vuepress/dist
git init
git add -A
git commit -m 'deploy'



# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:alejandrotello7/sneakers-mexico.git master:gh-pages
