import {useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import useKeyPress from '../hooks/useKeyPress';

function FileSearch({title,onFileSearch}) {
  const [value, setValue] = useState('')
  const [inputActive, setInputActive] = useState(false)
  const enterPressed = useKeyPress(13);
  const escPressed = useKeyPress(27);
  let inputNode = useRef(null)

  // 关闭：重置搜索
  const closeSearch =(active)=>{
    setInputActive(false);
    setValue('');
    active && onFileSearch(value);
  }
    // 任意值改变的常规操作:快捷键的操作集合
    useEffect(()=>{
      // console.log('快捷键的操作集合');// 出现3次
      if(enterPressed && inputActive){
        console.log('键盘按下enter+搜索框存在时');
        closeSearch(true) 
      }
      if(escPressed && inputActive){
        console.log('键盘按下esc+搜索框存在时');
        closeSearch() 
      }
    })
    // 只针对某些值改变的操作：自动获取焦点
    useEffect(()=>{
      // console.log('全局状态更新333',inputActive);// 出现3次
      if(inputActive){
        console.log('自动获取焦点');
        inputNode.current.focus()
      }
    },[inputActive])

  // console.log(title,666);
  return (
    <div className="file-search-container">
            {/* flex布局:内容两点对齐+子元素水平居中 */}
            {!inputActive && <div>
              <span>{title}</span>
              <button type='button' className='btn btn-primary' onClick={() => { setInputActive(true) }}>
              {/* 搜索 */}
                <FontAwesomeIcon title="搜索" size="lg" icon={faSearch} />
              </button>
            </div>}

            <div className='d-flex justify-content-between align-items-center'>
              {inputActive && <div>
                <input ref={inputNode} className='file-content-input' value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button type='button' className='btn btn-primary' onClick={() => { closeSearch(true) }}>
                  {/* 关闭 */}
                  <FontAwesomeIcon title="关闭" size="lg" icon={faTimes} />
                  </button>
              </div>}

            </div>
            <button type='button' className='btn btn-primary'>新建</button>
            <button className='btn btn-success'>导入</button>
    </div>
  );
}
FileSearch.propTypes = {
  title:PropTypes.string,
  onFileSearch:PropTypes.func.isRequired
}

FileSearch.defaultProps = {
  title:'我的云文档'
}

export default FileSearch;
