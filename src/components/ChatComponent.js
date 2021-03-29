import React,{useState, useRef, useEffect} from 'react';
import Chat from './MainChatComponent';
import SmallProfile from './SmallProfileComponent';
import { Link } from 'react-router-dom';


function ChatComponent(props){
	const [isProfileOpen,openProfile]=useState(false);
	const [idExists,setId]=useState(null);
	const smallprofile=(id)=>{
		openProfile(true)
		setId(id);
	}
	const closeSmallProfile=()=>{
		openProfile(false)
		setId(null);	
	}
	const wrapperRef = useRef(null);
    OutsideCloser(wrapperRef);
	function OutsideCloser(ref) {
	    useEffect(() => {
	        function ClickOutside(event) {
	            if (ref.current && !ref.current.contains(event.target)) {
	            	closeSmallProfile();
	            }
	        }
	        // Bind the event listener
	        document.addEventListener("mousedown", ClickOutside);
	        return () => {
	            // Unbind the event listener on clean up
	            document.removeEventListener("mousedown", ClickOutside);
	        };
	    }, [ref]);
	}
	const list=props.ChatDetails;
	return(

		<div>
			{
				(isProfileOpen)?
				<div className='small-profile-back'>
					<div ref={wrapperRef}>
						<SmallProfile profiles={list.filter((profile)=>profile.id===parseInt(idExists, 10))[0]}/>
					</div>
				</div>
					:	
				''
			}
		<div className='chatSection'>
		 	
		 	<div className='container'>
			{
				(list.length>0)?
					list.map((val)=>(

						<div className='chat-block flex' key={val.id}>
							<div className='chat-profile' onClick={()=>smallprofile(val.id)}>
									<img src={val.profile} alt={val.name.match(/[A-Z]/g).join('')} className='chat-profile-image' loading='lazy'/>
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
		<Link to='/contacts'>
			<div className='new-icon'>
				<img src="assests/icons/whatsapp_new_msg.png" className='new-icon-image' alt="new" />
			</div>
		</Link>
		</div>
	);
}

export default ChatComponent;