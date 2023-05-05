import { renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useKeyPress } from "../useKeyPress";

describe("useKeyPressフックのテスト", () => {
  const user = userEvent.setup();

  it("keydown時にkeyPressedがtrueになる", async () => {
    const { result } = renderHook(() => useKeyPress("a"));

    await user.keyboard("{a>}");

    expect(result.current.keyPressed).toBe(true);
  });

  it("keyup時にkeyPressedがfalseになる", async () => {
    const { result } = renderHook(() => useKeyPress("a"));
    await user.keyboard("{a>}");

    await user.keyboard("{/a}");

    expect(result.current.keyPressed).toBe(false);
  });
});
