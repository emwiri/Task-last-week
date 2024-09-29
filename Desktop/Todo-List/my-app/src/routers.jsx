import { createBrowserRouter } from "react-router-dom";
import TodoList from "./componet/Todo-list";
import Error from "./componet/errorpage/Error";
// import TodoAdd from "./componet/NewTodo";

 const router= createBrowserRouter([
    {
        path:'/',
        element:<TodoList/>,
        children:[
            {
                 path:':todoid',
                 element:<Error/>
            },
        ]
    },
    {
        path:'*',
        element:<Error/>

    }
 ])
 export default router 