/* let amount = 10;
while (amount > 0) {
  console.log (`I have $ {amount} dollars`);
  amount--;
}
 */

/* let money = 0;
do {
  console.log (`You have $ {money} pesos`);
  money++;
} while (money < 10);
 */

/ * let names = ['elias', 'joaquin', 'balboa'];
let apellido = 'garcia';
let newArray = [];
for (let i = 0; i < nombres.length; i++) {
  console.log (names [i]);
  const fullname = `$ {first names [i]} $ {last name}`;
  newArray.push (fullname);
}
console.log(newArray);
 */

/ * APPLYING FUNCTIONS IN ARRAYS AND OBJECTS
const gas = [20, 40, 100, 30];
const food = [10, 41, 50];
function calcularTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log (`You are spending a lot of money!`);
    return total;
  } else {
    console.log (`Okay you spent less than 100`);
  }
  return total;
}
const gasTotal = calcularTotal(gas);
const foodTotal = calculateTotal (food);
const arrayRandomTotal = calcularTotal([100, 200, 300]);
console.log({
  gas: gasTotal,
  food: total food,
  random: arrayRandomTotal,
}); */

// NULL Y UNDEFINED
/* 
let number = 20 + null;
console.log (number);
let numero2 = 20 + undefined;
console.log(numero2);
 */

// GLOBAL SCOPE

/* let name = 'bobo';
name = 'peter';
// THIS IS ALLOWED SINCE THE VALUE CAN BE CHANGED BUT IF I PUT:
// const name = 'jhon';
// THIS WOULD GIVE ME ERROR XQ I ALREADY DEFINED A VARIABLE WITH THAT NAME
console.log (`my name is $ {name} and I'm the best 😀`); * /

/* const numeroGlobal = 5;
function sumar(num1, num2) {
  const result = num1 + num2 + Globalnumber;
  return result;
}
console.log(sumar(3, 4)); */

// CALLBACK FUNCTIONS - I DIDN'T UNDERSTAND THEM REVIEW

/* function buenosDias(name) {
  const myName = 'Elias';
  console.log (`Good morning $ {name}, my name is $ {myName}`);
}
buenosDias ('Juliet'); * /

// POWERFULL ARRAY METHODS: FOREACH, MAP, FILTER, FIND, REDUCE

// TRADITIONAL WAY OF DISPLAYING ALL ELEMENTS OF AN ARRAY
// const numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//FOREACH:

/ * const people = [
  {name: 'Elias', age: 29, job: 'programmer'},
  {name: 'Joaquin', age: 25, job: 'seller'},
  {name: 'Balboa', age: 20, job: 'rrpp'},
];
function showPerson (person) {
  console.log (person.work.toUpperCase ());
}
people.forEach (showPerson); //FIRST CASE. DECLARING A FUNCTION SEPARATELY WITH A CALLBACK FUNCTION.
gente.forEach(function (persona) {
  console.log (person.work.toUpperCase ()); // SECOND CASE BY HANDING AN ANONYMOUS FUNCTION DIRECTLY
}); */

// THE 2 PERFORM THE SAME TASKS, YOU HAVE TO CHOOSE THE ONE I LIKE THE MOST.

/ * const numbers = [1, 2, 3, 4];
numeros.forEach(function (numero) {
  console.log (number);
}); // SHOWING AN ARRAY WITH FOREACH.
 */

//MAP METHOD.

/ * const people = [
  {name: 'Elias', age: 29, job: 'programmer'},
  {name: 'Joaquin', age: 25, job: 'seller'},
  {name: 'Balboa', age: 20, job: 'rrpp'},
];
age const = people.map (function (person) {
  return person.age + 5; // RETURNING AN ELEMENT
});
const newPeople = people.map (function (person) {
  return {
    firstName: persona.name.toUpperCase(),
    oldAge: person.age + 20, // RETURNING AN OBJECT
  };
});
console.log (ages);
console.log(nuevaGente); */

