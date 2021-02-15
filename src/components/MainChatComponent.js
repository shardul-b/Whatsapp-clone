import React from 'react';
import {EmojiEmotionsOutlined,AttachFileOutlined,PhotoCamera,Mic} from '@material-ui/icons';
function MainChatComponent(Props){
	return(
		<div className='chat-profile-section'>
			<div className='chat-profile-top'>
				
			</div>
			<div className='messages-section'>
				<div className='bottom-wrapper flex-space'>	
					<div className='input-box-container'>
						<div className='container flex-space'>
							<EmojiEmotionsOutlined style={{color:'gray'}}/>
							<input type="text" placeholder='Type a message' className='message-box'/>
							<AttachFileOutlined style={{color:'gray', transform:'rotate(-45deg)'}}/>
							<PhotoCamera style={{color:'gray'}}/>
						</div>
					</div>
					<div className='voice-wrapper'>
						<Mic style={{color:'#FFF'}}/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default MainChatComponent;