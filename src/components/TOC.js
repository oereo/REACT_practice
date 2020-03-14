import React, { Component } from 'react';

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html"></a>HTML</li>
                    <li><a href="2.html"></a>CSS</li>
                    <li><a href="3.html"></a>JavaScript</li>

                </ul>
            </nav>
            // 하나의 최상의 태그만 사용해야 한다.
        );
    }
}

export default TOC;