//FILTER METHOD

/ * const people = [
  {name: 'Elias', age: 20, job: 'programmer'},
  {name: 'Joaquin', age: 25, job: 'seller'},
  {name: 'Balboa', age: 30, job: 'rrpp'},
  {name: 'Snake', age: 35, job: 'rrpp'},
];
const genteJoven = gente.filter(function (persona) {
  return person.age <= 25;
});
const programmers = people.filter (function (person) {
  return person.work === 'programmer';
});
console.log(genteJoven);
console.log (programmers);
 */

//FIND METHOD

/ * const people = [
  {name: 'Elias', age: 20, job: 'programmer', id: 1},
  {name: 'Joaquin', age: 25, job: 'seller', id: 2},
  {name: 'Balboa', age: 30, job: 'rrpp', id: 3},
  { name: 'Snake', edad: 35, trabajo: 'rrpp', id: 4 },
];
const person = gente.find(function (persona) {
  // SEARCHING IN THE OBJECT THROUGH ITS ID
  return persona.id === 3;
});
console.log(person); */

/ * const names = ['elias', 'joaquin', 'garcia'];
console.log(
  names.find (function (name) {
    return name === 'garcia'; // SEARCHING THROUGH THE ARRAY BY THE NAME AND PUTTING THE FUNCTION DIRECTLY IN THE LOG WITHOUT SAVING IT IN A VARIABLE
  })
); */

// REDUCE METHOD
/* 
const people = [
  {name: 'Elias', age: 20, job: 'programmer', id: 1, salary: 200},
  {name: 'Joaquin', age: 25, job: 'salesperson', id: 2, salary: 300},
  {name: 'Balboa', age: 30, job: 'rrpp', id: 3, salary: 500},
  {name: 'Snake', age: 35, job: 'rrpp', id: 4, salary: 500},
];
const total = gente.reduce(function (acc, currItem) {
  console.log(`total: ${acc}`);
  console.log (`current money: $ {currItem.wage}`);
  Acc + = currItem.salario;
  return acc; // ALWAYS ALWAYS ALWAYS RETURN THE ACCUMULATOR, IF THIS IS NOT PERFORMED BUGS WILL BE CAUSED.
}, 0); // THE 0 is to indicate that I want a number to be returned to me. If I want an array I put [], or an object {}. It is the initial value of the 'acc'
console.log (`The sum of all salaries is $ {total}`);
 */

// OBJETO MATH

/ * Const number = 16;
const result = Math.sqrt(numero);
console.log(result); */

/ * Const number = 5.14;
const result = Math.floor(numero);
console.log(result);
 */

/ * Const number = 16;
const result = Math.sqrt(numero);
console.log(result); */

/ * const numbers = [4, 5, 6, 7, 8];
const result = Math.min (... numbers); // USING THE SPREAD OPERATOR '...' * /

/ * const result = Math.min (1, 2, 3, 4); // USING THE VALUES DIRECTLY
console.log (result); * /

/ * result const = Math.max (200, 300, 400, 500);
console.log (result); * /

/ * const result = Math.ceil (Math.random () * 10); // THIS IS A WAY TO SHOW ME THE NRO 10 INCLUDED SINCE IF I DON'T PASS THE CEIL TO HIM, IT WOULD ONLY SHOW ME UNTIL 9
const result2 = Math.floor (Math.random () * 10 + 1); // THIS WOULD BE ANOTHER WAY USING THE FLOOR AND ADDING IT 1
console.log(result);
console.log(result2); */

// DATE OBJECT

