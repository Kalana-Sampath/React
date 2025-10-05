
// In order for this component to accept props Student function need a props parameter
// props is going to be a JavaScript object 

// when we send key value pairs to a component they are all stored within this props object
// to get the value associated with the key we want type -> props.<name of the key>

// boolean value not display, so with a boolean we want use the trenary operator 

// propTypes = a mechanism that ensures that the passed value 
//             is of the correct datatype.
//             age: PropTypes.number
// using the proptype, get the warnnig in our console, this use mostly for debugging purpose
 

// defaultProps - default values for props in case they are not 
//                passed from the parent component 
//                name: "Guest"

import PropTypes from 'prop-types'

function Student(props){               
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>        
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student