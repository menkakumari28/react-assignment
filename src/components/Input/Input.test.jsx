import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputFiled";
import { expect } from "vitest";

describe("InputField Component", () => {
  
  test("renders input field", () => {
    render(<InputField />);
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("updates value on change", () => {
    render(<InputField />);
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
  });
});
