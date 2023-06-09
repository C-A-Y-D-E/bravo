import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-24 max-w-[1280px]">
        <div className="flex  gap-16 justify-between flex-wrap lg:flex-nowrap">
          <div>
            <img src="/text.png" className="max-w-[500px] w-full" />
            <div className="flex gap-4 items-center mt-6">
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0x5e86075111f1d3a11270c376e89934e3f43e873a"
                target="_blank"
                className="py-2 shadw border border-black m px-8 bg-[linear-gradient(180deg,#02F0F7_0%,#5BD4BD_100%)]"
              >
                Buy Now
              </a>
              <a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x1e73e8eb158af73a9f2871cce84e3cc748c71fa1"
                target="_blank"
                rel="noreferrer"
                className="py-2 shadw border border-black m px-8 bg-[linear-gradient(180deg,#02F0F7_0%,#5BD4BD_100%)]"
              >
                Chart
              </a>
            </div>
          </div>
          <div>
            <img src="/hero.png" className="max-w-[500px] w-full" />
          </div>
        </div>

        <div className="py-6 px-8 bg-[#FEC226] border border-black mt-16 text-center max-w-[900px] rounded-3xl shadw w-full text-2xl sm:text-3xl lg:text-5xl mx-auto">
          EPIC MARKETING INCOMING
        </div>
      </div>
    </div>
  );
};

export default Hero;
