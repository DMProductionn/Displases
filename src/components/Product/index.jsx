export default function Product({ img, title, price, discount}) {
  return (
    <div className="cursor-pointer rounded-[6px] justify-center items-center border-[1px] border-[#333232] p-[15px] w-full max-w-[350px] duration-[500ms]  hover:bg-[#333232]">
      <img
        className="mb-[12px] mx-auto h-[170px]"
        src={img}
        alt="xydi"
      />
      <div className="flex flex-col items-start">
        <div className="mb-[8px]">
          <p className="text-[12px] text-[#fff]">{title}</p>
          <p className="text-[12px] text-[#fff]">I DONT CARE in Gray</p>
        </div>
        <div className="flex gap-2 justify-center">
          <p className="text-[12px] text-[#fff]">{price + '₽'}</p>
          <p className="line-through text-[12px] text-[#717171]">{discount + '₽'}</p>
        </div>
      </div>
    </div>
  );
}
