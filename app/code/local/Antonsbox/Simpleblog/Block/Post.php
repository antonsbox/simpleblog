<?php

class Antonsbox_Simpleblog_Block_Post extends Mage_Core_Block_Template
{

    public function getPostCollection()
    {
        $postCollection = Mage::getModel('simpleblog/post')->getCollection();
        $postCollection->setOrder('created', 'DESC');
        return $postCollection;
    }

}