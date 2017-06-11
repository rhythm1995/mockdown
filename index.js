'use strict'

const http = require('http');
const fs = require('fs');


// Walk dir
function walk(path) {
    let fileList = [];
    const dirList = fs.readdirSync(path);

    dirList.forEach(function (item) {
        if (fs.statSync(path + '/' + item).isFile()) {
            fileList.push(path + '/' + item);
        }
    });

    dirList.forEach(function (item) {
        if (fs.statSync(path + '/' + item).isDirectory()) {
            walk(path + '/' + item);
        }
    });
    return fileList;
}

// 解析md文件
function readMarkdown(){
    fs.read(Buffer);
}


//创建服务器
function createServer(){
    var server = http.createServer((res,req) => {
    
});
}





/*
var server = http.createServer((res, req) => {

})
*/