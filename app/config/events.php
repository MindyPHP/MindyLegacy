<?php

return [
//    [
//        '\Mindy\Base\Controller',
//        'preAction',
//        ['\Mindy\Base\Controller', 'preAction']
//    ],
//    [
//        '\Mindy\Base\Controller',
//        'postAction',
//        ['\Mindy\Base\Controller', 'postAction']
//    ],
    [
        '\Mindy\Orm\Orm', 'beforeValidate', ['\Mindy\Orm\Orm', 'beforeValidate'],
        '\Mindy\Orm\Orm', 'afterValidate', ['\Mindy\Orm\Orm', 'afterValidate'],
        '\Mindy\Orm\Orm', 'beforeSave', ['\Mindy\Orm\Orm', 'beforeSave'],
        '\Mindy\Orm\Orm', 'afterSave', ['\Mindy\Orm\Orm', 'afterSave'],
        '\Mindy\Orm\Orm', 'beforeDelete', ['\Mindy\Orm\Orm', 'beforeDelete'],
        '\Mindy\Orm\Orm', 'afterDelete', ['\Mindy\Orm\Orm', 'afterDelete'],

        '\Mindy\Form\BaseForm', 'beforeValidate', ['\Mindy\Orm\Orm', 'beforeValidate'],
        '\Mindy\Form\BaseForm', 'afterValidate', ['\Mindy\Orm\Orm', 'afterValidate'],
    ],
];
