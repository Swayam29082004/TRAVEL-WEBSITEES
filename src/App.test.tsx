import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Travel Explorer heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Travel Explorer/i);
  expect(headingElement).toBeInTheDocument();
});
