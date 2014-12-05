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
    ['\Mindy\Orm\Orm', 'beforeValidate', ['\Mindy\Orm\Orm', 'beforeValidateExternal']],
    ['\Mindy\Orm\Orm', 'afterValidate', ['\Mindy\Orm\Orm', 'afterValidateExternal']],
    ['\Mindy\Orm\Orm', 'beforeSave', ['\Mindy\Orm\Orm', 'beforeSaveExternal']],
    ['\Mindy\Orm\Orm', 'afterSave', ['\Mindy\Orm\Orm', 'afterSaveExternal']],
    ['\Mindy\Orm\Orm', 'beforeDelete', ['\Mindy\Orm\Orm', 'beforeDeleteExternal']],
    ['\Mindy\Orm\Orm', 'afterDelete', ['\Mindy\Orm\Orm', 'afterDeleteExternal']],
    ['\Mindy\Form\BaseForm', 'beforeValidate', ['\Mindy\Orm\Orm', 'beforeValidateExternal']],
    ['\Mindy\Form\BaseForm', 'afterValidate', ['\Mindy\Orm\Orm', 'afterValidateExternal']],
];