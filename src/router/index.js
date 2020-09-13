import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateContext } from "../context";
import Header from "../containers/Header";
import Home from "../containers/Home";
import Spinner from "../containers/Spinner";
import Register from "../containers/Register";
import Login from "../containers/Login"
import UploadClassList from "../containers/UploadClass";
import EditClass from "../containers/EditClass";
import Instructions from "../containers/Instructions";

export default function AppRouter() {
  const { user } = useContext(StateContext);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (user.id === null) {
      switch (pathName) {
        case "/upload":
        case "/edit":
        case "/spinner":
          window.location.replace("/");
          break;
        default:
          return;
      }
    }
  }, [pathName, user.id]);

  return (
    <div className="h-screen">
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/instructions" component={Instructions} />
        {user.id !== null && (
          <>
            <Route path="/spinner" component={Spinner} exact />
            <Route path="/upload" component={UploadClassList} exact />
            <Route path="/edit" component={EditClass} exact />
          </>
        )}
      </Router>
    </div>
  );
}

