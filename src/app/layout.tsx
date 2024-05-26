import "~/styles/globals.css";
import { Header } from "./components/header/Header";
import { Bebas_Neue, Montserrat } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--title-font",
});
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Santa Cruz Contra Dance - A monthly social dance gathering.",
  description:
    "An inclusive social dance gathering that takes place every 4th Friday. Come kick your heels up with some amazing local talent and fun and friendly dancers!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} ${bebasNeue.variable}`}>
      <body className="bg-gradient-to-b from-[#f8f0e5] to-[#e2c7aa]  text-stone-950">
        <Header />
        {children}
      </body>
    </html>
  );
}
