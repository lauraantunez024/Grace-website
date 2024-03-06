import "tailwindcss/tailwind.css";
import NameHolder from "./components/NameHolder";
import Link from "next/link";
import "./styles.css";

export const metadata = {
  title: "Mothman",
  description: "Copyright Grace Rolfe",
  visualViewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a className="logo" href="/">
            <NameHolder />
          </a>

          <div className="links">
            <p>
              <a target="_blank" href="/grace-resume.pdf">
                Resume
              </a>
            </p>
            <p>
              <a href="/portfolio">Portfolio</a>
            </p>
            <p>
              <a href="/contact">Contact</a>
            </p>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
