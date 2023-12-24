import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import BackBtn from '../../components/Buttons/BackBtn';
import SizeBtn from '../../components/Buttons/SizeBtn';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../components/redux/Slices/Cart';

import axios from 'axios';

export default function ViewProduct() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [item, setItem] = useState('')
  const [size, setSize] = useState('')

  // const { size } = useSelector(state => state.Size)

  // const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    // setSelectedOption(el)
    setSize(e.value)
    
  }

  const options = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ]
  const object = {
    id: id,
    quantity: 1,
    size: size,
  }

  useEffect(() => {
    axios
      .get(`https://657f17219d10ccb465d5edfb.mockapi.io/items/${id}`)
      .then(resolve => setItem(resolve.data))
      .catch(console.error)
  }, [id])

  return (
    <>
      {
        item && (
          <div className="bg-gray-main max-w-[1170px] w-full m-auto rounded-[6px] py-[12px] px-[20px]">
            <BackBtn />
            <div className="flex  gap-[40px] mt-[15px] mb-[25px] w-full">
              <div className="w-full">
                <div className="border-[1px] border-gray-light max-w-[535px] w-full mb-[12px] rounded-[6px]">
                  <img
                    className="p-[20px]"
                    src={item.imgFront}
                    alt="hoodie"
                  />
                </div>
                <div className="flex gap-[10px]">
                  <div className="border-[1px] border-gray-light max-w-[263px] w-full rounded-[6px]">
                    <img
                      className="p-[20px]"
                      src={item.imgFront}
                      alt="hoodie"
                    />
                  </div>
                  <div className="border-[1px] border-gray-light max-w-[263px] w-full rounded-[6px]">
                    <img
                      className="p-[20px]"
                      src={item.imgBack}
                      alt="hoodie"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[30px] leading-[125%] mb-[20px]">
                  DISPLASES <br /> {item.title}
                </p>
                <div className="mt-[8px] gap-[10px] relative">
                  <div className="flex mb-[20px] gap-[8px]">
                    <p className="text-[22px] leading-[110%]">{item.price}₽</p>
                    <p className="text-[#717171] line-through text-[22px] leading-[110%]">{item.discount}₽</p>
                  </div>
                  <div className="flex gap-[20px]">

                    <Select
                      options={options}
                      onChange={handleChange}
                      className='select-container'
                      classNamePrefix='select'
                      placeholder='РАЗМЕР'
                      isSearchable={false}
                    />

                    <Link to='/cart' onClick={() => dispatch(add(object))} className="bg-[#F64343] w-full  text-[14px] font-[700] rounded-[6px] flex justify-center">
                      <button>
                        ADD TO CART
                      </button>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-[20px] mt-[20px]">
                    <div className='leading-[125%]'>
                      <p className='text-[12px]'>Ткань: футер 3-х нитка 340гр</p>
                      <p className='text-[12px]'>Лекала: умеренный оверсайз</p>
                      <p className='text-[12px]'>Нанесение: тафтинг</p>
                      <p className='text-[12px]'>Размеры: S / M / L / XL / XXL</p>
                    </div>
                    <div className='leading-[125%]'>
                      <p className='text-[12px]'>Указания по стирке: стирать на 30 градусах</p>
                      <p className='text-[12px]'>Указания по размерам:</p>
                      <p className='text-[12px]'>S - рост 165-170см</p>
                      <p className='text-[12px]'>М - рост 170-180см</p>
                      <p className='text-[12px]'>L - рост 180-185см</p>
                      <p className='text-[12px]'>XL - рост 185+см</p>
                      <p className='text-[12px]'>XXL - рост 190+см</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
