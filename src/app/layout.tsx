"use client";

import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";
import { Roboto_Flex, Space_Grotesk } from "next/font/google";
import { PropsWithChildren, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/index.scss";
import { ConfigCatProvider } from "configcat-react";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const sessionReplayTracking = sessionReplayPlugin();
if (
  typeof window !== "undefined" &&
  !document.cookie.includes("jomateix=") &&
  document.location.hostname !== "localhost"
) {
  amplitude.add(sessionReplayTracking);
  amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, {
    autocapture: {
      attribution: true,
      elementInteractions: true,
    },
  });
}

export default function RootLayout({ children }: PropsWithChildren) {
  const [isTopBarOpen, setIsTopBarOpen] = useState(true);

  return (
    <html lang="es" className={`${roboto.variable} ${spaceGrotesk.variable}`}>
      <body className={isTopBarOpen ? "top-bar-open" : ""}>
        <ConfigCatProvider sdkKey={process.env.NEXT_PUBLIC_CONFIGCAT_KEY!}>
          <Header />
          {children}
          <Footer />
        </ConfigCatProvider>
        <a
          className="whatsapp"
          href="https://api.whatsapp.com/send?phone=34630262833"
          aria-label="Escríbenos por whatsapp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
            <defs>
              <linearGradient
                id="b"
                x1="85.915"
                x2="86.535"
                y1="32.567"
                y2="137.092"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#57d163"></stop>
                <stop offset="1" stopColor="#23b33a"></stop>
              </linearGradient>
              <filter
                id="a"
                width="1.115"
                height="1.114"
                x="-.057"
                y="-.057"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="3.531"></feGaussianBlur>
              </filter>
            </defs>
            <path
              fill="#b3b3b3"
              d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
              filter="url(#a)"
            ></path>
            <path
              fill="#fff"
              d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
            ></path>
            <path
              fill="url(#linearGradient1780)"
              d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
            ></path>
            <path
              fill="url(#b)"
              d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
            ></path>
          </svg>
        </a>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src="https://tracker.metricool.com/c3po.jpg?hash=d25fed14ebd91b29c9f60f355be7b00"
          style={{ position: "fixed" }}
        />
      </body>
    </html>
  );
}
