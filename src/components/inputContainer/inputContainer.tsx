import { Stack, TextField, Typography } from "@mui/material";
import { memo } from "react";

export const InputContainer: React.FC = memo(() => {
  return (
    <Stack spacing={2}>
      <Typography variant="h2">入力とコピー&ペーストのテスト</Typography>
      <TextField />
      <TextField type="number" />
    </Stack>
  );
});

InputContainer.displayName = "InputContainer";
