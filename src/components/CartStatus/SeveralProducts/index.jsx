import BackBtn from '../../Buttons/BackBtn';
import CartItem from './CartItem';

export default function SeveralProducts() {
  return (
    <div className="bg-gray-main rounded-[6px] p-[20px]">
      <div className="flex flex-wrap justify-between gap-[10px]">
        <div>
          <BackBtn />
        </div>
        <div>
          <p className="uppercase  m-auto text-[22px] font-Floripa">Корзина</p>
        </div>
        <div className='w-[103px] h-auto'></div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[15px]">
        <CartItem />
      </div>
    </div>
  );
}
