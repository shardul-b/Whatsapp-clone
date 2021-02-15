import React from 'react';
import { Phone,Videocam,CallReceived,CallMissed,AddIcCall,CallMade } from '@material-ui/icons';
import { Link } from 'react-router-dom';
function CallComponent(props){
	const list=props.CallDetails;
	return(
		<div>
			<div className='callSection'>
			 	<div className='container'>
				{
					(list.length>0)?
						list.map((val)=>(
							<div className='chat-block flex' key={val.id}>
								<div className='chat-profile'>
									<Link to={`/smallprofile/${val.id}`}>	
										<img src={val.profile} alt={val.name.match(/[A-Z]/g).join('')} className='chat-profile-image' loading='lazy'/>
									</Link>
								</div>
								
								<div className='call-details chat-message-details'>
									<Link to={`/calldetails/${val.id}`}>
										<div className='call-name-phone flex-space'>
											<span className='chat-name'>
												{val.name}
											</span>
											<Phone/>
										</div>
										<div className='call-time-details flex'>
											{
												(val.missed)?<CallMissed style={{fontSize: '1rem',color:'red'}}/>:(val.received)?<CallReceived style={{color:'green',fontSize: '1rem'}}/>:(val.rejected)?<CallReceived style={{color:'red',fontSize: '1rem'}}/>:(!val.received)?<CallMade style={{color:'green',fontSize: '1rem'}}/>:null
											}
											<span className='chat-message call-time'>
												{val.lastCallTime}
											</span>
											
										</div>
									</Link>
								</div>
							</div>
						)):null
				}
				</div>
						{ /*
		For Camera: 
		<input type="file" accept="image/*" capture="environment"/>
		*/}
				
				
			</div>
			<div className='new-call-icon'>
				<AddIcCall style={{color:'#FFF'}}/>
			</div>
		</div>
				

	);
}
export default CallComponent;