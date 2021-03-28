import React from 'react';
import { Link } from 'react-router-dom';
import {People,PersonAdd} from '@material-ui/icons';

function ContactsComponent(props){
	let list=props.details;
	return(
		<div className='contacts-container'>
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
								<div className='contact-image-container'>
									<img src={contact.image} alt="AB" className='contact-image'/>
								</div>
								<div className='contact-details-container'>
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
		</div>
	);
}

export default ContactsComponent;