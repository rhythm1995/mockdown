/*
* 地址相关
* 省市县的地址绝对是正确的
* 街道道路号是随机的，组合后肯定不存在的
* 参数prefix是一个布尔值，表示是否全部显示
*/

const addressDict = require('./addressDict');
const base = require('./base');

const region = ['东北', '华北', '华东', '华中', '华南', '西南', '西北'];

module.exports = {
    //随机生成一个大区
    region() {
        return base.selectElementFromArray(region);
    },

    //随机生成一个省级行政区
    province() {
        return base.selectElementFromArray(addressDict).name;
    },

    // 随机生成一个市
    city(prefix) {
        let province = base.selectElementFromArray(addressDict);
        let city = base.selectElementFromArray(province.children);
        return prefix ? [province.name, city.name].join('') : city.name;
    },

    //随机生成一个县
    county(prefix) {
        let province = base.selectElementFromArray(addressDict);
        let city = base.selectElementFromArray(province.children);
        let county = base.selectElementFromArray(city.children) || {
            name: '-'
        };
        return prefix ? [province.name, city.name, county.name].join('') : county.name;
    },

    //随机生成一个街道
    road(prefix){
        const roads = [
            '建设路','人民路','文化路','迎宾路','滨河路','育才路','朝阳路','光明路','解放路','幸福路','大连路', '学府路','兴华路','西环路','青年路','平安路','东环路','公园路','团结路','西街','南街','北街','东街','东风路','中心路','中山路','步行街','中心街','文明路','创业路','广场路','机场路','广州路','上海路','北京路','东莞路','南京路','重庆路','成都路','香港路','无锡路','长沙路','南通路','扬州路','西安路','兰州路','天津路','嘉兴路','青岛路','深圳路'
        ];
        const province = base.selectElementFromArray(addressDict);
        const city = base.selectElementFromArray(province.children);
        const county = base.selectElementFromArray(city.children) || {
            name: '-'
        };
        const road = base.selectElementFromArray(roads);
        return prefix ? [province.name, city.name, county.name,road].join('') : road;
    },

    //随机生成一个街道号
    number(prefix){
        const prefixString = this.road(true);
        return prefix? `${prefixString}${base.integerNumber(0,99)}号`:`${base.integerNumber(0,99)}号`;
    },

    //随机生成一个邮政编码（六位数字）
    zip(len) {
        let zip = '';
        for (let i = 0; i < (len || 6); i++) zip += base.integerNumber(0, 9);
        return zip;
    },

};

