import React from 'react';
export default class Film extends React.Component{
	render(){
		var pg = this.props.params.id;
		pg = pg.split('-');
		const { store } = this.context;
		const state = store.getState();
		var movie = state.def;
		if(state.movieCount!=4){
			if(pg[1]=='now'){
				//热映
				movie = state.movies[pg[0]];
			}else{
				//即将
				movie = state.coming[pg[0]];
			}
		}
		return (
			<div className="film">
				<div className="film-img">
					<img src={"./images/1.jpg"} />
				</div>
				<div className="film-trck">
					影片简介
				</div>
				<div className="film-row">
					<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 : </span><span>{movie.dy}</span>
				</div>
				<div className="film-row">
					<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 : </span><span>{movie.peo}</span>
				</div>
				<div className="film-row">
					<span>地区语言 : </span><span>英语|国语</span>
				</div>
				<div className="film-row">
					<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型 : </span><span>{movie.lx}</span>
				</div>
				<div className="film-row">
					<span>上映日期 : </span><span>{movie.date}</span>
				</div>
				<p className="film-txt">该部影片还没上映就受到广大影迷的期待，真是可喜可贺，影片剧情紧凑合理，演员表演到位，故事内容和情节都无可挑剔，是一部竞争奥斯卡的好电影，好了我实在编不下去了，豆瓣api没有电影详细。。。</p>
				<a href={movie.link} className="film-buy">立即购票</a>
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
	
}
Film.contextTypes = {
  store: React.PropTypes.object
}