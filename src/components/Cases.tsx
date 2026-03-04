import CaseCard from "@/components/CaseCard";

export default function Cases() {
  const items = [
    {
      title: "Carillas superiores",
      before: "/images/case-1-before.jpg",
      after: "/images/case-1-after.jpg",
    },
    {
      title: "Blanqueamiento",
      before: "/images/case-2-before.jpg",
      after: "/images/case-2-after.jpg",
    },
  ];

  return (
    <div className="-mx-4 sm:mx-0">
      {/* ✅ padding consistente con Section (móvil) */}
      <div className="overflow-x-auto pb-3 px-4 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-flow-col auto-cols-[minmax(260px,78vw)] sm:auto-cols-[minmax(320px,420px)] gap-4 snap-x snap-mandatory">
          {items.map((c) => (
            <div key={c.title} className="snap-start">
              <CaseCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}