import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch from "./index";

describe("Switch", () => {
  test("renders Switch component", () => {
    const { getByRole } = render(
      <Switch rememberMe={false} setRememberMe={() => {}} />
    );
    expect(getByRole("switch")).toBeInTheDocument();
  });

  test("toggles rememberMe state on click", () => {
    const setRememberMe = vi.fn();
    const { getByRole } = render(
      <Switch rememberMe={false} setRememberMe={setRememberMe} />
    );
    const switchButton = getByRole("switch");

    fireEvent.click(switchButton);
    expect(setRememberMe).toHaveBeenCalled();

    fireEvent.click(switchButton);
    expect(setRememberMe).toHaveBeenCalled();
  });

  test("has correct aria-checked attribute based on rememberMe prop", () => {
    const { getByRole, rerender } = render(
      <Switch rememberMe={false} setRememberMe={() => {}} />
    );
    const switchButton = getByRole("switch");

    expect(switchButton).toHaveAttribute("aria-checked", "false");

    rerender(<Switch rememberMe={true} setRememberMe={() => {}} />);
    expect(switchButton).toHaveAttribute("aria-checked", "true");
  });

  test("has correct class based on rememberMe prop", () => {
    const { getByRole, rerender } = render(
      <Switch rememberMe={false} setRememberMe={() => {}} />
    );
    const switchButton = getByRole("switch");

    expect(switchButton).toHaveClass("bg-gray-300");

    rerender(<Switch rememberMe={true} setRememberMe={() => {}} />);
    expect(switchButton).toHaveClass("bg-blue-500");
  });
});
