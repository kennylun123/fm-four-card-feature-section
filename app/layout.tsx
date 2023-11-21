import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor - Four card feature section",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-300">
        {children}
        <footer>
          <div className="flex justify-center text-neutral-400 text-center">
            <p>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className="text-neutral-800 hover:text-black underline"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a
                href="https://github.com/kennylun123"
                className="text-neutral-800 hover:text-black underline"
              >
                Kenny Ng
              </a>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
