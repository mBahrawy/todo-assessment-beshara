import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const TodoApp = lazy(() => import("@/modules/TodoApp/TodoApp.component"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <TodoApp />,
    },
  ]);

  return routes;
};

export default Routes;
