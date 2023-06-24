import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode: () => void = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      // 應用深色模式的樣式
      document.body.classList.add("body-dark-mode", "font-color-dark-mode");
      document.getElementById("nav_bar")!.classList.add('side-dark-mode')
      document.getElementById("side_bar")!.classList.add('side-dark-mode')
    } else {
      // 移除深色模式的樣式
      document.body.classList.remove("body-dark-mode", "font-color-dark-mode");
      document.getElementById("nav_bar")!.classList.remove('side-dark-mode')
      document.getElementById("side_bar")!.classList.remove('side-dark-mode')
    }
  }, [isDarkMode]);

  return {isDarkMode, toggleDarkMode};
};