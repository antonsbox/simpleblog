<?php

class Antonsbox_Simpleblog_IndexController extends Mage_Core_Controller_Front_Action
{

    public function indexAction()
    {
        $this->loadLayout();
//        $layoutHandles = $this->getLayout()->getUpdate()->getHandles();
//        echo '<pre>' . print_r($layoutHandles, true) . '</pre>';
//        echo 'Index';
        $this->renderLayout();
    }

    public function editAction()
    {
        $this->loadLayout();
//        $layoutHandles = $this->getLayout()->getUpdate()->getHandles();
//        echo '<pre>' . print_r($layoutHandles, true) . '</pre>';
//        echo 'Index';
        $this->renderLayout();
    }

}