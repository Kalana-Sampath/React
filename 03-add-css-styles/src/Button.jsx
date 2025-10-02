
function Button(){

    // in inline styling we can not use - sperated attribute name  all name should be camelcase 
    // and also value should be inside the " " and also
    // should be comma seperated
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        // we will use the style attribute and use set of curly braces to insert a dynamic value
        // mean styles obeject
        <button style={styles}>
            Click me
        </button>
    )
}

export default Button