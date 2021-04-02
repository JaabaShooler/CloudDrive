import React from "react";
import NavBar from "./Components/Auth/NavBar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Registration from "./Components/Auth/Registration";
import Login from "./Components/Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./API/user";
import { CSSTransition } from 'react-transition-group'
import "./Sass/Transition.css"
import "./Sass/App.sass"


function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();


    const routes = [
        {path: '/login', Component: Login},
        {path: '/registration', Component: Registration}
    ];

    React.useEffect(()=>{
        dispatch(auth())
    },[])

    

  return (
      <BrowserRouter>
          <div className="app">
              <NavBar/>
              {
                  !isAuth &&
                      <Switch>
                          <Route path="/registration" component={Registration}/>
                          <Route path="/login" component={Login}/>
                      </Switch>
                }
              {routes.map(({path, Component})=>
                  <Route key={path} exect path={path} >
                      {
                          ({match}) =>{
                              <CSSTransition
                                  timeout={1000}
                                  className="page"
                                  unmountOnExit
                                  in={match != null}
                              >
                                  <div className="page">
                                      <Component/>
                                  </div>
                              </CSSTransition>
                          }
                      }
                  </Route>
              )}
          </div>
      </BrowserRouter>
  );
}

export default App;
