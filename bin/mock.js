exports.module = {
    function mockArray(rule)
{

}

function mockBoolean() {
    return data.boolean();
}

function mockNumber(rule) {
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
}

//mock字符串
function mockString(rule) {
    let data;
    switch (rule) {
        //地名类
        case (/address=\w+/i.test(rule)):
            _mockAddress(rule);
        //个人信息类
        case(/person=\w+/i.test(rule)):

    }
}

//mock地名相关(address=rule+)
function _mockAddress(rule) {
    //分离地址level与prefix
    let prefix, level = rule.match(/[^address=]\w+/i)[0];
    (/.+[?=+]/.test(rule)) ? prefix = true : prefix = false;
    switch (level) {
        case (level === 'region'):
            address.region();
            break;
        case (level === 'province'):
            address.province();
            break;
        case (level === 'county'):
            address.county(prefix);
            break;
        case (level === 'road'):
            address.road(prefix);
            break;
        case (level === 'number'):
            address.road(prefix);
            break;
        case (level === 'zip'):
            address.zip();
            break;
        default:
            address.county(true);
    }
}

}