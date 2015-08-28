# Installation

```
# cd <project_dir>
# clone main repository
git clone git@github.com:studio107/Mindy.git .
# clone modules from github
sh ./install.sh
# install composer
cd ./app
composer install
# Copy app/config/settings_local.php.dist app/config/settings_local.php
# Edit db connection settings in app/config/settings_local.php
# create tables in database
php www/index.php db sync
# create superuser
php www/index.php user createsuperuser --username=admin --email=admin@admin.com
# set permissions for runtime dir
chmod -R 0777 ./app/runtime
```

# Demo

[demo site](http://demo.mindy-cms.com/)

# IRC

Сервер: `irc.freenode.net`

Порт: `6667`

Канал: `#mindy`
