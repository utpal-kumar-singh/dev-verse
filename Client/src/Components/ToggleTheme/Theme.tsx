import "./DarkMode.css";
import SunIcon from "./Sun";
import MoonIcon from "./Moon";




const Theme = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <SunIcon />
                <MoonIcon />
            </label>
        </div>
    );
};

export default Theme;
