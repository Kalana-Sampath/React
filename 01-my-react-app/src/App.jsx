
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'


// function App() {

//   return(
//     <>
//       <Header/>
//       <Food/>
//       <Footer/>
//     </>

//   );
    
// }

// export default App


// ---------------------------------------------------------------------
// we can keep reuse this component if we would like, two Food components

// function App() {

//   return(
//     <>
//       <Header/>
//       <Food/>
//       <Food/>
//       <Footer/>
//     </>

//   );
    
// }

// export default App


// --------------------------------------------------------------------------------------------
// we can rearrage components however we would like, eample -: get the footer component as fist 

function App() {

  return(
    <>
      <Footer/>
      <Food/>
      <Header/>
    </>

  );
    
}

export default App