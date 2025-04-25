import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";
import Link from "next/link"; // Import Link

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">College Canteen</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Craving something delicious? Ordering your favorite meal has never been easier. Simply click 'Order Now,' choose from our wide range of mouthwatering options, and enjoy fast, hassle-free delivery straight to your door. It's quick, simple, and the perfect solution for busy students and staff on the go!
            </p>
            <Link href="/menu">
              <button className="btn-primary">Order Now</button>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">College Canteen</Title>
            <p className="text-sm sm:w-2/5 w-full">
              At Campus Dine, we prioritize great service, hygiene, and taste. Our team ensures a smooth dining experience, with fast delivery and the highest cleanliness standards. We use fresh ingredients to create flavorful meals that will keep you coming back for more.
            </p>
            <Link href="/menu">
              <button className="btn-primary">Order Now</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
