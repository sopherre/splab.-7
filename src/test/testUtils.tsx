import { ThemeProvider } from "@/providers/themeProvider";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider>{children} </ThemeProvider>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
