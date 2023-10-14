"use client"
import { Backdrop, CircularProgress } from "@mui/material";
export default function DFullPageLoading({ isActive = false }: { isActive: boolean }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 99999 }}
      open={isActive}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

