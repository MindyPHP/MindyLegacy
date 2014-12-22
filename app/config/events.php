<?php

return [
    [
        '\Mindy\Orm\Orm', 'beforeValidate',
        ['\Mindy\Orm\Orm', 'beforeValidate']
    ],
    [
        '\Mindy\Orm\Orm', 'afterValidate',
        ['\Mindy\Orm\Orm', 'afterValidate']
    ],
    [
        '\Mindy\Orm\Orm', 'beforeSave',
        ['\Mindy\Orm\Orm', 'beforeSave']
    ],
    [
        '\Mindy\Orm\Orm', 'afterSave',
        ['\Mindy\Orm\Orm', 'afterSave']
    ],
    [
        '\Mindy\Orm\Orm', 'beforeDelete',
        ['\Mindy\Orm\Orm', 'beforeDelete']
    ],
    [
        '\Mindy\Orm\Orm', 'afterDelete',
        ['\Mindy\Orm\Orm', 'afterDelete']
    ],

    [
        '\Mindy\Form\BaseForm', 'beforeValidate',
        ['\Mindy\Form\BaseForm', 'beforeValidate']
    ],
    [
        '\Mindy\Form\BaseForm', 'afterValidate',
        ['\Mindy\Form\BaseForm', 'afterValidate']
    ],
    [
        '\Mindy\Form\BaseForm', 'beforeSetAttributes',
        ['\Mindy\Form\BaseForm', 'beforeSetAttributes']
    ],
];
