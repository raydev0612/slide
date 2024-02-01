import "./App.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { EffectFlip } from "swiper/modules";

function App() {
  const [slidePerView, setSlidePerView] = useState(2);
  const data = [
    { id: 1, image: "../src/assets/imagen1.jpg" },
    { id: 2, image: "../src/assets/imagen2.jpg" },
    { id: 3, image: "../src/assets/imagen3.jpg" },
    { id: 4, image: "../src/assets/imagen4.jpg" },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="title">Slider con React JS y Swiper</h1>

      <Swiper
        // modules={[EffectFlip]}
        // effect="flip"
        // slidesPerView={slidePerView}
        slidesPerView={1}
        loop="true"
        // pagination={{ clickable: true }}
        pagination={{ type: "progressbar" }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="ImagenSlider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
