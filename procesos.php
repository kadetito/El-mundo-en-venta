<?php
include_once('G_Basic.php');
if (false) include_once('..\..\code0040\S_ClassDefinition1.php'); // Definició de clases

// Procesamos datos para paso1.html / segunda.html

// Verificamos los datos de Usuario
$paso			 = $_REQUEST['Paso'];
$usuarioEnviado  = $_REQUEST['usuario'];
$passwordEnviado = $_REQUEST['password'];
$ResultadoLogin  = $WebExpo->LoginByEmail($usuarioEnviado, $passwordEnviado);

$resultados = array();

$resultados['Paso']=$paso;
$resultados['usuario']=$usuarioEnviado;
$resultados['password']=$passwordEnviado;
	
if ($ResultadoLogin && ($WebExpo->AccessLevel()==10 || $WebExpo->AccessLevel()==50)) // Solo se permite usuarios de la aplicación y clientes 
	{
	/* crea un array con datos arbitrarios que seran enviados de vuelta a la aplicacion */
	$resultados["nom"] 			= $_SESSION['Name'];
	$resultados["cognom"] 		= $_SESSION['Surname'];
	$resultados["ide"] 			= $_SESSION['ExpoIDUser'];              
	$resultados["Email"] 		= $_SESSION['ExpoEmail'];              
	$resultados["Telefon"] 		= $_SESSION['PhoneNumber'];              
	$resultados["mensaje"] 		= "Validacion Correcta";
	$resultados["validacion"] 	= "ok";
	}
else
	{
	$resultados["mensaje"] = "Usuario o password incorrectos";
	$resultados["validacion"] = "error";
	/*convierte los resultados a formato json*/
	$resultadosJson = json_encode($resultados);
	/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
	echo $_REQUEST['jsoncallback'] . '(' . $resultadosJson . ');';
	die();
	}

// Obtenemos imagen de fondo
	$Select = new Select();
	$Select->Order('Random');					 // Definimos orden aleatorio	
	$Documents = new documentGroup(4, $Select);  // Recuperamos el grupo, segun definición del Select.
	$Document = $Documents->GetElement(1);		 // Recuperamos primer elemento de la lista
	$resultados['ImagenDeFondo'] = $Document->GetImage('d');

// Obtenemos Banner Publicitario
	$Select = new Select();
	$Select->Order('Random');					 // Definimos orden aleatorio	
	$Documents = new documentGroup(5, $Select);  // Recuperamos el grupo, segun definición del Select.
	$Document = $Documents->GetElement(1);		 // Recuperamos primer elemento de la lista
	$resultados['BannerPublicitario'] = $Document->GetImage();

// Recupera categorias	

	$categorias = new productcategory();

// Categorias seleccionadas
/*	if (isset($_REQUEST['Descripcio']))
		$resultados[$_REQUEST['Descripcio']] = $categorias->GetTitle($_REQUEST['Descripcio']); // El texte d'una categoria determinada
	if (isset($_REQUEST['Imatge']))*/


// Categorias siguientes
	if (!empty($_REQUEST['Nivel2'])) {
		$resultados['Botones'] = $categorias->Next($_REQUEST['Nivel2']); // Desde el nivell demanat
		$resultados['Nivel2'][$categorias->GetTitle($_REQUEST['Nivel2'])] = $categorias->GetImage($_REQUEST['Nivel2']);
		$resultados['Nivel1'][$categorias->GetTitle($_REQUEST['Nivel1'])] = $categorias->GetImage($_REQUEST['Nivel1']);
		$resultados['Base'][$categorias->GetTitle($_REQUEST['Base'])] = $categorias->GetImage($_REQUEST['Base']);
	} 
	elseif (!empty($_REQUEST['Nivel1'])) {
		$resultados['Botones'] = $categorias->Next($_REQUEST['Nivel1']); // Desde el nivell demanat
		$resultados['Nivel1'][$categorias->GetTitle($_REQUEST['Nivel1'])] = $categorias->GetImage($_REQUEST['Nivel1']);
		$resultados['Base'][$categorias->GetTitle($_REQUEST['Base'])] = $categorias->GetImage($_REQUEST['Base']);
		
//		print_r($resultados);
	} 
	elseif (!empty($_REQUEST['Base'])) {
		$resultados['Botones'] = $categorias->Next($_REQUEST['Base']); // Desde el nivell demanat
		$resultados['Base'][$categorias->GetTitle($_REQUEST['Base'])] = $categorias->GetImage($_REQUEST['Base']);
	} 
	else {
		$resultados['Botones'] = $categorias->Next('10000000'); // Desde l'arrel
	}

/*convierte los resultados a formato json*/
$resultadosJson = json_encode($resultados);

/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_REQUEST['jsoncallback'] . '(' . $resultadosJson . ');';

?>