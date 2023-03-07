import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LickButton from './components/LickButton';
import FileSearch from './components/FileSearch';

import {useState,useEffect} from 'react';
import {objToArr} from './utils/helper';
import {v4 as uuidv4} from 'uuid';

// const fs = require('fs'); // webpack拦截了commund.js模块
// const fs = window.require('fs');// 引入node.js原生模块
// console.dir(fs,666);
function App() {
  const [files,setFiles]= useState({});// 初始化读取已有文件列表
  const filesArr = objToArr(files)

  // 生命周期：初始化操作1次,如键盘操作的注册与销毁
  useEffect(()=>{
    // console.log('初始化111',files);// 出现2次：判断空值只执行一次
    if(!Object.keys(files).length){
      createNewFile()
    }
    // return ()=>{
    //   console.log('销毁111');// 出现1次，值更新后不再执行
    // }
  },[])
  // 任意值改变的常规操作：
  useEffect(()=>{
    // console.log('全局状态更新222',files);// 出现3次
    // return ()=>{
    //   console.log('销毁222');// 出现2次
    // }
  })
  // 只针对某些值改变的操作
  useEffect(()=>{
    // console.log('全局状态更新333',files);// 出现3次
    if(Object.keys(files).length){
      console.log(files);
    }
    // return ()=>{
    //   console.log('销毁333');// 出现2次
    // }
  },[files])

  const createNewFile = () => {
    const newID = uuidv4()
    const newFile = {
      id: newID,
      title: '',
      body: '## 请输出 Markdown',
      createdAt: new Date().getTime(),
      isNew: true,
    }
    // 不可变值：渲染改变后才可读取最新的文件对象值
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
            <FileSearch title="my cloud document" onFileSearch={fileSearch}/>
          </div>
          <div className='col-6 editor-container'>col-6：right
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
