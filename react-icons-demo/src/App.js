import React from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';
import { FaAws } from 'react-icons/fa';
import { BsFillPersonLinesFill } from "react-icons/bs";
import {FaAccusoft} from "react-icons/fa";
function App() {
	return (
		<IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
			<div className='App'>
				<FaReact />
				<MdAlarm color='purple' size='10rem' />
				<FaAws color='orange' size='5rem' />
        <BsFillPersonLinesFill color='blue' size='5rem'/>
        <FaAccusoft/>

			</div>
		</IconContext.Provider>
	);
}

export default App;
