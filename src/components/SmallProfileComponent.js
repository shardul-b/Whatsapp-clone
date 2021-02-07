import React from 'react';
function SmallProfileComponent(props){
	alert(props)
	return(
		<div className='small-profile-block'>
			<div className='small-profile-image'>
				<div className='small-profile-name'></div>
			</div>
			<div className='small-profile-icons-block'>
				<span>{/*Message icon*/}</span>
				{/*
					!props[isGroup]?
					<div className='personal-chat-icons'>
						<span></span>
						<span></span>
					</div>:null
				*/}
			<span>{/*profile info icon*/}</span>
			</div>
		</div>
	);
}
export default SmallProfileComponent;