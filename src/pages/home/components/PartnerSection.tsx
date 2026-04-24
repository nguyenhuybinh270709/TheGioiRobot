import Logo from "@/assets/Logo.png";

const PartnerLogos = [
  { logo: Logo, alt: "VinUniversity" },
  { logo: Logo, alt: "NIC" },
  { logo: Logo, alt: "FPT" },
  { logo: Logo, alt: "Viettel" },
  { logo: Logo, alt: "Qualcomm" },
  { logo: Logo, alt: "NVIDIA" },
  { logo: Logo, alt: "AWS" },
  { logo: Logo, alt: "Google Cloud" },
  { logo: Logo, alt: "Microsoft" },
];

export function PartnerSection() {
  return (
    <section className="w-full">
      <div className="bg-[#0B0F14]/60 p-8 rounded-3xl border border-white/10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <p className="text-sm font-semibold tracking-widest text-white whitespace-nowrap uppercase">
            ĐỐI TÁC & NHÀ ĐẦU TƯ
          </p>

          <div className="flex-1 w-full grid grid-cols-3 lg:grid-cols-9 gap-4 items-center justify-items-center">
            {PartnerLogos.map((item, index) => (
              <div
                key={index}
                className="w-full h-12 flex items-center justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
