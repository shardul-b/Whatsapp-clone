import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {Search,ArrowBack,ArrowForward,Close} from '@material-ui/icons';
import SmallProfile from './SmallProfileComponent';
function GroupCommponent(props){
	let list=props.details;
	const [isProfileOpen,openProfile]=useState(false);
	const [idExists,setId]=useState(null);
	const [isSearchOpen,openSearch]=useState(false);
	const [Members,displayMembers]=useState(false);
	const [arr,setArr]=useState([]);
	function toggleSearch(){
		openSearch(true);
	}
	function closeSearch(){
		openSearch(false);	
	}
	const addToGroup=(id)=>{
		displayMembers(true)
		if(!arr.includes(id)){
			setArr(oldArray => [...oldArray, id]);
		}
	}
	const removeFromGroup=(id)=>{
		//var array=arr;
		var index = arr.indexOf(id)
		if(index!==-1){
			setArr(oldArray=>oldArray.splice(index, 1));
		}
		console.log(arr);
		if(arr.length==0){
			displayMembers(false)
		}
	}
	const wrapperRef = useRef(null);
    OutsideCloser(wrapperRef);
	function OutsideCloser(ref) {
	    useEffect(() => {
	        function ClickOutside(event) {
	            if (ref.current && !ref.current.contains(event.target)) {
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

		<div className='group-container'>
			{
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
							<span className='contact-title'>New Group</span>
							<span className='contact-length'>Add participants</span>
						</div>
						<Search style={{color:'#FFF',marginLeft:'auto'}} onClick={toggleSearch}/>
					</div>
			</div>
			}
			<div className='container'>
				{console.log(arr)}
				{
					(Members)?
					<div className='members-area flex'>
						{
							arr.map((id)=>(
								<div className='member' key={id} onClick={()=>removeFromGroup(id)}>
									<div className='member-image-container chat-profile'>	
										<img src={(list.filter(item=>item.id===id))[0].profile} alt='AB' className='chat-profile-image member-image' loading='lazy'/>
									</div>
									<span className='close'>
											<Close style={{color:'#FFF',fontSize:'0.8rem'}}/>
									</span>
									<span className='member-name contact-about'>
										{((list.filter(item=>item.id===id))[0].name.split(' '))[0]}
									</span>
								</div>
							))
						}
					</div>:''
				}
				<div className='contacts'>
						{
							list.map((contact)=>(
								<div className='contact-wrapper flex' key={contact.id} onClick={()=>addToGroup(contact.id)}>
									<div className='contact-image-container'>
										<img src={contact.profile} alt="AB" className='contact-image'/>
									</div>
									<div >
										<span className='contact-name'>
											{contact.name}
										</span>
										<span className='contact-about'>
											{contact.about}
										</span>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div className='new-icon'>
					<ArrowForward style={{color:'#FFF'}}/>
				</div>
			</div>
	)
}

export default GroupCommponent;