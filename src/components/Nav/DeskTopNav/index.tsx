import { Box, Typography, Stack } from "@mui/material";
import Logo from "../Logo";
import NavItems from "../NavItems";

export default function DeskTopNav() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          position: "relative",
        }}
      >
        <Stack position="absolute" right={-80} zIndex={1}>
          <Logo />
        </Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          白頭翁不吃小米
        </Typography>
      </Box>

      <NavItems />
    </>
  );
}
