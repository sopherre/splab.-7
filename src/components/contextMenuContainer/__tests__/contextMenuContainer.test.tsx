import { render, screen, user } from "@/test/testUtils";
import { ContextMenuContainer } from "../contextMenuContainer";

describe("ContextMenuContainerコンポーネントのテスト", () => {
  it("コンテナ内のテキストを右クリックするとメニューが表示される", async () => {
    render(<ContextMenuContainer />);
    const text = screen.getByText("Lorem", { exact: false });

    await user.pointer({ keys: "[MouseRight>]", target: text });

    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
  });
});
