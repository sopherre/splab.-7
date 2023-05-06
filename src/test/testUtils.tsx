import { ThemeProvider } from "@/providers/themeProvider";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider>{children} </ThemeProvider>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

const user = userEvent.setup();

export * from "@testing-library/react";
export { customRender as render, user };
