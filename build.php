<?php
$phar = new Phar('vendor.phar', 0, 'vendor.phar');
$phar->buildFromDirectory('../app/vendor', '');
$phar->setStub($phar->createDefaultStub('autoload.php'));
