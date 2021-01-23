import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Hello from './Hello';


class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub} 
        {/* refactoring 작업 */}
      </header>
      // 하나의 최상의 태그만 사용해야 한다.
    );
  }
}

// class TOC extends Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li><a href="1.html"></a>HTML</li>
//           <li><a href="2.html"></a>CSS</li>
//           <li><a href="3.html"></a>JavaScript</li>
//         </ul>
//       </nav>
//       // 하나의 최상의 태그만 사용해야 한다.
//     );
//   }
// }

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
        </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title = "WEB" sub = "world wide web!"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
