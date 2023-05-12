import { Button, Drawer, IconButton, Typography, styled } from "@mui/material";
import { memo, useCallback, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: theme.spacing(3),
    justifyContent: "space-between",
  },
}));

export const DrawerContainer: React.FC = memo(() => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <div>
        <Typography>ドロワーのテスト</Typography>
        <Button variant="contained" onClick={handleClick}>
          開く
        </Button>
      </div>

      <StyledDrawer open={open} variant="persistent" anchor="right">
        <IconButton>
          {open ? <ArrowRightAltIcon /> : <ArrowLeftIcon />}
        </IconButton>

        <Typography>ドロワー</Typography>
        <Button variant="contained" onClick={handleClose}>
          閉じる
        </Button>
      </StyledDrawer>
    </>
  );
});

DrawerContainer.displayName = "DrawerContainer";
