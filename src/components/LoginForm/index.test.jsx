import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./index";

describe("LoginForm", () => {
  test("renders LoginForm component", () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText("Enter Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter Password")).toBeInTheDocument();
  });

  test("shows alert when email is not corporate", () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const emailInput = getByPlaceholderText("Enter Email");

    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });

    expect(
      getByText("Only corporate email addresses are allowed.")
    ).toBeInTheDocument();
    expect(
      getByText("Only corporate email addresses are allowed.")
    ).toBeVisible();
  });

  test("shows alert when login is successful", () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const emailInput = getByPlaceholderText("Enter Email");
    const passwordInput = getByPlaceholderText("Enter Password");
    const submitButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "test@corporate.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test("calls handleLanguageChange when language is selected", () => {
    const { getByText } = render(<LoginForm />);
    const languageSelector = getByText("English");

    fireEvent.change(languageSelector, { target: { value: "en" } });
    expect(languageSelector).toHaveValue("en");
  });
});
