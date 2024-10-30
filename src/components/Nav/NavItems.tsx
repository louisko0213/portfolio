import { Button, Stack } from "@mui/material";
import { useState } from "react";

const navItems = [
  { id: 1, name: "白頭翁的特性" },
  { id: 2, name: "白頭翁的故事" },
  { id: 3, name: "白頭翁的美照" },
  { id: 4, name: "白頭翁的危機" },
];

export default function NavItems() {
  const [currentId, setCurrentId] = useState(1);

  return (
    <>
      <Stack sx={{ color: "#ad4d3a" }}>
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="text"
            sx={{
              color: currentId === item.id ? "inherit" : "#000000",
              textDecoration: currentId === item.id ? "underline" : "none",
            }}
            onClick={() => setCurrentId(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </>
  );
}
