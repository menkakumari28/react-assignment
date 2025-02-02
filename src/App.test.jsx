import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders noventiq logo", () => {
  render(<App />);
  const logo = screen.getByAltText("noventiq logo");
  expect(logo).toBeInTheDocument();
});

test("renders login form", () => {
  render(<App />);
  const loginForm = screen.getByTestId("login-form");
  expect(loginForm).toBeInTheDocument();
});

test("renders login form with email input", () => {
  render(<App />);
  const emailInput = screen.getByText("Email :");
  expect(emailInput).toBeInTheDocument();
});

test("renders login form with password input", () => {
  render(<App />);
  const passwordInput = screen.getByText("Password :");
  expect(passwordInput).toBeInTheDocument();
});

test("renders login form with language input", () => {
  render(<App />);
  const languageInput = screen.getByText("Language :");
  expect(languageInput).toBeInTheDocument();
});

test("renders login form with submit button", () => {
  render(<App />);
  const submitButton = screen.getAllByRole("button")[1];
  expect(submitButton).toBeInTheDocument();
});

test("renders login form with show password button", () => {
  render(<App />);
  const showPasswordButton = screen.getAllByRole("button")[0];
  expect(showPasswordButton).toBeInTheDocument();
});

test("renders login form with language select", () => {
  render(<App />);
  const languageSelect = screen.getByTestId("language-select");
  expect(languageSelect).toBeInTheDocument();
});

test("renders login form with english language option", () => {
  render(<App />);
  const englishOption = screen.getByText("English");
  expect(englishOption).toBeInTheDocument();
});
