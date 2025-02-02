import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "./index";

describe("PasswordInput Component", () => {
  const setup = () => {
    const utils = render(
      <PasswordInput
        label="Password"
        value=""
        onChange={vi.fn()}
        placeholder="Enter your password"
      />
    );
    const input = utils.getByPlaceholderText("Enter your password");
    const button = utils.getByRole("button");
    return {
      input,
      button,
      ...utils,
    };
  };

  test("renders PasswordInput component", () => {
    setup();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    const { input, button } = setup();

    // Initially password should be hidden
    expect(input).toHaveAttribute("type", "password");

    // Click to show password
    fireEvent.click(button);
    expect(input).toHaveAttribute("type", "text");

    // Click to hide password
    fireEvent.click(button);
    expect(input).toHaveAttribute("type", "password");
  });

  test("calls onChange handler when input value changes", () => {
    const handleChange = vi.fn();
    render(
      <PasswordInput
        label="Password"
        value=""
        onChange={handleChange}
        placeholder="Enter your password"
      />
    );

    const input = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(input, { target: { value: "new-password" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
