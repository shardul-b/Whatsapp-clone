import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {People,PersonAdd} from '@material-ui/icons';
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
	return(
		
		<div className='contacts-container'>
			{
				(isProfileOpen)?
				<SmallProfile profiles={CHATS.filter((profile)=>profile.id===parseInt(idExists, 10))[0]}/>:
				''
			}
			<div className='container'>
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
								<Link to={`/mainchat/${contact.id}`}>
									<div className='contact-details-container'>
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
			</div>
		</div>
	);
}

export default ContactsComponent;