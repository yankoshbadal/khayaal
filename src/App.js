import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createHashRouter,RouterProvider, Outlet } from "react-router-dom"; // for Dynamic Path

const AppLayout = () => {
    return (
        <div>
        <Header />
        <Outlet />
        <Footer />
        </div>
    );
}


const appRouter = createHashRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }
        ],
        errorElement: <Error/>,
    }
],
)


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);