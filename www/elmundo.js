﻿// JavaScript Document;
// Rellotges

var resfreshID1; 
var resfreshID2; 

// -------------------------------------------------------------------------------------------------------

function get_html_translation_table (table, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // +   bugfixed by: madipta
    // +   improved by: KELAN
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Frank Forte
    // +   bugfixed by: T.Wild
    // +      input by: Ratheous
    // %          note: It has been decided that we're not going to add global
    // %          note: dependencies to php.js, meaning the constants are not
    // %          note: real constants, but strings instead. Integers are also supported if someone
    // %          note: chooses to create the constants themselves.
    // *     example 1: get_html_translation_table('HTML_SPECIALCHARS');
    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}
    
    var entities = {}, hash_map = {}, decimal = 0, symbol = '';
    var constMappingTable = {}, constMappingQuoteStyle = {};
    var useTable = {}, useQuoteStyle = {};
    
    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable       = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: "+useTable+' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';


    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }
    
    return hash_map;
}

// -------------------------------------------------------------------------------------------------------

function htmlentities (string, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: nobbler
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // -    depends on: get_html_translation_table
    // *     example 1: htmlentities('Kevin & van Zonneveld');
    // *     returns 1: 'Kevin &amp; van Zonneveld'
    // *     example 2: htmlentities("foo'bar","ENT_QUOTES");
    // *     returns 2: 'foo&#039;bar'

    var hash_map = {}, symbol = '', tmp_str = '', entity = '';
    tmp_str = string.toString();
    
    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }
    hash_map["'"] = '&#039;';
    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(symbol).join(entity);
    }
    
    return tmp_str;
}

// -------------------------------------------------------------------------------------------------------

function html_entity_decode (string, quoteStyle) { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/html_entity_decode/
  // original by: john (http://www.jd-tech.net)
  //    input by: ger
  //    input by: Ratheous
  //    input by: Nick Kolosov (http://sammy.ru)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: marc andreu
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Fox
  //   example 1: html_entity_decode('Kevin &amp; van Zonneveld')
  //   returns 1: 'Kevin & van Zonneveld'
  //   example 2: html_entity_decode('&amp;lt;')
  //   returns 2: '&lt;'
  var tmpStr = '';
  var entity = '';
  var symbol = '';
  tmpStr = string.toString();
  var hashMap = get_html_translation_table('HTML_ENTITIES', quoteStyle);
  if (hashMap === false) {
    return false;
  }
  // @todo: &amp; problem
  // http://locutus.io/php/get_html_translation_table:416#comment_97660
  delete (hashMap['&']);
  hashMap['&'] = '&amp;';
  for (symbol in hashMap) {
    entity = hashMap[symbol];
    tmpStr = tmpStr.split(entity).join(symbol);
  }
  tmpStr = tmpStr.split('&#039;').join("'");
  return tmpStr;
}

// -------------------------------------------------------------------------------------------------------

// Converteix  time en formar 00h00m00s o AGOTADO quan s'acaba
function strtotime(time)
{
var horas = Math.floor(time / 3600);	
var minutos = Math.floor((time - horas*3600)/60);	
var segundos = time - horas * 3600 - minutos * 60;
var txt = '';

if (horas>0) txt = horas +'h ';
if (horas>0 || minutos>0) {
	if (minutos<10) {txt = txt + '0'+ minutos +'m ';} else {txt = txt + minutos +'m ';}
}
if (horas>0 || minutos>0 || segundos>0) {
	if (segundos<10) {txt = txt + '0' +segundos +'s ';} else {txt = txt + segundos +'s ';}
}
if (time <=0) txt = 'AGOTADO';
	
return txt;	
}

// Actualitza tots els cronos

function update_time()
{
	$('.cronos').each(function() {
		var name = $(this).attr("name");
		var estado = parseInt($(this).attr("estado"));
		var time = $(this).val();
		var ID = name.substring(6); // a partir de la 6 posicio
		var capa = '#time_'+ID;
		var capabotons = '#capabotons_'+ID;
		
		// color
		var color = "blue";
		if (time<3600) color = "orange";
		if (time<300) color = "red";
		$(capa).html(strtotime(time));
		$(capa).css("color", color);
		$(this).val(time-1);
		if (time<0 && estado < 5)
			$(capabotons).hide();	
	});	
}

