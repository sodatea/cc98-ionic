import 'ionic';
import 'angular-mocks';

/* eslint-disable quotes,quote-props */
export
default angular
  .module('mock', ['ngMockE2E'])
  .run(function($httpBackend) {
    $httpBackend.whenGET('http://api.cc98.org/topic/hot').respond([{
      "title": "腿粗的妹子还穿短裤。。真是醉了。。",
      "hitCount": 12703,
      "id": 4522219,
      "boardId": 182,
      "boardName": "心灵之约",
      "replyCount": 162,
      "participantCount": 151,
      "authorName": null,
      "createTime": "2015-05-27T13:23:00"
    }, {
      "title": "对社联采用微信投票方式评选示范性社团的质疑和担忧",
      "hitCount": 5442,
      "id": 4522191,
      "boardId": 330,
      "boardName": "学生社团联合会",
      "replyCount": 121,
      "participantCount": 97,
      "authorName": "自习室",
      "createTime": "2015-05-27T12:13:00"
    }, {
      "title": "[出]萌货，不想上十大，心里难过",
      "hitCount": 9953,
      "id": 4522250,
      "boardId": 80,
      "boardName": "生活点滴",
      "replyCount": 107,
      "participantCount": 81,
      "authorName": "螭吻",
      "createTime": "2015-05-27T14:30:00"
    }, {
      "title": "想要让电脑变快的话应该换硬盘还是加内存条呢",
      "hitCount": 5039,
      "id": 4522150,
      "boardId": 180,
      "boardName": "数码世界",
      "replyCount": 89,
      "participantCount": 67,
      "authorName": "限量版名字",
      "createTime": "2015-05-27T10:22:00"
    }, {
      "title": "控制学院趣味定向越野！[面向全校]",
      "hitCount": 913,
      "id": 4522336,
      "boardId": 371,
      "boardName": "控制天下",
      "replyCount": 56,
      "participantCount": 50,
      "authorName": "cse团学联",
      "createTime": "2015-05-27T17:51:00"
    }, {
      "title": "[音乐会预告]最后的音乐会（领票信息请见公众号）",
      "hitCount": 1973,
      "id": 4522275,
      "boardId": 100,
      "boardName": "校园信息",
      "replyCount": 50,
      "participantCount": 46,
      "authorName": "135890aqz",
      "createTime": "2015-05-27T15:38:00"
    }, {
      "title": "代人发帖征友，直接QQ联系",
      "hitCount": 3615,
      "id": 4522146,
      "boardId": 152,
      "boardName": "缘分天空",
      "replyCount": 45,
      "participantCount": 45,
      "authorName": "yiguo",
      "createTime": "2015-05-27T10:17:00"
    }, {
      "title": "[征][兼职]配送宝兼职招聘大放送~！！！",
      "hitCount": 2207,
      "id": 4522147,
      "boardId": 459,
      "boardName": "实习兼职",
      "replyCount": 44,
      "participantCount": 39,
      "authorName": "jtrbs",
      "createTime": "2015-05-27T10:17:00"
    }, {
      "title": "【水楼8.0】旧情人，我是时间的新欢---simpleblur",
      "hitCount": 1575,
      "id": 4522209,
      "boardId": 25,
      "boardName": "天籁之音",
      "replyCount": 264,
      "participantCount": 36,
      "authorName": "simpleblur",
      "createTime": "2015-05-27T12:58:00"
    }, {
      "title": "[出][平板]出个苏菲 surface pro 3 i5 128g",
      "hitCount": 3811,
      "id": 4522088,
      "boardId": 562,
      "boardName": "电脑数码",
      "replyCount": 36,
      "participantCount": 34,
      "authorName": "不化蝶的蛹",
      "createTime": "2015-05-27T00:30:00"
    }]);

    $httpBackend.whenGET('http://api.cc98.org/board/root').respond([{
      "id": 2,
      "name": "教师答疑",
      "description": "教师答疑、学生提问、师生交流、学习心得体会，导论、网络课件下载",
      "childBoardCount": 83,
      "parentId": 0,
      "rootId": 2,
      "totalPostCount": 41930,
      "totalTopicCount": 10153,
      "todayPostCount": 11,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["powercqcq"],
      "lastPostInfo": {
        "boardId": 19,
        "topicId": 4522495,
        "postId": 789928447,
        "dateTime": "2015-05-27T23:04:20",
        "userName": "Y梦魇Y",
        "userId": 522258,
        "topicTitle": "陈老师，cpp类型的文件误删还能恢复么？..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 3,
      "name": "学习天地",
      "description": "学习与交流，专业与选课，梦想与未来，求知行思，我们一起畅游在学习的天地里",
      "childBoardCount": 12,
      "parentId": 0,
      "rootId": 3,
      "totalPostCount": 695945,
      "totalTopicCount": 48367,
      "todayPostCount": 83,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["powercqcq"],
      "lastPostInfo": {
        "boardId": 68,
        "topicId": 4522486,
        "postId": 789928900,
        "dateTime": "2015-05-27T23:40:07",
        "userName": "koin",
        "userId": 473582,
        "topicTitle": "关于二课"
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 4,
      "name": "信息资讯",
      "description": "工作兼职、新闻时事……给你提供一个资讯的平台",
      "childBoardCount": 11,
      "parentId": 0,
      "rootId": 4,
      "totalPostCount": 743767,
      "totalTopicCount": 105836,
      "todayPostCount": 375,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["dirklz"],
      "lastPostInfo": {
        "boardId": 459,
        "topicId": 4522147,
        "postId": 789928964,
        "dateTime": "2015-05-27T23:45:55",
        "userName": "Jayvan铭",
        "userId": 494717,
        "topicTitle": "[征][兼职]配送宝兼职招聘..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 5,
      "name": "校园动态",
      "description": "校园生活，合作信息，轻松点击，尽收眼底。",
      "childBoardCount": 16,
      "parentId": 0,
      "rootId": 5,
      "totalPostCount": 3882186,
      "totalTopicCount": 109202,
      "todayPostCount": 983,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["磊磊1010"],
      "lastPostInfo": {
        "boardId": 100,
        "topicId": 4521689,
        "postId": 789929072,
        "dateTime": "2015-05-27T23:55:24",
        "userName": "L_lullaby",
        "userId": 510368,
        "topicTitle": "[抢楼送票]启真湖没名团五周..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 6,
      "name": "个性生活",
      "description": "时尚，旅行，美食，健康，数码，香车……生活个性尽在个性生活",
      "childBoardCount": 12,
      "parentId": 0,
      "rootId": 6,
      "totalPostCount": 559050,
      "totalTopicCount": 30265,
      "todayPostCount": 255,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["hezyyn"],
      "lastPostInfo": {
        "boardId": 545,
        "topicId": 4520272,
        "postId": 789928786,
        "dateTime": "2015-05-27T23:32:47",
        "userName": "柳柳柳苏",
        "userId": 489553,
        "topicTitle": "[午后时光][春夏团做]赠人..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 8,
      "name": "休闲娱乐",
      "description": "让我们大家一起来放松一下吧！",
      "childBoardCount": 15,
      "parentId": 0,
      "rootId": 8,
      "totalPostCount": 1707322,
      "totalTopicCount": 59597,
      "todayPostCount": 420,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["洗头"],
      "lastPostInfo": {
        "boardId": 135,
        "topicId": 4522519,
        "postId": 789929075,
        "dateTime": "2015-05-27T23:55:38",
        "userName": "BaiduClub2",
        "userId": 440466,
        "topicTitle": "思聪，你爸对你真好"
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 10,
      "name": "体育运动",
      "description": "体育 运动 激情释放一切",
      "childBoardCount": 17,
      "parentId": 0,
      "rootId": 10,
      "totalPostCount": 763272,
      "totalTopicCount": 21431,
      "todayPostCount": 149,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["TuTuJ"],
      "lastPostInfo": {
        "boardId": 86,
        "topicId": 1815424,
        "postId": 789928997,
        "dateTime": "2015-05-27T23:49:15",
        "userName": "木很伤心",
        "userId": 323085,
        "topicTitle": "★休斯顿火箭★下赛季再来"
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 11,
      "name": "影音无限",
      "description": "影音时尚无限，电影、tv、综艺、音乐、翻唱，空间锁定，尽情点击！",
      "childBoardCount": 12,
      "parentId": 0,
      "rootId": 11,
      "totalPostCount": 170963,
      "totalTopicCount": 7604,
      "todayPostCount": 477,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["TuTuJ"],
      "lastPostInfo": {
        "boardId": 25,
        "topicId": 4522209,
        "postId": 789929076,
        "dateTime": "2015-05-27T23:55:40",
        "userName": "ChinaBoy",
        "userId": 361848,
        "topicTitle": "【水楼8.0】旧情人，我是时..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 12,
      "name": "电脑技术",
      "description": "电脑技术，编程，图形设计，软件开发，装机咨询，故障解决",
      "childBoardCount": 22,
      "parentId": 0,
      "rootId": 12,
      "totalPostCount": 205959,
      "totalTopicCount": 22657,
      "todayPostCount": 61,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["Auser"],
      "lastPostInfo": {
        "boardId": 212,
        "topicId": 4522069,
        "postId": 789928808,
        "dateTime": "2015-05-27T23:34:48",
        "userName": "Aplysia",
        "userId": 338504,
        "topicTitle": "用树莓派搭建网络摄像头"
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 13,
      "name": "社科学术",
      "description": "科技 社会 探索 幻想",
      "childBoardCount": 12,
      "parentId": 0,
      "rootId": 13,
      "totalPostCount": 123989,
      "totalTopicCount": 5410,
      "todayPostCount": 15,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["BandM"],
      "lastPostInfo": {
        "boardId": 316,
        "topicId": 4522192,
        "postId": 789928918,
        "dateTime": "2015-05-27T23:41:45",
        "userName": "書浅",
        "userId": 458251,
        "topicTitle": "【公告】通过本版原版主 绝行..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 14,
      "name": "游戏广场",
      "description": "适度游戏，健康生活",
      "childBoardCount": 15,
      "parentId": 0,
      "rootId": 14,
      "totalPostCount": 234994,
      "totalTopicCount": 10839,
      "todayPostCount": 91,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["gfshyz"],
      "lastPostInfo": {
        "boardId": 743,
        "topicId": 4459425,
        "postId": 789928987,
        "dateTime": "2015-05-27T23:47:54",
        "userName": "叁月·Meow",
        "userId": 494629,
        "topicTitle": "【英雄联盟水楼&米楼】冰神带..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 18,
      "name": "动漫天地",
      "description": "欢迎进入ACG的大家庭！",
      "childBoardCount": 9,
      "parentId": 0,
      "rootId": 18,
      "totalPostCount": 170494,
      "totalTopicCount": 2645,
      "todayPostCount": 93,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["Karasu"],
      "lastPostInfo": {
        "boardId": 191,
        "topicId": 4377501,
        "postId": 789928882,
        "dateTime": "2015-05-27T23:39:08",
        "userName": "一直进不来",
        "userId": 526416,
        "topicTitle": "攒了快一年的海贼一天看完了。..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 24,
      "name": "感性空间",
      "description": "心情的空气在这里凝结成冰，总有一方空间可以容纳感性",
      "childBoardCount": 8,
      "parentId": 0,
      "rootId": 24,
      "totalPostCount": 2858931,
      "totalTopicCount": 86316,
      "todayPostCount": 2377,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["绿豆糕"],
      "lastPostInfo": {
        "boardId": 182,
        "topicId": 4522512,
        "postId": 789929078,
        "dateTime": "2015-05-27T23:55:43",
        "userName": "匿名",
        "userId": 505730,
        "topicTitle": "子栋你得癌了"
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 27,
      "name": "瞬间永恒",
      "description": "杂文、小说、散文、评论、文化…………瞬间与永恒的交融",
      "childBoardCount": 16,
      "parentId": 0,
      "rootId": 27,
      "totalPostCount": 1506364,
      "totalTopicCount": 4839,
      "todayPostCount": 653,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["闺亡"],
      "lastPostInfo": {
        "boardId": 144,
        "topicId": 4472607,
        "postId": 789929077,
        "dateTime": "2015-05-27T23:55:40",
        "userName": "梦蝶飞舞",
        "userId": 353283,
        "topicTitle": "看了几期综艺节目我彻底变成腐..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 29,
      "name": "天下一家",
      "description": "温暖，乡情，这里是我们在cc98的一个家.... ",
      "childBoardCount": 31,
      "parentId": 0,
      "rootId": 29,
      "totalPostCount": 982745,
      "totalTopicCount": 10756,
      "todayPostCount": 133,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["子霏非鱼"],
      "lastPostInfo": {
        "boardId": 495,
        "topicId": 4473361,
        "postId": 789929007,
        "dateTime": "2015-05-27T23:50:03",
        "userName": "DHOWARD",
        "userId": 490114,
        "topicTitle": "「2015水楼@舟山」回不到..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 33,
      "name": "论坛管理",
      "description": "站务管理、系统管理、开发、维护、内容形式讨论、意见投诉等等",
      "childBoardCount": 15,
      "parentId": 0,
      "rootId": 33,
      "totalPostCount": 72739,
      "totalTopicCount": 3972,
      "todayPostCount": 8,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["gfshyz"],
      "lastPostInfo": {
        "boardId": 184,
        "topicId": 2803718,
        "postId": 789928032,
        "dateTime": "2015-05-27T22:16:30",
        "userName": "LeadroyaL",
        "userId": 473945,
        "topicTitle": "★★★新手测试楼★★★,禁止..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 35,
      "name": "院系交流",
      "description": "找到属于自己的家",
      "childBoardCount": 28,
      "parentId": 0,
      "rootId": 35,
      "totalPostCount": 1429611,
      "totalTopicCount": 71305,
      "todayPostCount": 317,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["Madridista"],
      "lastPostInfo": {
        "boardId": 217,
        "topicId": 4519746,
        "postId": 789929040,
        "dateTime": "2015-05-27T23:52:52",
        "userName": "smile0830",
        "userId": 426264,
        "topicTitle": "材料系邱建荣教授成首位荣获G..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 37,
      "name": "社团风采",
      "description": "校内各社团均可在此申请版面，做为社团交流的空间。",
      "childBoardCount": 73,
      "parentId": 0,
      "rootId": 37,
      "totalPostCount": 246784,
      "totalTopicCount": 9880,
      "todayPostCount": 251,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["若只如初见"],
      "lastPostInfo": {
        "boardId": 393,
        "topicId": 4522518,
        "postId": 789929047,
        "dateTime": "2015-05-27T23:53:15",
        "userName": "浙大爱心社",
        "userId": 396342,
        "topicTitle": "爱心社：那年支教"
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 43,
      "name": "交易代理",
      "description": "校园交易，互通有无",
      "childBoardCount": 8,
      "parentId": 0,
      "rootId": 43,
      "totalPostCount": 1321579,
      "totalTopicCount": 136987,
      "todayPostCount": 933,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["jd6033735"],
      "lastPostInfo": {
        "boardId": 562,
        "topicId": 4520989,
        "postId": 789929053,
        "dateTime": "2015-05-27T23:53:58",
        "userName": "不是啦",
        "userId": 479304,
        "topicTitle": "[出][手机]简单粗暴每周降..."
      },
      "postTimeLimit": "00:00:10"
    }, {
      "id": 604,
      "name": "CC98协会",
      "description": "浙江大学CC98学生网络协会",
      "childBoardCount": 7,
      "parentId": 0,
      "rootId": 604,
      "totalPostCount": 17707,
      "totalTopicCount": 718,
      "todayPostCount": 4,
      "isHidden": false,
      "isCategory": true,
      "isEncrypted": false,
      "isAnomynous": false,
      "isLocked": false,
      "masters": ["磊磊1010"],
      "lastPostInfo": {
        "boardId": 435,
        "topicId": 4520733,
        "postId": 789928295,
        "dateTime": "2015-05-27T22:47:44",
        "userName": "莫诉伤悲",
        "userId": 507573,
        "topicTitle": "◆◇“一路走来”——十二周年..."
      },
      "postTimeLimit": "00:00:10"
    }]);

    $httpBackend.whenGET('http://api.cc98.org/topic/hot').respond();

    // paging from 0~9
    $httpBackend.whenGET('http://api.cc98.org/post/topic/4522191').respond([{
      "id": 789923300,
      "title": "对社联采用微信投票方式评选示范性社团的质疑和担忧",
      "content": "近日社团联合会在评选示范性社团时采用微信投票的方式计分，根据之前发生的某些事件，不得不对这种现象表示质疑和担忧。\r\n　　首先，看一下微信投票的利弊。评选示范性社团所依靠的，应该是在公平公正的前提下对于各个社团在一年来的活动和组织方面进行公允的评价。但是反观微信投票中，各个社团相竞争的，说实话不过是人头和人际关系，与社团本身素质的高低并无太多关系。试想，如果有一个500人的社团一年活动庸庸碌碌和一个20人社团一年活动勤勤恳恳（请勿对号入座），投票的结果显而易见，但与示范性社团的意义背道而驰，对于公允地评价各个社团并无任何帮助，极有可能使参与的社团对于结果不服，降低社联的威信力。至于微信投票的好处，个人冒昧揣测，与其说是增大参与度，不如说是为了增加微信公众号的关注量和相关文章的访问量。假设投票的前提是赞相关文章，那么一篇普通的推文的赞也可以分分钟上千。再考虑到社联本次微信投票必须是在关注公众号之后才能投票，本人不得对于社联采用微信投票方式评选示范性社团的真正目的不得不进行质疑。\r\n　　其次，让我们在考虑一下社联存在的意义。社联全名为学生社团联合会，就是为团结浙大社团做更好的事、同时为规范各社团的行为而服务的。但是这次微信投票的事情呢？本人不得不联想起在去年圣诞节前后一个名为“校园司令”的公众号对于浙大最高人气社团的评选。社团之间恶性的抢票和拉票现象比比皆是。有的社团在上课时候向同班同学拉票，有的社团在网上公共空间互骂，有的社团对投票后台进行攻击。。。不得不说，当时校园司令的微信投票造成的影响是极为恶劣的。后来活动结束后各个社团对自己的恶劣拉票和态度都进行了反思，本人当时也认为类似荒谬的现象不再会出现。但是没想到社联身为浙大社团的管理方，在清清楚楚看到校园司令微信投票的恶劣后果之后，并未吸取其中的教训，反而是亲身实践。\r\n　　那么本人想问一下社联的组织方，微信投票造成各社团之间的恶性攻击和拉票，有何“联合”之说？微信投票仅有的益处是为社联公众号增加关注量，那么“社联”的“服务”的职责何在？明明清楚微信投票会造成的恶劣后果，“社联”应有的谨慎和示范作用何在？\r\n　　对于社联评选示范性社团采用微信投票方式，本人不得不说极其失望和愤懑。仅代表个人意见，也希望社联真正更好地做到“联合”和“服务”的本职工作。",
      "time": "2015-05-27T12:12:39",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 1,
      "userName": "自习室",
      "userId": 523782,
      "isAnomynous": false
    }, {
      "id": 789923310,
      "title": "",
      "content": "有理",
      "time": "2015-05-27T12:14:29",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 2,
      "userName": "Blankspace",
      "userId": 507350,
      "isAnomynous": false
    }, {
      "id": 789923314,
      "title": "",
      "content": "bd",
      "time": "2015-05-27T12:15:04",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 3,
      "userName": "33不卖萌",
      "userId": 525912,
      "isAnomynous": false
    }, {
      "id": 789923320,
      "title": "",
      "content": "有道理",
      "time": "2015-05-27T12:16:10",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 4,
      "userName": "3140103381",
      "userId": 526745,
      "isAnomynous": false
    }, {
      "id": 789923329,
      "title": "",
      "content": "bd",
      "time": "2015-05-27T12:17:06",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 5,
      "userName": "479555665",
      "userId": 507811,
      "isAnomynous": false
    }, {
      "id": 789923349,
      "title": "",
      "content": "\r\n\r\n[color=red][此帖子已经被作者于2015/5/27 18:49:47编辑过][/color]\r",
      "time": "2015-05-27T12:20:57",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 6,
      "userName": "校会2013",
      "userId": 457323,
      "isAnomynous": false
    }, {
      "id": 789923381,
      "title": "",
      "content": "[quotex][b]以下是引用[i]Blankspace在2015/5/27 12:14:29[/i]的发言：[/b]\r\n有理\r\n[/quotex]\r\n",
      "time": "2015-05-27T12:26:00",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 7,
      "userName": "ATT",
      "userId": 377395,
      "isAnomynous": false
    }, {
      "id": 789923391,
      "title": "",
      "content": "表示我还想投诉一个社团，不讲诚信列！",
      "time": "2015-05-27T12:27:52",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 8,
      "userName": "路过的鱼儿",
      "userId": 507508,
      "isAnomynous": false
    }, {
      "id": 789923411,
      "title": "",
      "content": "说的非常好。作为一家社团的负责人，我对于微信投票这件事情感到担忧，因为它背后的意义和目的都不太妥当。",
      "time": "2015-05-27T12:33:08",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 9,
      "userName": "wanqing",
      "userId": 522223,
      "isAnomynous": false
    }, {
      "id": 789923505,
      "title": "",
      "content": "有理+1！社联对学校社团的管理不像是在统筹更像是在命令！",
      "time": "2015-05-27T12:46:35",
      "isDeleted": false,
      "topicId": 4522191,
      "floor": 10,
      "userName": "半个的人生",
      "userId": 515260,
      "isAnomynous": false
    }]);

    $httpBackend.whenGET(/^.*/).passThrough();
    $httpBackend.whenPOST(/^.*/).passThrough();
  });
