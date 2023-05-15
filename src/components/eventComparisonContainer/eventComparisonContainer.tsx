import { TextField, Typography } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";

export const EventComparisonContainer: React.FC = memo(() => {
  const [isKeyPress, setIsKeyPress] = useState(false);

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    setIsKeyPress(true);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div>
      <Typography>fireEventとuserEventの比較</Typography>
      <Typography>
        {isKeyPress ? "キー押下しています" : "キー押下していません"}
      </Typography>
      <TextField />
    </div>
  );
});

EventComparisonContainer.displayName = "EventComparisonContainer";
