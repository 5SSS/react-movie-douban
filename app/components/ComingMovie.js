import React from 'react';
export default class ComingMovie extends React.Component{
	render(){
		const { store } = this.context;
    	const state = store.getState();
		return(
			<div>
				{this.getLine()}
				<div className="comemovie">
					{
						state.showComings.map(function(item){
							return(
								<a href={"#/film/"+item.key+'-wil'} className="list" key={item.key}>
									<div className="film-img"><img src={item.image} /></div>
									<div className="list-txt">
										<div className="list-left">
											<p className="txt-title">{item.name}</p>
											<p className="txt-content">{item.count}人关注</p>
										</div>
									</div>
								</a>
							)
						})
					}
					{this.getButton()}
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
  	componentWillUnmount() {
    	this.unsubscribe();
  	}
  	getLine(){
  		const { store } = this.context;
    	const state = store.getState();
    	if(state.showComings.length !=0){
    		return(
    			<div className="fenge">
					<span>即将上映</span>
				</div>
    		)
    	}
  	}
  	getButton(){
  		const { store } = this.context;
    	const state = store.getState();
    	if(state.showComings.length !=0){
    		return(
					<div className="load-wrap">
						<p style={state.Come_p} >没数据了</p>	
						<img src={state.loadImage} style={state.Come_load} />
						<a href="javascript:;" style={state.Come_more} onClick={this.addList.bind(this)}>更多即将上映电影</a>
					</div>
    		)
    	}
  	}
	addList(){
		const { store } = this.context;
		const state = store.getState();
		var that = this;
		var action = {
			type:'come_add',
			show:{display:'block'},
			hide:{display:'none'}
		}
		store.dispatch(action);
		//延迟加载
		setTimeout(function(){
			if(state.comingCount>=20){
				var action = {
					type:'come_no',
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
		var count = state.comingCount;
		var lists = [];
		for(var i=0;i<count;i++){
			lists.push(state.coming[i]);
		}
		var action ={
			type:'come_adding',
			content:lists,
			show:{display:'block'},
			hide:{display:'none'},
			count:state.comingCount+4
		}
		store.dispatch(action)
	}
}
ComingMovie.contextTypes = {
  store: React.PropTypes.object
}