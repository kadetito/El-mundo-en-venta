<?php
//AIXO NO FUNCIONA, AQUI POTS POSAR ELS ARRAYS QUE TORNI LA CONSULTA O BE COPIAR AIXO I PEGAR A ON CALGUI SEMPRE CANVIANT AQUESTA PLANA PER LA QUE TOQUI
//AL JAVASCRIPT DE segunda.html
header( 'Content-type: text/html; charset=iso-8859-1' );

$search = $_POST['servicioSugerencia'];

$query_services = mysql_query("SELECT service_id, title FROM services WHERE title like '" . $search . "%' AND status=1 ORDER BY title DESC", $conexion);
while ($row_services = mysql_fetch_array($query_services)) {
    echo '<div class="suggest-element"><a data="'.$row_services['title'].'" id="service'.$row_services['service_id'].'">'.utf8_encode($row_services['title']).'</a></div>';
}

?>