let name = '小明'
let age = 22
let flag = true

function sum(num1,num2){
  return num1 + num2
}
if (flag){
  console.log(sum(10,20))
}
//1.导出方式1
export {
  flag,sum
}

//2.导出方式2
export var num1 = 1000
export var height = 1.88

//3.导出函数/类
export function mul(num1,num2){
  return num1 * num2
}

export class Person{
  run(){
    console.log('在奔跑')
  }
}

//4.export default
const address = '北京市'

// export default address
export default function (argument){
  console.log(argument)
}
