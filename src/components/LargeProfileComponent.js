import React from 'react';
import  {Link} from 'react-router-dom';
import { ArrowBack,Create,Share } from '@material-ui/icons';
function LargeProfileComponent(props){
	let list=props.profile;
	return(	
		<div className='large-profile flex'>
			<div className='profile-top'>
				<div className='container flex-space'>
					<Link to='/chats'>
						<ArrowBack className='flex' style={{fontSize : '1.5em'}}/>
					</Link>
					<span className='profile-name'>
						{list.isGroup?'Group icon':list.name}
					</span>
					{
						list.isGroup?
						<div className='group-icons flex-space'>
							<Create style={{fontSize : '1.5em'}} className='flex'/>
							<Share style={{fontSize : '1.5em'}} className='flex'/>
						</div>
						:null
					}
				</div>
			</div>
			<div className='profile-image-large'>
				<img src={list.profile} alt={list.name}/>
			</div>
		</div>
	);
}
export default LargeProfileComponent;