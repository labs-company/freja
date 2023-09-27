import Card from "@/components/card";

export default function ToGiveAwayPage() {
  return (
    <article>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-16">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Card title="Pulsera" />
            <Card title="Pulsera" />
            <Card title="Pulsera" />
            <Card title="Pulsera" />
            <Card title="Pulsera" />
            <Card title="Pulsera" />
            <Card title="Pulsera" />
            <Card title="Pulsera" />
          </div>
        </div>
      </div>
    </article>
  );
}
