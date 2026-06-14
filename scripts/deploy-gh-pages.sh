#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/deploy-gh-pages.sh [remote] [branch]
# Defaults: remote=$(git config --get remote.origin.url), branch=gh-pages

REMOTE=${1:-$(git config --get remote.origin.url)}
BRANCH=${2:-gh-pages}
BUILD_DIR="dist/apps/web/browser"

if [ -z "$REMOTE" ]; then
  echo "No remote specified and no remote.origin.url found. Aborting." >&2
  exit 1
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Build directory $BUILD_DIR not found. Running build..."
  npm run build:web:gh-pages
fi

TMPDIR=$(mktemp -d)
echo "Using temp dir: $TMPDIR"

# Prepare a clean git repo in temp dir and push
git init "$TMPDIR"
git -C "$TMPDIR" remote add origin "$REMOTE"
git -C "$TMPDIR" checkout -b "$BRANCH"
rm -rf "$TMPDIR"/*
cp -r "$BUILD_DIR"/* "$TMPDIR"/
# SPA fallback for GitHub Pages: copy index.html to 404.html so client-side routing works
if [ -f "$TMPDIR/index.html" ]; then
  cp "$TMPDIR/index.html" "$TMPDIR/404.html"
fi
git -C "$TMPDIR" add --all
git -C "$TMPDIR" commit -m "chore(deploy): gh-pages build from $(git rev-parse --short HEAD)"
git -C "$TMPDIR" push --force origin "$BRANCH"

rm -rf "$TMPDIR"
echo "Deployed to $REMOTE (branch: $BRANCH)"
