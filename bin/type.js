/*集中处理各种类型*/

const address = require('../random/address');
const person = require('../random/person');
const date = require('../random/date');


module.exports = {
    //mock地名相关(address=rule+)
    mockAddress(rule) {
        //分离地址level与prefix
        let prefix, level = rule.match(/[^address=]\w+/i)[0];
        let result;
        (/.+[?=+]/.test(rule)) ? prefix = true : prefix = false;
        switch (level) {
            case (level === 'region'):
                result = address.region();
                break;
            case (level === 'province'):
                result = address.province();
                break;
            case (level === 'county'):
                result = address.county(prefix);
                break;
            case (level === 'road'):
                result = address.road(prefix);
                break;
            case (level === 'number'):
                result = address.road(prefix);
                break;
            case (level === 'zip'):
                result = address.zip();
                break;
            default:
                result = address.county(true);
        }
        return result;
    },

    //mock个人信息相关(person=rule)
    mockPerson(rule) {
        let result;
        switch (rule) {
            case(rule === 'person=EnglishName' || 'Username'):
                result = person.initEnglishName();
                break;
            case (rule === 'person=ChineseName' || 'Name'):
                result = person.initChineseName();
                break;
            case (rule === 'person=EnglishTranslateName'):
                result = person.initEnglishTranslateName();
                break;
            case (rule === 'person=JapaneseName'):
                result = person.initJapaneseName();
                break;
            case (rule === 'person=PhoneNumber'):
                result = person.initPhoneNumber();
                break;
            case (rule === 'person=Password'):
                result = person.initPassword();
                break;
            case (rule === 'person=ChineseId'):
                result = person.initChineseId();
                break;
            case(rule === 'person=IpAddress'):
                result = person.initIpAddress();
                break;
            case (rule === 'person=Email'):
                result = person.initEmail();
                break;
            case (rule === 'person=CompanyName'):
                result = person.initCompanyName();
                break;
            default:
                result = person.initEnglishName();
        }
        return result;
    },


    //mock日期相关(date=rule)
    mockDate(rule) {
        let result;
        switch (rule) {
            //当前的日期和时间字符串
            case (rule === 'now'):
                result = date.now();
                break;
            // 返回一个随机的日期字符串
            case (rule === 'date'):
                result = date.date();
                break;
            // 返回一个随机的时间字符串。
            case (rule === 'time'):
                result = date.time();
                break;
            // 返回一个随机的日期和时间字符串。
            case (rule === 'datetime'):
                result = date.datetime();
                break;
            //默认时间戳
            default:
                result = date.timestamp();
        }
        return result;
    }
};