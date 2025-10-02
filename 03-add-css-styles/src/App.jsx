// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import Button from './Button.jsx'

function App() {
  return (
    <Button/>
  );
}

export default App


// ---------------------- use the external css styling ----------------------------------------
// use the index.css file

// .button{
//   background-color: hsl(200, 100%, 50%);
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
// }



// ----------------------- use module for css styling -----------------------------------------
// ** use the external css is more difficult in large application 
// we will create a dedicated css stylesheet specifically for each component

// create a button folder(create a folder for specific component), 
// inside that create a Button.jsx file and Button.module.css file
// then want a import a module.css file in button.jsx file
// Button.jsx

// ** thst is avoid naming conflicts because a unique class is going to be generated for via a 
// hashing algorithm

// modules are also convenient if each component has its own unique style
// in downsides are require a additional setup and global style are not applied easily



// ----------------------- use inline for css styling -----------------------------------------
// in Button.jsx file 
// function Button(){

//     // in inline styling we can not use - sperated attribute name  all name should be camelcase 
//     // and also value should be inside the " " and also
//     // should be comma seperated
//     const styles = {
//         backgroundColor: "hsl(200, 100%, 50%)",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "5px",
//         border: "none",
//         cursor: "pointer",
//     }

//     return(
//         // we will use the style attribute and use set of curly braces to insert a dynamic value
//         // mean styles obeject
//         <button style={styles}>
//             Click me
//         </button>
//     )
// }

// export default Button

// ** inline css styling is convenient and easy to understand it prevents Global style conflicts
// because we are not working with class names
// it is great for isolated components with minimal styling, such as like button or a subscribe 
// button 

// However increasingly less maintainable in large application
// it reduce the readability of your components 



