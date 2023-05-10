import { render, screen, user } from "@/test/testUtils";
import { UploadContainer } from "../uploadContainer";

describe("UploadContainerコンポーネントのテスト", () => {
  it("アップロードボタン押下時、ファイルをアップロードできる", async () => {
    render(<UploadContainer />);
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText<HTMLInputElement>(/^upload file$/);

    await user.upload(input, file);

    expect(input.files?.[0]).toBe(file);
    expect(input.files?.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });
});
