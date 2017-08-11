/**
 * 解析api目录下文件
 */
"use strict";

const fs = require('fs');
const apidata = require('./apidata');
const mock = require('./mock');


//把描述文件转换成对象，然后看进一步处理
function initDescription() {
    fs.readFile('../api/db.md', (err, data) => {
        //最终文件中写入的对象
        if (err) {
            throw err;
        }
        let apiData = new apidata(data);
        console.log(apiData.initDataRule());
    })
}


//按照规则mock数据
function mockData(field, type, rule) {
    let date = {};

}


//写数据
function createMockFile(filename) {
    let filePath = `${__dirname}'/db/'${filename}.json`;
    fs.createWriteStream(filePath);

    fs.writeFile(filePath, "hello world!", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}


//按照类型与描述生成数据
function createData(type, rule) {
    let data;
    switch (type) {
        case 'Number' || 'number':
            mock.mockNumber(rule);
            break;
        case 'String' || 'string':
            mock.mockString(rule);
            break;
        case 'Boolean' || 'boolean':
            mock.mockBoolean();
            break;
        case 'Array' || 'array':
            mock.mockArray(rule);
            break;
        default:

    }
    return data;
}


initDescription()