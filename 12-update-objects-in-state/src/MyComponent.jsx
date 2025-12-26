import React, { useState } from 'react';

function MyComponent(){

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"
    });

    function handleYearChange(event){

        // setCar({...car, year: 2025});    // ...car -> spread operator same as the 
                                        // year: 2024, make: "Ford", model: "Mustang"
                                        // use this one to update the car object

        // update the changes with previous state, and update the state more than one time
        setCar(c => ({...c, year: event.target.value}));
        
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type='number' value={car.year} onChange={handleYearChange} /><br/>
            <input type='text' value={car.make} onChange={handleMakeChange} /><br/>
            <input type='text' value={car.model} onChange={handleModelChange} />
        </div>
    );
}

export default MyComponent;