<?php

class Antonsbox_Simpleblog_TestController extends Mage_Core_Controller_Front_Action
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

    public function viewAction()
    {
        $postId = Mage::app()->getRequest()->getParam('id', 0);
        $post = Mage::getModel('simpleblog/post')->load($postId);

        if ($post->getId() > 0) {
            $this->loadLayout();
            $this->getLayout()->getBlock('post.content')->assign(array(
                "postItem" => $post,
            ));
            $this->renderLayout();
        } else {
            $this->_forward('noRoute');
        }
    }

}