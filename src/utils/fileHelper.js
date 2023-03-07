
// import { readFile ,writeFile} from 'fs';// 报错1
// const fs = require('fs');// 内置原生模块1
// const path = require('path');// 内置原生模块2
// // export 报错2
// const fileHelper =  {
//   readFile:(path,cb)=>{
//     fs.readFile(path,{encoding:'utf8'},(err,data)=>{
//       if(!err) {
//         cb(data)
//       }
//     })
//   },
//   writeFile:(path,content,cb)=>{
//     fs.writeFile(path,content,{encoding:'utf8'},(err)=>{
//       if(!err){
//         cb()
//       }
//     })
//   }
// }
// // 单元测试:执行node xxx.js
// const testPath = path.join(__dirname,'helper.js');// 按顺序：当前目录/xxx/helper,js进行拼接
// const testWritePath = path.join(__dirname,'hello.md');

// fileHelper.readFile(testPath,(data)=>{
//   console.log(data,'读取文件数据');
// })

// fileHelper.writeFile(testWritePath,'#hello word',()=>{
//   console.log('写入数据成功');
//   // ls  cat hello.nd
// })
// *****************************************[回调函数改为promise化，统一管理]***************************************************
const fs = window.require('fs').promises // 渲染进程使用模块时需要加window
// const path = window.require('path');// 内置原生模块
const fileHelper = {
  readFile: (path) => {
    return fs.readFile(path, { encoding: 'utf8'})
  },
  writeFile: (path, content) => {
    return fs.writeFile(path, content, { encoding: 'utf8'})
  },
  renameFile: (path, newPath) => {
    return fs.rename(path, newPath)
  },
  deleteFile: (path) => {
    return fs.unlink(path)
  }
}

export default fileHelper

// 单元测试:执行node xxx.js
// const testPath = path.join(__dirname,'helper.js');// 按顺序：当前目录/xxx/helper,js进行拼接
// const testWritePath = path.join(__dirname,'hello.md');
// const testRenamePath = path.join(__dirname,'rename.md');

// fileHelper.readFile(testPath).then((data)=>{
//   console.log(data,'读取数据');
// })

// fileHelper.writeFile(testWritePath,'#hello word111').then(()=>{
//   console.log('写入数据');
// })

// fileHelper.renameFile(testWritePath，testRenamePath).then(()=>{
//   console.log('重命名成功');
// })
// fileHelper.deleteFile(testRenamePath).then(()=>{
//   console.log('删除成功');
// })