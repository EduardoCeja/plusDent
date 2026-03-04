import { ReactNode } from "react";

export default function ServiceCard({ title, desc, icon }: { title:string; desc:string; icon:ReactNode }){
    return (
        <div className="card h-full">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-neutral-600 mt-2">{desc}</p>
        </div>
    );
}