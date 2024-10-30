import { Typography, Stack, IconButton } from "@mui/material";
import Logo from "../Logo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import NavItems from "../NavItems";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack>
      <Stack
        width={1}
        height={1}
        px={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? (
            <MenuIcon sx={{ color: "#000000" }} />
          ) : (
            <CloseIcon sx={{ color: "#000000" }} />
          )}
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          白頭翁不吃小米
        </Typography>
        <Logo />
      </Stack>
      {isOpen && (
        <Stack py={1}>
          <NavItems />
        </Stack>
      )}
    </Stack>
  );
}
