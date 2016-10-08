import React from 'react';
import {
        Link,
} from 'react-router';
import {
        Header,
} from 'amazeui-react';
var props = {
        title: '众筹首页',
        link: '#title-link',
        data: {
                left: [
                        {
                                link: '#left-link',
                                icon: 'shopping-cart'
                        }
                ],
                right: [
                        {
                                link: '#right-link',
                                icon: 'search'
                        }
                ]
        },
        onSelect: function (nav, e) {
                e.preventDefault();
                console.log('你点击了', nav);
                // do something
        }
};

const HomeHeader = React.createClass({
        render() {
                return (
                        <Header {...props} />
                );
        }
});

export default HomeHeader;
