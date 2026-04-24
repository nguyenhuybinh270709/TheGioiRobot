import {
  Smile,
  MessageCircle,
  TrendingUp,
  Users,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";
import VicoLeftBg from "@/assets/VicoLeftSection.png";
import VicoRightBg from "@/assets/VicoRightSection.png";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featureList: Feature[] = [
  {
    icon: Smile,
    title: "Nhận diện cảm xúc",
    description: "Hiểu cảm xúc và phản hồi một cách tinh tế.",
  },
  {
    icon: TrendingUp,
    title: "Học hỏi mỗi ngày",
    description: "Càng tương tác, Vico càng hiểu bạn hơn.",
  },
  {
    icon: MessageCircle,
    title: "Giao tiếp tự nhiên",
    description: "Trò chuyện mượt mà như với một người bạn.",
  },
  {
    icon: Users,
    title: "Kết nối gia đình",
    description: "Giúp gắn kết và mang lại niềm vui mỗi ngày.",
  },
];

export function VicoSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full mx-auto bg-[#0B0F14] text-white rounded-3xl border border-white/10 overflow-hidden">
      {/* Left side */}
      <div
        className="relative w-full lg:w-[45%] py-10 flex items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${VicoLeftBg})` }}
      >
        <div className="w-full px-6 space-y-3">
          <h2 className="font-semibold tracking-widest text-sm">
            SẢN PHẨM ĐẦU TIÊN
          </h2>

          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            VICO
          </h1>

          <p className="text-md font-medium">
            Người bạn AI đầu tiên của mọi nhà.
          </p>

          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            Vico thông minh, đáng yêu và luôn sẵn sàng học hỏi để trở thành
            người bạn tuyệt vời nhất của bạn và gia đình.
          </p>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
            KHÁM PHÁ VICO <PlayCircle size={18} />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div
        className="flex-1 bg-cover bg-right bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${VicoRightBg})` }}
      >
        <div className="hidden lg:flex w-full h-full">
          <div className="grid grid-cols-2 gap-4 p-6 py-14 pr-[35%]">
            {featureList.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-3 bg-black/10 px-5 py-2 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
      <Icon className="text-blue-400 size-6 shrink-0" />

      <div>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
}
