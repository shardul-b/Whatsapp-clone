import React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import {GROUPCHATOPTIONS} from '../Shared/groupChatOptions';
import {CHATOPTIONS} from '../Shared/chatOptions'; 
import Dropdown from './DropdownComponent';
import {EmojiEmotionsOutlined,AttachFileOutlined,PhotoCamera,Mic,ArrowBack,MoreVert,Phone,Videocam,ArrowRight} from '@material-ui/icons';
function MainChatComponent(props){
	const [isDelay,setDelay]=useState(false);
	const [isListOpen,openList]=useState(false);
	const [isSubListOpen,openSubList]=useState(false);
	// For handling state
	const toggleList=()=>{
		openList(true);
	}
	const closeList=()=>{
		openList(false);
	}
	//For handling SubList
	const toggleSubList=()=>{
		openSubList(true);
	}
	const closeSubList=()=>{
		openSubList(false);
	}
	function search(){

	}
	//For opening SubList
	const subListOpener=()=>{
		toggleSubList();
		closeList();
		console.log('YOOOOOOOO')
	}
	let list=props.ChatDetails;
	useEffect(() => {
	    setTimeout(() => {
		      setDelay(true)
		    }, 3000)
	}, [isDelay])
	const wrapperRef = useRef(null);
    OutsideCloser(wrapperRef);
	function OutsideCloser(ref) {
	    useEffect(() => {
	        function ClickOutside(event) {
	            if (ref.current && !ref.current.contains(event.target)) {
	            	closeList();
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
	//Droplist will be assigned options based on group or personal chat 
	let dropList=list.isGroup?GROUPCHATOPTIONS:CHATOPTIONS;

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
							<Link to={`/profile/${list.id}`}>
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
						<MoreVert onClick={toggleList}/>
					</div>
				</div>
			</div>
			{isListOpen && (
					<div role='list' className='dropdown-list' ref={wrapperRef}>
						{	

							dropList.map((item)=>(
								
								(item.link)?
								
								<Link to={`${item.link}`} key={item.id}>
									<button 
						              className="dropdown-list-item flex-space"
						              key={item.id}
						            >
						            {item.title}
						            
						            </button>
					            </Link>
					            :<button 
					              className="dropdown-list-item flex-space"
					              key={item.id}

					              onClick={eval(item.toggle)}
					            >
					            {console.log(item.toggle)}
					            {item.title}
					            </button>
								
							))
						}
					</div>
				)
			}
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