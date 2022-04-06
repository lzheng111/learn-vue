//导入对象中{}中的函数
import {flag,sum} from "./aaa.js";
if (flag){
  console.log(sum(100,200))
}
//直接导入export定义的变量
import {num1,height} from "./aaa.js";

console.log(num1)
console.log(height)

//3.导入export的function
import {mul,Person} from "./aaa.js";

console.log(mul(20,11))

const p = new Person()
  p.run()

//4.导入 export default 的内容
import addr from "./aaa.js";
addr('你好啊')

//5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag)