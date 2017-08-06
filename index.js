/**
 * 解析api目录下文件
 */
const fs = require('fs');
const apidata = require('./apidata');

//把|name|string|Sam,Just,Cary|转换成对象的算法

    fs.readFile('./api/db.md',(err,data) => {
        //最终文件中写入的对象

        if(err){
            throw err;
        }
        let apiData = new apidata.ApiData(data);



        console.log(apiData)
    })
