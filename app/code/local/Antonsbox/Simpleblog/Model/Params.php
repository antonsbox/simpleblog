<?php

class Antonsbox_Simpleblog_Model_Params
{
    public function toOptionArray()
    {
        return array(
            array('value' => 1, 'label' => Mage::helper('simpleblog')->__('Hello')),
            array('value' => 2, 'label' => Mage::helper('simpleblog')->__('Goodbye')),
            array('value' => 3, 'label' => Mage::helper('simpleblog')->__('Yes')),
            array('value' => 4, 'label' => Mage::helper('simpleblog')->__('No')),
        );
    }

}