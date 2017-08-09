/*
*  ApiData是用于描述db.md数据源描述文件的类
*  route表示路由，映射到url的路由部分
*  dataNumber表示未来会模拟的数量
*  FieldNumber表示字段数量
*  Rule表示描述规则
*/
"use strict";

class ApiData {
    constructor(dataStr) {
        this.dataStr = dataStr;
        this.dataArr = this.dataStr.toString().split(/[\r\n]/);
    }

    //分离路由
    initDataRoute(){
        return this.dataArr[0];
    }

    //分离模拟数据数量
    initDataNumber(){
        return this.dataArr[1];
    }

    //获取表的字段数
    getFieldNumber(){
        return this.dataArr.length-2;
    }

    //分离数据内容描述对象
    initDataRule(){
        let length = parseInt(this.initDataNumber())+2;
        let contentObj = {};
        for(let i=3;i<=length;i++){
            let contentArr = (this.dataArr[i]).slice(1,this.dataArr[i].length-1).split('|');
            contentObj.field = contentArr[0];
            contentObj.type = contentArr[1];
            contentObj.description = contentArr[2];
        }
        return contentObj;
    }
}

module.exports = ApiData;