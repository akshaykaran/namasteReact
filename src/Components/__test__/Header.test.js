import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should render the header component and check for login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LOGIN" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render the header component and check for logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LOGIN" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "LOGOUT" });

  expect(logoutButton).toBeInTheDocument();
});