/* const date = new Date();
console.log (date); // SHOW THE CURRENT DATE AND TIME OF MY COUNTRY
const months = [
  'January',
  'February',
  'March',
  'April',
  'Mayo',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const mes = date.getMonth();
console.log (month); // BY USING THIS IT SHOWS ME THE NUMBER OF THE MONTH WE ARE IN AND NOT THE MONTH IN ITSELF. THIS IS WHY YOU HAVE TO REFER TO THE INDEX OF A VARIABLE PREVIOUSLY CREATED WITH THE MONTHS
console.log (months [month]); // THIS IS EQUAL TO months [5]; since 5 is he is current
const day = date.getDay (); // THIS TMB GIVES ME AN INDEX, IN THIS CASE 0 XQ IS SUNDAY. YOU MUST REFER TO A VARIABLE WITH THE DAYS
console.log(dia);
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log (days [day]);
const sentencia = `$ {days [day]}, $ {date.getDate ()} from $ {
  months [month]
} del $ {date.getFullYear ()} `; // getDate gives me the number of the month, in this case 28.
document.body.innerHTML = statement; // THIS ENTERS THE DATE CREATED ON THE BODY
const date2 = new Date ('12/1/2000'); // PASS A STATIC DATE
console.log(date2);
 */

//JUDGMENT

/* document.body.style.backgroundColor = 'pink';
document.body.style.color = 'blue'; // PASSING STYLES DIRECTLY TO THE ELEMENTS.
document.getElementById('boton').style.backgroundColor = 'red'; */

/* const $boton = document.querySelector('button');
$ button.style.backgroundColor = 'green'; // SAVING THE HTML ELEMENT IN A VARIABLE AND THEN MANIPULATING IT
console.log($boton);
const name = $boton.nodeName;
console.log (name); // THIS SHOWS THE NODE NAME
const css = $boton.style;
console.log (css); // SHOW ME THE CSS STYLES OF THE NODE * /

//WINDOW OBJECT

/ * console.dir (document); // THIS SHOWS ME ALL THE METHODS AND PROPERTIES OF THE DOCUMENT OBJECT * /

// SELECTION OF THE HTML ELEMENTS FOR HANDLING

// POR ID

/ * const $ h1 = document.getElementById ('title'); // STORING THE ELEMENT IN A VARIABLE BY ID
$h1.style.backgroundColor = 'red';
document.getElementById ('button'). style.backgroundColor = 'yellow'; // STYLING IT DIRECTLY WITHOUT STORING IT IN A VARIABLE
const $ button = document.getElementById ('button'); // SAVING THE ELEMENT IN A VARIABLE AND THEN MODIFYING IT. THIS IS MORE RECOMMENDED THAN PASSING THE STYLES DIRECTLY
$boton.style.color = 'green'; */

//POR TAGNAME

/* const $headings = document.getElementsByTagName('h2');
console.log ($ headings); // THIS RETURNS A NODE-LIST WHICH IS LIKE AN ARRAY OBJECT. * /

// I CAN USE INDEX AND LENGHT PROPERTIES BUT NOT ARRAY METHODS.

/* $headings[0].style.color = 'red';
console.log ($ headings.length); // THIS IS A NODE WITH THE 'li' inside.
const $nodoItems = document.getElementsByTagName('li');
$ NodeItems [2] .style.color = 'orange'; // I COLOR THE NODE ITEM WITH THE STYLE PROPERTY.
console.log($nodoItems);
const $ arrayItems = [... $ nodeItems]; // WITH THIS LINE I TRANSFORM THE NODE INTO AN ARRAY
console.log($arrayItems);
//POR CLASSNAME
const $itemsConClase = document.getElementsByClassName('special');
console.log($itemsConClase);
$itemsConClase[2].style.color = 'blue'; */

// BY QUERYSELECTOR

/* const $result = document.querySelector('#result');
$result.style.backgroundColor = 'magenta';
const item = document.querySelector ('. special'); // THIS BRINGS ME THE FIRST 'li' WITH THE SPECIAL CLASS
console.log(item); */

