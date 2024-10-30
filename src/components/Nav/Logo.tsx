import { Box, Stack } from "@mui/material";

export default function Logo() {
  return (
    <>
      <Stack
        width={80}
        height={80}
        borderRadius="50%"
        boxShadow={8}
        alignItems="center"
        justifyContent="center"
        bgcolor="#ffffff"
        sx={{ transform: "scale(.7)" }}
      >
        <Box
          position="relative"
          sx={{
            width: 50,
            height: 45,
            borderRadius: "50%",
            position: "relative",
            bgcolor: "#ffffff",
          }}
        >
          <div className="main"></div>
          <div className="head"></div>
          <div className="eye"></div>
          <div className="mouse"></div>
          <div className="chin"></div>
        </Box>
      </Stack>
    </>
  );
}
