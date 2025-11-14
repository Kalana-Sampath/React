
// function Button() {

// within a button function we can write a inner function
// and use function expression or arrow function  
// const handleClick = () => console.log("OUCH!");

// many html elements have an onclick event handler we can set it equal to javaScript callback 
// but we need a function to work with 
// set the function to onClick event handler equal to callback (callback to the function)
// return(
//     <button onClick={handleClick}>Click me 😀</button>
// )

// if your function has parameters there's one change we will need to make change
// const handleClick2 = (name) => console.log(`${name} stop clicking me`);

// use the parameter in callback we want pass matching number of arguments
// if you add a set of parantheses after a call back you will invoke it right away
// if we have arguments we need to send to a function we could wrap this call back within a 
// function expression or an arrow function 
//     return(
//         <button onClick={() => handleClick2("Kalana")}>Click me 😀</button>
//     )
// }

// export default Button



// -----------------------------------------------------------------------------------------------
// --------------------------------- Example 02 --------------------------------------------------
// add some conditions - within you function you can write some conditions 


// function Button(){

//     let count = 0;

//     // if you more that one line of code in function you want use {} 
//     const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else{
//             console.log(`${name} stop clicking me!`);
//         }
//     }

//     return (
//         <button onClick={() => handleClick("Kalana")}>Click me 😀</button>
//     )
// }

// export default Button



// -----------------------------------------------------------------------------------------------
// --------------------------------- Example 03 --------------------------------------------------
// event parameter

function Button() {

    // with click events were automatically provided with an event argument it is an object 
    // that describes the event that occurred 
    // but as a parameter people usually shorten the event parameter to be simply e

    // const handleClick = (e) => console.log(e);
    
    // change the textContent property 
    // after clicking on the button we will access that event object 
    // follow with DOT that the property accessor then we selecting the inner target object 
    // then selecting the text content property 
    const handleClick = (e) => e.target.textContent = "OUCH! 😑";

    return (
        // arrow function we will have e for the parameter and e for an argument for the handle
        // click function 
        // <button onClick={(e) => handleClick(e)}>Click me 😀</button>
        // click on the button we are now outputting the event it is type is synthetic base event 
        //and it has all of these properties and methods such as where you click on the screen 
        // there is a timestamp and a target by utilizing event object that gives us many different possibilities

        // there is also the on doubleclick event handler insted of onclick you will say on doubleClick
        <button onDoubleClick={(e) => handleClick(e)}>Click me 😀</button>

    )
}

export default Button





