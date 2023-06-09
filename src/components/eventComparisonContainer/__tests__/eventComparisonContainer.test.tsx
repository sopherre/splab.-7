import { fireEvent, render, screen, user } from "@/test/testUtils";
import { EventComparisonContainer } from "../eventComparisonContainer";

describe("EventComparisonContainerコンポーネントのテスト", () => {
  it("fireEventのテスト", () => {
    render(<EventComparisonContainer />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hoge" } });
    expect(input).toHaveValue("hoge");

    const text = screen.getByText("キー押下しています");
    expect(text).toBeInTheDocument();
  });

  it("userEventのテスト", async () => {
    render(<EventComparisonContainer />);
    const input = screen.getByRole("textbox");

    await user.type(input, "hoge");
    expect(input).toHaveValue("hoge");

    const text = screen.getByText("キー押下しています");
    expect(text).toBeInTheDocument();
  });
});
