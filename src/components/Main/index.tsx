import { Box, Stack, Typography } from "@mui/material";
import Paper from "./Paper";

const contents = [
  {
    id: 1,
    title: "外觀",
    content:
      "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。",
  },
  {
    id: 2,
    title: "棲地",
    content:
      "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。",
  },
  {
    id: 3,
    title: "食性",
    content:
      "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。",
  },
];

export default function Main() {
  return (
    <>
      <Box sx={{ position: "relative", height: "60%" }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/0411/a36a/2789ca730221661c9008e0bf404c1cdc?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CW1EZlBYIVHmT9qrSCodUyVxQ98CSTiggw9ovtFOeYPYxWNo96eZMRJVyZzC1~umAD0AwvQ4c-wakPJ6FxkfsizOHGfDGSgovJD6PVF7VtyDu4~S4I8anDSJeXQmSWNE41uL8onfBsmBlcwlStucsxL6gaWK49TWOGLTm3pMcNlAPZA7fBN~psy4jaYdNUxmBVx0OwUBENp7oJuReJ6UEZy-0O3grrZCxkyf0GW~yvC4X4-Rk7ZWBPwR0ks5FK6sCe2kGuzomkwbsO~aufpmmi3lQ2llOLXID3xzn4x6sEPHIk9g7eoJOycEjbhkli97Rr0Ixsgy6DaDA52uSdG97A__" // 用來取代為你圖片的URL
          alt="白頭翁"
          style={{
            width: "100%",
            height: "100%",
            left: 0,
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            color: "#fff",
            padding: "16px 32px",
            width: "100%",
          }}
        >
          <Typography variant="h3" fontWeight="bold" textAlign="right">
            白頭翁 (Chinese bulbul)
          </Typography>
          <Typography variant="subtitle1" textAlign="right">
            又名白頭翁。以果實、昆蟲為主食，無法消化小米，黏類。平均壽命約8-10年。
          </Typography>
        </Box>
      </Box>

      <Stack
        width={1}
        height={{ lg: "40%" }}
        spacing={3}
        p={4}
        bgcolor="#f7f0e7"
        direction={{ xs: "column", lg: "row" }}
      >
        {contents.map((item) => (
          <Paper key={item.id} title={item.title} content={item.content} />
        ))}
      </Stack>
    </>
  );
}
