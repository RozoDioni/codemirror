<div class="interfaz">
<div id="boxfile">
            <ul>


<?php
$favoritos = file_get_contents('favoritos.json');
$favoritos = json_decode($favoritos);
foreach ($favoritos as $key => $value) {
      $template = <<<EOT
      <li class="favorito" onclick="recargardirectorio(getAttribute('path'))" path="$value">
            <span class="ico carver"></span>
            <span class="file">$key</span>
      </li>
EOT;
echo $template;
}
 ?>
</ul>
      </div>
</div>