import React,{useState, useRef, useEffect} from 'react';
function SearchComponent(){
	// States for Search toggle and cross icon toggle
	const [isSearchOpen,setSearch]=useState(false);
	const [isUserTyping,setVisible]=useState(false);
	/*Create Ref for detacting clicks outside Search*/
	const wrapperRef = useRef(null);
    useOutsideCloser(wrapperRef);
	function toggleSearch(){
	   setSearch(true);
	}
	function closeSearch(){
		setSearch(false);
	}
	/*For Closing Search when clicked outside of search area*/
	function useOutsideCloser(ref) {
	    useEffect(() => {
	        function ClickOutside(event) {
	            if (ref.current && !ref.current.contains(event.target)) {
	            	closeSearch();
	            }
	        }
	        // Bind the event listener
	        document.addEventListener("mousedown", ClickOutside);
	        return () => {
	            // Unbind the event listener on clean up
	            document.removeEventListener("mousedown", ClickOutside);
	        };
	    }, [ref]);
	}
	/*For Visibility of cross*/
	function toggleVisibility(){
		let inp=document.getElementsByClassName('searchInput')[0].value;
		inp.length>0?setVisible(true):setVisible(false);
	}
	//Erase content in search
	function eraseText(){
		document.getElementsByClassName('searchInput')[0].value='';
	}
	return(
		<div className='searchWrapper' ref={wrapperRef}>
			<span className='fa fa-search search-button' onClick={toggleSearch}></span>	
		{(isSearchOpen)&&( 
			<div role='search' className='advanceSearch'>
				
				<div className='searchArea flex'>
					<div className='container'>
						<span className='fa fa-arrow-left' onClick={closeSearch}></span>
						<input type='search' placeholder='Search...' className='searchInput' onInput={toggleVisibility}/>
						{isUserTyping?<span className='fa fa-close eraseAll' onClick={eraseText}></span>:null}					
					</div>
				</div>
				<div className='container'>
					<div className='searchOptions' >
						<div className='searchOption flex'>
							<span className='option-icon fa fa-image'></span>
							<span className='option-text'>Photos</span>
						</div>
						<div className='searchOption flex'>
							<span className='option-icon fa fa-video-camera'></span>
							<span className='option-text'>Videos</span>
						</div>
						<div className='searchOption flex'>
							<span className='option-icon fa fa-link'></span>
							<span className='option-text'>Links</span>
						</div>
						<div className='searchOption flex'>
							<span className='option-icon fa fa-gif'></span>
							<span className='option-text'>GIFs</span>
						</div>
						<div className='searchOption flex'>
							<span className='option-icon fa fa-music'></span>
							<span className='option-text'>Audio</span>
						</div>
						<div className='searchOption flex'>
							<span className='option-icon fa fa-file'></span>
							<span className='option-text'>Documents</span>
						</div>
					</div>
				</div>
			</div>
			)
		}
		</div>
		//const {Search} = this.state;
	);
}

export default SearchComponent;