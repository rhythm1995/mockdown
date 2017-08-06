/*
* 主要用于生成一些个人信息
* 姓名、手机号
*/
const base = require('./base');

module.exports = {
    //随机生成中文名
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
        return familyNames[base.integerNumber(0, 99)] + givenNames[base.integerNumber(0, 99)];
    },

    //随机生成英文名
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
        return givenNames[base.integerNumber(0, 99)] + '·' + familyNames[base.integerNumber(0, 99)];
    },

    //随机生成英文译名
    initTranslateName() {
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

    //随机手机号生成
    initPhoneNumber() {
        const prefixArray = ["130", "131", "132", "156", "155", "133", "153", "189", "139", "138", "137", "136", "135", "134", "159", "158", "157", "150", "151", "152", "188"];
        return prefixArray[base.integerNumber(0, 20)] + base.randomStringByLength(8, false, number);
    },
};