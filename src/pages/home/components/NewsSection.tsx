import { ArrowRight } from "lucide-react";
import NewsDataImg from "@/assets/HeroMobile.png";

const NEWS_DATA = [
  {
    date: "15.05.2024",
    title: "Vico chính thức ra mắt – Người bạn AI đầu tiên của mọi nhà",
    image: NewsDataImg,
  },
  {
    date: "02.05.2024",
    title: "Thegioirobot gọi vốn thành công vòng Series A từ quỹ VinVentures",
    image: NewsDataImg,
  },
  {
    date: "20.04.2024",
    title: "Robot AI trong giáo dục: Tương lai của việc học cá nhân hóa",
    image: NewsDataImg,
  },
  {
    date: "10.04.2024",
    title: "Ứng dụng robot tự hành trong kho vận: Hiệu quả vượt trội",
    image: NewsDataImg,
  },
];

export function NewsSection() {
  return (
    <section className="w-full bg-[#0B0F14] p-8 rounded-3xl border border-white/10 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold tracking-wider">TIN TỨC & CẬP NHẬT</h2>
        <button className="text-sm text-blue-300 hover:text-blue-500 transition-colors flex items-center gap-1 cursor-pointer">
          XEM TẤT CẢ <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {NEWS_DATA.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-700/15 border border-white/20 rounded-2xl group transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-400 mb-2">{item.date}</p>
              <h3 className="text-sm font-semibold leading-relaxed mb-4 grow">
                {item.title}
              </h3>

              <div className="text-blue-400 hover:text-blue-500 text-xs font-bold flex items-center gap-2">
                TÌM HIỂU THÊM <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
