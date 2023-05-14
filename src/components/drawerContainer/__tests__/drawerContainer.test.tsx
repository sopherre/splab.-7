import { render, screen, user, waitFor } from "@/test/testUtils";
import { DrawerContainer } from "../drawerContainer";

describe("drawerContainerコンポーネントテスト", () => {
  it("開くボタン押下したらドロワーが開く", async () => {
    render(<DrawerContainer />);
    const openButton = screen.getByRole("button", { name: "開く" });

    await user.click(openButton);

    const drawerTitle = screen.getByText("ドロワー");
    expect(drawerTitle).toBeVisible();
  });

  it("右矢印アイコンボタンを押下したらドロワーが閉じる", async () => {
    render(<DrawerContainer />);
    const openButton = screen.getByRole("button", { name: "開く" });
    await user.click(openButton);
    const rightArrowIconButton = screen.getByRole("button", {
      name: "arrowRightIcon",
    });

    await user.click(rightArrowIconButton);

    await waitFor(() => {
      const drawerTitle = screen.getByText("ドロワー");
      expect(drawerTitle).not.toBeVisible();
    });
  });
});
