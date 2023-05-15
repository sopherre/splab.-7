import { render, screen, user } from "@/test/testUtils";
import { KeyboardContainer } from "../keyboardContainer";

describe("KeyboardContainerコンポーネントのテスト", () => {
  it("キー押下中に「キー押下しています」が表示される", async () => {
    render(<KeyboardContainer />);

    await user.keyboard("{a>}");

    const text = screen.getByText("キー押下しています");
    expect(text).toBeInTheDocument();
  });

  it("キーを話した時、「キー押下していません」が表示される", async () => {
    render(<KeyboardContainer />);
    await user.keyboard("{a>}");

    await user.keyboard("{/a}");

    const text = screen.getByText("キー押下していません");
    expect(text).toBeInTheDocument();
  });
});
