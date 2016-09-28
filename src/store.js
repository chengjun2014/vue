const key = 'CHATDATA';

// 虚拟数据
if (!localStorage.getItem(key)) {
    let now = new Date();
    
    let data = {
        // 登录用户
        user: {
            id: 1,
            name: 'chengjun',
            img: 'dist/images/1.jpg'
        },
        
        // 用户列表
        userList: [
            {
                id: 2,
                name: '火影忍者',
                img: 'dist/images/2.jpg'
            },
            {
                id: 3,
                name: 'webpack',
                img: 'dist/images/3.jpg'
            },
            {
                id: 4,
                name: '立马理财',
                img: 'dist/images/4.jpg'
            },
            {
                id: 5,
                name: '网易',
                img: 'dist/images/5.png'
            }
        ],

        // 会话列表
        sessionList: [
            {
                userId: 2,
                messages: [
                    {
                        text: 'Hello，你的Vue + Webpack构建前端集成化开发环境的分享准备好了吗',
                        date: now
                    }, 
                    {
                        text: '还没有呢？你呢',
                        date: now,
                        self: true
                    },
                    {
                        text: '我也没有呢',
                        date: now
                    }, 
                    {
                        text: 'Orz',
                        date: now,
                        self: true
                    }
                ]
            },
            {
                userId: 3,
                messages: [
                    {
                        text: '今天星期一',
                        date: now
                    }, 
                    {
                        text: '明天星期二',
                        date: now,
                        self: true
                    }
                ]
            },
            {
                userId: 4,
                messages: [
                    {
                        text: 'hello world! 我是第三个网友....',
                        date: now
                    }
                ]
            },
            {
                userId: 5,
                messages: [
                    {
                        text: '网易新闻客户端隆重更新，欢迎下载！',
                        date: now
                    }
                ]
            }
        ],
    };
    
    localStorage.setItem(key, JSON.stringify(data));
}

export default {
    fetch () {
        return JSON.parse(localStorage.getItem(key));
    },
    save (store) {
        localStorage.setItem(key, JSON.stringify(store));
    }
};