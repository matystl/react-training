// TEMPLATING


// Templating - HTML

<div class="Test">
  <a href="vacuumlabs.com">
    Link to something
  </a>
<div>


// Templating - some languages

<div class="Test">
  <a href="vacuumlabs.com">
    <?php echo $text_in_variable ?>
  </a>
<div>

<div class="Test">
  <a href="vacuumlabs.com">
    <%= text_in_variable %>
  </a>
<div>


// Templating - as data structure

const temp = ["div", {class: "Test"}, [
  ["a", {href: "vacuumlabs.com"},[
    "Some text"
  ]]
]];



// Templating – variables

const text_in_variable = "something";
const template = ["div", {class: "Test"}, [
  ["a", {href: "vacuumlabs.com"},[
    text_in_variable
  ]]
]];


// Templating - functions

function myButton(text) {
  return ["button", {class: "my-button"}, [text]];
}
const template = ["div", {class: "Test"}, [
  ["a", {href: "vacuumlabs.com"},[
    myButton("text of button")
  ]]
]];


// Templating - loops

function myButton(text) {
  return ["button", {class: "my-button"}, [text]];
}
const tenButtons = [];
for(int i = 0; i < 10; i++) {
  tenButtons.push(myButton(`button ${i}`));
}
const template = ["div", {class: "Test"}, [
  ["a", {href: "vacuumlabs.com"}, [ //should we use here open brace?
    tenButtons
  ]]
]]


// Templating – abstract representation

let temp = createElement("div", {class: "Test"}, [
  createElement("a", {href: "vacuumlabs.com" }, [
    "Link to something"
  ])
 ]);


// Templating - JSX

let temp1 = <span>Ahoj</span>;
let temp2 = (
  <div class="Test">
    <a href="vacuumlabs.com">
      Link to something
    </a>
  </div>
);


//Templating - JSX - variables

let variableText = "some text";
let temp2 = (
 <div class="Test">
   <a href="vacuumlabs.com">
     {variableText}
     {orSomeExpresionNotBlock}
   </a>
 </div>
);


//Templating - JSX - condition
let temp = (
 <div class="Test">
   <a href="vacuumlabs.com">

     {(someCondition)
      ? <span>True</span>
      : <span>False</span>
     }

     {(someCondition) ? <span>Only true branch</span> : null }

   </a>
 </div>
);


//Templating - JSX - loops

let temp = (
 <div class="Test">
   <a href="vacuumlabs.com">
     {[1, 2, 3].map((i) =>
       <span>{i}</span>
       //or renderSomething(i)
     )}
   </a>
 </div>
);
