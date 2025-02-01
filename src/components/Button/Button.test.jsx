import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button/Button";

describe("Button component", () => {
  test("renders correctly with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies default type as button", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me").getAttribute("type")).toBe("button");
  });

  test("applies given type", () => {
    const { getByText } = render(<Button type="submit">Submit</Button>);
    expect(getByText("Submit").getAttribute("type")).toBe("submit");
  });

  test("applies additional class names", () => {
    const { getByText } = render(
      <Button className="extra-class">Click me</Button>
    );
    expect(getByText("Click me").classList.contains("extra-class")).toBe(true);
  });
});
