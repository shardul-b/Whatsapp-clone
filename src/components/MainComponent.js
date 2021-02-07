import React,{useState} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Top from './TopComponent';
import Chats from './ChatComponent';
import {CHATS} from '../Shared/chats';
import Status from './StatusComponent';
import MainChat from './MainChatComponent';
const ChatComponent=()=>{
	return(
		<div>
			<Top/>
			<Chats ChatDetails={CHATS}/>
		</div>
	);
}
const StatusComponent=()=>{
	return(
		<div>
			<Top/>
			<Status/>
		</div>
	);
}
function MainComponent(){
	//const [details,detailsModify]=useState(CHATS);
	return(
		<div>
			<Switch>
				<Route path='/chats' component={ChatComponent}/>
				<Route path='/status' component={StatusComponent}/>
              	<Route path='/mainchat/:chatId' component={()=><MainChat dishes={CHATS}/>}/>	
				<Redirect to='/chats' />		
			</Switch>
		</div>
	);
}

export default MainComponent;