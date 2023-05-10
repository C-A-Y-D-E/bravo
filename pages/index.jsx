import Hero from "components/Hero";
import Tokenomics from "components/Tokenomics";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaTelegramPlane, FaTwitter } from "react-icons/fa";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>JOHNNY BRAVO</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className="container mx-auto px-6 py-6 max-w-[1280px]">
          <div className="flex  gap-6 justify-between flex-wrap lg:flex-nowrap">
            <div className="flex gap-4 items-center">
              <a
                href="https://t.me/JohnnyBravoPortal"
                target="_blank"
                className="p-3 bg-[#FFCC00] border border-black rounded-full shadw"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://twitter.com/JbravoCoin"
                target="_blank"
                className="p-3 bg-[#FFCC00] border border-black rounded-full shadw"
              >
                <FaTwitter />
              </a>
            </div>
            <CopyToClipboard value="coming soon">
              <div className="flex gap-2 items-center">
                <span>coming soon</span>
                <FaCopy />
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </header>
      <Hero />
      <Tokenomics />
    </div>
  );
}
