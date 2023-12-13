import style from './index.module.css'

export default function Bio() {
    return (
        <div className={`${style.wrapper} flex w-full p-[20px]`}>
            <div className="flex gap-[20px] w-full">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User's photo" className="w-[100px] h-[100px] rounded-[8px]" />
                <div className="flex flex-col items-start gap-[7px]">
                    <h3 className="text-[#fff] text-[30px] font-[700]">Username</h3>
                    <p className="text-[#929192] text-[14px] font-[400]">Пользователь</p>
                </div>
            </div>
            <div className="flex items-start flex-col w-full gap-[20px]">
                <h3 className="text-[#fff] text-[20px] font-[700]">Пол</h3>
                <div className="flex content-start gap-[20px]">
                    <button className="text-[#929192] text-[14px] font-[400] flex flex-nowrap gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_185_810)">
                                <rect y="0.5" width="16" height="16" rx="2" fill="white" />
                            </g>
                        </svg>
                        Мужской
                    </button>
                    <button className="text-[#929192] text-[14px] font-[400] flex flex-nowrap gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_185_806)">
                                <rect y="0.5" width="16" height="16" rx="2" fill="#333232" />
                            </g>
                        </svg>
                        Женский
                    </button>
                </div>
            </div>
        </div>
    )
}
