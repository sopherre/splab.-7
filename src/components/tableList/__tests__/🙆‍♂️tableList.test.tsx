import { render, screen } from "@testing-library/react";
import { TableList } from "../tableList";

describe("TableListコンポーネントのテスト", () => {
  it("テーブル名のリストが表示される", async () => {
    // fetchをモックしている
    const mockJson = jest.fn().mockReturnValue([
      { id: 0, name: "テーブル0" },
      { id: 1, name: "テーブル1" },
    ]);
    const mockFetch = jest.fn().mockReturnValue({ json: mockJson });
    global.fetch = mockFetch;

    render(<TableList />);

    const listitems = await screen.findAllByRole("listitem");
    expect(listitems).toHaveLength(2);
  });
});
