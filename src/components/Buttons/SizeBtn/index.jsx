import { useState } from 'react';
import style from './SizeBtn.module.css'
import './index.css'
// import { setSize } from '../../redux/Slices/Size.slice';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
// import { setSize } from '../../redux/Slices/Size';

export default function SizeBtn() {
  const dispatch = useDispatch()
  // const { sizeBtn } = useSelector(state => state.Size)

  const [ selectedOption, setSelectedOption ] = useState('');
  
  const handleChange = (el) => {
    setSelectedOption(el)
    dispatch(setSize(selectedOption))
  }

  const options = [
    {value: 'S', label: 'S'},
    {value: 'M', label: 'M'},
    {value: 'L', label: 'L'},
    {value: 'XL', label: 'XL'},
    {value: 'XXL', label: 'XXL'},
  ]

  return (
    <>
      <Select 
        options={options}
        // value={selectedOption}
        onChange={handleChange}
        className='select-container'
        classNamePrefix='select'
        placeholder='РАЗМЕР'
        isSearchable={false}
      />
    </>
  );
}
