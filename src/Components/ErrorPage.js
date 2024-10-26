import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  console.log("err", err);
  return (
    <div>
      <h1>Oops!! Something Went WrOnG Page not FoUnD</h1>
    </div>
  );
}

export default ErrorPage;