// -------------------------------------------------------------------------------------------------------
function strpos (haystack, needle, offset) {
  var i = (haystack+'').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}
// -------------------------------------------------------------------------------------------------------


// Parar rellotges

function parar_reloj()
{
clearInterval(resfreshID1);	
clearInterval(resfreshID2);	
};

// Engegar rellotges

function arrancar_reloj_missubastas()
{
resfreshID1 = setInterval("update_time()", 1000);	
resfreshID2 = setInterval("update_lista()", 6000);	
};

function arrancar_reloj()
{
resfreshID1 = setInterval("update_time()", 1000);	
resfreshID2 = setInterval("update_lista_subastas()", 6000);	
};	

function arrancar_reloj_ventas()
{
resfreshID2 = setInterval("update_lista_ventas()", 15000);	
};	

	
// -------------------------------------------------------------------------------------------------------------------
// funcion update lista, se ejecuta cada pocos segundos. MIS SUBASTAS.PHP
// -------------------------------------------------------------------------------------------------------------------
	
function update_lista()
{
	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="http://elmundo.webexpo.es/subastas.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=listar";
	$.getJSON(url,function(mensaje, validacion) {
		
		var newRow = '';

		if (mensaje.lista === null) {
			newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>En estos momentos no dispone de ninguna subasta activa de las categorías contradadas</strong></td></tr>";
			$("#mostrarsubastas").empty();
			$(newRow).appendTo("#mostrarsubastas");
			
		}
		else {

			$.each(mensaje.lista, function(ID, data) {
			
				// Preparación de datos
				var img = data.Image;

				if (!img || img === null || img === 'null')  // Si vuelve nulo
					{var img = 'http://elmundo.webexpo.es/pix.gif';}	
				
				var time = data.RemainTime;
				// color
				var color = "blue";
				if (time<3600) color = "orange";
				if (time<300) color = "red";
				var TxtRemainTime = strtotime(time);
				
				if (time>=0)
					var TxtDisplay = 'inline';
				else
					var TxtDisplay = 'none';


				switch (Number(data.Status)) {
					case 0: // Agotado, finalizado
						var Txt = "Cancelada por el usuario";


						
//000 modificado
//newRow = newRow + "<tr><td rowspan='3' width='13%'><div id='time_"+data.Id+"' style='color:"+color+"'>"+TxtRemainTime+"</div><input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='34%'>"+data.CreationDate+"</td><td width='44%'>"+data.Price+"&nbsp;&euro;</td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons' style='display:"+ TxtDisplay +"'></div><div class='grupbtns'><button type='button' class='btn btn-danger' id='cancelar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td></tr><tr><td colspan='2'>"+data.Description+"</td></tr>";
newRow = newRow + "<tr><td rowspan='3' width='30%'><div id='time_"+data.Id+"' style='color:"+color+"'>"+TxtRemainTime+"</div><input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons' style='display:"+ TxtDisplay +"'></div><div class='grupbtns'><button type='button' class='btn btn-danger' id='cancelar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
   
  						
						
						break;

					case 1: // Activa
					case 2: // Modificada
					case 3: // Lliberada

						switch (Number(data.Status)) {
							case 2: Estat = ' (modificada)'; break;
							case 3:	Estat = ' (liberada por asociado)'; break;
							default : Estat = '';	
						}

//001 modificado
newRow = newRow + "<tr><td rowspan='3' width='30%'>"+Estat+"<div id='time_"+data.Id+"' style='color:"+color+"'>"+TxtRemainTime+"</div><input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons' style='display:"+ TxtDisplay +"'></div><div class='grupbtns'><button type='button' class='btn btn-danger' id='cancelar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
  
						
						break;

					case 5: // Asignada
						Estat = 'Asignada';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>002"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"></div></td></tr>';
						break;


					case 8: // Confirmada
						Estat = 'Confirmada por vendedor';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>003"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"></div></td></tr>';
						break;

					case 10: // Conpletada
						Estat = 'Completado por vendedor';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>004"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal" id="valorar_'+data.Id+'"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
						break;


					case 18: // Cancelada
						Estat = 'Cancelada por el vendedor';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>005"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-danger" id="ocultar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; // Todos los botones desactivados
						break;

					case 20: // Valorada por el cliente
						Estat = 'Valorada por mi, esperamos valoración del vendedor';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>006"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"></div></td></tr>';
						break;

					case 25: // Valorada por el asociado
						Estat = 'Valorada por el vendendor';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>007"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal" id="valorar_'+data.Id+'"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
						break;

					case 30: // Valorados por ambos
					case 26: // Borrado por el cliente
					case 94: // Borrado por el cliente
						Estat = 'Valorado';

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>008"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
						break;

					case 90: // Cancelada por el cliente
					case 91: // Cancelada por el cliente
						Estat = "Cancelada por el usuario";

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>009"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "</td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-danger" id="ocultar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; // Todos los botones desactivados
						break;

					case 21: // Borrado por el cliente
					case 92: // Borrado por el cliente
					case 98: // Historificado
					case 99: // Borrado, no sale nada.
						break;
						
					default: // Otro Estado
						Estat = "Estado no definido correctamente. Estado " + data.Status;

						newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>010"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "</td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";

						newRow = newRow + '<td></td></tr>'; // Todos los botones desactivados
						break;
				}
			});
					   
			$("#mostrarsubastas").empty();
			$(newRow).appendTo("#mostrarsubastas");

			// Botones de acción
			$.each(mensaje.lista, function(ID, data) {

				var nom = '';
				// Edicio per 'usuari
				if (data.Status == 1 || data.Status==2 || data.Status ==3) {
					nom = '#editar_' + data.Id;
					$(nom).click(function () {
					
						sessionStorage.setItem('Explicacion', data.Description);
						sessionStorage.setItem('imgData', data.Image);	

						sessionStorage.setItem('CategoriaBase', data.CategoryCodes[0].substring(0,4)); 
						sessionStorage.setItem('CategoriaNivel1', data.CategoryCodes[0].substring(0,6));
						sessionStorage.setItem('CategoriaNivel2', 0);

						if (data.CategoryCodes[0].length>6)
							sessionStorage.setItem('CategoriaNivel2', data.CategoryCodes[0]);

						sessionStorage.setItem('idsubasta', data.Id);
						sessionStorage.setItem('precio', data.Price);
						sessionStorage.setItem('periodo', data.Period);
						sessionStorage.setItem('actualitzacio', 1);
						window.location.href = 'segunda.html?update='+data.Id;
					});
				}

				// Cancelar per l'usuari
				if (data.Status == 0 || data.Status == 1 || data.Status == 2 || data.Status == 3) {
					nom = '#cancelar_' + data.Id;
					$(nom).click(function () {
						parar_reloj();
						confirmar = confirm ('Deseas cancelar la oferta de "' + data.Description + '" ?');
						if (confirmar) {
							var url = "http://elmundo.webexpo.es/subastas.php";
							url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=cancelar";
							$.getJSON(url,function(mensaje, validacion) {
								if (validacion == 'success') {
									alert ('La oferta ha sido cancelada');
									window.location.href = 'mis_subastas.html';
								} else {
									alert ('Ha habido algun problema para cancelar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
								}
							});
						} else {
							arrancar_reloj();
						}
					});
				}

				if (data.Status == 10 || data.Status == 30 || data.Status == 94) {
					nom = '#borrar_' + data.Id;
					$(nom).click(function () {
	//					confirmar = confirm ('Deseas cancelar la oferta de "' + data.Description + '"');
	//					if (confirmar) {
							var url = "http://elmundo.webexpo.es/subastas.php";
							url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=ocultar";
							$.getJSON(url,function(mensaje, validacion) {
								if (validacion == 'success') {
	//								alert ('La oferta ha sido cancelada');
									window.location.href = 'mis_subastas.html';
								} else {
									alert ('Ha habido algun problema para borrar esta oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
								}
							});
	//					}
					});
				}

				if (data.Status == 10 || data.Status == 25) {
					nom = '#valorar_' + data.Id;
					$(nom).click(function () {
						sessionStorage.setItem("subastaseleccionada", data.Id);
						$('#my-modal').modal('show');
					});
				}

				// Ocultar per l'usuari
				if (data.Status == 18  || data.Status == 90 || data.Status == 91) {
					nom = '#ocultar_' + data.Id;
					$(nom).click(function () {
	//					confirmar = confirm ('Deseas cancelar la oferta de "' + data.Description + '"');
	//					if (confirmar) {
							var url = "http://elmundo.webexpo.es/subastas.php";
							url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=ocultar";
							$.getJSON(url,function(mensaje, validacion) {
								if (validacion == 'success') {
	//								alert ('La oferta ha sido cancelada');
									window.location.href = 'mis_subastas.html';
								} else {
									alert ('Ha habido algun problema para ocultar esta oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
								}
							});
	//					}
					});
				}


			});
		}
	});	
}

// -------------------------------------------------------------------------------------------------------------------
// funcion update lista, se ejecuta cada pocos segundos. SUBASTAS ASOCIADOS
// -------------------------------------------------------------------------------------------------------------------

function update_lista_subastas()	
{

	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="http://elmundo.webexpo.es/subastas.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=asociado";
	$.getJSON(url,function(mensaje, validacion){

		var newRow = '';
		
		if (validacion === 'success') {
			if (mensaje.validacion === 'ok') {
				
				if (mensaje.lista === null)
					{
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>En estos momentos no hay ninguna subasta activa de las categorías contradadas</strong></td></tr>";
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>Existen un total de "+ mensaje.total +" subastas actualmente activas en la aplicaci&oacute;n</strong></td></tr>";
					
					$("#mostrarsubastas").empty();
					$(newRow).appendTo("#mostrarsubastas");
					}
				else
					{
					$.each(mensaje.lista, function(ID, data) {

						var img = data.Image;
						if (!img || img === null || img === 'null')  // Si vuelve nulo
							img = 'http://elmundo.webexpo.es/pix.gif';	
						
						var time = data.RemainTime;
						// color
						var color = "blue";
						if (time<3600) color = "orange";
						if (time<300) color = "red";
						var TxtRemainTime = strtotime(time);

						if (time>=0)
							var TxtDisplay = 'inline';
						else
							var TxtDisplay = 'none';						
						
						var soyyo = data.Itsme;
						var Estat = '';
	
						switch (Number(data.Status)) {
							case 0: // Agotado, finalizado
							
									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>11"+data.CreationDate+"</strong></td><td class='videfech'><div id='time_"+data.Id+"' style='color:"+color+"'>"+TxtRemainTime+"</div><input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";
									newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'" style="display:'+ TxtDisplay +'"></div></td></tr>';
									
									break;

							case 1: // Activa
							case 2: // Modificada
							case 3: // Lliberada
	
									switch (Number(data.Status)) {
										case 2: Estat = ' (modificada por el usuario)'; break;
										case 3:	Estat = ' (liberada por asociado)'; break;
										default : Estat = '';	
									}

									//newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>"+data.CreationDate+"</strong></td><td class='videfech'>"+Estat+"<div id='time_"+data.Id+"'></div><input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td>";
									//newRow = newRow + '<td><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-success" id="aceptar_'+data.Id+'"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button></div></td></tr>';
									
									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>22"+data.CreationDate+"</strong></td><td class='videfech'>"+Estat+"<div id='time_"+data.Id+"' style='color:"+color+"'>"+TxtRemainTime+"</div><input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";
									newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'" style="display:'+ TxtDisplay +'"><button type="button" class="btn btn-success" id="aceptar_'+data.Id+'"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button></div></td></tr>';
																		
									
									
									break;


							case 5: // Asignada para mi
									if (soyyo) {
										Estat = "Aceptada por mí";
									} else {
										vEstat = "Aceptada por otro asociado";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>33"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";
										
										
									if (soyyo) {
										//newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"></div></td></tr>';

										newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-success" id="confirmar_'+data.Id+'"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-warning" id="liberar_'+data.Id+'"><i class="fa fa-undo fa-2x" aria-hidden="true"></i></button></div></td></tr>'; // Todos los botones desactivados
									} else {
										newRow = newRow + '<tr><td class="text-left" colspan="4"></td></tr>'; // Todos los botones desactivados
									}
									break;

							case 8: // Confirmada por mi
									if (soyyo) {
										Estat = "Confirmada por mí";
									} else {
										Estat = "Confirmada por otro asociado";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>44"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									if (soyyo) {
										newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-success" id="cerrar_'+data.Id+'"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#my-modal2" id="rechazar_'+data.Id+'"><i class="fa fa-times fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
									} else {
										newRow = newRow + '<tr><td class="text-left" colspan="4"></td></tr>'; // Todos los botones desactivados
									}
									break;

							case 10: // Completada
									if (soyyo) {
										Estat = "Completada por mi";
									} else {
										Estat = "Cerrada";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>55"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									if (soyyo) {
										newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal3" id="valorar_'+data.Id+'"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
									} else {
										newRow = newRow + '<tr><td class="text-left" colspan="4"></td></tr>'; // Todos los botones desactivados
									}
									break;
									
							case 18: // Cancelada por el associado
									if (soyyo) {
										Estat = "Cancelada por mí";
									} else {
										Estat = "Cancelada por otro asociado";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>66"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"></div></td></tr>'; // Todos los botones desactivados
									break;

							case 20: // Valorada por el cliente
							case 21: // Borrado por el cliente
									if (soyyo) {
										Estat = "Completada por mi";
									} else {
										Estat = "Cerrada";
									}
								
									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>77"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									if (soyyo) {
										newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal3" id="valorar_'+data.Id+'"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
									} else {
										newRow = newRow + '<tr><td class="text-left" colspan="4"></td></tr>'; // Todos los botones desactivados
									}
									
									break;

							case 25: // Valorada por el asociado
									if (soyyo) {
										Estat = "Valorada por mí";
									} else {
										Estat = "Cerrada";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>88"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button></div></td></tr>'; // Todos los botones desactivados
									break;

							case 30: // Valorada por el asociado
									if (soyyo) {
										Estat = "Valorada por mí y por el cliente";
									} else {
										Estat = "Cerrada";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>99"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									if (soyyo) {
										newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
									} else {
										newRow = newRow + '<tr><td class="text-left" colspan="4"></td></tr>'; // Todos los botones desactivados
									}
									break;

							case 92: // Valorada por el asociado
									if (soyyo) {
										Estat = "Valorada por mí y por el cliente";
									} else {
										Estat = "Cerrada";
									}

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>111"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									if (soyyo) {
										newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
									} else {
										newRow = newRow + '<tr><td class="text-left" colspan="4"></td></tr>'; // Todos los botones desactivados
									}
									break;


							case 90: // Cancelada por el cliente
									Estat = "Cancelada recientemente por el usuario";

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>222"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-danger" id="borrar_'+data.Id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button></div></td></tr>'; // Todos los botones desactivados
									break;
							
							case 99: // Borrado
							case 98: // Historificado
							case 94: // Borrado por el asociado
							case 26: // Borrado por el asociado
									break;
									
							default:
									Estat = "Estado no definido correctamente. Estado " + data.Status;

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>333"+data.CreationDate+"</strong></td><td class='videfech'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;</td></tr>";

									newRow = newRow + '<tr><td class="text-left" colspan="4"><div class="grupbtns" id="capabotons_'+data.Id+'"></div></td></tr>'; // Todos los botones desactivados
						}

					});

					$("#mostrarsubastas").empty();
					$(newRow).appendTo("#mostrarsubastas");

					// Botones de acción
					$.each(mensaje.lista, function(ID, data) {

						var soyyo = data.Itsme;

						// Botones de acción

						if (data.Status ==1 || data.Status==2 || data.Status ==3) {
							var nom = '#aceptar_' + data.Id;
							$(nom).click(function () {
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=aceptar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has aceptado la oferta. Ahora podrás ver los datos del ofertante.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para aceptar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});
						}

						// Botón ver datos
						if ((data.Status ==5 || data.Status ==8 || data.Status ==10 || data.Status ==20 || data.Status ==25 || data.Status ==30 || data.Status ==92 || data.Status ==94 || data.Status ==98) && soyyo) {
							var nom1 = '#verdatos_' + data.Id;

							$(nom1).click(function () {
									sessionStorage.setItem('subastaseleccionada', data.Id);
									window.location.href = 'esta_subasta.html';
							});
						}

						if (data.Status ==5 && soyyo) {
							var nom2 = '#confirmar_' + data.Id;
							var nom3 = '#liberar_' + data.Id;

							$(nom2).click(function () {
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=confirmar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has confirmado que aceptas la oferta. Esta oferta solo podrá cerrarse o cancelarse.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para aceptar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

							$(nom3).click(function () {
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=liberar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has liberado esta oferta. La oferta sigue su curso.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para liberar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});
						}

						if (data.Status ==8 && soyyo) {
							var nom2 = '#cerrar_' + data.Id;
							var nom3 = '#rechazar_' + data.Id;

							$(nom2).click(function () {
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=cerrar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has confirmado que se ha efecturado correctamente la venta y la oferta se marcará como completada.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para completar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

							$(nom3).click(function () {
								sessionStorage.setItem('subastaseleccionada', data.Id);
								window.location.href = 'insert_motivo.html';
								
								/*
								var resultado = confirm('¿Realmente quieres cancelar esta oferta ? Esta oferta quedará completamente cancelada y afectará a la valoración del cliente, para ello vamos a pedirte que expliques el motivo de la cancelación, habiéndola confirmado anteriormente.');
								if (resultado)
									{
									var url = "http://elmundo.webexpo.es/subastas.php";
									url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=rechazar";
									$.getJSON(url,function(mensaje, validacion) {
										if (validacion == 'success') {
											alert ('Has rechazado la venta una vez confirmada, necesitaremos que nos expliques el motivo.');
											window.location.href = 'insert_motivo.html';
										} else {
											alert ('Ha habido algun problema para rechazar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
										}
									}
								});
								*/
							});

						}

						// Botón valorar
						if ((data.Status ==10 || data.Status ==20 ) && soyyo) {
							var nom2 = '#valorar_' + data.Id;

							$(nom2).click(function () {
								sessionStorage.setItem("subastaseleccionada", data.Id);
								$('#my-modal').modal('show');
							});
						}
						

						// Botón borrar
						
						if ((data.Status ==10 || data.Status ==30) && soyyo) {
							var nom3 = '#borrar_' + data.Id;
							
							$(nom3).click(function () {
								sessionStorage.setItem('subastaseleccionada', data.Id);
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=ocultarventa";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para borrar la venta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

						}

						// Botón borrar
						
						if (data.Status ==90) {
							var nom3 = '#borrar_' + data.Id;
							
							$(nom3).click(function () {
								sessionStorage.setItem('subastaseleccionada', data.Id);
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=borradoasociado";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para borrar la venta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

						}

						// Botón REACTIVAR /para pruebas solamente
						if (data.Status ==98 && soyyo) {
							var nom2 = '#reactivar_' + data.Id;

							$(nom2).click(function () {
								var url = "http://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=reactivar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has reactivado la valoración de la venta.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para reactivar la venta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});
						}




					});
				    }
					
			} else { alert ('Ha habido un error, motivo '+ html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));}
		} else { alert ('Ha habido un error, motivo '+ html_entity_decode(validacion, 'ENT_QUOTES'));}
	});
			
	
}

// -------------------------------------------------------------------------------------------------------------------
// funcion update lista, se ejecuta cada pocos segundos. VENTAS ASOCIADOS
// -------------------------------------------------------------------------------------------------------------------

function update_lista_ventas()	
{

	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="http://elmundo.webexpo.es/subastas.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=misventas";
	$.getJSON(url,function(mensaje, validacion){

		var newRow = '';
		
		if (validacion === 'success') {
			if (mensaje.validacion === 'ok') {
				
				if (mensaje.lista === null)
					{
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>Hasta el momento no hemos registrado ninguna venta</strong></td></tr>";
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'></td></tr>";
					
					$("#mostrarventas").empty();
					$(newRow).appendTo("#mostrarventas");
					}
				else
					{
					$.each(mensaje.lista, function(ID, data) {

						var img = data.Image;
						if (!img || img === null || img === 'null')  // Si vuelve nulo
							img = 'http://elmundo.webexpo.es/pix.gif';	
						
						var soyyo = data.Itsme;
	
						switch (Number(data.Status)) {
							case 94:
							case 98:
									var Txt = "";

									newRow = newRow + "<tr class='success'><td class='videfech text-center'><strong>"+data.ConfirmationDate+"</strong></td><td ></td><td><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></td><td>"+data.Description+"</td><td>"+data.Price+"&nbsp;&euro;";

									newRow = newRow + '<div class="grupbtns" id="capabotons_'+data.Id+'"><button type="button" class="btn btn-info" id="verdatos_'+data.Id+'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button></div></td></tr>'; 
									break;
						}

					});

					$("#mostrarventas").empty();
					$(newRow).appendTo("#mostrarventas");

					// Botones de acción
					$.each(mensaje.lista, function(ID, data) {

						var soyyo = data.Itsme;
						// Botón ver datos
						if (data.Status ==94 || data.Status ==98) {
							var nom1 = '#verdatos_' + data.Id;

							$(nom1).click(function () {
									sessionStorage.setItem('subastaseleccionada', data.Id);
									window.location.href = 'esta_subasta.html';
							});
						}
				    });
					}
				
					
			} else { alert ('Ha habido un error, motivo '+ html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));}
		} else { alert ('Ha habido un error, motivo '+ html_entity_decode(validacion, 'ENT_QUOTES'));}
	});
			
	
}

// -------------------------------------------------------------------------------------------------------------------

function update_lista_facturas()
{
	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="http://elmundo.webexpo.es/profesionales.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=facturas";
	$.getJSON(url,function(mensaje, validacion) {
		
		var newRow = '';

		if (mensaje.lista === null)
			{
			newRow = newRow + "<tr class='success'><td colspan=3 class='videfech text-center'><strong>No hemos encontrado facturas para ud.</strong></td></tr>";
			}
		else
			{
			$.each(mensaje.lista, function(ID, data) {

				var Txt = "Cancelada por el usuario";

				newRow = newRow + "<tr class='success'><td class='videfech text-center'>"+data.fecha+"</td><td>"+data.numero+"</td><td><a href='"+data.link+"'>aqu&iacute;</a></td></tr>"; 

			});
		}
			   
		$("#facturas").empty();
		$(newRow).appendTo("#facturas");

	});	
}
	
// -------------------------------------------------------------------------------------------------------------------

function definiciones_comunes() {

// Si es "profesional", activamos el acceso a la lista de subastas

	var response_nivel  = sessionStorage.getItem('respuestaServer.nivel');

	if (response_nivel == 50) {
		$('#subastaspublicadas').show();
	}

// Boton desconectar bueno	
	$("#closeapp_2").click(function() {
	
  	archivoValidacion = "http://elmundo.webexpo.es/validacion_de_datos.php?jsoncallback=?"

	$.getJSON( archivoValidacion, {logout:1})
	.done(function(respuestaServer) {
		/// si el logout es correcto, borramos el sessionStorage volvemos a inicio
		sessionStorage.removeItem('datosUsuario');
		sessionStorage.removeItem('datosPassword');
		sessionStorage.removeItem('respuestaServer.validacion');                            	
		sessionStorage.removeItem('respuestaServer.nom');
		sessionStorage.removeItem('respuestaServer.cognom');
		sessionStorage.removeItem('respuestaServer.ide');
		sessionStorage.removeItem('respuestaServer.nivel');			
		sessionStorage.removeItem('CategoriaBase');	
		sessionStorage.removeItem('CategoriaNivel1');
		sessionStorage.removeItem('CategoriaNivel2');
		sessionStorage.removeItem('Explicacion');
		sessionStorage.removeItem('imgData');

		window.location.href="index.html";
		});
	});	
		
// Boton desconectar - parece que no funciona...
	$('#closeapp').submit(function() {	 
		navigator.app.exitApp();
	});	
}
