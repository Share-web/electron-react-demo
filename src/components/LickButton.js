import {useState} from 'react';

function LickButton() {
  const [count,setCount]=useState(0)
  return (
    <div className="button">
      点赞：{count}
      <button onClick={()=>setCount(count+1)}>点击按钮</button>
    </div>
  );
}

export default LickButton;
