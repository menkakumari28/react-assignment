import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageSelector from "./index";

describe("LanguageSelector", () => {
  const onLanguageChangeMock = vi.fn();

  afterEach(() => {
    onLanguageChangeMock.mockClear();
  });

  test("renders LanguageSelector component", () => {
    render(<LanguageSelector onLanguageChange={onLanguageChangeMock} />);
    expect(screen.getByText(/Language/i)).toBeInTheDocument();
  });

  test("displays the default language as English", () => {
    render(<LanguageSelector onLanguageChange={onLanguageChangeMock} />);
    expect(screen.getByDisplayValue("English")).toBeInTheDocument();
  });

  test("calls onLanguageChange with the browser language if supported", () => {
    Object.defineProperty(window.navigator, "language", {
      value: "hi",
      configurable: true,
    });

    render(<LanguageSelector onLanguageChange={onLanguageChangeMock} />);
    expect(onLanguageChangeMock).toHaveBeenCalledWith("hi");
    expect(screen.getByText("हिन्दी (Hindi)")).toBeInTheDocument();
  });

  test("calls onLanguageChange with 'en' if browser language is not supported", () => {
    Object.defineProperty(window.navigator, "language", {
      value: "fr",
      configurable: true,
    });

    render(<LanguageSelector onLanguageChange={onLanguageChangeMock} />);
    expect(onLanguageChangeMock).toHaveBeenCalledWith("en");
    expect(screen.getByDisplayValue("English")).toBeInTheDocument();
  });

  test("changes language when a new language is selected", () => {
    render(<LanguageSelector onLanguageChange={onLanguageChangeMock} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "ta" } });
    expect(onLanguageChangeMock).toHaveBeenCalledWith("ta");
    expect(screen.getByDisplayValue("தமிழ் (Tamil)")).toBeInTheDocument();
  });
});
