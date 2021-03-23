import React/*,{useState,useEffect,useRef}*/ from 'react';
//import {Link} from 'react-router-dom';
// import {ArrowBack,PersonAdd,Create,ChevronRight,Search,Lock,Link as LinkIcon,ExitToApp,ThumbDown} from '@material-ui/icons';
import {ArrowBack,PersonAdd} from '@material-ui/icons';
function ProfileComponent(props){
	let list=props.profiles;
	return(
		<div className='profile-details'>
			<div className='profile-header'>
				<div className='container'>
					<div className='profile-header-icons flex-space'>
						<ArrowBack/>
						<PersonAdd/>
					</div>
				</div>

				<img src={list.profile} alt={list.name} className='profile-header-image'/>
			</div>
			<div className='some-dev container'>
				
			</div>

		</div>
	);
}
/*window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("profile-header-image")[0].style.width= "80%";
  } else {
    document.getElementsByClassName("profile-header-image")[0].style.width = "100%";
  }
} */
export default ProfileComponent;