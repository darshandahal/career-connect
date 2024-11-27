import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Career Connect",
  description: "Bridging the gap between opportunities and talent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
