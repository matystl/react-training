// DECLARATIVE PART OF REACT




// Declarative programing

// In computer science, declarative programming is
// a programming paradigm,
// a style of building the structure and elements
// of computer programs,
// that expresses the logic of a computation
// without describing its control flow.




// Imperative UI

// Descibe how ui should be changed

// open modal with warning
`
 $("#modal").open();
 $("#warning").show();
`;
// show error that occured
`
 $("#warning").hide();
 $("#error").show();
`;
// close modal and error
`
 $("#modal").close();
 $("#warning").hide();
`;





// Notification example
// notification.png






// Declarative UI

// Describe what you want to render
// and leave calculation to how to do it to computer






// Declarative rendering on server
// server.png




// Example of declarative rendering in react

import React from 'react';
import ReactDOM from 'react-dom';

const template = <div>Some initial text</div>;
const targetElement = document.querySelector('#app');

//ReactDOM.render(template, targetElement);
const render = (what) => ReactDOM.render(what, targetElement);
//now only render(template);
render(template);


const template2 = <h1>Other text</h1>;
//setTimeout(() => render(template2), 2000);


// let do something with statefull elements
let input1 = (
  <div>
    <input key="name"/>
    first
  </div>
);
let input2 = (
  <div>
    <input key="name" />
    second
  </div>
);
// render(input1);
// setTimeout(() => render(input2), 2000);







// REUSABLE COMPONENTS

// video tag - is in browser
// modals
// dropdowns
// autocomplete

// would be nice if we can define our components
`
<Modal open=true dismisable=true>
  //content
</Modal>
`;
// Api for comunication with custom component:
// 1. we can specify properties
// 2. we can specify what is inside components






// Simplest custom component in react is just
// a function
function SimpleFunctionComponent() {
  return <div>Some text inside function component</div>;
}
// or one liner with es6 functions
const SimpleES6Component = () => <div>One liner</div>
//render(<SimpleFunctionComponent />);
//render(<SimpleES6Component />);








// Second option is class with
// render function
class SimpleComponent extends React.Component {
  render() {
    return <div>Some text inside class component</div>;
  }
}
//render(<SimpleComponent />);



// PROPERTIES TO COMOPONENETS


const SimpleFunctionComponentWithProps =
  ({text}) => <div>{text}</div>;
//render(<SimpleFunctionComponentWithProps text="Hello here" />);

class SimpleComponentWithProps extends React.Component {
  render() {
    let text = this.props.text;
    return <div>{text}</div>;
  }
}
// render(
// <SimpleComponentWithProps text="anything">
//   <div>What will happend with child?</div>
// </SimpleComponentWithProps>
//);


const SimpleComponentWithChildren =
  ({text, children}) =>
      <div>
        <h1>{text}</h1>
        {children}
      </div>;
// render(
//   <SimpleComponentWithChildren text="nejaky text">
//     <p> This text will be inside </p>
//   </SimpleComponentWithChildren>
// );



class SimpleComponentWithState extends React.Component {

  state = {
    counter: 0,
    test: 15,
  }

  increaseCounter = () => {
    // dont user this.state.counter = this.state.counter + 1
    this.setState({
      counter: this.state.counter + 1,
      test: 47,
    });
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.increaseCounter}>
          increase
        </button>
      </div>
    );
  }
}
// render(
//   <SimpleComponentWithState />
// );



class ReadingValuseFromDom extends React.Component {
  state = {
    text: "default text"
  }
  onTextChange = (e) => {
    console.log(e);
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.text}
               onChange={this.onTextChange}>
        </input>
        <button onClick={() => alert(this.state.text)}>
          show
        </button>
        <span>
          {this.state.text}
        </span>
      </div>
    );
  }
}
// render(
//   <ReadingValuseFromDom />
// );


// detailed description http://busypeoples.github.io/post/react-component-lifecycle/
class LifecycleComponent extends React.Component {


  // First render
  componentWillMount(){}
  // render
  componentDidMount(){}


  // On change of props
  componentWillReceiveProps(nextProps){}
  shouldComponentUpdate(nextProps, nextState) {}
  componentWillUpdate(nextProps, nextState) {}
  //render
  componentDidUpdate(prevProps, prevState) {}


  /* On change of state - almost same as on change
     of props only componentWillReceiveProps
     is not called */
  // shouldComponentUpdate
  // componentWillUpdate
  // render
  // componentDidUpdate

  // Before removing component from tree
  componentWillUnmount() {}

  render() {
    return <div> LifecycleComponent </div>;
  }
}
// render(
<LifecycleComponent />
//);
