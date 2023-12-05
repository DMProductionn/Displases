import PersonalData from "../components/Account/Profile/PersonalData"
import { Link } from 'react-router-dom'

export default function Profile() {

    return (
        // сделать как компонент
        <div className='w-full max-w-[1200px] min-w-[320px] rounded-[6px] bg-[#1d1d1d] p-[20px] relative'>
            <Link to="/category"
                className={`h-[40px] uppercase text-[12px] bg-gray-light rounded-[6px] flex items-center justify-center w-[103px] pt-[12px] pb-[10px]`}>
                <img className={`arrowBack mr-[4px]`} src="./img/icons/chevron-right-white.svg" alt="arrow" />
                BACK
            </Link>

            {/* Заголовок страницы */}
            <div className="flex justify-center">
                <h1 className='text-[18px] sm:text-[24px] font-[Inter]'>ПРОФИЛЬ</h1>
            </div>

                <PersonalData />

            {/* Кнопка сохранить */}
            <div className='flex justify-center'>
                <button className='p-3 rounded-[6px] bg-[#F64343] text-white text-center text-[12px] font-[700]'>СОХРАНИТЬ</button>
            </div>
        </div>
    )
}