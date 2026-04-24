const Stats = [
  { credential: "10+", description: "NĂM NGHIÊN CỨU VÀ PHÁT TRIỂN" },
  { credential: "50+", description: "KỸ SƯ & NHÀ KHOA HỌC HÀNG ĐẦU" },
  { credential: "100K+", description: "GIỜ HUẤN LUYỆN AI MỖI NGÀY" },
  { credential: "∞", description: "KHẢ NĂNG TIẾN HÓA" },
  { credential: "1M+", description: "NGƯỜI DÙNG TRÊN TOÀN CẦU" },
];

export function StatSection() {
  return (
    <section className="w-full bg-[#0B0F14]/60 py-6 rounded-3xl border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {Stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border-r border-white/20 py-4"
          >
            <p className="text-3xl font-bold text-blue-500 mb-3 tracking-tight">
              {item.credential}
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed px-2">
              {item.description}
            </p>
          </div>
        ))}

        <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-center p-3 pl-6 border-l border-white/20">
          <p className="text-xs text-gray-400 mb-2 leading-relaxed">
            Chúng tôi tin rằng công nghệ tốt nhất là công nghệ phục vụ con
            người.
          </p>
          <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">
            THEGIOIROBOT - EMPOWERING COMPANIONS, ENRICHING LIVES.
          </p>
        </div>
      </div>
    </section>
  );
}
