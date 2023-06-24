"use client"

import Link from 'next/link'
import styles from './layout.module.scss'
import ToggleModeNavItem from './ToggleModeNavItem'
import AddchartIcon from '@mui/icons-material/Addchart'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import { usePathname } from 'next/navigation';


function NavBar() {
  return (
    <nav className={styles.nav_bar} id="nav_bar">
      <h1 className={styles.web_name}>STRENGTH<br />ROOSTER</h1>
    </nav>
  )
}

function SideBar() {
  const routePathName = usePathname()
  const ROUTE_PATH = {
    'addTrain': '/dashboard/add-train',
    'record': '/dashboard/record'
  }
  const isCurrRoute = (pathName: string) => pathName === routePathName
  
  return (
    <nav className={styles.side_bar} id="side_bar">
      <Link href={ROUTE_PATH.addTrain}>
        <AddchartIcon 
          className={`${styles.side_item} ${isCurrRoute(ROUTE_PATH.addTrain) && styles.side_item_active}`}
        />
      </Link>
      <Link href={ROUTE_PATH.record}>
        <AnalyticsIcon 
          className={`${styles.side_item} ${isCurrRoute(ROUTE_PATH.record) && styles.side_item_active}`}
        />
      </Link>
      <ToggleModeNavItem className={styles.side_item} />
    </nav>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className={styles.side_bar_and_main}>
        <SideBar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}