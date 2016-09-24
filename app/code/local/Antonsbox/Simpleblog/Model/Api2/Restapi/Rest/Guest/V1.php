<?php

class Antonsbox_Simpleblog_Model_Api2_Restapi_Rest_Guest_V1
    extends Antonsbox_Simpleblog_Model_Api2_Restapi
{
    public function _retrieve(array $data)
    {
        $param= $this->getRequest()->getParam('id');
        Mage::log('param='.$param);
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

        Mage::log($outputArray);
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
        Mage::log('_delete');
        return json_encode('YEEES!!! It`s a _delete!!');
    }

    public function _multiDelete(array $data)
    {
        Mage::log('_multiDelete');
        return json_encode('YEEES!!! It`s a _multiDelete!!');
    }

    public function _update(array $data)
    {
        Mage::log('_update');
        return json_encode('YEEES!!! It`s a _update!!');
    }

    public function _multiUpdate(array $data)
    {
        Mage::log('_multiUpdate');
        return json_encode('YEEES!!! It`s a _multiUpdate!!');
    }

    public function _create(array $data)
    {
        $post = Mage::getModel("simpleblog/post");
        $post->setCreated($data['created']);
        $post->setTitle($data['title']);
        $post->setContent($data['content']);
        $post->save();
        Mage::log($data);
        return $this->_getLocation($post);
    }

    public function _multiCreate(array $data)
    {
        foreach ($data as $item) {
            $post = Mage::getModel("simpleblog/post");
            $post->setCreated($item['created']);
            $post->setTitle($item['title']);
            $post->setContent($item['content']);
            $post->save();
            Mage::log($item);
        }
    }
}