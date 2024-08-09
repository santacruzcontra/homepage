import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "~/styles/globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "~/app/components/footer/Footer";

const dmSerifDisplay = DM_Serif_Display({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--title-font",
});

const dmSans = DM_Sans({ subsets: ["latin"] });

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
        <html
            lang="en"
            className={`${dmSans.className} ${dmSerifDisplay.variable}`}
        >
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
            <body className="flex min-h-dvh flex-col bg-[#ECF6F9] text-black">
                <main className="flex flex-grow flex-col items-stretch justify-start p-0 min-[650px]:p-4">
                    <div className="container flex max-w-[800px] flex-grow flex-col items-start justify-start min-[650px]:gap-4">
                        <Header />
                        <div className="flex w-full flex-grow flex-col items-stretch gap-4 max-[649px]:[&>:not(.no-padding)]:px-4">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </main>
            </body>
        </html>
    );
}
