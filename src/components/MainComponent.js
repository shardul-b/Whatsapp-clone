import React,{useState} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Top from './TopComponent';
import Chats from './ChatComponent';
import {CHATS} from '../Shared/chats';
import {STATUS} from '../Shared/status';
// import {CONTACTS} from '../Shared/contacts';
import Status from './StatusComponent';
import Call from './CallComponent';
// import SmallProfile from './SmallProfileComponent';
import LargeProfile from './LargeProfileComponent';
import Profile from './ProfileComponent';
import MainChat from './MainChatComponent';
import MediaTop from './MediaTopComponent';
import Media from './MediaComponent';
import Contacts from './ContactsComponent';
import ContactsTop from './ContactsTopComponent';
import Group from './GroupComponent';
const ChatComponent=()=>{
	return(
		<div>
			<Top/>
			<Chats ChatDetails={CHATS}/>
		</div>
	);
}
const MainChatComponent=({match})=>{
	return(
		<MainChat ChatDetails={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0]}/>
	);
}
const StatusComponent=()=>{
	return(
		<div>
			<Top/>
			<Status StatusDetails={STATUS}/>
		</div>
	);
}
const CallComponent=()=>{
	return(
		<div>
			<Top/>
			<Call CallDetails={CHATS}/>
		</div>
	);
}
/*const SmallProfileBox=({match})=>{
	return(
		<div>
			<SmallProfile profiles={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0]}/>
		</div>
	);	
}*/
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
const MediaComponent=({match})=>{
	return(
		<div>
			<MediaTop profile={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0]}/>
			<Media content={CHATS.filter((profile)=>profile.id===parseInt(match.params.profileId, 10))[0].Media}/>	
		</div>
	);
}
const ContactsComponent=()=>{
	return(
		<div>
			<ContactsTop length={CHATS.length}/>
			<Contacts details={CHATS}/>
		</div>
	)
}
const GroupComponent=()=>{
	return(
		<Group details={CHATS}/>
	)
}
function MainComponent(){
	//const [details,detailsModify]=useState(CHATS);
	return(
		<div>
			<Switch>
				<Route path='/chats' component={ChatComponent}/>
				<Route path='/status' component={StatusComponent}/>
				<Route path='/call' component={CallComponent}/>
				{/*<Route path='/smallprofile/:profileId' component={SmallProfileBox}/>*/}
				<Route path='/largeprofile/:profileId' component={LargeProfileBox}/>
              	<Route path='/mainchat/:profileId' component={MainChatComponent}/>
              	<Route path='/profile/:profileId' component={ProfileComponent}/>
              	<Route path='/media/:profileId' component={MediaComponent}/>
              	<Route path='/contacts' component={ContactsComponent}></Route>
              	<Route path='/group' component={GroupComponent}></Route>
				<Redirect to='/chats' component={ChatComponent}/>		
			</Switch>
		</div>
	);
}

export default MainComponent;