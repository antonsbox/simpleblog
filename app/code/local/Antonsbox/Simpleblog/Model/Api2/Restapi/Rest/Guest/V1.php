<?php

class Antonsbox_Simpleblog_Model_Api2_Restapi_Rest_Guest_V1
    extends Antonsbox_Simpleblog_Model_Api2_Restapi
{
    public function _retrieve(array $data)
    {
        $param = $this->getRequest()->getParam('id');
        $collection = Mage::getModel("simpleblog/post")->getCollection();
        $collection->addFieldToFilter('post_id', array('eq' => $param));
        $outputArray = array();
        foreach ($collection as $item) {
            $postId = $item->getPostId();
            $title = $item->getTitle();
            $content = $item->getContent();
            $created = $item->getCreated();
            $post_to_encode = array();
            $post_to_encode[] = array(
                'post_id' => $postId,
                'title' => $title,
                'content' => $content,
                'created' => $created);
            array_push($outputArray, $post_to_encode);
        }
        $ecoded_data = json_encode($outputArray);
        return $ecoded_data;
    }

    public function _retrieveCollection()
    {
        $collection = Mage::getModel("simpleblog/post")->getCollection()->load();
        $collection->setOrder('created', 'DESC');
        $outputArray = array();
        foreach ($collection as $item) {
            $postId = $item->getPostId();
            $title = $item->getTitle();
            $content = $item->getContent();
            $created = $item->getCreated();
            $post_to_encode = array();
            $post_to_encode[] = array(
                'post_id' => $postId,
                'title' => $title,
                'content' => $content,
                'created' => $created);
            array_push($outputArray, $post_to_encode);
        }
        $ecoded_data = json_encode($outputArray);
        return $ecoded_data;
    }

    public function _delete(array $data)
    {
        $param = $this->getRequest()->getParam('id');
        $post = Mage::getModel("simpleblog/post")->load($param);
        $post->setId($param)->delete();
    }

    public function _multiDelete(array $data)
    {
        Mage::log('_multiDelete');
        foreach ($data as $item) {
            $post = Mage::getModel("simpleblog/post")->load($item['post_id']);
            $post->setId($item['post_id'])->delete();
        }
    }

    public function _update(array $data)
    {
        $post = Mage::getModel("simpleblog/post")->load($data['post_id'])->addData($data);
        $post->setId($data['post_id'])->save();
    }

    public function _multiUpdate(array $data)
    {
        foreach ($data as $item) {
            $post = Mage::getModel("simpleblog/post")->load($item['post_id'])->addData($item);
            $post->setId($item['post_id'])->save();
        }
    }

    public function _create(array $data)
    {
        $post = Mage::getModel("simpleblog/post");
        $post->setCreated($data['created']);
        $post->setTitle($data['title']);
        $post->setContent($data['content']);
        $post->save();
    }

    public
    function _multiCreate(array $data)
    {
        foreach ($data as $item) {
            $post = Mage::getModel("simpleblog/post");
            $post->setCreated($item['created']);
            $post->setTitle($item['title']);
            $post->setContent($item['content']);
            $post->save();
        }
    }
}