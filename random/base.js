/*
* 一些基础的数据的随机生成
*/


module.exports = {
    //随机boolean
    boolean() {
        return Math.random() > 0.5;
    },

    //随机整数
    integerNumber(min = -9007199254740992, max = 9007199254740992) {
        return Math.floor(min + Math.random() * (max - min));
    },

    //生成指定位数的浮点数，改文件调用
    _floatByPlace(num = 1) {
        let result = "";
        for (let i = 0; i < num; i++)
            result += Math.floor(Math.random() * 10);
        return result;
    },

    //随机浮点数字，描述文件调用
    floatNumber(min = '-9007199254740992.0', max = '9007199254740992.0') {
        let digit = min.toString().match(/\.\d+/)[0].length - 1;
        let int = this.integer(parseInt(min), parseInt(max));
        let float = this._floatByPlace(digit);
        return `${int}.${float}`;
    },

    //判断一个字符的基础类型：{小写，大写，数字，符号}
    _getCharType(char) {
        const origin = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!"#$%^&\'()*+,-.:;<=>?@[\\]^_`'];
        for (let index = 0; index <= 3; index++) {
            if (origin[index].indexOf(char) >= 0) {
                switch (index) {
                    case 0:
                        return 'lower';
                        break;
                    case 1:
                        return 'upper';
                        break;
                    case 2:
                        return 'number';
                        break;
                    case 3:
                        return 'symbol';
                }
            }
        }
    },

    //返回固定位数随机字符串：第一个参数表示长度，第二个参数表示是否包含特殊符号，第三个参数表示给定类型，第四个参数表示指定字符串
    randomStringByLength(len = 1, symbol = false, type = undefined, string = undefined) {
        const origin = {
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            number: '0123456789',
            symbol: '!"#$%^&\'()*+,-.:;<=>?@[\\]^_`'
        };
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        if (symbol) {
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%^&\'()*+,-.:;<=>?@[\\]^_`';
        }
        if (string) {
            chars = string;
        }
        if (type) {
            chars = origin[type];
        }
        let maxPos = chars.length;
        let pwd = '';
        for (i = 0; i < len; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return pwd;
    },

    //返回一个基础类型的字符：{小写，大写，数字，符号}
    charRandom(char) {
        const origin = {
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            number: '0123456789',
            symbol: '!"#$%^&\'()*+,-.:;<=>?@[\\]^_`'
        };
        const type = this._getCharType(char);
        return this.randomStringByLength(1, false, origin[type]);
    },

    //返回指定长度整形数组：三个参数（最小，最大，长度）
    intArrayByLength(min = 0, max = 1, length = 1) {
        let array = [];
        for (let i = 0; i < length; i++) {
            array.push(integerNumber(min, max));
        }
        return array;
    },

    //返回指定长度小数数组：三个参数（最小，最大，长度）
    floatArrayByLength(min = 0, max = 1, length = 1) {
        let array = [];
        for (let i = 0; i < length; i++) {
            array.push(floatNumber(min, max));
        }
        return array;
    },

    //从数组中随机选出一个元素：一个参数（数组）
    selectElementFromArray(arr) {
        const max = arr.length - 1;
        return arr[this.integerNumber(0, max)];
    },

    //从数组中随机出指定数目的元素组成新数组：两个参数（数组，数量）
    selectArrFromArray(arr, num = 1) {
        let returnArr = [];
        for (let i = 0; i <= num - 1; i++) {
            returnArr.push(this.selectElementFromArray(arr));
        }
        return returnArr;
    }
};
