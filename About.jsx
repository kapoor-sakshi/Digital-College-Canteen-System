import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.jpg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are CampusDine</Title>
          <p className="my-5 flex flex-col items-center">
          At Campus Dine, we strive to provide students and staff with a convenient and enjoyable dining experience. Our goal is to offer a variety of delicious, healthy, and affordable meals that cater to every taste. We are committed to quality, freshness, and fast service, ensuring that every meal is a satisfying experience. Whether you're grabbing a quick snack between classes or enjoying a relaxing lunch with friends, Campus Dine is your go-to spot for great food on campus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
