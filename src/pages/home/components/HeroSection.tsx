import { CircleArrowRight, CirclePlay, Heart } from "lucide-react";
import HeroMobile from "@/assets/HeroMobile.png";

export function HeroSection() {
  return (
    <section className="relative w-full h-full bg-[#0a0c10] bg-cover bg-center bg-no-repeat bg-none lg:bg-[url('/src/assets/HeroDesktop.png')]">
      {/* Mobile layout */}
      <div className="flex flex-col items-center justify-center lg:hidden w-full lg:px-6 py-10 text-white space-y-6">
        <h2 className="px-4 py-2 border border-cyan-950/50 rounded-full bg-[#0e1c36] text-sm text-blue-400 tracking-wider text-center">
          EMPOWERING COMPANIONS. ENRICHING LIVES.
        </h2>

        <div className="text-center space-y-3">
          <h1 className="font-semibold leading-tight">
            <p className="text-4xl">CHÚNG TÔI TẠO RA</p>
            <p className="text-5xl text-blue-400 font-bold">
              TRÍ TUỆ ĐỒNG HÀNH
            </p>
            <p className="text-4xl">CHO CUỘC SỐNG TỐT ĐẸP HƠN</p>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-sm mx-auto">
            Thegioirobot phát triển các robot AI thông minh, thân thiện và dễ
            tiếp cận, mang công nghệ vào cuộc sống theo cách tự nhiên nhất.
          </p>
        </div>

        <div className="w-full flex justify-center py-4">
          <img
            src={HeroMobile}
            alt="Robot Companion"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full flex flex-col items-center gap-4 text-sm font-semibold">
          <button className="w-[80%] bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between">
              <span>KHÁM PHÁ SẢN PHẨM</span>
              <CircleArrowRight className="w-5 h-5" />
            </div>
          </button>

          <button className="w-[80%] hover:bg-white/10 border border-white/20 px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between">
              <span>TÌM HIỂU CÔNG NGHỆ</span>
              <CirclePlay className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop layout*/}
      <div className="hidden lg:grid grid-cols-2 gap-10 items-center w-full px-8 py-8 text-white">
        <div>
          <h2 className="text-md text-left text-gray-400 tracking-wider p-0 rounded-none border-none">
            EMPOWERING COMPANIONS. ENRICHING LIVES.
          </h2>

          <h1 className="text-left font-semibold space-y-2 mt-4">
            <p className="text-4xl">CHÚNG TÔI TẠO RA</p>
            <p className="text-5xl text-blue-400 font-bold">
              TRÍ TUỆ ĐỒNG HÀNH
            </p>
            <p className="text-4xl">CHO CUỘC SỐNG TỐT ĐẸP HƠN</p>
          </h1>

          <p className="text-left text-white/70 mt-4 max-w-xl">
            Thegioirobot phát triển các robot AI thông minh, thân thiện và dễ
            tiếp cận, mang công nghệ vào cuộc sống theo cách tự nhiên nhất.
          </p>

          <div className="flex items-center gap-4 mt-6 text-sm">
            <button className="bg-blue-500 hover:bg-blue-600 font-semibold px-6 py-2 rounded-full transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-2">
                KHÁM PHÁ SẢN PHẨM
                <CircleArrowRight className="w-4 h-4" />
              </div>
            </button>
            <button className="hover:bg-white/10 border border-white/20 font-semibold px-6 py-2 rounded-full transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-2">
                TÌM HIỂU CÔNG NGHỆ
                <CirclePlay className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-42 items-start bg-black/30 backdrop-blur-xs text-white border border-white/20 px-5 py-4 ml-auto rounded-2xl">
          <p className="text-sm font-semibold text-gray-200 tracking-wider">
            AI COMPANION
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Robot đồng hành thông minh với cảm xúc và trí tuệ.
          </p>
          <div className="mt-3">
            <div className="relative p-2.5 rounded-full bg-blue-400/80 border border-blue-400">
              <Heart className="w-5 h-5 text-white stroke-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
