import {createStore} from 'redux';
var initState = {
	def:{dy:1,peo:1,lx:1,date:1,link:1},
	movies:[],
	showMovies:[],
	movieCount:4,
	coming:[],
	showComings:[],
	comingCount:4,
	currentCity:'深圳',
	navShow:{display:'none'},
	bannerImage:['./images/11.jpg','./images/22.jpg','./images/33.jpg','./images/44.jpg'],
	Hot_p:{display:'none'},
	Hot_load:{display:'none'},
	Hot_more:{display:'block'},
	loadImage:'./images/load.gif',
	Come_p:{display:'none'},
	Come_load:{display:'none'},
	Come_more:{display:'block'}
}
var reducer = function(state = initState , action){
	switch(action.type){
		case 'movie_add':
			state['movies'] = action.ms;
			return state;
		case 'coming_add':
			state['coming'] = action.ms;
			return state;
		case 'show_movie':
			state['showMovies'] = action.nms;
			state['movieCount'] = action.count;
			return state;
		case 'show_coming':
			state['showComings'] = action.nms;
			state['comingCount'] = action.count;
			return state;
		case 'nav_toggle':
			state['navShow'] = action.content;
			return state;
		case 'hot_add':
			state['Hot_load'] = action.show;
			state['Hot_more'] = action.hide;
			return state;
		case 'hot_no':
			state['Hot_load'] = action.hide;
			state['Hot_p'] = action.show;
			return state;
		case 'hot_adding':
			state['showMovies'] = action.content;
			state['Hot_load'] = action.hide;
			state['Hot_more'] = action.show;
			state['movieCount'] = action.count;
			return state;
		case 'come_add':
			state['Come_load'] = action.show;
			state['Come_more'] = action.hide;
			return state;
		case 'come_no':
			state['Come_load'] = action.hide;
			state['Come_p'] = action.show;
			return state;
		case 'come_adding':
			state['showComings'] = action.content;
			state['Come_load'] = action.hide;
			state['Come_more'] = action.show;
			state['comingCount'] = action.count;
			return state;
		case 'city_chg':
			state['currentCity'] = action.city;
			return state;
		default :
			return state;
	}
}


var store = createStore(reducer) 

store.subscribe(function(t){

})
module.exports = store;