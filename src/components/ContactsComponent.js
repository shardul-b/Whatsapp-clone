import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {People,PersonAdd,Help,Share} from '@material-ui/icons';
import Chat from './MainChatComponent';
import SmallProfile from './SmallProfileComponent';
import {CHATS} from '../Shared/chats';
function ContactsComponent(props){
	let list=props.details;
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
	return(
		
		<div className='contacts-container'>
			{
				(isProfileOpen)?
				<div className='small-profile-back'>
					<div ref={wrapperRef}>
						<SmallProfile profiles={CHATS.filter((profile)=>profile.id===parseInt(idExists, 10))[0]}/>
					</div>
				</div>
					:	
				''
			}
			<div className='container'>
				<Link to={'/group'}>
					<div className='new-group contact-wrapper flex'>
						<div className='contact-image-container new-group-image-container'>
							<People style={{color:'#FFF',fontSize: '1.2rem'}} className='contact-image new-group-image'/>
						</div>
						<div className='contact-details-container'>
							<span className='contact-name'>
								New group 
							</span>
						</div>
					</div>
				</Link>
				<div className='new-contact contact-wrapper flex'>
					<div className='contact-image-container new-contact-image-container'>
						<PersonAdd style={{color:'#FFF',fontSize: '1.2rem'}} className='contact-image new-contact-image'/>
					</div>
					<div className='contact-details-container'>
						<span className='contact-name'>
							New contact
						</span>
						{/*QR CODE*/}
					</div>
				</div>
				<div className='contacts'>
					{
						list.map((contact)=>(
							<div className='contact-wrapper flex' key={contact.id}>
									<div className='contact-image-container' onClick={()=>smallprofile(contact.id)}>
										<img src={contact.profile} alt="AB" className='contact-image'/>
									</div>
								<Link to={`/mainchat/${contact.id}`} className='contact-details-container'>
									<div >
										<span className='contact-name'>
											{contact.name}
										</span>
										<span className='contact-about'>
											{contact.about}
										</span>
									</div>
								</Link>
							</div>
						))
					}
				</div>
				<div className='invite-contact contact-wrapper flex'>
					<div className='contact-image-container new-group-image-container invite-container'>
						<Share style={{color:'gray'}} className='contact-image'/>
					</div>
					<div className='contact-details-container invite'>
						<span className='contact-name'>
							Invite friends
						</span>
					</div>
				</div>
				<div className='help-contact contact-wrapper flex'>
					<div className='contact-image-container new-group-image-container help-container'>
						<Help style={{color:'gray'}} className='contact-image'/>
					</div>
					<div className='contact-details-container help'>
						<span className='contact-name'>
							Contacts help
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactsComponent;