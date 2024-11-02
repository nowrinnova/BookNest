import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import BookDetails from './component/BookDetails/BookDetails';
import ListedBook from './component/ListedBook/ListedBook';
import ReadList from './component/ReadList/ReadList';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {path:'bookDetails/:bookId',
      element:<BookDetails></BookDetails>,
      loader:()=>fetch('/booksData.json')
      },
      {
        path: "/listedBook",
        element: <ListedBook></ListedBook>,
        loader:()=>fetch('/booksData.json')
        // children:[{
        //   path: "/",
        //   element:<ReadList></ReadList>
        // },
        // ]
      },
      // {
      //   path: "/readList",
      //   element:<ReadList></ReadList>
      // },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
