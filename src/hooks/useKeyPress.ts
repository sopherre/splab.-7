import { useCallback, useEffect, useState } from "react";

export const useKeyPress = (targetKey: KeyboardEvent["key"]): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(
    ({ key }: KeyboardEvent): void => {
      if (key !== targetKey) return;

      setKeyPressed(true);
    },
    [targetKey]
  );

  const upHandler = useCallback(
    ({ key }: KeyboardEvent): void => {
      if (key !== targetKey) return;

      setKeyPressed(false);
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
};
