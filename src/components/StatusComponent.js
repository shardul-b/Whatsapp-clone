import React,{useState} from 'react';
function StatusComponent(props){
	let list=props.StatusDetails;
	//console.log(list);
	return(
		<div className='status-container'>
			<div className='my-status section'>
				
			</div>
			<div className='recent-wrapper wrapper'>
				<div className='container'>
					Recent updates
				</div>
			</div>
			<div className='recent-status'>
				<div className='container'>
				{
					list.map((value)=>
						(value.viewed.includes(false) && !value.muted)?
							<div className='recent-status-block status-block flex'>
								<div className='recent-status-image status-image' key={value.id} style={{backgroundImage : `url(${value.stories[1]})`}}>
								</div>
								<div className='recent-status-details status-details'>
									<span className='recent-name status-profile-name'>{value.name}</span>
									<div className='recent-day-time day-time flex'>
										<span className='recent-day status-day'>{value.day[value.day.length-1]}, </span>
										<span className='recent-time status-time'>{value.time[value.time.length-1]}</span>
									</div>
								</div>
							</div>
							:null
					)
				}
				</div>
			</div>
			<div className='viewed-wrapper wrapper'>
				<div className='container'>
					Viewed updates
				</div>
			</div>
			<div className='viewed-status'>
				<div className='container'>
					{
						list.map((value)=>
							(value.viewed.every(e=>e===true) && !value.muted )?
								<div className='viewed-status-block status-block flex'>
									<div className='viewed-status-image status-image' key={value.id} style={{backgroundImage : `url(${value.stories[1]})`}}>
									</div>
									<div className='viewed-status-details status-details'>
										<span className='viewed-name status-profile-name'>{value.name}</span>
										<div className='viewed-day-time day-time flex'>
											<span className='viewed-day status-day'>{value.day[value.day.length-1]}, </span>
											
											<span className='viewed-time status-time'>&nbsp;{value.time[value.time.length-1]}</span>
										</div>
									</div>
								</div>
								:null
						)
					}
				</div>
			</div>
			<div className='muted-wrapper wrapper'>
				<div className='container'>
					Muted updates
				</div>
			</div>
			<div className='muted-status'>
				<div className='container'>
					{
						list.map((value)=>
							(value.muted)?
								<div className='muted-status-block status-block flex'>
									<div className='muted-status-image status-image' key={value.id} style={{backgroundImage : `url(${value.stories[1]})`}}>
									</div>
									<div className='muted-status-details status-details'>
										<span className='muted-name status-profile-name'>{value.name}</span>
										<div className='muted-day-time day-time flex'>
											<span className='muted-day status-day'>{value.day[value.day.length-1]}, </span>
											<span className='muted-time status-time'>&nbsp;{value.time[value.time.length-1]}</span>
										</div>
									</div>
								</div>
								:null
						)
					}
				</div>
			</div>
		</div>
	);
}
export default StatusComponent;