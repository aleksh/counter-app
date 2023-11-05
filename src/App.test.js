/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("render button", () => {
    const { container } = render(<App />);

    const AppDiv = container.getElementsByClassName("App");
    const CountDiv = container.getElementsByClassName("count");
    const ActionsDiv = container.getElementsByClassName("actions");

    expect(AppDiv.length).toBe(1);
    expect(CountDiv.length).toBe(1);
    expect(ActionsDiv.length).toBe(1);
  });
});
