<?php

class Antonsbox_Simpleblog_Model_Resource_Post extends Mage_Core_Model_Mysql4_Abstract
{

    public function _construct()
    {
        $this->_init('simpleblog/table_post', 'post_id');
    }

}