<?php
namespace requestclass;
class request{
	function __construct() {
		$file = $_REQUEST['file'];
		$this->file = file($file);
	}
}

 ?>