import React/*,{useState,useEffect,useRef}*/ from 'react';
import {Link} from 'react-router-dom';
// import {ArrowBack,PersonAdd,Create,ChevronRight,Search,Lock,Link as LinkIcon,ExitToApp,ThumbDown} from '@material-ui/icons';
import {ArrowBack,PersonAdd} from '@material-ui/icons';
function ProfileComponent(props){
	let list=props.profiles;
	return(
		<div className='profile-details'>
			<div className='profile-header'>
				<div className='container'>
					<div className='profile-header-icons flex-space'>
						<Link to={'/chats'}>
							<ArrowBack/>
						</Link>
					{/*Only for groups*/}
						<PersonAdd/>
					</div>
				</div>
				<div className='profile-header-image-container' style={{backgroundImage : `url(${list.profile})`}}>
					<span className='profile-header-name'>{list.name}</span>
				</div>
			</div>	
			
				{/*<img src={list.profile} alt={list.name} className='profile-header-image'/>*/}
			<div className='some-dev container'>
				
			</div>

		</div>
	);
}
window.onscroll = ()=> {
	let scrollVal=document.body.scrollTop||document.documentElement.scrollTop;
	let scrollBVal=document.body.scrollBottom||document.documentElement.scrollBottom;
  let headerRef=document.getElementsByClassName("profile-header-image-container")[0];
  let h=headerRef.offsetHeight;
  // console.log(h)
  if (scrollVal>100) {
  	console.log(scrollVal)
    headerRef.classList.add('profile-header-fixed');
  }else {
  	headerRef.classList.remove('profile-header-fixed');
  }
	//scrollFunction()
};
 
export default ProfileComponent;