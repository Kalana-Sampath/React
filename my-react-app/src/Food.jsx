

// --- ** important - normally if you are adding javascript code within the return statement you 
// need a set of curlybraces but outside of the return statement you do not

function Food(){

    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>  {/* food1 should be wrap with in {} because it is in return statement*/ }
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food