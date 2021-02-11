import React,{useState} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Top from './TopComponent';
import Chats from './ChatComponent';
import {CHATS} from '../Shared/chats';
import Status from './StatusComponent';
import SmallProfile from './SmallProfileComponent';
import LargeProfile from './LargeProfileComponent';
import Profile from './ProfileComponent';
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
const SmallProfileBox=({match})=>{
	return(
		<div>
			<Top/>
			<Chats ChatDetails={CHATS}/>
			<SmallProfile profiles={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0]}/>
		</div>
	);	
}
const LargeProfileBox=({match})=>{
	return(
		<LargeProfile profile={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0]}/>
		
	);	
}
const ProfileComponent=({match})=>{
	return(
		<Profile profiles={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0]}/>
		
	);	
}
function MainComponent(){
	//const [details,detailsModify]=useState(CHATS);
	return(
		<div>
			<Switch>
				<Route path='/chats' component={ChatComponent}/>
				<Route path='/status' component={StatusComponent}/>
				<Route path='/smallprofile/:profileId' component={SmallProfileBox}/>
				<Route path='/largeprofile/:profileId' component={LargeProfileBox}/>
              	<Route path='/mainchat/:chatId' component={()=><MainChat messages={CHATS}/>}/>
              	<Route path='/profile/:profileId' component={ProfileComponent}/>
				<Redirect to='/chats' compopnent={ChatComponent}/>		
			</Switch>
		</div>
	);
}

export default MainComponent;