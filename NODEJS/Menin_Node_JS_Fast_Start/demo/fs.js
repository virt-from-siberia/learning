const fs = require('fs');
const path = require('path')



// fs.mkdir(path.join(__dirname, 'test'), (err)=>{
//   if(err){
//     console.log('The folder already exist')
//     throw err
//   }
//   console.log('Folred made')
// })


const filePath = path.join(__dirname, 'test', 'text2.txt');

// fs.writeFile(filePath, 'Hello NodeJs!' , err =>{
// if(err){
//   throw err
// }
//
// console.log('File created')
// })

fs.appendFile(filePath, '\n appendFile' , err =>{
if(err){
  throw err
}

console.log('File created')
})


fs.readFile(filePath, 'utf-8' ,(err, content) => {
  if(err){
    throw err
  }

  console.log(content)

  // const data = Buffer.from(content)

  // console.log(data.toString())
})