/ * const $ items = document.querySelectorAll ('. special'); // I BRING ALL THE LI WITH CLASS 'special'
console.log ($ items); // USE ARRAY METHODS WITHOUT THE NEED TO TRANSFORM IT. OPPOSITE CASE WITH CLASSNAME, TAGNAME AND IDNAME
const $ itemsEnArray = [... $ items]; // I CONVERT THE $ ITEMS NODE, IN AN ARRAY. BUT WITH QUERYSELECTOR IT IS NOT NECESSARY SINCE I CAN
console.log($itemsEnArray);
$items.forEach(function (item) {
  // PASSING AN ARRAY METHOD TO THE $ ITEMS NODE. I CAN DO IT XQ TARGET THE ELEMENT WITH QUERYSELECTOR
  console.log(item);
}); */

//CHILDNODES

/* const $lista = document.querySelector('#result2');
console.log ($ list); */

/* const result = document.querySelector('#result2');
const children = result.children; // THIS WAY I BRING THE ELEMENTS OF THE LIST.
console.log(children);
 */

//PARENTELEMENT

/* const header = document.querySelector('h2');
console.log (header.parentElement); // THIS SHOWS ME THE FATHER ELEMENT.
console.log(header.parentElement.parentElement.parentElement);
// I CAN APPLY IT MANY TIMES TO GO CLIMBING IN THE PARENTS. UNTIL YOU REACH THE <html> WHICH IS LAST. AFTER THIS I WOULD RETURN NULL
const elementoPadre = header.parentElement;
elementoPadre.style.color = 'red'; */

//SIBLING

/ * const firstItem = document.querySelector ('. first');
// const second = first.nextSibling;
// BY DOING THIS YOU WILL GIVE ME AN EMPTY SPACE. SO YOU HAVE TO DO IT 2 TIMES TO GET TO THE SECOND ITEM
const segundoItem = primerItem.nextSibling.nextSibling;
// THIS GIVES ME BACK THE ITEM 2. I COULD CARD IT EVEN THOUGH I DIDN'T HAVE AN ID, OTHER THAN THE ID OF THE FIRST ELEMENT
const lastItem = document.querySelector ('. last');
const tercerItem = (ultimoItem.previousSibling.previousSibling.style.color =
  'red');
// IN THIS FORM I CARD THE THIRD ITEM FROM THE LAST ONE THAT HAD ID.
console.log(tercerItem);
// !! THERE IS AN EASIER WAY TO DO THIS WITHOUT GIVING ME A BLANK SPACE
// THIS FORM IS USING previousElementSibling and nextElementSibling.
// const segundoItem = primerItem.previousElementSibling;  */

//NODE VALUE Y TEXT CONTENT

/* const item = document.getElementById('special');
const valorDelItem = item.firstChild.nodeValue;
console.log(valorDelItem);
const valueDelItemMasFacil = item.textContent; // THIS IS THE SAME AS THE FIRST 'VALORDELITEM' BUT IN AN EASIER WAY
// SINCE USING NODEVALUE YOU HAVE TO ADD MORE PROPERTIES LIKE FIRSTCHILD
console.log(valorDelItemMasFacil);
 */

//GET ATTRIBUTE Y SET ATTRIBUTE

/ * const first = document.querySelector ('. first');
const valueClass = first.getAttribute ('class'); // I BRING THE VALUE OF THE CLASS ATTRIBUTE OF THE HTML ELEMENT
first.setAttribute ('id', 'asd'); // I ADD ATTRIBUTES WITH SET ATTRIBUTE AND PASS THE VALUE OF 'asd'
console.log(valorClass);
const link = document.getElementById('link');
const mostrarLink = link.getAttribute('href'); //MUESTRO EL VALOR DE HREF
console.log (showLink);
const ultimoLi = link.nextElementSibling;
const giveAttribute = lastLi.setAttribute ('class', 'first'); // I GIVE AN ATTRIBUTE TO THE LAST LI AND I CHANGE THE VALUE OF THE TEXT DYNAMICALLY
ultimoLi.textContent = 'NOW I HAVE A CLASS FIRST ATTRIBUTE TMB!';
const links = document.querySelectorAll ('. first'); // NOW I HAVE 2 ELEMENTS WITH CLASS FIRST XQ ADD CLASS TO LAST LI
console.log(links); */

