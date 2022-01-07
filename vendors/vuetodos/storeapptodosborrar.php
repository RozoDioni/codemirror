<?php
$conn = new PDO('mysql:host=localhost;dbname=dioni','root','');
$sql = 'SELECT complete, title FROM todoapp';

function getTodos($conn,$sql) {
    $arr = array();
    foreach ($conn->query($sql) as $row) {
	$row['complete']==0 ? $row['complete']=false:$row['complete']=true;
		$arr[]=['title'=>$row['title'],'complete'=>$row['complete']];
    }
	return $arr;
}
$arr=getTodos($conn,$sql);
echo 'todo=';
print(json_encode($arr));

?>
