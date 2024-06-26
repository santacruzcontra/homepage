import { Montserrat, Open_Sans } from "next/font/google";
import "~/styles/globals.css";
import { Header } from "./components/header/Header";

const bebasNeue = Open_Sans({
  subsets: ["latin"],
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-dvh bg-gradient-to-b from-[#E5D4C3]  to-[#9B744A] pb-8 text-stone-950">
        <Header />
        <main className="flex flex-col items-stretch justify-start">
          <div className="container flex flex-col items-start justify-start">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
