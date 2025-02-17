import { Provider } from "react-redux";
import "./App.css";
// import AppChild from "./AppChild";
// import { store } from "./redux/store";
// import TaskReducersComponent from "./redux/TaskReducersComponent";
// import ReducerTas from "./ReducerTas";
// import { SendContex } from "./redux/SendContex";
// import GetStoreData from "./GetStoreData";
// import { storeData } from "./redux/storeData";
// import { StoreRedux } from "./redux/StoreRedux";
// import StoreDataGet from "./StoreDataGet";
// import Showdata from "./Prectice/Showdata";
// import UseEffect from "./UseEffect";
// import Main from "./Todo/Main";
// import TKL_Main from "./TKL/TKL_Main";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contacts } from "./Pages/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import New from "./Pages/New";
import AppMain from "./Layouts/AppMain";
import Reducers from "./Pages/Reducers";
import StateManage from "./Pages/StateManage";
import Contax from "./Pages/Contax";
import Storage from "./Pages/Storage";
import { StoragePage } from "./Pages/Storage/StoragePage";
import RouterFormData from "./Pages/RouterFormData";
import { sendData } from "./Components/MyFormsRouters";
import UseRefData from "./Pages/UseRefData";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppMain />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/new",
          element: <New />,
        },
        {
          path: "/reducer",
          element: <Reducers />,
        },
        {
          path: "/state",
          element: <StateManage />,
        },
        {
          path: "/useContex",
          element: <Contax />,
        },
        {
          path: "/storage",
          element: <Storage />,
        },
        {
          path: "/ref",
          element: <UseRefData />,
        },
        {
          path: "/formroute",
          element: <RouterFormData />,
          action: sendData,
        },
      ],
    },
  ]);

  return (
    <Provider store={StoragePage}>
      <RouterProvider router={routes} />{" "}
    </Provider>
  );
}

export default App;
