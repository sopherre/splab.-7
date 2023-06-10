import { render, screen } from "@testing-library/react";
import { TableList } from "../tableList";

// useTablesをモックしている
jest.mock("../hooks/useTables", () => ({
  useTables: jest.fn().mockReturnValue({
    tables: [
      { id: 0, name: "テーブル0" },
      { id: 1, name: "テーブル1" },
    ],
  }),
}));

describe("TableListコンポーネントのテスト", () => {
  it("テーブル名のリストが表示される", async () => {
    render(<TableList />);

    const listitems = await screen.findAllByRole("listitem");
    expect(listitems).toHaveLength(2);
  });
});
