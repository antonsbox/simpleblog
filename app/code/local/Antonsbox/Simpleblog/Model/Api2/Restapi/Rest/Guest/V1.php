<?php

class Antonsbox_Simpleblog_Model_Api2_Restapi_Rest_Guest_V1
    extends Antonsbox_Simpleblog_Model_Api2_Restapi
{
//    public function _retrieveCollection()
//    {
//        //get order Collection
//        return $res;
//    }
//
//    public function _multiUpdate($data)
//    {
//        //do all the business logic magic in here.
//
//        $this->_successMessage('OK', Mage_Api2_Model_Server::HTTP_OK, array('item' => $result));
//        if ($error) {
//            $this->_errorMessage('Orders not found', Mage_Api2_Model_Server::HTTP_NOT_FOUND, array('item' => $error));
//        }
//    }

//    protected function _retrieve()
//    {
//        $registryCollection = Mage::getModel('simpleblog/post')->getCollection();
//        return $registryCollection;
//    }


//    /**
//     * Create a blog post
//     * @return array
//     */
//    public function _create(array $data)
//    {
//        $postId = $data['id'];
//        $postTitle = $data['title'];
//        $postContent = $data['content'];
//        $postCreated = $data['created'];
//
//        $post = Mage::getModel("simpleblog/post");
//
//        $post->setId($postId);
//        $post->setTitle($postTitle);
//        $post->setContent($postContent);
//        $post->setCreated(md5($postCreated));
//        $post->save();
//
//        return $this->_getLocation($post);
//    }
//    public function _retrieve(array $data)
//    {
//        $collection = Mage::getModel("simpleblog/post");
//        $post = $collection->load()->toArray();
//        $size = $collection->getSize();
//        $postCount=$size;
//        return $postCount;
//
//        return $post;
//    }
}