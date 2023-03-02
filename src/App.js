import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LickButton from './components/LickButton.js';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const [inputActive, setInputActive] = useState(false)
  return (
    <div className="App container-fluid px-0">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        demo演示：
      </header> */}
      <LickButton />

      <div className='container'>
        <div className='row'>
          <div className='col-6 file-search'>
            {/* flex布局:内容两点对齐+子元素水平居中 */}

            {!inputActive && <div>
              <span>我的云文档</span>
              <button type='button' className='btn btn-primary' onClick={() => { setInputActive(true) }}>搜索</button>
            </div>}

            <div className='d-flex justify-content-between align-items-center'>
              {inputActive && <div>
                <input className='file-content-input' value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button type='button' className='btn btn-primary' onClick={() => { setInputActive(false) }}>关闭</button>
              </div>}

            </div>
            <button type='button' className='btn btn-primary'>新建</button>
            <button className='btn btn-success'>导入</button>
          </div>
          <div className='col-6 editor-container'>col-6：right
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
