import React from "react";
import { render } from "@testing-library/react";
import { Landing } from "../../components/Landing";
import { MemoryRouter } from "react-router-dom";

describe("Landing", () => {
  it("should render the landing page", () => {
    const { container } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
