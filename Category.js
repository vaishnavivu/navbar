import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const Category = () => {
  const [slide, setSlide] = useState(2);

  const nextSlide=()=>{
    if (data.length - 8 == slide) return false;
    setSlide(slide + 3);
  }
  const prevSlide=()=>{
    if (slide == 0) return false;
    setSlide(slide - 3);
  }

  const data = [
    {
      image: "North_Indian_4.jpeg",
      path: "north-indian",
    },
    {
      image: "Pizza.jpeg",
      path: "pizza",
    },
    {
      image: "Noodles.jpeg",
      path: "noodles",
    },
    {
      image: "Pasta.jpeg",
      path: "pasta",
    },
    {
      image: "Paratha.jpeg",
      path: "paratha",
    },
    {
      image: "Biryani_2.jpeg",
      path: "biryani",
    },
    {
      image: "Burger.jpeg",
      path: "burger",
    },
    {
      image: "Cakes.jpeg",
      path: "cakes",
    },
    {
      image: "Chinese.jpeg",
      path: "chinese",
    },
    {
      image: "Chole_Bature.jpeg",
      path: "chole-bature",
    },
    {
      image: "Dosa.jpeg",
      path: "dost",
    },
    {
      image: "Gulab_Jamun.jpeg",
      path: "gulab-jamun",
    },
    {
      image: "Ice_Creams.jpeg",
      path: "ice-creams",
    },
    {
      image: "Idli.jpeg",
      path: "idli",
    },
    {
      image: "Khichdi.jpeg",
      path: "khichdi",
    },
    {
      image: "Poori.jpeg",
      path: "poori",
    },
    {
      image: "Pure_Veg.jpeg",
      path: "pure-veg",
    },
    {
      image: "Rolls.jpeg",
      path: "rolls",
    },
    {
      image: "Salad.jpeg",
      path: "salad",
    },
    {
      image: "South_Indian_4.jpeg",
      path: "south-indian",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className=" text-[25px] font-bold ">What's on your mind?</div>

        <div className="flex">
          <div className="cursor-pointer flex w-[30px] justify-center items-center h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <IoMdArrowRoundBack onClick={prevSlide}/>
          </div>
          <div className="cursor-pointer flex w-[30px] justify-center items-center h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <IoMdArrowRoundForward onClick={nextSlide}/>
          </div>
          
        </div>
      </div>

      <div>
        <div className="flex overflow-hidden gap-7 border-[red 2px solid] ">
          {
            data.map((data,index)=>{
  
              return <div style={{
                transform:`translateX(-${slide * 100}%)`
               }} key={index} className="w-[150px] shrink-0 duration-500"> 
               {data.image}
               </div>
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Category;
