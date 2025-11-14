
// use the image as a click event 

function ProfilePicture() {
    
    const imageUrl = './src/assets/profile.png'

    const handleClick = () => console.log("OUCH!");
    
    // let's utilize the event object that is generated 
    // if i click the image and then it will be hide 
    const handleClick2 = (e) => e.target.style.display = "none";

    return(
        <>
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
        <img onClick={(e) => handleClick2(e)} src={imageUrl}></img>
        </>
    )
}

export default ProfilePicture