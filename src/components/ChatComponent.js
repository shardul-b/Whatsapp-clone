import React from 'react';
import Chat from './MainChatComponent';
import SmallProfile from './SmallProfileComponent'
import { Link } from 'react-router-dom';
function profileDisplay(...profileDetails){
	//alert(profileDetails)
	return(
		<SmallProfile details={profileDetails}/>
	);
}
function chatDisplay(){
	//alert('No')
	return(
		<Chat/>
	);
}
function ChatComponent(props){
	//const {name}=ChatDetails[0];
	//console.log(props.ChatDetails[1].id)
	const list=props.ChatDetails;
	return(
		<div>
		<div className='chatSection'>
		 	<div className='container'>
			{
				(list.length>0)?
					list.map((val)=>(
						<div className='chat-block flex' key={val.id}>
							<div className='chat-profile' onClick={()=>profileDisplay([val.name,val.profile,val.isGroup])}>
								<img src={val.profile} alt={val.name.match(/[A-Z]/g).join('')} className='chat-profile-image'/>
							</div>
							<div className='chat-message-details'>
								<Link to={`/mainchat/${val.id}`}>
									<div className='chat-name-time flex-space'>
										<span className='chat-name'>
											{val.name}
										</span>
										<span className='chat-time'>
											{val.lastMessageTime}
										</span>
									</div>
									<div className='chat-message-other flex'>
										<span className='chat-message'>
											{val.lastMessage}
										</span>
										{
											(val.mute)?<span className='chat-mute mute-icon fa fa-mute'></span>:null
										}
										{
											(val.pinned)?<span className='chat-pin pin-icon fa fa-pin'></span>:null
										}
									</div>
								</Link>
							</div>
						</div>
					)):null
			}
			</div>
			{/*
				(archieveList.length>0)?
					<span className='archive-text'>
						
					</span>
				:null

				*/
			}
			
		</div>
		<div className='new-icon'>
			
		</div>
		</div>
	);
}

export default ChatComponent;