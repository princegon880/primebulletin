import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = "32139aa22c1742ea813924f20528ec7a";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
              />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <div className="container">
            <Switch>
              
                
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
            </Switch>

            </div> */}
        </Routes>
      </Router>
      <BrowserRouter>
         <Routes>  
        
         </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
//   import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import NavBar from './components/NavBar';
// import News from './components/News';
// import Login from './Login';
// import Signup from './Signup';
// import LoadingBar from 'react-top-loading-bar';

// const App = () => {
//   const pageSize = 5;
//   const apiKey = '980e68e5e2c8487f9f9261774e103efa';
//   const [progress, setProgress] = useState(0);

//   return (
//     <div>
//       <Router>
//         <NavBar />
//         <LoadingBar height={3} color="#f11946" progress={progress} />
//         <div className="container my-3">
//           <Switch>
//             {/* News Category Routes */}
//             <Route exact path="/" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="general"
//                 pageSize={pageSize}
//                 country="us"
//                 category="general"
//               />
//             )} />
//             <Route exact path="/business" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="business"
//                 pageSize={pageSize}
//                 country="us"
//                 category="business"
//               />
//             )} />
//             <Route exact path="/entertainment" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="entertainment"
//                 pageSize={pageSize}
//                 country="us"
//                 category="entertainment"
//               />
//             )} />
//             <Route exact path="/general" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="general"
//                 pageSize={pageSize}
//                 country="us"
//                 category="general"
//               />
//             )} />
//             <Route exact path="/health" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="health"
//                 pageSize={pageSize}
//                 country="us"
//                 category="health"
//               />
//             )} />
//             <Route exact path="/science" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="science"
//                 pageSize={pageSize}
//                 country="us"
//                 category="science"
//               />
//             )} />
//             <Route exact path="/sports" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="sports"
//                 pageSize={pageSize}
//                 country="us"
//                 category="sports"
//               />
//             )} />
//             <Route exact path="/technology" render={() => (
//               <News
//                 setProgress={setProgress}
//                 apiKey={apiKey}
//                 key="technology"
//                 pageSize={pageSize}
//                 country="us"
//                 category="technology"
//               />
//             )} />

//             {/* Auth Routes */}
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/signup" component={Signup} />
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// };

// export default App;
