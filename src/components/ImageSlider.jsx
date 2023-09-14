export default function ImageSlider({ photo }) {
  return (
    <figure className="h-full">
      <img
        src={photo.src}
        className="w-96 h-full shadow rounded-xl scale-90 hover:scale-100 transition-transform"
      />
    </figure>
  );
}
