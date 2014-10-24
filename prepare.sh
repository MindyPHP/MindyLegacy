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
cd ../static_admin
echo ""
npm install
bower install
echo ""
cd ..
echo ""
php index.php db sync