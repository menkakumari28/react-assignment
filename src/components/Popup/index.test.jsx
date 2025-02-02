import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Popup from "./index";

describe("Popup component", () => {
  test("renders correctly with message", () => {
    const { getByText } = render(
      <Popup message="Test message" onClose={() => {}} />
    );
    expect(getByText("Test message")).toBeInTheDocument();
  });

  test("calls onClose handler when OK button is clicked", () => {
    const handleClose = vi.fn();
    const { getByText } = render(
      <Popup message="Test message" onClose={handleClose} />
    );
    fireEvent.click(getByText("OK"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("applies correct class names", () => {
    const { container } = render(
      <Popup message="Test message" onClose={() => {}} />
    );
    expect(container.firstChild).toHaveClass(
      "fixed inset-0 flex items-center justify-center opacity-bg"
    );
    expect(container.querySelector(".bg-white")).toHaveClass(
      "p-6 rounded-lg shadow-lg w-80 text-center"
    );
    expect(container.querySelector("button")).toHaveClass(
      "mt-4 bg-black-500 text-white px-4 py-2 rounded"
    );
  });
});
