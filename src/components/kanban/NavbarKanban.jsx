import React from 'react';
import add from '../../assets/icons/plus-line-icon.svg';

const NavbarKanban = ({ kanbanName }) => {
    const [name, setName] = React.useState(kanbanName);

    const resizeInput = () => {
        const input = document.querySelector('.magic-input');
        const characters = input.value.length;
        if (characters >= 10) {
            input.style.width = characters + 2 + 'ch';
        } else {
            input.style.width = characters + 2.5 + 'ch';
        }
    };

    return (
        <header className="w-full bg-slate-950 bg-opacity-50 rounded-tr px-5 py-2 flex justify-between items-center">
                <input
                    type="text"
                    className={`text-white font-bold text-lg  hover:bg-slate-700 p-2 rounded-md cursor-pointer bg-transparent focus:outline-none focus:outline-indigo-500 focus:bg-slate-700 transition duration-300 ease-in-out magic-input text-start`}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    onMouseEnter={resizeInput}
                    onInput={resizeInput}
                    value={name}
                />
                <button className="py-2 px-3 rounded-md hover:text-white text-slate-400 flex items-center  hover:border-white border-slate-400  hover:border-2 transition duration-300 ease-in-out border-2" onClick={() => {
                    alert('add another list');
                }}>
                    <img src={add} alt="" className="w-3" />
                    <p className="ml-2">Add another list</p>
                </button>
        </header>
    );
};

export default NavbarKanban;
