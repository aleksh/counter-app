import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("render button", () => {
    render(<Button label="Test" onClick={() => {}} />);

    const label = screen.getByText(/Test/i);

    expect(label).toBeInTheDocument();
  });

  it("button click", () => {
    const onClick = jest.fn();
    render(<Button label="Test" onClick={onClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });

  it("button should be disabled", () => {
    render(<Button label="Test" disabled={true} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });
});
