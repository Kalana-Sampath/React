
// within our function base component we can check some logic using an if statement
// if some condition is true return some code and if not return something else

// ***important - technically you do not need the else statement you colud just say return


// function UserGreeting(props){

//     if(props.isLoggedIn){
//         return <h2>Welcome {props.username}</h2>
//     }
//     return <h2>Please log in to continue</h2>
// }

// export default UserGreeting;



// --------------------------------------------------------------------------
// another option is to use the ternary operator

// function UserGreeting(props){

//     return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
//                               <h2 className="login-prompt">Please log in to continue</h2>
//     );
// }

// export default UserGreeting;



// --------------------------------------------------------------------------
// another way to use the ternary operator


// ** It is good practice if you are accepting props to set up prop types

import PropTypes from "prop-types"

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                           </h2>
    
    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>


    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;