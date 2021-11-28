import { Switch } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { checkSession } from "helpers/helpers";
import { getUserRequest } from "modules/Profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { Router } from "react-router";
import history from "../../config/history";
import PrivateRoute from "../../helpers/privateRoutes"; // Private Routes, Will only accessible after Login
import AuthRoute from "../../helpers/authRoutes"; // Auth Routes, Will only accessible before login.
import Spinner from "components/Spinner/Spinner";
import { errorNotification, successNotification } from "components/Notifications/actions";
// Lazy loading of all the components.
const Home = lazy(() => import("../Home"));
const Dashboard = lazy(() => import("../Dashboard"));
const Logout = lazy(() => import("../Home/logout"));
const Login = lazy(() => import("../Login"));
const Register = lazy(() => import("../Register"));
const AskQuestion = lazy(() => import("../Ask Question"));
const AnswerQuestion = lazy(() => import("../Answer Question"));

const Profile = lazy(() => import("../Profile"));

// Root routes
const App = () => {

  const { requesting, successful, user, errors } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {

    !checkSession(user) && dispatch(getUserRequest());
  }, []);

  if (requesting) {
    return <Spinner />;
  }
  if (successful) {
    dispatch(successNotification('Successfuly Logged in'));
  }
  if (errors) {
    dispatch(errorNotification('Error on logging in'));
  }
  return (<Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <PrivateRoute path="/ask-question" component={AskQuestion} />
        <PrivateRoute path="/answer-question" component={AnswerQuestion} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Suspense>
  </Router>);
}


  ;



export default App;
