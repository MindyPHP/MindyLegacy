#!/bin/bash

EXCLUDE=(build node_modules .git .gitignore .idea *.iml)
GITHUB_TOKEN=$(cat ~/.github_token)
GITHUB_USER="MindyPHP"
GITHUB_REPOSITORY="Mindy"

function create_checksums {
	echo "Create checksums"
	openssl dgst -sha256 $1 > $1.sha256
	openssl dgst -md5 $1 > $1.md5
	echo
}

function mindy_release {
	echo "Github release"
	NAME=$1
	VERSION=$2
	echo "---- Make release"
	github-release release --user $GITHUB_USER --repo $GITHUB_REPOSITORY --tag $VERSION --name "Mindy" --description "Mindy $VERSION $DATE"
	echo "---- Upload archive"
	github-release upload --user $GITHUB_USER --repo $GITHUB_REPOSITORY --tag $VERSION --name $NAME --file $NAME
	echo "---- Upload md5 checksum"
	github-release upload --user $GITHUB_USER --repo $GITHUB_REPOSITORY --tag $VERSION --name $NAME.md5 --file $NAME.md5
	echo "---- Upload sha256 checksum"
	github-release upload --user $GITHUB_USER --repo $GITHUB_REPOSITORY --tag $VERSION --name $NAME.sha256 --file $NAME.sha256
	echo
}

function cleanup {
	echo "Cleanup"
	CLENAUP=(./build ./node_modules ./.git ./.gitignore ./.idea ./*.iml)
	for item in ${modules[*]}
    do
        rm -rf $item
    done
	echo 
}

function install_deps {
	echo "Install composer deps"
	php ./composer.phar install --no-dev -o
	rm -rf ./composer.phar
	echo
}

function install_mindy {
	echo "Install mindy"
	CURRENT=$(pwd)

	git clone git@github.com:MindyPHP/Mindy.git mindy
	cd ./mindy
	git fetch origin --tags

	VERSION=$(git describe --abbrev=0 --tags)
	DATE=$(date +'%d-%m-%Y')
	NAME="mindy__$DATE__$VERSION.tar.gz"

	cleanup

	cd ./app
	install_composer
	install_deps
	cd $CURRENT

	echo "Make archive"
	GZIP=-9 tar -zcvf $NAME mindy
	echo

	rm -rf mindy

	create_checksums $NAME
	mindy_release $NAME $VERSION
	rm -rf ./$NAME.md5 ./$NAME.sha256 ./$NAME
	echo
}

function install_composer {
	echo "Install composer"
	php -r "readfile('https://getcomposer.org/installer');" > composer-setup.php
	php -r "if (hash_file('SHA384', 'composer-setup.php') === 'a52be7b8724e47499b039d53415953cc3d5b459b9d9c0308301f867921c19efc623b81dfef8fc2be194a5cf56945d223') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
	php composer-setup.php
	php -r "unlink('composer-setup.php');"
	echo
}

install_mindy