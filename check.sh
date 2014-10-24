#!/bin/bash

status() {
    cd $1
    echo "Run git status in: $1"
    git status
    cd $2
}

for f in app/vendor/mindy/* ; do
    if [ -d "$f" ]; then
        status $f `pwd`
    fi
done

for f in app/Modules/* ; do
    if [ -d "$f" ]; then
        status $f `pwd`
    fi
done

cd www/static_admin
git status
cd ../../
git status
