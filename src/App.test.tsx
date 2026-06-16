import { render, screen } from "@testing-library/react";
import Badge from "./components/ui/badge/Badge";

test("renders badge content", () => {
  render(<Badge color="success">Active</Badge>);
  expect(screen.getByText("Active")).toBeInTheDocument();
});
