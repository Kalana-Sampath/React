// // in-order to react hook we want to import it 
// // how ever we do not need the entire react library, 
// // we can use object destructuring to extract individual variable or functions
// import React, { useState } from "react";

// function MyComponent() {
    
//     // using the useState variable we will create a stateful variable and a Setter function to 
//     // update that variable 
//     // use [] for array destructuring 
//     // usestate function returns an array with two elements, a variable and a Setter function 
//     // common naming convention is to type set then the variable name with camel case naming convention
    
//     // const [name, setName] = useState();
//     // if we eveer need to change the value of the sateful variable we have to do so with the 
//     // setter 

//     // with the useState function you can pass in an initial state 
//     const [name, setName] = useState("Gust");

//     const updateName = () => {
//         setName("Kalana");
//     }
//     // to update the name we will use setter function

//     // ** when you use the setter function of stateful variable it will trigger a render of the 
//     // virtual dom normal variables do not 

//     return(
//         <div>
//             <p>Name: {name} </p>
//             <button onClick={updateName}>Set Name</button>
//         </div>
//     )

// }

// export default MyComponent


// -------------------------------------------------------------------------------------------------
// --------- create a age variable an increment ----------------------------------------------------
// ----------- toggle to employed status true -> false and false -> true ---------------------------

import React, { useState } from "react";

function MyComponent() {
    
    
    const [name, setName] = useState("Gust");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Kalana");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age} </p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"} </p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )

}

export default MyComponent 

