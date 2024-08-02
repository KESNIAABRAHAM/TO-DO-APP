import React, { useState } from 'react';
import Homepage from './Components/Homepage';
import Todopage from './Components/Todopage';
// import ReactDom from 'react-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Homepage/>,
// },
// {
// path:'/Todopage',
// element: <Todopage />,
// },
// ]);

function App() {
  const [userName, setUserName] = useState();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage setUserName={setUserName}/>,
    },
    {
    path:'/Todopage',
    element: <Todopage userName={userName}/>,
    },
    ]);
 
  return (
    <RouterProvider router={router}/>
    //<Homepage/>
  );
}

 export default App;
