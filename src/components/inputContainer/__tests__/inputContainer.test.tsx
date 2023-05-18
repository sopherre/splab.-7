import { render, screen, user } from "@/test/testUtils";
import { InputContainer } from "../inputContainer";

describe("InputContainerコンポーネントのテスト", () => {
  it("typeがnumberのTextFieldのテスト", async () => {
    render(<InputContainer />);
    const spinbutton = screen.getByRole("spinbutton");

    await user.type(spinbutton, "123");

    expect(spinbutton).toHaveValue(123);
  });

  it("typeがnumberのTextFieldの値をコピーして、別のTextFieldに貼り付ける", async () => {
    render(<InputContainer />);
    const spinbutton = screen.getByRole("spinbutton");
    await user.type(spinbutton, "123");
    await user.pointer([
      { target: spinbutton, offset: 1, keys: "[MouseLeft>]" },
      { offset: 3 },
    ]);
    await user.copy();
    const textbox = screen.getByRole<HTMLInputElement>("textbox");
    await user.click(textbox);

    await user.paste();

    expect(textbox).toHaveValue("23");
  });
});
