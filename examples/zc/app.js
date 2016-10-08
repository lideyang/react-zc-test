/**
 * Created by lidy on 2016/10/5.
 */
//es6引用模块
import React from 'react';
import {render} from 'react-dom';
import {
        Router,
        Route,
        IndexRoute,
        hashHistory,
} from 'react-router';
import {
        Icon,
} from 'amazeui-react';
//公用模块（头部）
import {
        HomeHeader,
        HomeFooter,
} from './components';
//单独页面
import {
        Home,
} from './pages';
//react
var App = React.createClass({
        render() {
                return (
                        <div className="zc-container">
                                <HomeHeader />
                                        {this.props.children}
                                <HomeFooter />
                        </div>
                );
        },
});
//路由
const routes = (
        <Router history={hashHistory}>
                <Route path="/" component={App}>
                        <IndexRoute component={Home} />
                </Route>
        </Router>
);
//生成视图
render(routes, document.getElementById('app-root'));