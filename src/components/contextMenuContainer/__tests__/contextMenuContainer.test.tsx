import { render, screen } from "@/test/testUtils";
import { ContextMenuContainer } from "../contextMenuContainer";
import userEvent from "@testing-library/user-event";

describe("ContextMenuContainerコンポーネントのテスト", () => {
  it("コンテナ内のテキストを右クリックするとメニューが表示される", async () => {
    render(<ContextMenuContainer />);
    const text = screen.getByText("Lorem", { exact: false });

    await userEvent.pointer({ keys: "[MouseRight>]", target: text });

    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
  });
});
