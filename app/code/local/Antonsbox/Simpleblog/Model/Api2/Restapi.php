<?php

class Antonsbox_Simpleblog_Model_Api2_Restapi extends Mage_Api2_Model_Resource
{
    const RESULT_ERROR_NOT_FOUND = 404;
    const RESULT_ERROR_IMPORT = 500;
    const RESULT_SUCCESS = 200;
    protected $_responseItems = array();

    protected function _addResult(array $item, $errorCode, $errorMessage)
    {
        $result = array('result' => $errorCode, 'id' => $item['id']);
        if ($errorMessage) {
            $result['error'] = $errorMessage;
        }
        $this->_responseItems[] = $result;
    }
}