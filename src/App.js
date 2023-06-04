// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// const App = () => {
//   return (
//     <>
//       <MyName />
//       <h2 className='myclassname'>Hello World {3 + 3}</h2>
//       <div>Hello World...Welcome to Shreya Channel</div>
//       <img src="" alt="" />

//     </>
//   )
// }
// const MyName = () => {
//   return <h2>Hello Shreya there...</h2>
// }
// export default App;

import React from 'react';
import Resturant from './components/Basics/Resturant';
import UseState from './components/Hooks/useState';
import UseEffect from './components/Hooks/useEffect';
import UseReducer from './components/Hooks/useReducer';
import Todo from './components/todoreact/todo';
const App = () => {
    return(
        <>
        {/* <Todo/> */}
        {/* <UseReducer/> */}
        {/* <UseEffect/> */}
        {/* <UseState/> */}
        <Resturant />
        </>
    );
}

export default App;



