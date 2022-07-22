import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders with given label", () => {
    const label = "Test Message";
    render(<Button>{label}</Button>);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("calls click handler", () => {
    const handleClick = jest.fn();
    const label = "Test Message";

    render(<Button onClick={handleClick}>{label}</Button>);

    fireEvent.click(screen.getByText(label));

    expect(handleClick).toHaveBeenCalled();
  });
});
