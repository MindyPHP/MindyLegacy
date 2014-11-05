#!/bin/bash

echo ""
cd app
mkdir runtime
chmod -R 0777 runtime
echo ""
composer install
echo ""
cd ../www/static
echo ""
npm install
bower install
echo ""
cd ..
git clone git@github.com:studio107/static_admin.git static_admin
cd static_admin
echo ""
npm install
bower install
echo ""
cd ..
echo ""