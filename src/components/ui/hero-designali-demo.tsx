"use client";

import { useEffect } from "react";
import {
  renderCanvas,
  ShineBorder,
  TypeWriter,
} from "@/components/ui/hero-designali";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroDesignaliDemo() {
  const talkAbout = [
    "3D Web Design",
    "Digital Growth",
    "AI Marketing",
    "Performance SEO",
    "Brand Scaling",
    "Full-Stack Dev",
  ];

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <main className="overflow-hidden relative w-full min-h-screen">
      <section id="home" className="relative">
        <div className="absolute inset-0 max-md:hidden top-[400px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-32">
            <div className="relative flex items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 text-xs text-white/80">
              Introducing 3D Growth Engine.
              <a
                href="#services"
                className="ml-1.5 flex items-center font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Explore &rarr;
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-5xl relative z-10">
            <div className="border-text-red-500 relative mx-auto h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl py-12 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">
              <h1 className="flex flex-col text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-7xl lg:flex-row lg:text-7xl">
                <Plus
                  strokeWidth={3}
                  className="text-cyan-400 absolute -left-4 -top-4 h-8 w-8"
                />
                <Plus
                  strokeWidth={3}
                  className="text-cyan-400 absolute -bottom-4 -left-4 h-8 w-8"
                />
                <Plus
                  strokeWidth={3}
                  className="text-purple-400 absolute -right-4 -top-4 h-8 w-8"
                />
                <Plus
                  strokeWidth={3}
                  className="text-purple-400 absolute -bottom-4 -right-4 h-8 w-8"
                />
                <span>
                  Your complete platform for the{" "}
                  <span className="text-gradient">3D Growth.</span>
                </span>
              </h1>
              <div className="flex items-center mt-6 justify-center gap-2">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs font-semibold text-green-400">Accepting New Clients</p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl md:text-3xl font-medium text-white">
              Welcome to Next-Gen Digital Marketing &amp;{" "}
              <span className="text-cyan-400 font-bold">Innovation </span>
            </h2>

            <p className="text-gray-400 py-4 max-w-2xl mx-auto text-base">
              We craft enchanting 3D visuals for brands and scale revenue through performance marketing in{" "}
              <span className="text-cyan-400 font-semibold inline-block min-w-[160px] text-left">
                <TypeWriter strings={talkAbout} />
              </span>
              .
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <a href="#contact">
                <ShineBorder
                  borderWidth={2}
                  className="border cursor-pointer h-auto w-auto p-1.5 bg-white/5 backdrop-blur-md"
                  color={["#FF007F", "#39FF14", "#00FFFF"]}
                >
                  <Button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-6 py-2.5">
                    Start Scaling
                  </Button>
                </ShineBorder>
              </a>
              <a href="#services">
                <Button className="rounded-xl px-6 py-2.5" variant="outline">
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
        </div>
        <canvas
          className="pointer-events-none absolute inset-0 mx-auto z-0"
          id="canvas"
        ></canvas>
      </section>
      <img
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-30 pointer-events-none"
        src="https://cdn.21st.dev/assets/localized/5983532059e62f4d5245235ad99e8162361bceb41cb2d6e19289b22efbb91f71.png"
        alt=""
        role="presentation"
      />
    </main>
  );
}

export default HeroDesignaliDemo;
