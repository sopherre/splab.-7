import { Typography } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";

export const KeyboardContainer: React.FC = memo(() => {
  const [isKeydown, setIsKeydown] = useState(false);

  const handleKeydown = useCallback(() => {
    setIsKeydown(true);
  }, []);

  const handleKeyup = useCallback(() => {
    setIsKeydown(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
  }, [handleKeydown, handleKeyup]);

  return (
    <div>
      <Typography>キーボードのテスト</Typography>
      <Typography>
        {isKeydown ? "キー押下しています" : "キー押下していません"}
      </Typography>
    </div>
  );
});

KeyboardContainer.displayName = "KeyboardContainer";
