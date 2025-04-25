import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">What Says Our Foodies</Title>
      <Slider {...settings}>
        <CustomerItem
          imgSrc="/images/client1.jpeg"
          name="Anjali vora"
          location="TYCS"
          review="The food here is exceptional—each dish is bursting with fresh flavors, expertly balanced spices, and beautiful presentation. Every bite is a delight, making it an unforgettable dining experience."
        />
        <CustomerItem
          imgSrc="/images/client2.jpg"
          name="Rohit Sharma"
          location="FYBAF"
          review="Delicious food, cozy ambiance, and courteous staff. I especially loved the Paneer Tikka and the Mango Lassi—must try!"
        />
        <CustomerItem
          imgSrc="/images/client3.jpeg"
          name="Karan Patel"
          location="SYIT"
          review="Loved the experience! Everything was clean and hygienic, and the biryani was the best I've ever had!"
        />
        <CustomerItem
          imgSrc="/images/client4.jpg"
          name="Sneha Roy"
          location="FYBMS"
          review="Great place for quick bites during college breaks. The staff is friendly and the food always tastes fresh."
        />
      </Slider>
    </div>
  );
};

export default Customers;
