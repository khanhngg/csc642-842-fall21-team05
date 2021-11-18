#!/usr/bin/env sh

# Abort script execution if any errors
set -e

# Build the VueJS app
npm run build

# Go to the directory where the app got generated
cd dist

# Deployment step: Add, commit, and push the changes to gh-pages branch
git init
git add .
git commit -m 'New deployment'
git push -f git@github.com:khanhngg/csc642-842-fall21-team05.git master:gh-pages

# Return to previous directory
cd -