// ADDING CSS STYLES DYNAMICALLY WITH JS

/* const primerItem = document.getElementById('primero');
const SegundoItem = document.getElementById ('second');
const tercerItem = document.getElementById('tercero');
const classValue = firstItem.className; // CHECK THE CLASS VALUE OF THE FIRST ITEM
console.log(valorDeClase);
secondItem.className = 'colors'; // WITH CLASSNAME I CAN ALSO CHANGE THE VALUE TO WHICH I WANT IN THIS WAY
// IF I WANT TO ADD A SECOND CLASS TO AN ELEMENT, DOING IT THIS WAY IS NOT AN OPTION SINCE I WOULD OVERWRITE IT AND NOT ADD IT
// TO ADD CLASSES, USE CLASSLIST.
segundoItem.className = 'colors text';
// ONE WAY TO ADD ANOTHER CLASS IS THIS, BUT IT IS NOT RECOMMENDED SINCE IF DSP WANT TO ADD MORE, THEY WILL OVERWRITE
// thirdItem.classList.add('colors'); // THIS IS THE RECOMMENDED WAY TO ADD ANOTHER CLASS
// thirdItem.classList.add('text '); // I ADD ANOTHER CLASS WITH CLASSLIST
thirdItem.classList.add ('colors', 'text'); // ANOTHER WAY TO ADD SEVERAL CLASSES AT ONCE AND NOT 1 FOR 1
thirdItem.classList.remove ('text'); // WITH REMOVE WE TAKE CLASSES
const classTercerItem = thirdItem.classList; // I STORE THE CLASS OF THE THIRD ITEM IN A DSP VARIABLE TO ADD IT THE CLASS 'colors'
console.log (classTercerItem); // SHOW THE CLASS OF THE THIRD ITEM
let result = thirdItem.classList.contains ('colors'); // WHAT CONTAIN DOES IS CHECK IF THE THIRD ITEM HAS A CLASS WITH THE NAME 'COLORS'
if (result) {
  // IF THE RESULT IS TRUE, THIS IS RUN, BUT THE ELSE.
  console.log (`ELEMENT HAS / CONTAINS CLASS 'COLORS'`);
} else {
  console.log (`ELEMENT DOES NOT HAVE CLASS 'COLORS'`);
} */

//CREATE ELEMENT, CREATETEXTNODE, ELEMENT.APPENDCHILD

