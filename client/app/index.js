import React from 'react'
import {render} from 'react-dom'
import {Router, Link, browserHistory, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
require('./stylesheets/windows_styles.scss')

//components
import store, {history} from './store.js'
import MainWrapper from './components/mainwrapper.js'

const Root = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={MainWrapper}>
				<Route path="*" component={MainWrapper} />
			</Route>
		</Router>
	</Provider>
)

render(Root, document.getElementById('app'))