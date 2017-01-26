import React from 'react';

export default class Nav extends React.Component{
	render(){
		const { store } = this.context;
    	const state = store.getState();
		return (
		<div>
			<div className="nav">
				<div className="nav_btn" onClick={this.fade.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<span className="nav_title">羊驼电影</span>
				<a href="#/city" className="nav_city"><span>{state.currentCity}</span><i></i></a>
				<a href="#/user" className="nav_user"></a>
			</div>
			<div className="nav-wrap" style={state.navShow}>
				<div className="ul-wrap" >
					<div className="ul-cont" onClick={this.fade.bind(this)}>
						<ul>
							<li><a href="#">首页</a></li>
							<li><a href="#">影片</a></li>
							<li><a href="#">影院</a></li>
							<li><a href="#">我的</a></li>
							<li><a href="#">卖座卡</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		)
	}
	componentDidMount() {
	    const { store } = this.context;
	    this.unsubscribe = store.subscribe(() =>
	      this.forceUpdate()
	    );
  	}
	fade(){
		const { store } = this.context;
    	const state = store.getState();
		if(state.navShow.display=='none'){
			store.dispatch({
				type:'nav_toggle',
				content:{display:'block'}
			})
		}else{
			store.dispatch({
				type:'nav_toggle',
				content:{display:'none'}
			})
		}
		
	}
}
Nav.contextTypes = {
  store: React.PropTypes.object
}