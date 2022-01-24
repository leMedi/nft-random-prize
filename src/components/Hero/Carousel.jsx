import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Special1 from './assets/14.png';
import Special2 from './assets/15.png';
import Special3 from './assets/16.png';
import Special4 from './assets/14.png';

const settings = {
  showThumbs: false,
  // infinite: false,
  // speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1
}

export const HeroCarousel = () => {
  return (
    <Carousel  {...settings}>
      <div><img src={Special1} alt="" /></div>
      <div><img src={Special2} alt="" /></div>
      <div><img src={Special3} alt="" /></div>
      <div><img src={Special4} alt="" /></div>
    </Carousel>
  );
};
