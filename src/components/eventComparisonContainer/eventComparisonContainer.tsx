import { TextField, Typography } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";

export const EventComparisonContainer: React.FC = memo(() => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeydown = useCallback(() => {
    setIsKeyPressed(true);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div>
      <Typography variant="h2">fireEventとuserEventの比較</Typography>
      <Typography>
        {isKeyPressed ? "キー押下しています" : "キー押下していません"}
      </Typography>
      <TextField />
    </div>
  );
});

EventComparisonContainer.displayName = "EventComparisonContainer";
