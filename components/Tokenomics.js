import React from "react";

const Tokenomics = () => {
  return (
    <div>
      <div className="container mx-auto px-6 pb-24 max-w-[1280px]">
        <img src="/t.png" className="mx-auto mb-16" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="py-6 text-center rounded-2xl px-8 bg-[#FEC226] border border-black shadw">
            <div className="text-9xl">0%</div> <br />
            <div className="text-4xl mt-2">TAX</div>
          </div>
          <div className="py-6 text-center rounded-2xl px-8 bg-[#FEC226] border border-black shadw">
            <div className="text-9xl">1B</div> <br />
            <div className="text-4xl mt-2">SUPPLY</div>
          </div>
          <div className="py-6 text-center rounded-2xl px-8 bg-[#FEC226] border border-black shadw">
            <div className="text-9xl">🔥</div> <br />
            <div className="text-4xl mt-2">Liquidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
