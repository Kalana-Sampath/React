
// we need to convert our array of string into an array of list item elements
// we can use the built -in map method to do that we will create a new array 
// we can use new array, map method return after running through a function

// if you are working with an array of string and you would like to sort this array beforehand 
// you can use the sort method
// sort method will sort an array in place, however this does not work with numbers
// because we are sorting lexico-graphically

// function List(){

//     const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

//     fruits.sort();

//     const listItems = fruits.map(fruit => <li>{fruit}</li>)

//     return(
//         <ol>{listItems}</ol>
//     )

// }

// export default List



// ---------------------- Example 02 ----------------------------------------------------
// we will convert our array of strings into an array of objects, each obeject will 
// have name property and calories per serving 

// react want to assign a key to each list item, each key should be unique

// If there is a possibility that two object can share the same name you will want to use some 
// sort of unique ID
// in real world scenario if you are pulling data from a database each row of data is going to
// have some sort of unique ID

// use the id as a key is much better than use the name
// you can avoid naming conflict, if two object share the same name

// function List(){

//     const fruits = [{id: 1, name: "apple", calories: 95},
//                     {id: 2, name: "orange", calories: 45},
//                     {id: 3, name: "banana", calories: 105},
//                     {id: 4, name: "coconut", calories: 159},
//                     {id: 5, name: "pineapple", calories: 37}];


// const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>)         // use the name as a key
// const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)

// sort the array 
// fruits.sort((a, b) => a.name.localeCompare(b.name));    // ALPHABETICAL
// fruits.sort((a, b) => b.name.localeCompare(a.name));    // REVERSE ALPHABETICAL
// fruits.sort((a, b) => a.calories - b.calories);     // NUMERIC
// fruits.sort((a, b) => b.calories - a.calories);     // REVERSE NUMERIC

// show the calories 
// const listItems = fruits.map(fruit => <li key={fruit.id}>
//                                                 {fruit.name}: &nbsp;
//                                                 <b>{fruit.calories}</b>
//                                                 </li>)

// filter object by certain criteria

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
//                                                             {lowCalFruit.name}: &nbsp;
//                                                             {lowCalFruit.calories}
//                                                             </li>)

//     const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

//     const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
//                                                                 {highCalFruit.name}: &nbsp;
//                                                                 {highCalFruit.calories}
//                                                                 </li>)                                                          

//     return(
//         <ol>{listItems}</ol>
//     )

// }

// export default List 



// -----------------------------------------------------------------------------------------
// ---- we are going to transform this list component so it's reusable with diffrent list  

function List() {

    const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }];

}

export default List 
