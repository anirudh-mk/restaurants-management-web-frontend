import RestaurantScreen from "./components/screens/RestaurantScreen/RestaurantScreen";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/:resturent_id",
    element: <RestaurantScreen />
  },
]);

export default router