/* const resultado = document.querySelector('#result');
// CREATE AN EMPTY ELEMENT
const bodyDiv = document.createElement('div');
// CREATE A TEXT NODE
const texto = document.createTextNode ('DYNAMIC CREATED BODY');
// I ENTER THE CREATED TEXT IN THE EMPTY DIV CREATED (CHILD)
bodyDiv.appendChild (text); // WITH APPENDCHILD I PUT THE TEXT INSIDE THE EMPTY DIV.
//console.log(bodyDiv); // SHOW THAT IT HAS BEEN DONE CORRECTLY.
// I ADD THE DIV WITH THE TEXT TO THE MAIN BODY
document.body.appendChild(bodyDiv);
// CHECK HOW MANY CHILDREN HAS A RESULT
console.log (result.children); // FOR NOW YOU HAVE ONE ONLY BUT LET'S ADD IT ANOTHER * /

// ** CREATE AN H2 ADD TEXT TO IT AND ADD IT TO THE MAIN BODY

/* const resultado = document.querySelector('#result');
const heading2 = document.createElement('h2');
// I create the h2
const texto2 = document.createTextNode('H2 dinamico creado con JS :D');
// I create the text of the h2
heading2.appendChild(texto2);
// I add the text to h2 as a child
heading2.classList.add('blue');
// I add the class 'blue'
resultado.appendChild(heading2);
// I add the h2 created as a child (child) to the div!
//REMOVECHILD
// REPLACE THE H2 WITH AN H6
const headingChico = document.createElement('h6');
// create h6
const textoh6 = document.createTextNode('Soy un H6 dinamico');
// I create the text of the h6
headingChico.classList.add('red');
// I add a class to the h6 created
headingChico.appendChild(textoh6);
// I put the created text inside the created h6
resultado.replaceChild(headingChico, heading2);
// replace h2 with h6 * /

//PREPEND , INNERTEXT

// INSERT AN H2

/* const heading2 = document.createElement('h2');
// I create the h2
heading2.innerText = 'Soy un heading dinamico!';
// I introduce the text of h2
document.body.prepend(heading2);
// I introduce the h2 with the prepend method. * /

//REMOVE, REMOVECHILD

/ * const outcome = document.querySelector ('# result');
// I card the element
// result.remove ();
// I remove the second h1 dynamically
const heading2 = resultado.querySelector('h1');
// I PUT A RESULT INSTEAD OF DOCUMENT TO CARD DIRECTLY THE H1 THAT IS LOCATED INSIDE
resultado.removeChild(heading2);
// I remove the second h1 dynamically tmb but specifying the Child
// IN THE FIRST CASE (line 553) I REMOVE ALL THE ENTIRE DIV. IN EXCHANGE WITH THE REMOVECHILD I ONLY TAKE THE HEADING * /

//INNERHTML, TEXTCONTENT

/ * const list = document.getElementById ('first');
const div = document.getElementById('segundo');
const item = document.querySelector('.item');
console.log(item.textContent);
// Show the text inside the item variable
console.log(lista.innerHTML);
// show me all the content of the list including the tags
const listaDesordenada = document.createElement('ul');
// create an unordered list
listaDesordenada.innerHTML = `<li class="item">Item de lista dinamico</li>
      <li>Item de lista dinamico</li>`;
// I CREATE THE LI WITH INNERHTML AND I SAVED A LOT OF STEPS IF I CREATED IT OTHERWISE LIKE THE VIEWS ABOVE.
// SINCE I CREATE EVERYTHING DIRECTLY AND I DON'T HAVE TO CREATE SEVERAL VARIABLES
document.body.appendChild(listaDesordenada);
// I ADD THE UL CREATED TO THE BODY
div.textContent = 'DIV RANDOM TEXT';
// I CHANGE THE CONTENT VALUE OF THE DIC TEXT WITH TEXTCONTENT * /

// CHANGING CSS WITH THE STYLE PROPERTY

/* const random = document.querySelector('.random');
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.textTransform = 'capitalize';
// random.style.fontSize = '3rem';
// THIS WAY I PASS CSS STYLES TO IT BUT IT IS NOT PRACTICAL SINCE I HAVE TO PASS IT ONE BY ONE.
// THERE IS A FASTER WAY TO DO IT AND THAT IS TO PASS THE CLASS PREVIOUSLY CREATED IN CSS
random.classList.add('titulo');
// IN THIS WAY I USE ONLY ONE LINE, AND I SEPARATE THE CSS FROM THE JS CODE * /

// EVENTS

/* const boton = document.querySelector('.btn');
// I select the element to put an event on
const heading = document.querySelector('h2');
// I select the element to affect when the event happens
// boton.addEventListener('click', function () {
  //heading.classList.add('red');
//}); 
// I pass the element the 'event listener'. I pass the event as an argument. in this case when they click
// and I pass as the second argument a callback function that I only want to be executed when this action is performed
// EVENT WITH LOGIC AND SEPARATE FUNCTION
function cambiarColor() {
  let tieneClase = heading.classList.contains('red');
  if (tieneClase) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}
boton.addEventListener('click', cambiarColor); */

// MOUSE EVENTS

