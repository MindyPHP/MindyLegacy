#!/bin/bash

export GITHUB_TOKEN=$(cat ~/.github_token)
VERSION=$(git describe --abbrev=0 --tags)
DATE=$(date +'%d-%m-%Y')
NAME=mindy-$VERSION-$DATE.tar.gz

echo $NAME

# GZIP=-9 tar --exclude=build --exclude=node_modules --exclude=.git -zcvf $NAME ./

# openssl dgst -sha256 $NAME > $NAME.sha256
# openssl dgst -md5 $NAME > $NAME.md5
# SHA256=$(cat $NAME.sha256)
# MD5=$(cat $NAME.md5)

# echo "Github delete"
# github-release delete --user Studio107 --repo Mindy --tag $VERSION

# echo "Github release"
# github-release release --user Studio107 --repo Mindy --tag $VERSION --name "Mindy" --description "Mindy release $VERSION $DATE"

# echo "Github upload"
# github-release upload --user Studio107 --repo Mindy --tag $VERSION --name $NAME --file $NAME

# echo "Github upload"
# github-release upload --user Studio107 --repo Mindy --tag $VERSION --name $NAME.md5 --file $NAME.md5

# echo "Github upload"
# github-release upload --user Studio107 --repo Mindy --tag $VERSION --name $NAME.sha256 --file $NAME.sha256

# rm -rf ./$NAME ./$NAME.md5 ./$NAME.sha256
