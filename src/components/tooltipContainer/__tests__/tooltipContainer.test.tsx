import { render, screen, user, waitFor } from "@/test/testUtils";
import { TooltipContainer } from "../tooltipContainer";

describe("TooltipContainerコンポーネントのテスト", () => {
  it("アイコンボタンにカーソルが移動した時にツールチップが表示される", async () => {
    render(<TooltipContainer />);
    const iconButton = screen.getByRole("button");

    await user.hover(iconButton);

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  it("アイコンボタンからカーソルが離れた時にツールチップが非表示になる", async () => {
    render(<TooltipContainer />);
    const iconButton = screen.getByRole("button");
    await user.hover(iconButton);

    await user.unhover(iconButton);

    await waitFor(() => {
      const tooltip = screen.queryByRole("tooltip");
      expect(tooltip).not.toBeInTheDocument();
    });
  });
});
