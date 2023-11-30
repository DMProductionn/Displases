import { Link } from 'react-router-dom'
import style from './SignUp.module.css'

export default function Index() {
    return (
        <div className={style.wrapper}>
            {/* Кнопка выйти */}
            <button className='absolute top-4 right-4'>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path fillRule='evenodd' clipRule='evenodd' d="M4.24921 5.31378C3.95581 5.02038 3.95581 4.54468 4.24921 4.25128C4.54261 3.95788 5.01831 3.95788 5.31171 4.25128L8.49792 7.4375L11.6867 4.24872C11.9801 3.95532 12.4558 3.95532 12.7492 4.24872C13.0426 4.54212 13.0426 5.01782 12.7492 5.31122L9.56043 8.5L12.7492 11.6888C13.0426 11.9822 13.0426 12.4579 12.7492 12.7513C12.4558 13.0447 11.9801 13.0447 11.6867 12.7513L8.49792 9.5625L5.31171 12.7487C5.01831 13.0421 4.54261 13.0421 4.24921 12.7487C3.95581 12.4553 3.9558 11.9796 4.24921 11.6862L7.43542 8.5L4.24921 5.31378Z" fill="white" />
                    </svg>
                </Link>
            </button>
            {/* Заголовок и текст */}
            <div className={style.header}>
                <h1 className='font-[700] text-xl text-[#fff]'>REGISTER</h1>
                <p className='text-base text-[#929192] font-[400] leading-[125%]'>In the event your details change, level one verification can be updated at a later date</p>
            </div>

            {/* Форма регистрации */}
            <form className='w-[100%] flex flex-col flex-nowrap'>
                <div className={style.info}>
                    <label className='w-[100%]'>
                        <h3 className='font-[700]'>Email</h3>
                        <input type="email" name="" id="" className={style.input}/>
                    </label>
                    <label className='w-[100%]'>
                        <h3 className='font-[700]'>Password</h3>
                        <input type="password" name="" id="" className={style.input}/>
                    </label>
                    <label className='w-[100%]'>
                        <h3 className='font-[700]'>Repeat Password</h3>
                        <input type="password" name="" id="" className={style.input}/>
                    </label>
                    <label className='w-[100%]'>
                        <h3 className='font-[700]'>Country
                            <span className='inline text-[#ff0000] float-none'>*</span>
                        </h3>
                        <select id="country" name="country" className='bg-[#111] w-[100%] h-[4.5vh] py-[4px] px-[8px] rounded-[6px] appearance-none'>
                            <option>Choose your country</option>
                            <option value="Belarus">Belarus 🇧🇾</option>
                            <option value="Russian Federation">Russian Federation 🇷🇺</option>
                            <option value="Ukraine">Ukraine 🇺🇦</option>
                            <option value="United States">United States 🇺🇸</option>
                        </select>
                    </label>
                    <label className='w-[100%]'>
                        <h3 className='font-[700]'>Postal Code
                            <span className='inline text-[#ff0000] float-none'>*</span>
                        </h3>
                        <input type="text" name="" id="" className={style.input}/>
                    </label>
                </div>

                <hr className='border border-solid border-[#333232] my-[18px]' />

                <button className={style.button}>
                    <Link to='/category'>JOIN</Link>
                </button>
            </form>
        </div>
    )
}
