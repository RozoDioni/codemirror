<?php 
namespace txthtml;
class txtHtml{
	public function mostrar($palabra){
		$nota=$palabra->file;
		foreach ($nota as $key => $value) {
			$li = <<<EOT
			<li>$value</li>
EOT;
		echo $li;
		}
	}
}

 ?>