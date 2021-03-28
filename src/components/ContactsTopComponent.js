import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {ArrowBack,Search,MoreVert} from '@material-ui/icons';
function ContactsTopComponent(props){
	let options=[
		{
			id:0,
			title:'Invite a friend',
			key:'option',
			link:''
		},
		{
			id:1,
			title:'Contacts',
			key:'option',
			link:''
		},
		{
			id:2,
			title:'Refresh',
			key:'option',
			toggle:'refresh'
		},
		{
			id:3,
			title:'Help',
			key:'option',
			link:'/help'
		}

	];
	const [isListOpen,openList]=useState(false);
	const [isSearchOpen,openSearch]=useState(false);
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
	const refresh=()=>{
		
	}
	const toggleList=()=>{
		openList(true);
		//linkCloser();
	}
	const closeList=()=>{
		openList(false);
		//linkEnabler();
	}
	function toggleSearch(){
		openSearch(true);
		closeList();
	}
	function closeSearch(){
		openSearch(false);	
	}
	const wrapperRef = useRef(null);
    OutsideCloser(wrapperRef);
	function OutsideCloser(ref) {
	    useEffect(() => {
	        function ClickOutside(event) {
	            if (ref.current && !ref.current.contains(event.target)) {
	            	closeList();
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
	return(
		(isSearchOpen)?
			<div className='shared-search contacts-search-container'>
				<div className='container flex'>
					<ArrowBack style={{color:'#075E54'}} onClick={closeSearch}/>
					<input type='text' className='contacts-search' placeholder='Search...'/>
				</div>
			</div>:
		<div className='contacts-top shared-top'>
					<div className='container flex'>
						<Link to={'/chats'}>
							<ArrowBack style={{color:'#FFF'}}/>
						</Link>
						<div className='contacts-top-text'>
							<span className='contact-title'>Select Contact</span>
							<span className='contact-length'>{props.length} contacts</span>
						</div>
						<div className='contacts-top-icons'>
							<Search style={{color:'#FFF'}} onClick={toggleSearch}/>
							<MoreVert style={{color:'#FFF'}} onClick={toggleList}/>
						</div>
					</div>
				{isListOpen&& (
					//console.log(options)
					<div role='list' className='dropdown-list' ref={wrapperRef}>
						{	
							options.map((item)=>(
								(item.link)?
									<button 
						              className="dropdown-list-item flex-space"
						              key={item.id}
						            >
						            <Link to={item.link} key={item.id}>
						            {item.title}
						            </Link>
						            </button>
					            
					            :<span className='flex' key={item.id}>
					            <button 
					              className="dropdown-list-item flex-space"
					              key={item.id}
					              onClick={eval(item.toggle)}
					            >
					            {item.title}
					            </button>
									
								</span>
							))
						}
					</div>
				)
			}
		</div>
		
	);
}

export default ContactsTopComponent;