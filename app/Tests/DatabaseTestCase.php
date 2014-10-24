<?php

namespace Mindy\Tests;

use Mindy\Orm\Sync;

class DatabaseTestCase extends TestCase
{
    protected function getModels()
    {
        return [];
    }

    protected function setUp()
    {
        parent::setUp();
        $this->initModels($this->getModels());
    }

    protected function tearDown()
    {
        parent::tearDown();
        $this->dropModels($this->getModels());
    }

    public function initModels(array $models)
    {
        $sync = new Sync($models);
        $sync->delete();
        $sync->create();
    }

    public function dropModels(array $models)
    {
        $sync = new Sync($models);
        $sync->delete();
    }
}
