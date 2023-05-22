import { RouterProvider } from "react-router-dom";
import { createRoutes } from "./BrowserRouter";

const router = createRoutes();


const App = () => {


    
    return (
        <RouterProvider router={router} />
    );
};

export default App;
