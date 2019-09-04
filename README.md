## helloJoinedBtn

a react component, serveral btns joined together, you can active one of them, and deactive it.


## Install

```bash
npm install hello-joined-btn
```

## Usage

Props:

1.btns, an array of obj, obj contains `text` and `id`, id uesd to identify a btn.

2.disableBtns, an array of obj of string or number, elements of it are the disabled ones.

3.activeBtn, string or number, identify the active one.

4.changeActiveBtn, a func, callback of click a btn.

an example as below

```jsx
import React, { Component } from "react";

import JoinedBtn from "hello-joined-btn";

const charsetArr = [{text: 'utf16', id: '1'}, {text: 'uft8', id: '2'}, {text: 'gb2312', id: '3'}];

class App extends Component {
  state = {
    charset: ''
  }

	change = (val) => {
  	this.setState({charset: val});
	}

  render() {
    return (
      <div>
        <JoinedBtn 
          disableBtns={['2']} 
          btns={charsetArr} 
          activeBtn={this.state.charset} 
          changeActiveBtn={this.change} />
      </div>
    );
  }
}
```
