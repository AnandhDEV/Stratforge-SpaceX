import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/index";
import { outletRoutes } from "./layout/routes";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import Notfound from "./components/404";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard/home" />}>
            {" "}
          </Route>
          <Route path="/dashboard" element={<Layout />}>
            {outletRoutes.map((item, index) => (
              <Route
                index
                key={item.path}
                path={item.path}
                element={item.element}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
