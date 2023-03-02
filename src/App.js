import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LickButton from './components/LickButton.js';
import FileSearch from './components/FileSearch.js';

import {useState} from 'react';
import {objToArr} from './utils/helper';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [files,setFiles]= useState({})
  const filesArr = objToArr(files)

  const createNewFile = () => {
    const newID = uuidv4()
    const newFile = {
      id: newID,
      title: '',
      body: '## 请输出 Markdown',
      createdAt: new Date().getTime(),
      isNew: true,
    }
    setFiles({ ...files, [newID]: newFile })
  }
  const fileSearch = (kwd)=>{
    const newFiles = filesArr.filter(file=>file.title.includes(kwd));
    console.log(kwd,newFiles,'点击搜索');
  }
  return (
    <div className="App container-fluid px-0">

      <LickButton />

      <div className='cloud-doc-container'>
        <div className='row'>
          <div className='col-6 file-search'>
            <FileSearch title="我的云文档" onFileSearch={fileSearch}/>
          </div>
          <div className='col-6 editor-container'>col-6：right
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
