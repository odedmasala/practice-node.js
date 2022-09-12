console.log('hello');
const fs = require('fs')


fs.readFile('./started.text',"utf8",(arr,data)=>{
    if(arr)throw arr;
    console.log(data);
})