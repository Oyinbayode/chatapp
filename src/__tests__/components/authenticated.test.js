import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { AuthenticatedApp } from "../../components/AuthenticatedApp";

describe("AuthenticatedApp", () => {
  it("should render the authenticated app", () => {
    const { container } = render(<AuthenticatedApp />);
    expect(container).toMatchSnapshot();
  });
});
