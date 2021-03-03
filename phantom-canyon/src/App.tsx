import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button className="custom">Hello</Button>
        <Button onClick={(e)=> {e.preventDefault(); alert('Hello')}} btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Large</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank"> Hello Baidu Link </Button>
        <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com"> Hello Baidu Link </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
