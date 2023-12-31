import pulserRed from "@/public/pulser-red.jpg";
import Image from "next/image";

type TypeCard = { title: string };
export default function Card({ title }: TypeCard) {
  return (
    <a href="#" className="group">
      <figure className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={pulserRed}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </figure>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">9.9$</p>
    </a>
  );
}
