#!/bin/bash

update() {
    cd $1
    echo "Run git pull in: $1"
    git pull origin master
    cd $2
}

for f in app/vendor/mindy/* ; do
    if [ -d "$f" ]; then
        update $f `pwd`
    fi
done

for f in app/Modules/* ; do
    if [ -d "$f" ]; then
        update $f `pwd`
    fi
done

cd www/static_admin
git pull origin master
cd ../../
git pull origin master
