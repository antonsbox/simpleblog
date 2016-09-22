<?php

class Antonsbox_Simpleblog_Model_Post extends Mage_Core_Model_Abstract
{

    public function _construct()
    {
        parent::_construct();
        $this->_init('simpleblog/post');
    }


}