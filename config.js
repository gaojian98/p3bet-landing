// ==================== P3BET 落地页配置文件 ====================
// 修改这个文件后刷新页面即可看到效果

// 轮播图配置
const CONFIG_BANNERS = [
    { image: 'assets/images/banners/banner1.png', alt: 'Banner 1' },
    { image: 'assets/images/banners/banner2.png', alt: 'Banner 2' },
    { image: 'assets/images/banners/banner3.png', alt: 'Banner 3' },
    { image: 'assets/images/banners/banner4.png', alt: 'Banner 4' },
    { image: 'assets/images/banners/banner5.png', alt: 'Banner 5' },
    { image: 'assets/images/banners/banner6.png', alt: 'Banner 6' }
    // 添加更多轮播图：
    // { image: 'assets/images/banners/banner7.png', alt: 'Banner 7' }
];

// 游戏分类配置
const CONFIG_GAME_CATEGORIES = [
    {
        name: 'Trò chơi nổi bật',  // 分类名称
        games: [
            { image: 'assets/images/games/04df68b4406e4b9796d72d0fe58681b2.png', name: 'NỔ HŨ', hot: true },
            { image: 'assets/images/games/70027a30179d45e2860db0e217c5d5db.webp', name: 'AE SEXY' },
            { image: 'assets/images/games/9f8d27ea232e44f58824c5defb782721.webp', name: 'DG' },
            { image: 'assets/images/games/8a4bd8dda5774e30b82a563508aa7c6e.webp', name: 'SABA' },
            { image: 'assets/images/games/17d152bfe7794a9f9000cc6d3fcc49b9.png', name: 'GAME 5', hot: true },
            { image: 'assets/images/games/30594c0907d74067ad2478c1b07fe075.png', name: 'GAME 6' },
            { image: 'assets/images/games/519f07dc60fb46f88d39057678b1a23d.png', name: 'GAME 7' },
            { image: 'assets/images/games/575503a33ca348dea51093ae330cca6a.png', name: 'GAME 8' }
        ]
    },
    {
        name: 'Casino trực tuyến',
        games: [
            { image: 'assets/images/games/6197acf62b98415e9373846127d29e65.webp', name: 'CASINO 1' },
            { image: 'assets/images/games/632e866e6fdd486582139834ddf241e3.webp', name: 'CASINO 2', hot: true },
            { image: 'assets/images/games/7281b2a3055a4e7e8f03ba318e757b1e.webp', name: 'CASINO 3' },
            { image: 'assets/images/games/82d4f4a99de3447092c9acfa599c99a5.webp', name: 'CASINO 4' },
            { image: 'assets/images/games/83c4e840b31149a1b28aaa2b56073402.webp', name: 'CASINO 5' },
            { image: 'assets/images/games/83db75a47e8345279cb56da006c0f1f3.webp', name: 'CASINO 6' }
        ]
    },
    {
        name: 'Thể thao',
        games: [
            { image: 'assets/images/games/86b396fbdd134509bf965e46675d55b0.png', name: 'THỂ THAO 1', hot: true },
            { image: 'assets/images/games/9a94eef5bcba4d3cb1630df69cadc5e0.png', name: 'THỂ THAO 2' },
            { image: 'assets/images/games/a4008cd0fc814556a1ab08dd62f43922.webp', name: 'THỂ THAO 3' },
            { image: 'assets/images/games/c5875e598b0d45e8a63163af84231723.webp', name: 'THỂ THAO 4' }
        ]
    },
    {
        name: 'Xổ số & Bắn cá',
        games: [
            { image: 'assets/images/games/c7692e44bcda4257888fa461e8463f1c.png', name: 'XỔ SỐ 1' },
            { image: 'assets/images/games/d4a692e9766e49ed810884a4427ef206.png', name: 'BẮN CÁ 1', hot: true },
            { image: 'assets/images/games/d76c217a63da4fd1a31298c19ef4ae74.webp', name: 'XỔ SỐ 2' },
            { image: 'assets/images/games/ec4e3b8a851f4f41b0ea394a41a2d4a8.png', name: 'BẮN CÁ 2' },
            { image: 'assets/images/games/f756d033199d4f1c8815c9c6d2d79389.webp', name: 'XỔ SỐ 3' },
            { image: 'assets/images/games/240e1d086f17472583a3c821562a572b.webp', name: 'BẮN CÁ 3' }
        ]
    }
    // 添加新分类：
    // {
    //     name: '新分类名称',
    //     games: [
    //         { image: '图片路径', name: '游戏名称', hot: true },  // hot: true 表示显示HOT标签
    //         { image: '图片路径', name: '游戏名称' }
    //     ]
    // }
];

// 视频配置
const CONFIG_VIDEOS = [
    {
        id: 'video1',
        source: 'assets/videos/video1.mp4',
        title: 'Trải nghiệm thực tế',
        cover: 'assets/images/videos/cover-experience.jpg'
    },
    {
        id: 'video2',
        source: 'assets/videos/video2.mp4',
        title: 'Hướng dẫn nạp tiền',
        cover: 'assets/images/videos/cover-guide.jpg'
    }
    // 添加更多视频：
    // {
    //     id: 'video3',
    //     source: 'assets/videos/video3.mp4',
    //     title: '视频标题',
    //     cover: 'assets/images/videos/cover3.jpg'
    // }
];

// 按钮链接配置
const CONFIG_BUTTONS = {
    register: {
        url: 'https://p3bet82.com/home?key=9eeln57',
        text: 'ĐĂNG KÝ',
        icon: '⚙️'
    },
    login: {
        url: 'https://p3.com/home',
        text: 'ĐĂNG NHẬP',
        icon: '🔓'
    }
};

// 联系方式配置
const CONFIG_CONTACT = {
    website: 'https://p3.com/home',
    zalo: 'p3bet',
    telegram: '@p3bet'
};

// 轮播图自动播放间隔（毫秒）
const CONFIG_CAROUSEL_INTERVAL = 3000;

// ==================== 使用说明 ====================
/*
1. 添加/删除轮播图：
   在 CONFIG_BANNERS 数组中添加或删除对象

2. 添加/删除游戏：
   - 在现有分类中添加/删除游戏
   - 添加新的游戏分类，复制一个分类对象并修改
   - hot: true 会显示 HOT 标签

3. 添加/删除视频：
   在 CONFIG_VIDEOS 数组中添加或删除对象
   每个视频需要：id（唯一标识）、source（视频文件）、title（标题）、cover（封面图）

4. 修改按钮链接：
   在 CONFIG_BUTTONS 中修改 url、text 或 icon

5. 修改联系方式：
   在 CONFIG_CONTACT 中修改相应字段

修改后保存文件，刷新页面即可看到效果！
*/
