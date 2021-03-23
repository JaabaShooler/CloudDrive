import React from "react";
import NavBar from "./Components/NavBar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./API/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

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
          </div>
      </BrowserRouter>
  );
}

export default App;
