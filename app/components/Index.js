import React from 'react';
import Nav from './Nav.js';
export default class Index extends React.Component{
	render(){
		return(
			<div className="main">
				<Nav />
				{this.props.children}
			</div>
		)
	}
	componentDidMount(){
		const { store } = this.context;
	    this.unsubscribe = store.subscribe(() =>
	      this.forceUpdate()
	    );
		require('../src/jquery.js');
		//热映
		$.ajax({
			url:'https://api.douban.com/v2/movie/in_theaters',
			data:{
			    start: 0,
			    count: 20
			},
			dataType:'jsonp',
			success:function(data){
				var movies = [];
				var dataList = data.subjects;
				for(var i=0;i<dataList.length;i++){
					var movie = {};
					movie.dy='';
					movie.peo='';
					movie.lx ='';
					for(var a=0;a<dataList[i].directors.length;a++){
						movie.dy += dataList[i].directors[a].name+" "
					}
					for(var a=0;a<dataList[i].casts.length;a++){
						movie.peo += dataList[i].casts[a].name+" "
					}
					for(var a=0;a<dataList[i].genres.length;a++){
						movie.lx += dataList[i].genres[a]+" "
					}
					movie.image = dataList[i].images.large;
					movie.pf = dataList[i].rating.average;
					movie.name = dataList[i].title;
					movie.date = dataList[i].year;
					movie.key = i;
					movie.link = dataList[i].alt;
					movie.count = dataList[i].collect_count;
					movies.push(movie);
				}
				store.dispatch({
					type:'movie_add',
					ms:movies
				});
				var state = store.getState();
				var newms = [];
				for(var i=0;i<state.movieCount;i++){
					newms.push(state.movies[i]);
				}
				store.dispatch({
					type:'show_movie',
					nms:newms,
					count:state.movieCount+4
				})
			}
		});
		//即将上映
		$.ajax({
			url:'https://api.douban.com/v2/movie/coming_soon',
			data:{
			    start: 0,
			    count: 20
			},
			dataType:'jsonp',
			success:function(data){
				var comings = [];
				var dataList = data.subjects;
				for(var i=0;i<dataList.length;i++){
					var movie = {};
					movie.dy='';
					movie.peo='';
					movie.lx ='';
					for(var a=0;a<dataList[i].directors.length;a++){
						movie.dy += dataList[i].directors[a].name+" "
					}
					for(var a=0;a<dataList[i].casts.length;a++){
						movie.peo += dataList[i].casts[a].name+" "
					}
					for(var a=0;a<dataList[i].genres.length;a++){
						movie.lx += dataList[i].genres[a]+" "
					}
					movie.image = dataList[i].images.large;
					movie.pf = dataList[i].rating.average;
					movie.name = dataList[i].title;
					movie.date = dataList[i].year;
					movie.key = i;
					movie.link = dataList[i].alt;
					movie.count = dataList[i].collect_count;
					comings.push(movie);
				}
				store.dispatch({
					type:'coming_add',
					ms:comings
				});
				var state = store.getState();
				var newms = [];
				for(var i=0;i<state.comingCount;i++){
					newms.push(state.coming[i]);
				}
				store.dispatch({
					type:'show_coming',
					nms:newms,
					count:state.comingCount+4
				})
			}
		})


	}
}
Index.contextTypes = {
  store: React.PropTypes.object
}