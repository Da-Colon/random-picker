import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/home";
import Spinner from "../containers/spinner";
import Register from "../containers/register";
import UploadClassList from "../containers/uploadClassList";
import EditClass from "../containers/editClass";
import Instructions from "../containers/instructions";
import { StateContext } from "../context";
import Header from "../containers/header.tsx";

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
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/instructions" component={Instructions} exact />
        {user.id !== null && (
          <>
            <Route path="/spinner" component={Spinner} exact />
            <Route path="/upload" component={UploadClassList} exact />
            <Route path="/edit" component={EditClass} exact />
          </>
        )}
      </Router>
  );
}

