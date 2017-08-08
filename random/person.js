/*
* 主要用于生成一些个人信息
* 姓名、手机号、身份证号、IP地址、邮箱、密码、公司名
*/
const base = require('./base');
const date = require('./date');
const address = require('./address');


module.exports = {
    //生成中文名
    initChineseName() {
        const familyNames = [
            "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
            "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
            "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
            "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
            "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
            "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
            "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
            "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
            "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
            "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
        ];
        const givenNames = [
            "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
            "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
            "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
            "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
            "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
            "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
            "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
            "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
            "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
            "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
        ];
        return familyNames[base.integerNumber(0, 99)] + givenNames[base.integerNumber(0, 100)];
    },

    //生成英文名
    initEnglishName() {
        const givenNames = [
            "Smith", "Johnson", "Williams", "Brown", "Jones",
            "Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
            "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez",
            "Moore", "Martin", "Jackson", "Thompson", "White",
            "Lopez", "Lee", "Gonzalez", "Harris", "Clark",
            "Lewis", "Robinson", "Walker", "Perez", "Hall",
            "Young", "Allen"
        ];
        const familyNames = [
            "Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
            "Jennifer", "Maria", "Susan", "Margaret", "Dorothy",
            "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra",
            "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura",
            "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley",
            "Cynthia", "Angela", "Melissa", "Brenda", "Amy",
            "Anna", "James", "John", "Robert", "Michael", "William",
            "David", "Richard", "Charles", "Joseph", "Thomas",
            "Christopher", "Daniel", "Paul", "Mark", "Donald",
            "George", "Kenneth", "Steven", "Edward", "Brian",
            "Ronald", "Anthony", "Kevin", "Jason", "Matthew",
            "Gary", "Timothy", "Jose", "Larry", "Jeffrey",
            "Frank", "Scott", "Eric"
        ];
        return givenNames[base.integerNumber(0, 31)] + ' ' + familyNames[base.integerNumber(0, 65)];
    },

    //生成英文译名
    initEnglishTranslateName() {
        const givenNames = [
            "埃玛", "伊莎贝拉", "艾米丽", "麦迪逊", "阿娃", "奥利维亚",
            "索菲亚", "艾比盖尔", "伊丽莎白", "克洛伊", "沙曼萨", "艾迪生",
            "娜塔莉", "米厄", "亚历克西丝", "艾丽萨", "汉娜", "阿什丽",
            "艾拉", "萨拉", "格丽丝", "泰勒", "布丽安娜", "海丽", "凯丽",
            "莉莉", "安娜", "维多丽娅", "凯拉", "丽莲", "劳伦", "凯特琳",
            "凯丽", "艾丽森", "萨瓦娜", "内维娅", "加布丽艾拉", "索菲亚",
            "马凯拉", "艾佛芮", "莱丽", "朱丽娅", "丽娅", "奥德丽", "佳丝敏",
            "奥布里", "凯瑟琳", "摩根", "布鲁克林", "戴斯蒂尼", "雅各布",
            "迈克尔", "伊桑", "亚历山大", "安东尼", "威廉", "詹姆斯", "杰顿",
            "克里斯托弗", "安德鲁", "约翰", "洛根", "大卫", "艾丹", "本杰明",
            "泰勒", "塞缪尔", "尼古拉斯", "加文", "克里斯琴", "加布里尔",
            "布兰顿", "杰克逊", "贾斯可", "艾萨克", "扎克里", "乔丹",
            "克尔顿", "亚历克斯", "埃里克", "布赖恩", "卢卡斯", "卢克",
            "托马斯", "安吉尔", "埃文", "利亚姆", "多米尼克", "乔塞亚",
            "胡安", "怀亚特", "奥斯汀", "乔斯", "肖恩", "罗伯特",
            "卡梅伦", "凯尔", "凯文", "杰克", "乔纳森"
        ];
        const familyNames = [
            "史密斯", "约翰逊", "威廉姆斯", "约翰", "布朗", "戴维斯",
            "威尔逊", "摩尔", "泰勒", "安德森", "托马斯", "杰克逊", "怀特", "哈里斯",
            "汤姆逊", "马丁", "加西亚", "李", "罗宾森", "克拉克", "路易斯", "沃克",
            "艾伦", "洛佩兹", "斯科特", "格林", "亚当", "罗伯特", "菲利普", "坎贝尔",
            "帕克", "爱德华", "斯图尔特", "库克", "库珀", "理查德森", "彼得森", "詹姆斯",
            "凯莉", "伍德", "佩里", "华盛顿", "西蒙", "琼斯", "布朗", "安德森", "埃文斯",
            "贝克", "米勒", "霍尔"
        ];
        return givenNames[base.integerNumber(0, 99)] + '·' + familyNames[base.integerNumber(0, 49)];
    },

    //生成日本姓名
    initJapaneseName() {
        const familyNames = [
            "佐藤", "铃木", "高桥", "田中", "渡边", "伊藤", "山本", "中村", "小林", "大久保",
            "加藤", "吉田", "山田", "佐佐木", "山口", "松本", "井上", "木村", "林", "清水",
            "山崎", "中岛", "池田", "酒井", "桥本", "山下", "森", "石川", "前田", "小川",
            "藤田", "冈田", "後藤", "长谷川", "石井", "村上", "近藤", "坂本", "远藤", "青木",
            "藤井", "西村", "福田", "岛田", "三浦", "藤原", "宫崎", "松田", "小野", "北原"
        ];
        const givenNames = [
            "真纪", "美沙", "翔子", "里奈", "七恵", "真白", "直子", "纪子", "梨香", "佳乃",
            "凉", "里代", "千春", "裕子", "太郎", "次郎", "千裕", "弥代", "智子", "浜崎",
            "孝允", "博文", "矢崇", "友实", "千姬", "龙马", "公望", "美奈子", "明美", "佳乃"
        ];
        return familyNames[base.integerNumber(0, 49)] + givenNames[base.integerNumber(0, 29)];
    },

    //手机号生成
    initPhoneNumber() {
        const prefixArray = ["130", "131", "132", "156", "155", "133", "153", "189", "139", "138", "137", "136", "135", "134", "159", "158", "157", "150", "151", "152", "188"];
        return prefixArray[base.integerNumber(0, 20)] + base.randomStringByLength(8, false, 'number');
    },


    /*
    * 生成身份证号码
    * 这个比较麻烦，不可能生成绝对正确的，只能说可以通过验证，并且能提取到一些信息
    * 接受参数：（字符串，字符串，字符串）（指定省份，指定生日到任意一位，指定性别）
    * 组成：省份+随机四位数+随机生成yyyyMMDD的一个日期字符串+随机两位数+确定性别的一位数+校验码
    */
    initChineseId(province = undefined, birth = 'yyyymmdd', gender = undefined) {
        //省份映射
        const provinces = new Map([
            [11, "北京"], [12, "天津"], [13, "河北"], [14, "山西"], [15, "内蒙古"],
            [21, "辽宁"], [22, "吉林"], [23, "黑龙江"], [31, "上海"], [32, "江苏"],
            [33, "浙江"], [34, "安徽"], [35, "福建"], [36, "江西"], [37, "山东"], [41, "河南"],
            [42, "湖北"], [43, "湖南"], [44, "广东"], [45, "广西"], [46, "海南"], [50, "重庆"],
            [51, "四川"], [52, "贵州"], [53, "云南"], [54, "西藏"], [61, "陕西"], [62, "甘肃"],
            [63, "青海"], [64, "宁夏"], [65, "新疆"], [71, "台湾"], [81, "香港"], [82, "澳门"], [91, "国外"]
        ]);
        const provincesNumber = [
            "11", "12", "13", "14", "15",
            "21", "22", "23", "31", "32",
            "33", "34", "35", "36", "37", "41",
            "42", "43", "44", "45", "46", "50",
            "51", "52", "53", "54", "61", "62",
            "63", "64", "65", "71", "81", "82", "91"
        ];

        let provinceNumber, birthNumber, genderNumber;
        //确定省份数子
        if (province) {
            provinceNumber = provinces.get('province');
        } else {
            provinceNumber = base.selectElementFromArray(provincesNumber);
        }
        //确定日期数字
        if (birth !== 'yyyymmdd') {
            const length = birth.length;
            let regular = new RegExp(`\\w{${length}}`);
            birthFormat = date.date('yyyymmdd'.replace(regular, birth));
        }
        birthNumber = date.date(birth);
        //确定性别数字
        if (gender === undefined) {
            genderNumber = base.integerNumber(0, 9);
        } else if (gender === '男') {
            genderNumber = base.integerNumber(0, 4) * 2 + 1;
        } else if (gender === '女') {
            genderNumber = base.integerNumber(0, 4) * 2;
        }

        return `${provinceNumber}${base.randomStringByLength(4, false, 'number')}${birthNumber}${base.randomStringByLength(2, false, 'number')}${genderNumber}${base.randomStringByLength(1, false, 'number')}`;
    },


    //生成IP地址
    initIpAddress() {
        return base.integerNumber(192, 223) + '.' + base.integerNumber(0, 255) + '.' + base.integerNumber(0, 255) + '.' + base.integerNumber(0, 254)
    },

    //生成电子邮箱
    initEmail() {
        const mails = ['gmail', 'qq', 'hotmail', '163', '126', 'yahoo', 'sina', 'outlook'];
        return `${this.initEnglishName().replace(/\s/, '')}@${base.selectElementFromArray(mails)}.com`
    },

    //生成8到16位密码
    initPassword() {
        const number = base.integerNumber(8, 16);
        return base.randomStringByLength(number, false);
    },

    //生成公司名
    initCompanyName() {
        const companys = [
            '鹏', '腾', '宏', '伟', '骁', '永', '吉', '先', '君', '依',
            '昌', '哲', '营', '舒', '曙', '廷', '渲', '梦', '瑜', '菏',
            '凤', '叶', '卫', '乐', '飞', '福', '皇', '嘉', '达', '佰',
            '美', '元', '亮', '名', '欧', '特', '辰', '康', '讯', '聪',
            '垒', '蕾', '瀚', '钧', '思', '正', '成', '翔', '隆', '东',
            '森', '迪', '赛', '睿', '艾', '高', '德', '雅', '格', '纳',
            '欣', '亿', '维', '锐', '菲', '佳', '沃', '晟', '捷', '臻',
            '燕', '霖', '霏', '莲', '灿', '颜', '麒', '韬', '露', '鹤',
            '骄', '厅', '湾', '凡', '可', '巧', '弘', '禾', '竹', '多',
            '帆', '秀', '旺', '融', '誉', '际', '巨', '骄', '为', '诚',
            '妙', '英', '虹', '芬', '馨', '尼', '迈', '群', '拓', '建',
            '江', '雷', '天', '策', '优', '易', '威', '玛', '日', '伦',
            '道', '发', '唯', '一', '才', '月', '丹', '文', '立', '玉',
            '平', '同', '志', '宜', '林', '奇', '政', '朋', '致', '春',
            '盈', '泓', '品', '庭', '展', '朔', '轩', '育', '航', '津',
            '启', '振', '聆', '翌', '迎', '常', '浩', '茗', '杰', '智'
        ];
        return `${address.city()}${base.selectElementFromArray(companys)}${base.selectElementFromArray(companys)}有限公司`
    }
};