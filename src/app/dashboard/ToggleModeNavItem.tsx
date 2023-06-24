"use client"

import useDarkMode from '@/hooks/useDarkMode'
export default function ToggleModeNavItem({className}: {className: string}) {
  const {isDarkMode, toggleDarkMode} = useDarkMode()
  return (
    <div className={className} onClick={toggleDarkMode}>{isDarkMode ? '切為淺色' : '切為深色'}</div>
  )
}