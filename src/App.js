import './App.css';
import Briyanis from './Components/Layout/Categories/Biryanis';
import Home from './Components/Layout/Home';
import Root from './Components/Layout/Root';
import BreakFast from './Components/Layout/Categories/BreakFast';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Root></Root>, children:[{index:true,
    element:<Home></Home>},
    {path:'Biryanis',
   element:<Briyanis></Briyanis>},
   {path:'BreakFast',
   element:<BreakFast></BreakFast>}]}
   ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App;