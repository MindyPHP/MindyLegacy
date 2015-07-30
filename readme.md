# Installation

```
cd /tmp
git clone git@github.com:studio107/Mindy.git
sh ./install.sh
cd Mindy/app
composer install
cd ../www/static
npm install && bower install
cd ../static_admin
npm install && bower install
cd ..
sh ./up.sh
php index.php db sync
php index.php user createsuperuser
mkdir ../app/runtime
chmod -R 0777 ../app/runtime
```

# Demo

[demo site](http://demo.mindy-cms.com/)

# Components

#### Application

[![Build Status](https://travis-ci.org/studio107/Mindy_Application.svg)](https://travis-ci.org/studio107/Mindy_Application)
[![Coverage Status](https://coveralls.io/repos/studio107/Mindy_Application/badge.png)](https://coveralls.io/r/studio107/Mindy_Application)
[![Latest Stable Version](https://poser.pugx.org/mindy/application/v/stable.svg)](https://packagist.org/packages/mindy/application)
[![Total Downloads](https://poser.pugx.org/mindy/application/downloads.svg)](https://packagist.org/packages/mindy/application)

#### Query

[![Build Status](https://travis-ci.org/studio107/Mindy_Query.svg?branch=master)](https://travis-ci.org/studio107/Mindy_Query)
[![Coverage Status](https://img.shields.io/coveralls/studio107/Mindy_Query.svg)](https://coveralls.io/r/studio107/Mindy_Query?branch=master)
[![Latest Stable Version](https://poser.pugx.org/mindy/query/v/stable.svg)](https://packagist.org/packages/mindy/query)
[![Total Downloads](https://poser.pugx.org/mindy/query/downloads.svg)](https://packagist.org/packages/mindy/query)

#### Orm

[![Build Status](https://travis-ci.org/studio107/Mindy_Orm.svg)](https://travis-ci.org/studio107/Mindy_Orm)
[![Coverage Status](https://img.shields.io/coveralls/studio107/Mindy_Orm.svg)](https://coveralls.io/r/studio107/Mindy_Orm)
[![Latest Stable Version](https://poser.pugx.org/mindy/orm/v/stable.svg)](https://packagist.org/packages/mindy/orm)
[![Total Downloads](https://poser.pugx.org/mindy/orm/downloads.svg)](https://packagist.org/packages/mindy/orm)

#### Locale

[![Build Status](https://travis-ci.org/studio107/Mindy_Locale.svg)](https://travis-ci.org/studio107/Mindy_Locale)
[![Coverage Status](https://img.shields.io/coveralls/studio107/Mindy_Locale.svg)](https://coveralls.io/r/studio107/Mindy_Locale)
[![Latest Stable Version](https://poser.pugx.org/mindy/locale/v/stable.svg)](https://packagist.org/packages/mindy/locale)
[![Total Downloads](https://poser.pugx.org/mindy/locale/downloads.svg)](https://packagist.org/packages/mindy/locale)

#### Helper

[![Build Status](https://travis-ci.org/studio107/Mindy_Helper.png?branch=master)](https://travis-ci.org/studio107/Mindy_Helper)
[![Coverage Status](https://coveralls.io/repos/studio107/Mindy_Helper/badge.png)](https://coveralls.io/r/studio107/Mindy_Helper)
[![Latest Stable Version](https://poser.pugx.org/mindy/helper/v/stable.svg)](https://packagist.org/packages/mindy/helper)
[![Total Downloads](https://poser.pugx.org/mindy/helper/downloads.svg)](https://packagist.org/packages/mindy/helper)

#### Validation

[![Build Status](https://travis-ci.org/studio107/Mindy_Validation.svg)](https://travis-ci.org/studio107/Mindy_Validation)
[![Coverage Status](https://coveralls.io/repos/studio107/Mindy_Validation/badge.png)](https://coveralls.io/r/studio107/Mindy_Validation)
[![Latest Stable Version](https://poser.pugx.org/mindy/validation/v/stable.svg)](https://packagist.org/packages/mindy/validation)
[![Total Downloads](https://poser.pugx.org/mindy/validation/downloads.svg)](https://packagist.org/packages/mindy/validation)

#### Form

[![Build Status](https://travis-ci.org/studio107/Mindy_Form.svg?branch=master)](https://travis-ci.org/studio107/Mindy_Form)
[![Coverage Status](https://coveralls.io/repos/studio107/Mindy_Form/badge.png)](https://coveralls.io/r/studio107/Mindy_Form)
[![Latest Stable Version](https://poser.pugx.org/mindy/form/v/stable.svg)](https://packagist.org/packages/form/validation)
[![Total Downloads](https://poser.pugx.org/mindy/form/downloads.svg)](https://packagist.org/packages/form/validation)

# IRC

Сервер: `irc.freenode.net`

Порт: `6667`

Канал: `#mindy`
