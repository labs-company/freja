import { useState, useEffect } from "preact/hooks";
import pulser from "../../assets/font-principle-pulser.jpg";
import handlPulser from "../../assets/nasim-keshmiri-CQ3xrqbV58s-unsplash.jpg";
import handlePulserWoman from "../../assets/nasim-keshmiri-jlgrGDDmNlI-unsplash.jpg";

export default function Carrusel() {
  const [indexImage, setIndexImage] = useState(0);
  const imagesSlides = [pulser.src, handlPulser.src, handlePulserWoman.src];

  const [isInitialZoom, setIsInitialZoom] = useState(true);

  useEffect(() => {
    const intervalOfTime = setInterval(() => {
      setIsInitialZoom(false);
      setTimeout(() => {
        setIsInitialZoom(true);
      }, 2500);
      setTimeout(() => {
        setIndexImage(
          (prevIndexImage) => (prevIndexImage + 1) % imagesSlides.length
        );
      }, 3000);
    }, 4000);

    return () => clearInterval(intervalOfTime);
  }, [imagesSlides.length, indexImage]);
  const CLASS_CARRUSEL_STYLES = {
    stylesArticle: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
    },
    stylesBtnCarrusel: {
      backgroundColor: "var(--freja-c-black)",
    },
    stylesImageCarrusel: {
      width: "100%",
      height: "85.3vh",
      objectFit: "cover",
      transform: isInitialZoom ? "scale(2)" : "scale(1)",
      transition: "transform 1.5s ease-in-out",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "99.8%",
      backgroundColor: "rgba(128, 128, 128, 0.5)", // Color gris con opacidad
    },
  };

  return (
    <article style={CLASS_CARRUSEL_STYLES.stylesArticle}>
      <figure>
        <img
          src={imagesSlides[indexImage]}
          alt=""
          style={CLASS_CARRUSEL_STYLES.stylesImageCarrusel}
          id="image"
        />
      </figure>
      <div style={CLASS_CARRUSEL_STYLES.overlay}></div>
    </article>
  );
}
