/*mock出单个数据*/

const base = require('../random/base');
const type =require('./type')


exports.module = {
    //mock布尔值
    mockBoolean() {
        return base.boolean();
    },

    //mock数字
    mockNumber(rule) {
        let data;
        switch (rule) {
            //{整数，整数}型
            case (/^(({-\d+)|({\d+))((,\d+)|(,\-\d+))}/.test(rule)):
                let intmin = rule.match(/[^{]\d+|-d+/)[0];
                let intmax = rule.match(/((\d+)|(-\d+))(?=})/)[0];
                data = base.integerNumber(intmin, intmax);
                break;

            //{小数，小数}型
            case (/^(({-\d+.\d+)|({\d+.\d+))((,\d+.\d+)|(,\-\d+.\d+))}/.test(rule)):
                let floatmin = rule.match(/(\d|-).+(?=,)/)[0];
                let floatmax = rule.match(/((\d+.\d+)|(-\d+.\d+))(?=})/)[0];
                data = base.floatNumber(floatmin, floatmax);
                break;

            //正则表达式型（匹配正则表达式的正则表达式）囧
            case (/\/.+\//.test(rule)):
                data = new randexp(rule).gen();
                break;

            //默认自增型
            case (/^((\d+)|(-\d+))\+/.test(rule)):
                let baseNumDe = rule.match(/\d+|-\d+/)[0];
                data = basedefault.incrementNumber(basedefault, 1);
                break;

            //标准自增型
            case (/^((\d+)|(-\d+))\+((\d+)|(-\d+))$/.test(rule)):
                let baseNum = rule.match(/^((\d+)|(-\d+))/)[0];
                let n = rule.match(/[^\+]\d+$/)[0];
                data = base.incrementNumber(baseNum, n);
                break;

            //都不匹配的时候默认为从数组中枚举型
            default:
                data = base.selectElementFromArray(rule.split(','));
        }
        return data;
    },

    //mock字符串
    mockString(rule) {
        let data;
        switch (rule) {
            //地名类
            case (/address=\w+/i.test(rule)):
                data = type.mockAddress(rule);
                break;
            //个人信息类
            case(/person=\w+/i.test(rule)):
                data = type.mockPerson(rule);
                break;
            //日期类
            case(/date=\w+/i.test(rule)):
                data = type.mockDate(rule);
                break;
            //正则表达式型
            case (/\/.+\//.test(rule)):
                data = new randexp(rule).gen();
                break;
            //段落型
            case(/text=\w+/i.test(rule)):
                data =
                    break;

            //都不匹配的时候默认为从数组中枚举型
            default:
                data = base.selectElementFromArray(rule.split(','));
        }
        return data;
    },


};