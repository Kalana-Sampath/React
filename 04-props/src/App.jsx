// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />


import Student from './Student.jsx'
import './App.css'


// send some data to student component, (student is going to be a  child in this case, app is the
// parent) we need to list key value pairs 

// ***importtant - If you are going to store some data as a value, if it is not a string literal
// you got to enclose it within curly braces  

// ***importtant - pass the incorrect datatype for the student component, not crash the program,
// but it wil warning within the console


function App() {

  return (
    <>
       <Student name="Kalana" age={20} isStudent={true} />
       <Student name="Kamal" age={42} isStudent={false} />
       <Student name="Nimal" age={25} isStudent={false} />                                    
       <Student  />
    </>
  )
}

export default App
