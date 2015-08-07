// Declarative rendering

// In computer science, declarative programming is a programming paradigm,
// a style of building the structure and elements of computer programs,
// that expresses the logic of a computation
// without describing its control flow.

// $("#modal").open();
// $("#warning").show();

// show error
// $("#warning").hide();
// $("#error").show();

// close modal and error
// $("#modal").close();
// $("#warning").hide();

// other aproach just describe what you want
// and leave calculation to how to do it to comuter




import React from 'react';

const template = <div>Some text</div>;
const targetElement = document.querySelector('#app');

//React.render(template, targetElement);

const template2 = <div>Other text</div>;
window.swichT2 = () => React.render(template2, targetElement);

// let do something with state
const input1 = (
  <div>
    <input />
    first
  </div>
);
const input2 = (
  <div>
    <input />
    second
  </div>
);
window.swichI1 = () => React.render(input1, targetElement);
window.swichI2 = () => React.render(input2, targetElement);
