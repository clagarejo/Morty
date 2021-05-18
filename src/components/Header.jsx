import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = (props) => {
    const color = useContext(ThemeContext);

    return (
        <div className='Header d-flex justify-content-around mt-5 p-5'>
            <>
                <h1 style={{ color }}>ReactHooks</h1>
                <button
                    type='button'
                    onClick={() => props.onClick()}
                    className='btn btn-primary mb-5'
                >
                    {props.darkMode ? 'Dark Mode' : 'Light Mode'}
                </button>
            </>
        </div>
    );
};

export default Header