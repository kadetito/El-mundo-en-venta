<?php 
include_once('G_Basic.php');
if (false) include_once('..\..\code0040\S_ClassDefinition1.php'); // Definició de clases


$usuario=htmlspecialchars(trim($_GET['txt_usuario']));
$clave=htmlspecialchars(trim($_GET['txt_clave']));

$User = new user($usuario, $clave); // si passem dos parametres, fem login
$UserArray = (array) $User;			// Convertim de Objecte a Array

//Creamos el JSON
$json_string = json_encode($UserArray);

echo  $json_string;
//Si queremos crear un archivo json, sería de esta forma:

//$file = 'agenda.json';
//file_put_contents($file, $json_string);
?>