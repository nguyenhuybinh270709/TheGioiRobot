import BgImg from "@/assets/VicoLeftSection.png";
import { CircleArrowRight, CircleDot } from "lucide-react";

const Services = [
  "Lễ tân & Chăm sóc khách hàng",
  "Hỗ trợ giáo dục & đào tạo",
  "Tự động hóa nhà máy & kho vận",
  "Y tế & Chăm sóc sức khỏe",
];

const Tech = [
  "Xử lý ngôn ngữ tự nhiên (NLP)",
  "Thị giác máy tính (Computer Vision)",
  "Học máy & Học tăng cường (ML & RL)",
  "Robot tự hành & Điều hướng thông minh",
];

export function FeaturesSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto text-white">
      {/* Giải pháp doanh nghiệp */}
      <div className="bg-[#0B0F14] p-8 rounded-3xl border border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${BgImg})` }}
        />
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <h2 className="text-md text-blue-300 font-bold mb-2">
              GIẢI PHÁP CHO DOANH NGHIỆP
            </h2>
            <p className="text-blue-400 text-sm mb-3 font-medium">
              Tối ưu vận hành, nâng tầm trải nghiệm
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Robot AI của chúng tôi được ứng dụng trong nhiều lĩnh vực giúp
              doanh nghiệp tự động hóa, tiết kiệm chi phí và nâng cao chất lượng
              dịch vụ.
            </p>
          </div>
          <ul className="space-y-4 mb-6">
            {Services.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-gray-300"
              >
                <span className="text-blue-400">
                  <CircleDot className="size-4" />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
          <button className="w-fit mt-auto bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-4">
              XEM GIẢI PHÁP <CircleArrowRight className="size-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Công nghệ cốt lõi */}
      <div className="bg-[#0B0F14] p-8 rounded-3xl border border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${BgImg})` }}
        />
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <h2 className="text-md text-blue-300 font-bold mb-2">
              CÔNG NGHỆ CỐT LÕI
            </h2>
            <p className="text-blue-400 text-sm mb-3 font-medium">
              Sức mạnh từ đổi mới
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Robot AI làm chủ các công nghệ AI tiên tiến nhất để tạo ra những
              robot thực sự thông minh và hữu ích.
            </p>
          </div>
          <div className="space-y-3 mb-8">
            {Tech.map((item) => (
              <div
                key={item}
                className="w-fit border border-white/15 px-4 py-2 rounded-full text-xs bg-white/5"
              >
                {item}
              </div>
            ))}
          </div>
          <button className="w-fit mt-auto bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-4">
              TÌM HIỂU THÊM <CircleArrowRight className="size-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Về chúng tôi */}
      <div className="bg-[#0B0F14] p-8 rounded-3xl border border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${BgImg})` }}
        />
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <h2 className="text-md text-blue-300 font-bold mb-2">
              VỀ CHÚNG TÔI
            </h2>
            <p className="text-blue-400 text-sm mb-3 font-medium">
              Sứ mệnh của chúng tôi
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Thegioirobot được thành lập với sứ mệnh mang trí tuệ nhân tạo vào
              cuộc sống, tạo ra những người bạn đồng hành robot thông minh, thân
              thiện và đáng tin cậy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8 text-blue-300">
            <div>
              <p className="text-2xl font-bold mb-1">2018</p>
              <p className="text-sm text-gray-400">Năm thành lập</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">100+</p>
              <p className="text-sm text-gray-400">Kỹ sư & chuyên gia</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">10+</p>
              <p className="text-sm text-gray-400">Quốc gia có mặt</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">1M+</p>
              <p className="text-sm text-gray-400">Người dùng tin tưởng</p>
            </div>
          </div>
          <button className="w-fit mt-auto bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-4">
              TÌM HIỂU THÊM <CircleArrowRight className="size-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
