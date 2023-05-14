import { Button, Drawer, IconButton, Typography, styled } from "@mui/material";
import { memo, useCallback, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const StyledDrawer = styled(Drawer)<{ open: boolean }>(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    padding: theme.spacing(3),
    justifyContent: "space-between",
    overflow: "visible",
    visibility: "visible!important",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  zIndex: 100,
  left: -30,
  backgroundColor: theme.palette.secondary.main,
}));

export const DrawerContainer: React.FC = memo(() => {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => setOpen(true), []);

  const closeDrawer = useCallback(() => setOpen(false), []);

  const handleIconButtonClick = useCallback(() => {
    if (open) {
      closeDrawer();
      return;
    }
    openDrawer();
  }, [closeDrawer, open, openDrawer]);

  return (
    <>
      <div>
        <Typography>ドロワーのテスト</Typography>
        <Button variant="contained" onClick={openDrawer}>
          開く
        </Button>
      </div>

      <StyledDrawer
        data-testid="Drawer"
        open={open}
        variant="persistent"
        anchor="right"
      >
        <StyledIconButton onClick={handleIconButtonClick}>
          {open ? (
            <ArrowRightAltIcon titleAccess="arrowRightIcon" />
          ) : (
            <KeyboardBackspaceIcon titleAccess="arrowLeftIcon" />
          )}
        </StyledIconButton>

        <Typography>ドロワー</Typography>
        <Button variant="contained" onClick={closeDrawer}>
          閉じる
        </Button>
      </StyledDrawer>
    </>
  );
});

DrawerContainer.displayName = "DrawerContainer";
