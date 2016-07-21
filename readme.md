![:)](https://pp.vk.me/c631918/v631918218/21a33/sUXTu6oTN-U.jpg)

# Installation

[![Join the chat at https://gitter.im/MindyPHP/Mindy](https://badges.gitter.im/MindyPHP/Mindy.svg)](https://gitter.im/MindyPHP/Mindy?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

```bash
# cd <project_dir>
# clone main repository
git clone git@github.com:studio107/Mindy.git .
# clone modules from github
sh ./install.sh
# install composer
cd ./app
composer install
# copy app/config/settings_local.php.dist app/config/settings_local.php
# edit db connection settings in app/config/settings_local.php
# create tables in database
php www/index.php db sync
# create superuser
php www/index.php user createsuperuser --username=admin --email=admin@admin.com
# set permissions for runtime dir
chmod -R 0777 ./app/runtime
```

# Demo

[demo site](http://demo.mindy-cms.com/)

# Status

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Form.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Form) Mindy_Form
[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Router.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Router) Mindy_Router
