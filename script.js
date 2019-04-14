var select = document.getElementById('select_planets_form');
var user = document.getElementById('name_input');
var mass = document.getElementById('weight_input');
var btn = document.getElementById('btn_input');
var menu = document.getElementById('menu_block');
var result_block = document.getElementById('result_block');
var menu_block = document.getElementById('menu_block');
var reset = document.getElementById('button_reset');
var weight_result = document.getElementById('weight_result');
var leyend_result = document.getElementById('leyend_result');
var info_planet = document.getElementById('info_planet');


var g_mercurio = 3.7;
var g_venus = 8.87;
var g_tierra = 9.8;
var g_marte = 3.71;
var g_jupiter = 24.79;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;



select.addEventListener('change', function(){
    var werever = this.options[select.selectedIndex];
    console.log(select.value);
  });

function processData() {
	switch(select.value){
		case "1":
			var x = mass.value * g_mercurio / g_tierra;
			var planet_name = "Mercurio";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "Es el más cercano al Sol, pero puede ser muy frío. Las temperaturas en su superficie alcanzan los 450 grados durante el día, pero cuando cae la noche la cosa es muy diferente ya que las temperaturas bajan y pueden llegar a 170 grados bajo cero.";
		break;
		case "2":
			var x = mass.value * g_venus / g_tierra;
			var planet_name = "Venus";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "La capa de gases que rodea Venus está formada principalmente de dióxido de carbono. Además se encuentra rodeado por grandes nubes de mercurio y ácido sulfúrico que crean una constante lluvia ácida. La peligrosidad de esta lluvia es la más alta de todo el Sistema Solar.";
		break;
		case "3":
			var x = mass.value * g_tierra / g_tierra;
			var planet_name = "la Tierra";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesas en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "Se estima que hasta la fecha se han logrado identificar sólo un 14% de las especies que deben existir en verdad. Una de las cosas que sí sabemos es que en los próximos 300 años, el 75% se habrá extinto y lamentablemente, somos los animales que tienen mayor responsabilidad.";
		break;
		case "4":
			var x = mass.value * g_marte / g_tierra;
			var planet_name = "Marte";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "A nuestro planeta vecino se le bautizó con el nombre de Marte a raíz de su color rojo. Marte es el Dios romano de la guerra y en las culturas ancestrales se asociaba el color rojo de la sangre con las batallas, de ahí su peculiar apelativo.";
		break;
		case "5":
			var x = mass.value * g_jupiter / g_tierra;
			var planet_name = "Júpiter";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "Este planeta tiene aproximadamente, según los cálculos de los astrónomos, unos 4.500 millones de años, prácticamente los mismos que el Sol. Se piensa que es el primer planeta que se formó del Sistema Solar.";
		break;
		case "6":
			var x = mass.value * g_saturno / g_tierra;
			var planet_name = "Saturno";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "En Titán, una de las lunas de Saturno, existen criovolcanes o lo que es lo mismo volcanes de hielo, muy diferente a lo que estamos acostumbrados a ver, en lugar de lava caliente, de estos volcanes emerge una sustancia gélida de compuestos volátiles, como agua, metano y amonio.";
		break;
		case "7":
			var x = mass.value * g_urano / g_tierra;
			var planet_name = "Urano";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "En la Tierra poseemos cuatro estaciones, pero durante los 84 años terrestres que dura un año en Urano sólo gozamos verano e invierno.";
		break;
		case "8":
			var x = mass.value * g_neptuno / g_tierra;
			var planet_name = "Neptuno";
			document.getElementById('weight_result').innerHTML = x.toFixed(2) + " kg";
			document.getElementById('leyend_result').innerHTML = "¡" + user.value + ", eso pesarías en " + planet_name + "!"
			document.getElementById('info_planet').innerHTML = "La única nave en viajar a Neptuno fue el Voyager 2, durante el Grand Tour por el Sistema Solar. Pasó a 3 mil kilómetros de su polo norte en 1989 y es lo más cerca que la nave se acercó a un objeto. Estudió su atmósfera y anillos, así como sus lunas. La NASA tiene planes tentativos de enviar una nave en el 2016 que llegará a Neptuno 14 años después, en el 2030.";
		break;
		default:
			alert("Rellena todos los campos correctamente");
	}
	menu_block.classList.add('display-none');
	result_block.classList.add('display-flex');
}

function again() {
	menu_block.classList.remove('display-none');
	result_block.classList.remove('display-flex');
}

btn.addEventListener("click", processData );
reset.addEventListener("click", again );





















// Resetear los valores por defecto de un formulario -----------------------------
  // document.getElementById("id del form").reset();


// Incrustar un valor en un div --------------------------------------------------
  // function suma (a,b){
  //   var sum = a + b;

  //   document.getElementById('resultado').innerHTML = sum;
  // };

  // suma(10,5);