import { Menu, MenuItem, Typography, styled } from "@mui/material";
import React, { memo, useCallback, useState } from "react";

const Wrapper = styled("div")(({ theme }) => ({
  margin: theme.spacing(1, 0),
  cursor: "context-menu",
  color: theme.palette.neutral.main,
}));

export const ContextMenuContainer: React.FC = memo(() => {
  const [contextMenu, setContextMenu] = useState<{
    top: number;
    left: number;
  }>();

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ top: e.clientY, left: e.clientX });
  }, []);

  const handleClose = useCallback(() => setContextMenu(undefined), []);

  return (
    <>
      <div>
        <Typography>コンテキストメニューのテスト</Typography>
        <Wrapper onContextMenu={handleContextMenu}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ipsum purus, bibendum sit amet vulputate eget, porta semper ligula.
            Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac
            dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada
            ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper
            fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum
            ultrices, metus metus finibus ex, sit amet facilisis neque enim sed
            neque. Quisque accumsan metus vel maximus consequat. Suspendisse
            lacinia tellus a libero volutpat maximus.
          </Typography>
        </Wrapper>
      </div>
      {contextMenu && (
        <Menu
          open
          anchorReference="anchorPosition"
          anchorPosition={contextMenu}
          onClose={handleClose}
        >
          {["menu1", "menu2"].map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
});

ContextMenuContainer.displayName = "ContextMenuContainer";
