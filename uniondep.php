<?php 
	echo 'unirjs($uniodepjs);'."<br>\n";
	echo 'unircss($uniodepcss);'."\n";
	$dep=file_get_contents('dep.json');
	$deparr=json_decode($dep);
	$deparr->css;
	$deparr->js;
	$uniodepjs="";
	$uniodepcss="";
	foreach ($deparr->js as $key => $value) {
		$deppjs=file_get_contents('./'.$value);
		$uniodepjs.=$deppjs."<br>\n";
	}
	foreach ($deparr->css as $key => $value) {
		$deppcss=file_get_contents('./'.$value);
		$uniodepcss.=$deppcss."/*unido*/\n";
	}
	function unirjs($uniodepjs){
		echo "<br>\n";
		if(file_put_contents('./js/maestro.js', $uniodepjs)){
			echo "los archivos se unieron<br> \n\n";
			foreach ($GLOBALS['deparr']->js as $key => $value) {
				echo $key."<br>\n";
			}
		}
	}
	function unircss($uniodepcss){
		echo "\n";
		if(file_put_contents('./css/maestro.css', $uniodepcss)){
			echo "los archivos se unieron \n\n";
			foreach ($GLOBALS['deparr']->css as $key => $value) {
				echo $key."<br>\n";
			}
		}
	}
	unirjs($uniodepjs);
	unircss($uniodepcss);

 ?>