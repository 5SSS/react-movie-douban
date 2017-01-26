import React from 'react';
require('../src/swiper.js');
export default class Banner extends React.Component{
	render(){
		const { store } = this.context;
    	const state = store.getState();
		return(
			<div className="swiper-wrap">
				<div className="swiper-container">
				    <div className="swiper-wrapper">
				        {
				        	state.bannerImage.map(function(item,index){
				        		return(
				        			<div className="swiper-slide " key={index}>
				        					<img src={item} />
				        			</div>
				        		)
				        	})
				        }
				    </div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:3000
		});
	}
}
Banner.contextTypes = {
  store: React.PropTypes.object
}