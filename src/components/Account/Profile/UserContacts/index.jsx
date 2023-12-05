import style from './UserContacts.module.css'

export default function UserContacts() {
    return (
        // Общий контейнер
        <div className={`${style.wrapper} w-full flex flex-wrap items-start content-start gap-[10px]`}>
            {/* 2 карточки - email, phone number*/}
            {/* Карточка 1 */}
            <div className="w-full flex max-w-[45%] min-w-[352px] p-[20px] flex-col items-start gap-[10px]">
                {/* Контейнер для заголовка */}
                <div className="w-full flex justify-between ">
                    {/* Заголовок */}
                    <h3 className="text-white text-[20px] font-[700] not-italic">Email address</h3>
                    {/* Верификация */}
                    <div className=" flex flex-nowrap items-center gap-[12px]">
                        <p className="text-white text-[16px] font-[400] not-italic leading-[22px]">
                            Verified
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0303 4.96967C11.7374 4.67678 11.2626 4.67678 10.9697 4.96967C10.9626 4.97674 10.9559 4.98424 10.9498 4.9921L7.4774 9.41674L5.38388 7.32322C5.09098 7.03033 4.61611 7.03033 4.32322 7.32322C4.03032 7.61612 4.03032 8.09099 4.32322 8.38388L6.96966 11.0303C7.26256 11.3232 7.73743 11.3232 8.03032 11.0303C8.03685 11.0238 8.043 11.0169 8.04876 11.0097L12.041 6.01947C12.3232 5.72582 12.3196 5.25897 12.0303 4.96967Z" fill="#00E577" />
                        </svg>
                    </div>
                </div>
                {/* Контейнер для input, button */}
                <div className="w-full h-[4.5vh] bg-[#111] rounded-[6px] flex items-center p-[5px]">
                    <input
                        type="email"
                        name="" id=""
                        className="w-full py-[4px] px-[8px] bg-[#111] rounded-[6px] outline-none"
                        placeholder="user@gmail.com"
                    />
                    <button className="py-[5px] px-[11px] rounded-[6px] bg-[#333232]">Сохранить</button>
                </div>
            </div>

            {/* Карточка 2 */}
            <div className="w-full flex max-w-[45%] min-w-[352px] p-[20px] flex-col items-start gap-[10px]">
                {/* Контейнер для заголовка */}
                <div className="w-full flex justify-between">
                    {/* Заголовок */}
                    <h3 className="text-white text-[20px] font-[700] not-italic">Мобильный телефон</h3>
                    {/* Верификация */}
                    <div className="flex flex-nowrap items-center gap-[12px]">
                        <p className="text-white text-[16px] font-[400] not-italic leading-[22px]">
                            Verified
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0303 4.96967C11.7374 4.67678 11.2626 4.67678 10.9697 4.96967C10.9626 4.97674 10.9559 4.98424 10.9498 4.9921L7.4774 9.41674L5.38388 7.32322C5.09098 7.03033 4.61611 7.03033 4.32322 7.32322C4.03032 7.61612 4.03032 8.09099 4.32322 8.38388L6.96966 11.0303C7.26256 11.3232 7.73743 11.3232 8.03032 11.0303C8.03685 11.0238 8.043 11.0169 8.04876 11.0097L12.041 6.01947C12.3232 5.72582 12.3196 5.25897 12.0303 4.96967Z" fill="#929192" />
                        </svg>
                    </div>
                </div>


                <div className="w-full h-[4.5vh] bg-[#111] rounded-[6px] flex items-center p-[5px]">
                    <input
                        type="tel"
                        name="" id=""
                        className="w-[100%] py-[4px] px-[8px] bg-[#111] rounded-[6px] outline-none"
                        placeholder="+7 (912) 000-00-00"
                    />
                    <button className="py-[5px] px-[11px] rounded-[6px] bg-[#333232]">Сохранить</button>
                </div>
            </div>

        </div>
    )
}
