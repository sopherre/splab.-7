import { IconButton, Typography } from "@mui/material";
import { memo } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export const UploadContainer: React.FC = memo(() => {
  return (
    <div>
      <Typography>アップロードのテスト</Typography>
      <IconButton aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </div>
  );
});

UploadContainer.displayName = "UploadContainer";
