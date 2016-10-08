/**
 * Created by lidy on 2016/10/6.
 */
import React from 'react';
import {
        Link,
} from 'react-router';
import {
        Navbar,
} from 'amazeui-react';

var data = [
        {
                title: '首页',
                link: '/',
                icon: 'home'
        },
        {
                title: '分类',
                link: '/sort/index',
                icon: 'th-large'
        },
        {
                title: '社区',
                link: '/community/list',
                icon: 'globe'
        },
        {
                title: '我的',
                link: '/users/index',
                icon: 'user'
        }
];

const HomeFooter = React.createClass({
        render() {
                return (
                        <Navbar data={data} />
                );
        }
});

export default HomeFooter;
