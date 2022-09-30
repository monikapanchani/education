import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Root } from "react-router-dom";
// import { TheameProvider } from "./context/themeContext";
// import Public from "./PublicRoute/Public";
// import Private from "./PrivateRoute/Private";
import { persistor, store } from "./reduxsaga/store";
import { PersistGate } from "redux-persist/integration/react";
import About from "./Container/About/AboutTeam";
import AboutUnivarcity from "./Container/About/AboutUnivarcity";
import Blog from "./Container/Blog/Blog";
import Contact from "./Container/Contact/Contact";
import Course from "./Container/Course/Course";
import Footer from "./Container/Footer/Footer";
import Header from "./Container/Header/Header";
import Home from "./Container/Home";
import Login from "./Container/Login/Login";
import Layout from "./Admin/Component/Layout";
import Catagory from "./Admin/Container/Catagory/Catagory";

function App(props) {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/AboutTeam"} component={About} />
              <Route
                exact
                path={"/AboutUnivarcity"}
                component={AboutUnivarcity}
              />
              <Route exact path={"/Courses"} component={Course} />
              <Route exact path={"/blog"} component={Blog} />
              <Route exact path={"/Contact"} component={Contact} />
              <Route exact path={"/login"} component={Login} />
              <Layout>
                <Route exact path={"/catagory"} component={Catagory} />
              </Layout>
            </Switch>

            <Footer />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
