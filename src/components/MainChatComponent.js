import React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import {GROUPCHATOPTIONS} from '../Shared/groupChatOptions';
import {CHATOPTIONS} from '../Shared/chatOptions'; 
// import Dropdown from './DropdownComponent';

import {Lock,EmojiEmotionsOutlined,AttachFileOutlined,PhotoCamera,Mic,ArrowBack,MoreVert,Phone,Videocam,ArrowRight,ExpandLess,ExpandMore} from '@material-ui/icons';
function MainChatComponent(props){
	const [isDelay,setDelay]=useState(false);
	const [isListOpen,openList]=useState(false);
	const [isSubListOpen,openSubList]=useState(false);
	const [isSearchOpen,openSearch]=useState(false);
	/*Disables Link when the dropdown is open*/
	const linkCloser=()=>{
		let a=document.getElementsByClassName('common-link')
		for(let i of a){
			i.style.pointerEvents='none';
		}
	}
	/*Enables Links*/
	const linkEnabler=()=>{
		let a=document.getElementsByClassName('common-link')
		for(let i of a){
			i.style.pointerEvents='auto';
		}
	}
	// For handling state of List
	const toggleList=()=>{
		openList(true);
		linkCloser();
	}
	const closeList=()=>{
		openList(false);
		linkEnabler();
	}
	//For handling SubList
	const toggleSubList=()=>{
		openSubList(true);
		linkCloser();
	}
	const closeSubList=()=>{
		openSubList(false);
		linkEnabler();
	}

	//For opening SubList
	const subListOpener=()=>{
		toggleSubList();
		closeList();
	}
	// Search Under Construction
	function toggleSearch(){
		openSearch(true);
		closeList();
	}
	function closeSearch(){
		openSearch(false);	
	}
	let list=props.ChatDetails;
	//sets delay of 3 seconds for group info effect
	useEffect(() => {
	    setTimeout(() => {
		      setDelay(true)
		    }, 3000)
	}, [isDelay])
	/*Detect click outside the dropdown*/
	const wrapperRef = useRef(null);
    OutsideCloser(wrapperRef);
	function OutsideCloser(ref) {
	    useEffect(() => {
	        function ClickOutside(event) {
	            if (ref.current && !ref.current.contains(event.target)) {
	            	closeList();
	            	closeSubList();
	            	closeSearch();
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
				{(!isSearchOpen)?
				<div className='container flex'>
					<Link to='/chats' className='flex common-link'>
						<ArrowBack className='flex' style={{fontSize : '1.5em'}}/>
						<div className='chat-top-profile-image' style={{backgroundImage : `url(${list.profile})`}}>
							
						</div>
					</Link>
					
						<div className='name-details'>
							<Link to={`/profile/${list.id}`} className='common-link'>
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
				</div>:
				<div className='flex-space container' ref={wrapperRef}>
					<ArrowBack style={{fontSize : '1.5em'}} onClick={closeSearch}/>
					<input type="text" placeholder='Search...' id='chat-search'/>
					<ExpandLess style={{fontSize : '1.5em'}} />
					<ExpandMore style={{fontSize : '1.5em'}} />
				</div>
				}
			</div>
		{/*Dropdown List*/}
			{isListOpen && (
					<div role='list' className='dropdown-list' ref={wrapperRef}>
						{	
							dropList.map((item)=>(
								(item.link)?
								
									<button 
						              className="dropdown-list-item flex-space"
						              key={item.id}
						            >
						            <Link to={item.link.replace('id',list.id)} key={item.id}>
						            {item.title}
						            </Link>
						            </button>
					            
					            :<span className='flex' key={item.id}>
					            <button 
					              className="dropdown-list-item flex-space"
					              key={item.id}
					              onClick={eval(item.toggle)}
					            >
					            {/*console.log(item.toggle)*/}
					            {item.title}

					            </button>
								
								{(item.title==='More')?
					            <ArrowRight/>:''}	
								</span>
							))
						}
					</div>
				)
			}
		{/*Sublist*/}
			{isSubListOpen &&(
					<div role='list' className='dropdown-list' ref={wrapperRef}>
					{
						dropList[5].submenu.map((item)=>(
								<button 
					              className="dropdown-list-item flex-space"
					              key={item.id}

					              //onClick={eval(item.toggle)}
					            >
					            {/*console.log(item.toggle)*/}
					            	{item.title}
					            </button>
								
							))

					}
					</div>
				)
			}
		{/*Messages*/}
			<div className='messages-section'>
				{/*TIP*/}
				<div className='message-tip'>
					<Lock style={{fontSize: '0.8rem'}}/>
					None of the messages are stored on server, but messages aren't encrypted so chat wisely.    
				</div>
			{/*Bottom message input*/}
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