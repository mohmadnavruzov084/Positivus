import Amazon from "../assets/amazon-main.svg?react";
import Hero from "../assets/hero-main.svg?react";
import Compani_2 from "../assets/2-companni-main.svg?react";
import HubSpot from "../assets/hubspot-main.svg?react";
import Notion from "../assets/notion-main.svg?react";
import Netflix from "../assets/netflix-main.svg?react";
import Zoom from "../assets/zoom-main.svg?react";
export const Main = () => {
  return (
    <>
      <main className="container  pt-16">
        <div className="flex justify-between">
          <div className="flex flex-col w-lg">
            <h1 className="font-medium text-6xl text-black leading-[120%]">
              Navigating the digital landscape <br />
              for success
            </h1>
            <div className="font-normal text-xl leading-[140%] pt-9">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </div>
            <button className="bg-black text-white border rounded-[14px] p-4  w-56 h-16 mt-9">
              Book a consultation
            </button>
          </div>
          <div>
            <Hero />
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <Amazon />
          <Compani_2 />
          <HubSpot />
          <Notion />
          <Netflix />
          <Zoom />
        </div>
      </main>
    </>
  );
};
