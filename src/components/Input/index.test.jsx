import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "./index";

describe("InputField Component", () => {
  test("renders input field", () => {
    render(<InputField />);
    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("updates value on change", () => {
    render(<InputField />);
    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement).toBeInTheDocument();
  });
});
