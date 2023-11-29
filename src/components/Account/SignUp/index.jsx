import { Link } from 'react-router-dom'
import style from './SignUp.module.css'

export default function Index() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h1>Register</h1>
                <p>In the event your details change, level one verification can be updated at a later date</p>
            </div>

            {/* Форма регистрации */}
            <form>
                <div className={style.info}>
                    <label>
                        <h3>Email</h3>
                        <input type="email" name="" id="" />
                    </label>
                    <label >
                        <h3>Password</h3>
                        <input type="password" name="" id="" />
                    </label>
                    <label>
                        <h3>Repeat Password</h3>
                        <input type="password" name="" id="" />
                    </label>
                    <label>
                        <h3>Country
                            <span>*</span>
                        </h3>
                        <select id="country" name="country" >
                            <option>Choose your country</option>
                            <option value="Belarus">Belarus 🇧🇾</option>
                            <option value="Russian Federation">Russian Federation 🇷🇺</option>
                            <option value="Ukraine">Ukraine 🇺🇦</option>
                            <option value="United States">United States 🇺🇸</option>
                        </select>
                    </label>
                    <label>
                        <h3>Postal Code
                            <span>*</span>
                        </h3>
                        <input type="text" name="" id="" />
                    </label>
                </div>
                <button>
                    <Link to='/category'>Join</Link>
                </button>
            </form>
        </div>
    )
}
