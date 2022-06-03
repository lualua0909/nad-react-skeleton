import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const TestComponentHOC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const renderApp = () => {
  return render(
    <TestComponentHOC>
      <App />
    </TestComponentHOC>
  );
};

test("App component mounts and renders without error", async () => {
  renderApp();
  const titleEl = screen.getByText(/SEO Friendly SPA/i);
  expect(titleEl).toBeInTheDocument();
});
