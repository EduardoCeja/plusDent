import { ReactNode } from "react";

export default function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={[
        "section",
        // ✅ evita que el header fijo tape la sección al navegar por anclas
        "scroll-mt-28 sm:scroll-mt-32",
        className,
      ].join(" ")}
    >
      <div className="container">{children}</div>
    </section>
  );
}