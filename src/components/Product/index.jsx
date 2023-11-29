export default function Product() {
  return (
    <div className="product cursor-pointer rounded-[6px] justify-center items-center border-[1px] border-[#333232] p-[15px] w-full duration-[500ms]  hover:bg-[#333232]">
      <img
        className="mb-[12px] mx-auto"
        src="./img/Clothes/Hoodies/Hoodie-gray-front.webp"
        alt="xydi"
      />
      <div className="flex flex-col items-start">
        <p className="text-[12px]">DISPLASES Hoodie</p>
        <p className="text-[12px]">I DONT CARE in Gray</p>
        <div className="flex gap-2 justify-center">
          <p className="text-[12px]">12 300₽</p>
          <p className="line-through text-[12px] text-[#717171]">15 500₽</p>
        </div>
      </div>
    </div>
  );
}
