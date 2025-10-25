import React from 'react';

const Card = ({ title, desc }) => (
  <div className="bg-slate-800/60 rounded-2xl p-4 w-64 h-36 hover:scale-[1.03] transition-transform duration-300 shadow-lg">
    <h3 className="text-[#CDAA7D] font-semibold">{title}</h3>
    <p className="text-sm opacity-80 mt-2">{desc}</p>
  </div>
)

const Vitrin = () => {
  const items = [
    { title: "Otel", desc: "Bölgende popüler fırsatlar" },
    { title: "Uçak Bileti", desc: "Anında fiyat karşılaştır" },
    { title: "Teknoloji", desc: "Kulaklık, saat, telefon" },
    { title: "Sigorta", desc: "Seyahat, araç, sağlık" },
  ];
  return (
    <section id="vitrin" className="w-full flex items-center justify-center gap-4 mt-8">
      {items.map((it, i) => <Card key={i} {...it} />)}
    </section>
  )
}

export default Vitrin;