/* const boton = document.querySelector('.btn');
const heading2 = document.querySelector('h2');
boton.addEventListener('click', function () {
  console.log('me tocasteee');
});
boton.addEventListener('mousedown', function () {
  console.log ('click pressed');
});
boton.addEventListener('mouseup', function () {
  console.log ('click released');
});
heading2.addEventListener('mouseenter', function () {
  heading2.classList.add('red');
});
heading2.addEventListener('mouseleave', function () {
  heading2.classList.remove('red');
}); */

// KEYBOARD EVENTS (KEY)

/ * const inputname = document.querySelector ('# name');
// nombreInput.addEventListener('keypress', function () {
// console.log ('you pressed a key');
// });
// nombreInput.addEventListener('keydown', function () {
// console.log ('you pressed a key');
// });
nombreInput.addEventListener('keyup', function () {
  console.log(nombreInput.value);
});
// SHOW ME WHICH KEY TO PRESS !! * /

// EVENT OBJECT

/* const heading = document.querySelector('h1');
const boton = document.querySelector('.btn');
const link = document.getElementById('link');
// heading.addEventListener('click', function () {
//   heading.classList.add('blue');
// });
// ADDING CLASS TO IT BY SPECIFYING THE ELEMENT
heading.addEventListener('click', function (event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});
// ADDING A CLASS WITHOUT SPECIFYING THE ELEMENT. WITH THE CURRENT TARGET METHOD AND PASSING THE WORD 'event' AS ARGUMENT
// CURRENTTARGET WILL ALWAYS POINT TO THE ELEMENT THAT IS ATTACHED
function algunaFuncion (e) {
  e.preventDefault();
  console.log(e.type);
}
// I CREATE THE FUNCTION SEPARATELY TO PASS IT AS A REFERENCE IN THE LISTENER.//
link.addEventListener('click', algunaFuncion); */

//CURRENT TARGET Y TARGET

/* const botones = document.querySelectorAll('.btn');
// I select all the buttons
botones.forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.color = 'green';
  });
});
// I USE THE FOREACH METHOD TO SELECT EACH BUTTON
// THEN I SET THE LISTENER FOR EACH BUTTON
// I PASS YOU AS ARGUNMENTS THE EVENT AND THE ANONYMOUS FUNCTION WITH ARGUMENT FROM 'E'
// TELL HIM TO GIVE THE COLOR GREEN TO THE PRESSED BUTTON
// THE DIFFERENCE WITH TARGET IS THAT THIS, IF THERE ARE NESTED ELEMENTS, IT WILL SHOW ME THE ELEMENT IN WHICH I PLAY AND NOT THE WHOLE
// ELEMENT THAT IS LINKED BY LISTENING AS CURRENT TARGET DOES. EX:
// botones.forEach(function (boton) {
//   boton.addEventListener('click', function (e) {
//     console.log(e.target);
//     e.target.style.color = 'green';
//   });
// }); */

//EVENT BUBBLING, CAPTURING, PROPAGATION

/ * const container = document.querySelector ('. container');
const lista = document.querySelector('.lista-items');
// card the list and the container
function mostrarBubbling(event) {
  console.log('current target', event.currentTarget);
  console.log('target', event.target);
  if (event.target.classList.contains('link')) {
    console.log ('clickeaste en un link');
  }
  // I see if the user clicked on the target that contains the word 'link'
}
// I create a function to show the target and current target
function detenerPropagacion(event) {
  console.log ('you clicked on a list but propagation stopped');
  event.stopPropagation();
}
//list.addEventListener('click ', showBubbling);
list.addEventListener ('click', stopPropagation); * /

// EXAMPLE OF EVENT PROPAGATION

