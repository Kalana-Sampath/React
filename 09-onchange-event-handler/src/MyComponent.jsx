// onchange = event handler used primarily with from elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

// import { useState } from "react";

// function MyComponent() {
    
//     const [name, setName] = useState();

//     function handleNameChange(event) {
//         setName(event.target.value)
//     }

//     return (
//         <div>
//             <input value={name} onChange={handleNameChange} />
//             <p>Name: {name}</p>
//         </div>
//     );
// }
// export default MyComponent;


// ----------------------------------------------------------------------------------------------
// --------- set a number, and text area, create a drop down menu for payment, and
// select under pickup or dilivery using radio selection ---------------------------------------

import { useState } from "react";

function MyComponent() {
    
    const [name, setName] = useState("");
    // wuth usestate we can set the initial value as well
    // const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);    
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
            placeholder="Enter deliver instruction" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>

            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange}
                />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" 
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default MyComponent;
