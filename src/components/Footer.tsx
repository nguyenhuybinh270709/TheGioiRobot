import { Video, Send } from "lucide-react";
import Logo from "@/assets/Logo.png";

const FOOTER_SECTIONS = [
  {
    title: "SẢN PHẨM",
    links: [
      "Vico",
      "Robot đồng hành",
      "Robot dịch vụ",
      "Robot giáo dục",
      "Phụ kiện",
    ],
  },
  {
    title: "GIẢI PHÁP",
    links: ["Doanh nghiệp", "Giáo dục", "Y tế", "Sản xuất & Kho vận"],
  },
  {
    title: "CÔNG NGHỆ",
    links: [
      "AI & Machine Learning",
      "Thị giác máy tính",
      "Robot tự hành",
      "Nền tảng phần mềm",
    ],
  },
  {
    title: "CÔNG TY",
    links: ["Về chúng tôi", "Sứ mệnh & Tầm nhìn", "Sự nghiệp", "Tin tức"],
  },
  {
    title: "HỖ TRỢ",
    links: [
      "Trung tâm trợ giúp",
      "Hướng dẫn sử dụng",
      "Bảo hành",
      "Liên hệ hỗ trợ",
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#05070a] border-t border-white text-white pt-16 pb-8 px-6 mt-8 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-10 mb-16">
        {/* Logo & Info */}
        <div className="col-span-2 space-y-3">
          <img src={Logo} alt="Logo" className="w-full" />
          <p className="text-xs text-gray-400 leading-relaxed">
            Thegioirobot phát triển các robot AI thông minh, thân thiện và dễ
            tiếp cận, mang công nghệ vào cuộc sống theo cách tự nhiên nhất.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Video size={18} className="hover:text-blue-500 cursor-pointer" />
            <Video size={18} className="hover:text-blue-500 cursor-pointer" />
            <Video size={18} className="hover:text-blue-500 cursor-pointer" />
            <Video size={18} className="hover:text-blue-500 cursor-pointer" />
            <Video size={18} className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold text-sm mb-4 tracking-wider">
              {section.title}
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {section.links.map((link) => (
                <li
                  key={link}
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="col-span-2">
          <h4 className="text-center lg:text-left font-bold text-md lg:text-sm mb-4">
            ĐĂNG KÝ NHẬN TIN
          </h4>
          <p className="text-xs text-gray-400 mb-4">
            Nhận những cập nhật mới nhất từ Thegioirobot
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs outline-none"
            />
            <button className="absolute right-1 top-1 bg-blue-600 p-1.5 rounded-full">
              <Send size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between gap-6 text-[11px] text-gray-500">
        <p>© 2024 Thegioirobot AI Company. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Chính sách bảo mật</span>
          <span>Điều khoản sử dụng</span>
          <span>Chính sách cookie</span>
        </div>
        <div className="flex gap-6">
          <span>Hotline: 1900 1234</span>
          <span>Email: hello@thegioirobot.ai.vn</span>
        </div>
      </div>
    </footer>
  );
}
