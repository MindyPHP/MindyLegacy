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

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Orm.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Orm) Mindy_Orm

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Query.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Query) Mindy_Query

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_QueryBuilder.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_QueryBuilder) Mindy_QueryBuilder

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Event.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Event) Mindy_Event

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Console.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Console) Mindy_Console

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Di.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Di) Mindy_Di

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Helper.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Helper) Mindy_Helper

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_StatePersister.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_StatePersister) Mindy_StatePersister

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Cache.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Cache) Mindy_Cache

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Security.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Security) Mindy_Security

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Controller.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Controller) Mindy_Controller

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_ErrorHandler.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_ErrorHandler) Mindy_ErrorHandler

[![Build Status](https://travis-ci.org/MindyPHP/Mindy_Base.svg?branch=master)](https://travis-ci.org/MindyPHP/Mindy_Base) Mindy_Base
