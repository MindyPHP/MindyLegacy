<?php

/**
 * User: max
 * Date: 01/09/15
 * Time: 12:38
 */

namespace Modules\Dummy\Controllers;

use Modules\Core\Controllers\Controller;

class MainController extends Controller
{
    public function actionIndex()
    {
        echo $this->render('dummy/index.html');
    }
}
