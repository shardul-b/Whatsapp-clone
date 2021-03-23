import React,{useState,useEffect,useRef} from 'react';
import {Link,NavLink} from 'react-router-dom';
import {ArrowBack} from '@material-ui/icons';
function MediaComponent(props){
	let media=props.content;
	let dateObj=new Date();
	return(
		<div className='media-component'>
			<div className='media-date-text'>
				RECENT
			</div>
			{
				media.map((details)=>(
					//console.log(details.link)
					(details.date.split('/')[0]-dateObj.getDate()<=7)?
						<div className='recent-media-container media-container'>
							<img src={details.link} alt="image" />
						</div>
						:
						(details.date.split('/')[0]-dateObj.getDate()<=14)?
						<div className='media-date-text'>
							LAST WEEK
						</div>
						:
						(details.date.split('/')[0]-dateObj.getDate()<=30)?
						<div className='media-date-text'>
							LAST MONTH
						</div>
						:
						<div className='media-date-text'>
						{new Date(details.date).getMonth()}
						</div>

					/*if(){

					}elseif
					elseif
					else
					*/
				))
			}	
		</div>
	);
}
export default MediaComponent;