/* const contenedor = document.querySelector('.container');
// const header = document.querySelector('.heading');
const boton = document.querySelector('.btn');
function decirHola() {
  console.log ('Hello User!');
}
// header.addEventListener('click', decirHola);
boton.addEventListener('click', function () {
  const elementoNuevo = document.createElement('h1');
  elementoNuevo.classList.add('heading');
  elementNew.textContent = 'I am also inside the container';
  container.appendChild (elementNew);
});
// IF I COMMENT THE H1 OF THE HTML, THIS WILL GIVE ME AN ERROR SINCE THE EVENT LISTENER CANNOT MAKE AN EVENT OF AN ELMENT THAT DOES NOT EXIST
// WHAT CAN BE DONE IS TO SELECT THE PARENT ELEMENT AND ADD THE EVENT TO THE SAME
contenedor.addEventListener('click', function (evento) {
  if (event.target.classList.contains('heading')) {
    say hi();
  }
});
// I ADD THE HEADING DYNAMICALLY AND THEN I CAN ADD THE EVENTLISTENER
 */

//FORM SUBMIT

/* const formulario = document.querySelector('#form');
const name = document.querySelector ('# name');
const contrasenia = document.querySelector('#password');
formulario.addEventListener('submit', function (evento) {
  // THE FORM GENERALLY PUTS THE SUBMIT INTO ACTION, WHAT WOULD BE WHEN THE INFORMATION IS SENT THROUGH THE BUTTON
  event.preventDefault (); // BY ADDING THIS I PREVENT THE PAGE FROM REFRESHING
  console.log ('submit submitted');
  console.log (name.value); // SHOW THE NAME PUT IN THE FORM
  console.log (password.value); // SHOW THE PASSWORD SET IN THE FORM
});
// BY PUTTING THIS IN I CAN SEE FOR A MOMENT THE TEXT OF 'SUBMIT SENT' BUT IT DISAPPEARS AS THE PAGE REFRESHES * /

//WEB STORAGE API, LOCAL STORAGE, SESSION STORAGE

/ * localStorage.setItem ('name', 'Elias');
localStorage.setItem ('job', 'scheduler');
localStorage.setItem ('address', 'lamb stream 1906');
const job = localStorage.getItem ('job');
console.log (job);
localStorage.removeItem('direccion');
localStorage.clear(); */

// EXAMPLE OF A MORE COMPLEX LOCAL STORAGE

const  amigos  =  [ 'ari' ,  'sebi' ,  'tincho' ] ;

//localStorage.setItem('friends', friends); // THIS WOULD NOT RETURN THE VALUES OF THE ARRAYA IF I WANTED TO ACCESS THEM
localStorage . setItem ( 'friends' ,  JSON . stringify ( friends ) ) ;  // WITH THIS I CAN KEEP THE ARRAY WITHOUT BREAKING IT

// const values ​​= localStorage.getItem ('friends'); // WITH THIS I WOULD NOT RETURN THE VALUE OF THE ARRAY
const  values  =  JSON . parse ( localStorage . getItem ( 'friends' ) ) ;  // I USE THE JSON.PARSE TO KEEP THE ARRAY

console . log ( values [ 1 ] ) ;

// VALIDATION IF THERE IS AN ITEM IN THE LOCAL STORAGE

let  fruits ;

if (localStorage.getItem('frutas')) {
  frutas = JSON.parse(localStorage.getItem('frutas'));
} else {
  fruits  =  [ ] ;
}

console . log ( fruit ) ;
// fruits.push ('apple');
fruits . push ( 'orange' ) ;

localStorage.setItem('frutas', JSON.stringify(frutas));

// OPERATION: First I create an empty variable with the name of fruits. Then validate (if in the local storage there is an item with the name 'fruits')
// If this is true: then the fruit variable is equal to the item that is stored in the variable
// if false: then create an empty array in the fruit variable
// dsp I do a console.log and it shows me an empty array since the condition goes to the else and creates an empty array /
// dsp add a value to the empty array with the push method.
// dsp create a local storage item with the setItem
// Now when logging it will show me that the variable fruit contains the value apple.
// if I comment on the push line, the value will continue to be kept in the local storage since it is saved
// if I add more values, they will be added to the apple item
// and when refreshing the page it will show me the apple items and the dsp tmb additions