<?php

class Antonsbox_Simpleblog_IndexController extends Mage_Core_Controller_Front_Action
{

    public function indexAction()
    {
        $news = Mage::getModel('simpleblog/post')->getCollection()->setOrder('created', 'DESC');
        $viewUrl = Mage::getUrl('simpleblog/post');

        echo '<h1>News</h1>';
        foreach ($news as $item) {
            echo '<h2><a href="' . $viewUrl . '?id=' . $item->getId() . '">' . $item->getTitle() . '</a></h2>';
        }
    }

    public function editAction()
    {
        echo '<h1>Edit</h1>';
    }

}