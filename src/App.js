import React from 'react';
/*CSS*/
import Main from './components/MainComponent';
// import Top from './components/topcomponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './StyleSheets/top.css';
import './StyleSheets/chats.css';
import './StyleSheets/largeProfile.css';
import './StyleSheets/home.css';
import './StyleSheets/status.css';
import './StyleSheets/calls.css';
function App(){
	return (
		<BrowserRouter>
			<Main/>
		</BrowserRouter>
	);		  
}

export default App;
