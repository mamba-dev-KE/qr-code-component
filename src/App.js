import { useState } from "react";
import { DarkMode, QRCode } from "./components";
import "./styles.scss";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <main className={isDark ? "main main--dark" : "main "}>
      <DarkMode isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <QRCode isDark={isDark} />
    </main>
  );
}
