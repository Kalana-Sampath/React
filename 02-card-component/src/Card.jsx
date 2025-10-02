
// using a alt tag in img, useful because if the image is not show get some error then user can -
// - see the alt attribute text
// add a placeholder image -> <img src="https://placehold.co/150x150" alt="profile picture" /> 
// add a profile image from assets folder ->  <img src={profilePic} alt="profile picture"></img> -
// with import statement - import profilePic from './assets/proflie.png'

import profilePic from './assets/profile.png'

function Card(){
    return(
        <div className='card'>
            {/* <img src="https://placehold.co/150x150" alt="profile picture" /> */}
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Kalana</h2>
            <p className="card-text">I am a Programmer</p>
        </div>
    );
}

export default Card

