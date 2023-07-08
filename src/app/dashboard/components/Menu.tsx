'use client'
import { SpeedDial, SpeedDialAction } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter()
  const items = [
    { icon: <AddIcon />, name: '添加訓練', route: '/dashboard/create-training'},
    { icon: <AnalyticsIcon />, name: '訓練記錄', route: '/dashboard/training-record' },
    { icon: <PersonIcon />, name: '個人檔案', route: '/dashboard/personal'},
  ]
  return (
    <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16, color: 'red'}}
        icon={<AppsIcon />}
      >
        {items.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={() => router.push(item.route)}
          />
        ))}
      </SpeedDial>
  )
}