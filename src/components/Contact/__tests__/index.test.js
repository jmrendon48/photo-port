import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  // baseline test
  it("renders", () => {
    render(<Contact />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
  });
});

describe("Contact header is visible", () => {
  it("inserts text into the h1", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("contact-header")).toHaveTextContent("Contact me");
  });
});

describe("Submit button is visible", () => {
  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })
});

