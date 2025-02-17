import NavigateSide from "./pages/NavigateSide";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StoreData } from "./storage/StoreData";
import { StoreTaskSlice } from "./storage/StoreTaskSlice";
// import { StoreTaskSlice } from "./storage/StoreTaskSlice";
import { Provider } from "react-redux";

const App = () => {
  // const routes = createBrowserRouter([
  //   {
  //     path: "/getData",
  //     element: <GetApi />,
  //   },
  // ]);

  // return <RouterProvider router={routes} />;

  return (
    <>
      <Provider store={StoreTaskSlice}>
        <NavigateSide />
      </Provider>
    </>
  );
};

export default App;
