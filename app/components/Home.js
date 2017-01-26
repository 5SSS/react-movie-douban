import React from 'react';
import Banner from './Banner.js';
import HotMovieList from './HotMovieList.js';
import ComingMovie from './ComingMovie.js';
export default class Home extends React.Component{
	render(){
		return(
			<div>
				<Banner />
				<HotMovieList />
				<ComingMovie />
			</div>
		)
	}	
}
