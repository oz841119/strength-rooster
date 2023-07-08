import TopBar from './TopBar'

export const metadata = {
  title: 'Dashboard - 健身雞',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <TopBar/>
      {children}
    </div>
  )
}
