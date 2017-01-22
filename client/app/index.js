import React from 'react'
import {render} from 'react-dom'
import {Router, Link, browserHistory, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
require('./stylesheets/stylesheet.scss')

//components
import store, {history} from './store.js'
import MainWrapper from './components/mainwrapper.js'
import Landing from './components/landing.js'
import Projects from './components/projects.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import  Simple from './components/3dTest.js'

const Root = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/THREE" component={Simple} />
			<Route path="/" component={MainWrapper}>
				<IndexRoute component={Landing} />
				<Route path="/projects" component={Projects} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="*" component={Landing} />
			</Route>
		</Router>
	</Provider>
)

render(Root, document.getElementById('app'))