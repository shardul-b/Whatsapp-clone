import React,{Component} from 'react';
class DropdownComponent extends Component{
	constructor(props){
		super(props)
		this.state={
			isListOpen:false,
		}
	}
	toggleList = () => {
	   this.setState(prevState => ({
	     isListOpen: !prevState.isListOpen
	  }))
	}
	closeList = () => {
	  this.setState({
	    isListOpen: false,
	  });
	}
	componentDidUpdate(){
		const { isListOpen } = this.state;
		setTimeout(() => {
		    if(isListOpen){
		      window.addEventListener('click', this.closeList)
		    }else{
		      window.removeEventListener('click', this.closeList)
		    }
	  	}, 0)
	}
	render(){
		const {isListOpen} = this.state;
		const {list} = this.props;
		return(
			<div className='dropdown-wrapper'>
				<button className='header' onClick={this.toggleList}>
					<span className='fa fa-ellipsis-v'>{/*dots*/}</span>
				</button>
			
			{isListOpen && (
					<div role='list' className='dropdown-list'>
						{
							list.map((item)=>(
								<button
					              className="dropdown-list-item"
					              key={item.id}
					              
					              onClick={(e)=>e.stopPropagation()
					              	//() => this.selectItem(item)
					              }
					            >
					            {item.title}
					            </button>
							))
						}
					</div>
				)
			}
			</div>
		)
	}
}

export default DropdownComponent;