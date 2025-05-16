// React is JS library created by Facebook.
// Most popular JS library for creating UI.
// Also used by Netflix and Instagram.
// Used to create Single Page Applications (SPA).
// We can build modern, fast single Page Applications or websites with React.
// React is a library, not a Framework.
// A library in programming can be explained as a collection of codes. We use a library to write code in a much simpler way or to import a feature from it into our project. JQuery is a library for example.
// We can write JS much simpler by using JQuery features to our project. The project itself is not dependent on a library.
// Framework is a complete package of code with its own functonalities and libraries . Angular framework and vue are framework. Working of react.
// React Virtual DOM webpage contains html code.
// React is a JS library for building user interfaces.
// Benefits of virtual DOM : Each time you make a changes in a code, DOM will be completely updated and rewritten. This is an expensive operation and consumes lots of time. In this point, React provides a solution: The Virtual DOM
// When something changes : React first create an exact copy of the DOM. Then React figure out which part is new and only updates that specific part in the virtual DOM. Finally, React copies only the new parts of the Virtual DOM. That is why react is faster than JavaScript. That is why react is so useful and powerful.

// React core syntax
// Core sytax =>JavaScript XML
// Single page application(React)
// const element= <h1>Hi</h1>

// JSX(JS XML) is a syntax extension to JS used by React. JSX is basicslly used to write HTML tags inside JS. 
// Babel => JSX conversion into original JS.

// class Hello extends React.Component{
//   render(){
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }

// ReactDOM.render{
//   <Hello toWhat="World" />;
//   document.getElementById('root')
// };

// // Rules of JSX:
// // 1. We can't return more than one HTML element at once, but we can wrap the elements inside a parent HTML tag.
// // 2. We can use JSX inside for loops, if-else cases.
// // 3. HTML attribute names like "class" becomes "className".
// // 4. HTML tags must always be closed.

// // REact Component:
// // A component is an independent, reusable code block, which divides the UI into smaller pieces.
// Reacts has two types of components : Functional(Stateless) and Class(Stateful).
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }

// const Example = () => {
//   return (<h1>I'm a functional component!<h1)>;
// };


// Props:
// React is a component-based library which divides the UI into little reusable pieces.

//Props:
// Props are an object which is passed to React components from their parent component.
// Props are read-only.
//But the important part is here is that data with props are being passed from parent component to child component.
//you can only read the data and not change the data in the child component.

// class ParentComponent extends Component {
//     render() {
//         return (
//            <h1>I am the parent component</h1>
//            <childComponent />
//         );
//     }
// }
