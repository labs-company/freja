import pulserRed from "@/public/pulser-red.jpg";
import ImageUltimate from "@/components/ultimate-image";

export default function ToGiveAwayPage() {
  return (
    <article>
      <div className="bg-white">
        <div className="py-6">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <ImageUltimate photo={pulserRed.src} />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <ImageUltimate photo={pulserRed.src} />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <ImageUltimate photo={pulserRed.src} />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <ImageUltimate photo={pulserRed.src} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
