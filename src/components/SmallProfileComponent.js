import React from 'react';
import  {Link} from 'react-router-dom';
import { InfoOutlined,Phone,Chat,Videocam } from '@material-ui/icons';

function SmallProfileComponent(props){
	let list=props.profiles;
	return(	
		// <Link to={props.link}>
			// <div className='small-profile-back'>
				<div className='small-profile-block'>
					<Link to={`/largeprofile/${list.id}`}>
						<div className='small-profile-image-name'>
							<span className='small-profile-name'>
								{list.name}
							</span>
							<div className='small-profile-image'>
								<img src={list.profile} alt={list.name}/>
							</div>
						</div>
					</Link>
					<div className='small-profile-icons-block'>
						
							{
								!list.isGroup?
								<div className='personal-chat-icons flex-space'>
									<Link to={`/mainchat/${list.id}`} className='flex'>
										<Chat style={{color:'#075E54',fontSize:'1.3em'}}/>
									</Link>
									<Phone style={{color:'#075E54',fontSize:'1.4em'}}/>
									<Videocam style={{color:'#075E54',fontSize:'1.4em'}} />
									<Link to={`/profile/${list.id}`} className='flex'>
										<InfoOutlined style={{color:'#075E54',fontSize:'1.4em'}}/>{/*profile info icon*/}
									</Link>
								</div>:
								<div className='container flex-space group-chat-icons'>
									<Link to={`/mainchat/${list.id}`} className='flex'>
										<Chat style={{color:'#075E54',fontSize:'1.3em'}}/>
									</Link>
									<Link to={`/profile/${list.id}`} className='flex'>
										<InfoOutlined style={{color:'#075E54',fontSize:'1.4em'}}/>{/*profile info icon*/}
									</Link>
								</div>
							}
					</div>
				</div>
			// </div>
		// </Link>
	);
}
export default SmallProfileComponent;