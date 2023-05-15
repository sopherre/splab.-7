import { Typography } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";

export const KeyboardContainer: React.FC = memo(() => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeydown = useCallback(() => {
    setIsKeyPressed(true);
  }, []);

  const handleKeyup = useCallback(() => {
    setIsKeyPressed(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
  }, [handleKeydown, handleKeyup]);

  return (
    <div>
      <Typography variant="h2">キーボードのテスト</Typography>
      <Typography>
        {isKeyPressed ? "キー押下しています" : "キー押下していません"}
      </Typography>
    </div>
  );
});

KeyboardContainer.displayName = "KeyboardContainer";
