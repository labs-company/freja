export default function ImageCarrusel({ image }) {
  return (
    <figure className="flex justify-center items-start h-full">
      <img
        src={image}
        alt="Pulser buy"
        className="object-cover w-full h-full"
      />
    </figure>
  );
}
