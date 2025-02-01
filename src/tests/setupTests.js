import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: false,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    atob: vi.fn(),
  })),
});
