import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Abdulazeez Sodiq",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>

            <body className={`flex justify-center m-0 background ${inter.className}`}>

                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    <div className=" w-[100%] mx-auto py-4 px-2  md:w-[90%] lg:w-[90%]  ">
                        {children}
                    </div>

                </ThemeProvider>
            </body>
        </html>
    );
}
// bg - [#0f172a]
