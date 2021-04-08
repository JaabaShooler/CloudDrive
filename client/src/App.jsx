import React from "react";
import NavBar from "./Components/Auth/NavBar";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Registration from "./Components/Auth/Registration";
import Login from "./Components/Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./API/user";
import "./Sass/App.sass"
import Disk from "./Components/Disk/Disk";
import Main from "./Components/Main/MainPage";
import {CSSTransition} from "react-transition-group";
import "./Sass/Transition.css"



function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();


    const routes = [
        {path: '/login', Component: Login},
        {path: '/registration', Component: Registration},
        {path: '/', Component: Main}

    ];

    React.useEffect(()=>{
        console.log(localStorage.getItem('token') !== null);
        if (!isAuth && localStorage.getItem('token') !== null) dispatch(auth())
    },[])

    

  return (
      <BrowserRouter>
          <div className="app">
              <NavBar/>
              {
                  !isAuth ?

                      routes.map(({path, Component})=>
                              <Route key={path} path={path} >
                                  {({match}) => <CSSTransition
                                      timeout={1000}
                                      className="page"
                                      unmountOnExit
                                      in={match != null}
                                  >
                                      <Component/>
                                  </CSSTransition> }
                              </Route>
                      )


                      // <Switch>
                      //
                      //     <Redirect to="/login"/>
                      // </Switch>
                      :
                      <Switch>
                              <Route exact path="/" component={Disk}/>
                              <Redirect to="/"/>
                      </Switch>
                }
          </div>
      </BrowserRouter>
  );
}

export default App;
