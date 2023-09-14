export default function ImageSlider({ photo }) {
  return (
    <figure className="h-full">
      <img src={photo.src} className="w-96 h-full shadow rounded-xl" />
    </figure>
  );
}
