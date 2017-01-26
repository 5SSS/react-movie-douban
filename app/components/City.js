import React from 'react';
import { hashHistory  } from 'react-router';
var city = require('../src/all.js');
export default class City extends React.Component{
	render(){
		const that = this;
		return (
			<div className="city">
				<p className="city-title">热门城市</p>
				<div className="city-wrap">
					<ul>
						<li>北京</li>
						<li>上海</li>
						<li>广州</li>
						<li>深圳</li>
					</ul>
				</div>
				<p className="city-title">按字母排序</p>
				<div className="city-wrap">
					<ul>
					{	
						city.map(function(item){
							return(
								<li key={item.title+'c'}><a href={'#'+item.title} >{item.title}</a></li>
							)
						})
					}
					</ul>
				</div>
				{
					city.map(function(item){
						return(
							<div key={item.title+'b'}>
								<a href="javascript:;" name={item.title}></a>
								<p className="city-title">{item.title}</p>
								<div className="city-wrap">
									<ul>
									{
										item.city.map(function(ct){
											return(
												<li key={ct+'x'} onClick={that.changeCity.bind(that)}>{ct}</li>
											)
										})
									}
									</ul>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
	componentDidMount() {
	    const { store } = this.context;
	    this.unsubscribe = store.subscribe(() =>
	      this.forceUpdate()
	    );
  	}
  	componentWillUnmount() {
    	this.unsubscribe();
  	}
	changeCity(event){
		const { store } = this.context;
		var action = {
			type:'city_chg',
			city:event.target.innerHTML
		}
		store.dispatch(action);
		hashHistory .push('/');
	}
}
City.contextTypes = {
  store: React.PropTypes.object
}