import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
    test("renders LoginForm component", () => {
        const { getByPlaceholderText } = render(<LoginForm />);
        expect(getByPlaceholderText("Enter Email")).toBeInTheDocument();
        expect(getByPlaceholderText("Enter Password")).toBeInTheDocument();
    });

    test("shows alert when email is not corporate", () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm />);
        const emailInput = getByPlaceholderText("Enter Email");
        const submitButton = getByText("Login");

        fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
        fireEvent.click(submitButton);

        expect(window.alert).toHaveBeenCalledWith("Please use a corporate email address.");
    });

    test("shows alert when login is successful", () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm />);
        const emailInput = getByPlaceholderText("Enter Email");
        const passwordInput = getByPlaceholderText("Enter Password");
        const submitButton = getByText("Login");

        fireEvent.change(emailInput, { target: { value: "test@corporate.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(submitButton);

        expect(window.alert).toHaveBeenCalledWith("Login successful!");
    });

    test("calls handleLanguageChange when language is selected", () => {
        const { getByText } = render(<LoginForm />);
        const languageSelector = getByText("Select Language");

        fireEvent.change(languageSelector, { target: { value: "en" } });

        expect(console.log).toHaveBeenCalledWith("Selected Language:", "en");
    });
});