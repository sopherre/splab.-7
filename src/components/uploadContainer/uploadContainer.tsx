import { IconButton, Typography } from "@mui/material";
import { memo } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export const UploadContainer: React.FC = memo(() => {
  return (
    <div>
      <Typography variant="h2">アップロードのテスト</Typography>
      <IconButton color="primary" component="label">
        <input
          hidden
          accept="image/*"
          aria-label="upload file"
          type="file"
          multiple
        />
        <PhotoCamera />
      </IconButton>
    </div>
  );
});

UploadContainer.displayName = "UploadContainer";
