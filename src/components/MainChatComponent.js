import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {EmojiEmotionsOutlined,AttachFileOutlined,PhotoCamera,Mic,ArrowBack,MoreVert,Phone,Videocam,ArrowRight} from '@material-ui/icons';
function MainChatComponent(props){
	const [isDelay,setDelay]=useState(false);
	let list=props.ChatDetails;
	useEffect(() => {
    setTimeout(() => {
	      setDelay(true)
	    }, 3000)
	  }, [isDelay])
	//console.log(list.profile)
	return(
		<div className='chat-profile-section' key={list.id}>
	{/*Top section*/}
			<div className='chat-profile-top'>
				<div className='container flex'>
					<Link to='/chats' className='flex'>
						<ArrowBack className='flex' style={{fontSize : '1.5em'}}/>
						<div className='chat-top-profile-image' style={{backgroundImage : `url(${list.profile})`}}>
							
						</div>
					</Link>
					
						<div className='name-details'>
							<Link to={`/profile/${list.id}`} >
								<span className='chat-profile-name'>{list.name}</span>
								{(list.isGroup)?
									<div className='group-details'>
										{(isDelay)?
										<span className='details'>
										{
											list.members.join(', ')
										}
										</span>:
										<span className='details'>
											{'tap here for group info'}
											</span>
										}
									</div>
									:
									<div className='personal-chat-details'>
										<span className='details'>{'Online'}</span>
									</div>
								}
							</Link>
						</div>
					
					<div className='chat-top-icons flex-space'>
						<Videocam/>
						<Phone/>
						<MoreVert/>
					</div>
				</div>
			</div>
			<div className='messages-section'>
				<div className='bottom-wrapper flex-space'>	
					<div className='input-box-container'>
						<div className='container flex-space'>
							<EmojiEmotionsOutlined style={{color:'gray'}}/>
							<input type="text" placeholder='Type a message' className='message-box'/>
							<AttachFileOutlined style={{color:'gray', transform:'rotate(-45deg)'}}/>
							<PhotoCamera style={{color:'gray'}}/>
						</div>
					</div>
					<div className='voice-wrapper'>
						<Mic style={{color:'#FFF'}}/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default MainChatComponent;