import React,{Component} from 'react';
import Dropdown from './DropdownComponent';
import Search from './SearchComponent';
class TopComponent extends Component{
	constructor(){
		super()
		this.state={
			option:[
				{
					id:0,
					title:'New group',
					key:'option'
				},
				{
					id:1,
					title:'New broadcast',
					key:'option'	
				},
				{
					id:2,
					title:'WhatsApp Web',
					key:'option'	
				},
				{
					id:3,
					title:'Starred messages',
					key:'option'	
				},
				{
					id:4,
					title:'Payments',
					key:'option'	
				},
				{
					id:5,
					title:'Settings',
					key:'option'	
				},
			]
		}
	}
	render(){
		return(
			<div className='top'>
				<div className='container'>
					<div className='flex-space title-icon'>
						<span className='title'>WhatsApp</span>
						<div className='icons-container flex-space'>
							<Search/>
							{/**/}
						{/*Dropdpwn menu*/}
							<Dropdown  
							  list={this.state.option}
							/>
							
						</div>
					</div>
				</div>
				<div className='options flex-space'>
					<div className='option-icon'><span className="fa fa-camera"></span></div>
					<div className="option-value active">CHATS</div>
					<div className='option-value'>STATUS</div>
					<div className='option-value'>CALLS</div>
				</div>
			</div>
		);
	}
}

export default TopComponent;