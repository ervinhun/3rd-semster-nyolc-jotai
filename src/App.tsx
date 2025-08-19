import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.tsx";
import BookDetails from "./BookDetails.tsx";
import BooksOverview from "./BooksOverview.tsx";
import AuthorsOverview from "./Authors.tsx";
import useInitializeDataForMyApplication from "./initialDataLoadForApplication.tsx";

function App() {

useInitializeDataForMyApplication();
    return (
        <>

            <RouterProvider router={createBrowserRouter([

                {
                    path: '/',
                    element: <Home/>,
                    children: [
                        {
                            path: '/books',
                            element: <BooksOverview/>
                        },
                        {
                            path: '/book/:bookId',
                            element: <BookDetails/>
                        },
                        {
                            path: '/authors',
                            element: <AuthorsOverview/>
                        }
                    ]
                },
            ])}/>
        </>
    )
}

export default App
