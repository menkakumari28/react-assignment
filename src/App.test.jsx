import React from "react";
import { render, screen } from "@testing-library/react";
import { test } from "@jest/globals";
import App from "./App";
import "@testing-library/jest-dom";

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
  const emailInput = screen.getByLabelText("Email:");
  expect(emailInput).toBeInTheDocument();
});

test("renders login form with password input", () => {
  render(<App />);
  const passwordInput = screen.getByLabelText("Password:");
  expect(passwordInput).toBeInTheDocument();
});

test("renders login form with language input", () => {
  render(<App />);
  const languageInput = screen.getByLabelText("Language:");
  expect(languageInput).toBeInTheDocument();
});

test("renders login form with submit button", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /login/i });
  expect(submitButton).toBeInTheDocument();
});

test("renders login form with show password button", () => {
  render(<App />);
  const showPasswordButton = screen.getByRole("button", { name: /show/i });
  expect(showPasswordButton).toBeInTheDocument();
});

test("renders login form with language select", () => {
  render(<App />);
  const languageSelect = screen.getByRole("combobox", { name: /language/i });
  expect(languageSelect).toBeInTheDocument();
});

test("renders login form with english language option", () => {
  render(<App />);
  const englishOption = screen.getByText("English");
  expect(englishOption).toBeInTheDocument();
});
