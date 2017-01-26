import React from 'react';
export default class HotMovieList extends React.Component{
	render(){
		const { store } = this.context;
    	const state = store.getState();
		return(
			<div className="list-wrap">
				{
					state.showMovies.map(function(item){
						return(
							<a href={"#/film/"+item.key+'-now'} className="list" key={item.key}>
								<div className="film-img"><img src={item.image} /></div>
								<div className="list-txt">
									<div className="list-left">
										<p className="txt-title">{item.name}</p>
										<p className="txt-content">{item.count}人购票</p>
									</div>
									<span className="list-fen">{item.pf}</span>
								</div>
							</a>
						)
					})
				}
				{this.getButton()}
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
  	getButton(){
  		const { store } = this.context;
    	const state = store.getState();
    	if(state.showMovies.length==0){
    		return (
    			<div className="movie-load">
    				<img src="./images/movie-load.gif" />
    			</div>
    		)
    	}else{
    		return(
    			<div className="load-wrap">
					<p style={state.Hot_p} >没数据了</p>	
					<img src={state.loadImage} style={state.Hot_load} />
					<a href="javascript:;" style={state.Hot_more} onClick={this.addList.bind(this)}>更多热映电影</a>
				</div>
    		)
    	}
  	}
	addList(){
		const { store } = this.context;
		const state = store.getState();
		var that = this;
		var action = {
			type:'hot_add',
			show:{display:'block'},
			hide:{display:'none'}
		}
		store.dispatch(action);
		//延迟加载
		setTimeout(function(){
			if(state.movieCount>=20){
				var action = {
					type:'hot_no',
					show:{display:'block'},
					hide:{display:'none'}
				}
				store.dispatch(action);
			}else{
				that.addMovie(store);
			}
			
		},2000)
	}
	addMovie(store){
		var state = store.getState();
		var count = state.movieCount;
		var lists = [];
		for(var i=0;i<count;i++){
			lists.push(state.movies[i]);
		}
		var action ={
			type:'hot_adding',
			content:lists,
			show:{display:'block'},
			hide:{display:'none'},
			count:state.movieCount+4
		}
		store.dispatch(action)
	}
}
HotMovieList.contextTypes = {
  store: React.PropTypes.object
}