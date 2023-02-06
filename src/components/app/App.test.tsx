import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the function App()", () => {
  describe("When we call the function App()", () => {
    test("Then the Text of <h1> should be in the document ", () => {
      render(<App />);
      const linkElement = screen.getByText(/The pointing gentlemen/i);
      expect(linkElement).toBeInTheDocument();
    });

    test("Then, the main role should be in the document", () => {
      render(<App />);
      const linkElement = screen.getByRole("main");
      expect(linkElement).toBeInTheDocument();
    });
  });
});
