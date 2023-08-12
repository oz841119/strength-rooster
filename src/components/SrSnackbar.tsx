import { Alert, Snackbar } from "@mui/material";

export default function SrSanckbar({ open, message, severity, handleClose }: SrSanckbarProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={severity} sx={{ width: '300px' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

interface SrSanckbarProps {
  open: boolean
  message: string
  severity: 'success' | 'error' | 'warning' | 'info'
  handleClose: () => void
}