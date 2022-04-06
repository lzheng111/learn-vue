//编程范式：命令式编程/声明式编程
//编程范式：面对对象编程（第一公民：对象）/函数式编程(第一公民：函数)
//高阶函数：filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入到新的数组里
//false:当返回false时，函数内部会过滤掉这次n
// const nums = [101,10,30,111,200,40,20]
//
// let total = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+ n)

//函数式编程
// let total = nums.filter(function (n){
//   return n<100
// }).map(function (n){
//   return n * 2
// }).reduce(function (prevValue,n){
//   return prevValue + n
// },0)
// console.log(total)

// //需求1：filter函数的使用
// let newNums = nums.filter(function (n){
//   return n < 100
// })
// console.log(newNums)
//
// //需求2：map函数的使用
// let new2Nums = newNums.map(function (n){
//   return n*2
// })
// console.log(new2Nums)
//
// //需求3：reduce函数的使用
// //reduce的作用是对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function (preValue,n){
//   return preValue + n
// },0)
// console.log(total)

// // 需求1：去除所有小于100的数字
// let newNums = []
// for (let n of nums){
//   if (n<100){
//     newNums.push(n)
//   }
// }
// //需求2：将所有小于100的数字进行转化，全部*2
// let new2Nums = []
// for (let n of nums){
//   new2Nums.push(n*2)
// }
// //需求3：将所有的nuw2Nums数字相加，得到最终结果
// let total = 0
// for (let n of new2Nums){
//   tatal+=n
// }