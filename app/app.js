import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import {connect,Provider} from 'react-redux';
import Index from './components/Index.js';
import Home from './components/Home.js'
const City = (location, cb) => {
require.ensure([], require => {
    cb(null, require('./components/City.js').default)
},'City')
}
const Film = (location, cb) => {
require.ensure([], require => {
    cb(null, require('./components/Film.js').default)
},'Film')
}
const User = (location, cb) => {
require.ensure([], require => {
    cb(null, require('./components/User.js').default)
},'User')
}
var store = require('./store/Store.js');
const App = connect(
	mapState
)(Index);
function mapState(){
	return {
		ss:store.getState()
	}
}

render(
	<Provider store={store}>
	    <Router history={hashHistory}>
		    <Route path="/" component={App} >
		    	<IndexRoute component={Home}/>
		    	<Route path="/city" getComponent={City}/>
		    	<Route path="/film/:id" getComponent={Film}/>
		    	<Route path="/user" getComponent={User}/>
		    </Route>
	    </Router>
	</Provider>
	,
	document.getElementById("app")
	)