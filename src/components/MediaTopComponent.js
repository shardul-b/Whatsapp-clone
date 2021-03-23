import React,{useState,useEffect,useRef} from 'react';
import {Link,NavLink} from 'react-router-dom';
import {ArrowBack} from '@material-ui/icons';
function MediaTopComponent(props){
	let profileDetails=props.profile;
	return(
		<div className='media-top-component'>
			<div className='top media-top'>
				<div className='flex title-icon'>
					<ArrowBack/>
					<span className='title'>{profileDetails.name}</span>
				</div>
				<div className='options flex-space'>
					<NavLink to={`/media/${profileDetails.id}`} activeClassName='active' className='option-value'><div className='option-value-text'>MEDIA</div></NavLink>
					<NavLink to='/documents' activeClassName='active' className='option-value'><div className='option-value-text'>DOCS</div></NavLink>
					<NavLink to='/links' activeClassName='active' className='option-value'><div className='option-value-text'>LINKS</div></NavLink>
				</div>
			</div>
		</div>
	);
}
export default MediaTopComponent;