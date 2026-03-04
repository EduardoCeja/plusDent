import Image from "next/image";

export default function CaseCard({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  return (
    <figure className="card">
      <figcaption className="font-semibold text-base mb-4">{title}</figcaption>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Antes */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
            Antes
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-white">
            <Image
              src={before}
              alt={`Antes - ${title}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Después */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
            Después
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-white">
            <Image
              src={after}
              alt={`Después - ${title}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </figure>
  );
}