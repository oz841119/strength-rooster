import { Alert, Snackbar } from "@mui/material";

const SrSanckbar: React.FC<SrSanckbarProps> = ({ open, message, severity, handleClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      disableWindowBlurListener={true}
    >
      <Alert severity={severity} sx={{ width: '300px' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
export default SrSanckbar
interface SrSanckbarProps {
  open: boolean
  message: string
  severity: 'success' | 'error' | 'warning' | 'info'
  handleClose: (event: any, reason: string) => void
}