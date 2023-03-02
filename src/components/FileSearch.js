import {useState} from 'react';

function FileSearch({title,onFileSearch}) {
  const [value, setValue] = useState('')
  const [inputActive, setInputActive] = useState(false)

  // 关闭：重置搜索
  const closeSearch =()=>{
    setInputActive(false);
    setValue('');
    onFileSearch(value);
  }
  // console.log(title,666);
  return (
    <div className="file-search-container">
            {/* flex布局:内容两点对齐+子元素水平居中 */}
            {!inputActive && <div>
              <span>{title}</span>
              <button type='button' className='btn btn-primary' onClick={() => { setInputActive(true) }}>搜索</button>
            </div>}

            <div className='d-flex justify-content-between align-items-center'>
              {inputActive && <div>
                <input className='file-content-input' value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button type='button' className='btn btn-primary' onClick={() => { closeSearch() }}>关闭</button>
              </div>}

            </div>
            <button type='button' className='btn btn-primary'>新建</button>
            <button className='btn btn-success'>导入</button>
    </div>
  );
}

export default FileSearch;
