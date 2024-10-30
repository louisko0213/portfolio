import { Paper as MuiPaper, Stack, Typography } from "@mui/material";

export default function Paper({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <MuiPaper
      sx={{
        padding: 2,
        width: 1,
        height: 1,
        boxShadow: "none",
        bgcolor: "inherit",
        display: "flex",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mr={3}
        sx={{
          position: "relative",
          textAlign: "start",
          writingMode: "vertical-rl",
        }}
      >
        {title}
        <Stack
          position="absolute"
          right={-10}
          top={55}
          width={25}
          height={25}
          border="8px solid #AA666699"
          borderRadius="50%"
        ></Stack>
      </Typography>
      <Typography textAlign="left">{content}</Typography>
    </MuiPaper>
  );
}
