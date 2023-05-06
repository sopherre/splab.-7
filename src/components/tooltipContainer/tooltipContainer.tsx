import { IconButton, Tooltip } from "@mui/material";
import { memo } from "react";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export const TooltipContainer: React.FC = memo(() => {
  return (
    <div>
      <Tooltip title="ツールチップ">
        <IconButton>
          <AccessibilityNewIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
});

TooltipContainer.displayName = "TooltipContainer";
