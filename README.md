# P3BET 落地页项目

## 📋 项目说明

这是一个现代化、响应式的博彩落地页，支持 PC 端和移动端自适应显示。

## ✨ 主要特性

- ✅ **响应式设计**：完美适配手机、平板和电脑
- ✅ **易于配置**：通过 `config.js` 轻松管理内容
- ✅ **轮播图**：自动播放，支持触摸滑动
- ✅ **游戏分类**：可随意增减游戏和分类
- ✅ **视频展示**：支持多个视频，全屏播放
- ✅ **现代动画**：流畅的过渡效果和交互动画
- ✅ **模块化代码**：HTML、CSS、JS 分离，易于维护

## 📁 文件结构

```
p3bet-test/
│
├── index-optimized.html    # 主页面（推荐使用）
├── index-new.html          # 单文件版本（备用）
├── index.html              # 原始版本
│
├── config.js               # 配置文件 ⭐ 主要修改这个文件
├── app.js                  # JavaScript 主程序
├── styles.css              # 样式文件
│
├── assets/                 # 资源文件夹
│   ├── images/
│   │   ├── banners/       # 轮播图
│   │   ├── games/         # 游戏图标
│   │   └── videos/        # 视频封面
│   └── videos/            # 视频文件
│
└── README.md              # 项目说明（本文件）
```

## 🚀 快速开始

### 方式一：使用推荐版本（模块化）

1. 打开浏览器
2. 访问 `index-optimized.html`
3. 所有配置在 `config.js` 中修改

### 方式二：使用单文件版本

1. 打开 `index-new.html`
2. 所有代码都在一个文件中，方便部署

## 🔧 如何修改内容

### 修改轮播图

打开 `config.js`，找到 `CONFIG_BANNERS`：

```javascript
const CONFIG_BANNERS = [
    { image: 'assets/images/banners/banner1.png', alt: 'Banner 1' },
    { image: 'assets/images/banners/banner2.png', alt: 'Banner 2' },
    // 添加新轮播图
    { image: 'assets/images/banners/banner7.png', alt: 'Banner 7' }
];
```

### 修改游戏

打开 `config.js`，找到 `CONFIG_GAME_CATEGORIES`：

```javascript
const CONFIG_GAME_CATEGORIES = [
    {
        name: '新分类名称',  // 分类标题
        games: [
            { 
                image: 'assets/images/games/game1.png', 
                name: '游戏名称', 
                hot: true  // 显示 HOT 标签
            },
            // 添加更多游戏...
        ]
    }
];
```

**增加游戏**：复制一个 `game` 对象，修改图片路径和名称
**删除游戏**：删除对应的 `game` 对象
**添加分类**：复制整个分类对象，修改 `name` 和 `games`

### 修改视频

打开 `config.js`，找到 `CONFIG_VIDEOS`：

```javascript
const CONFIG_VIDEOS = [
    {
        id: 'video1',                                    // 唯一标识
        source: 'assets/videos/video1.mp4',             // 视频文件
        title: '视频标题',                               // 显示标题
        cover: 'assets/images/videos/cover1.jpg'        // 封面图
    },
    // 添加新视频
    {
        id: 'video3',
        source: 'assets/videos/video3.mp4',
        title: '新视频标题',
        cover: 'assets/images/videos/cover3.jpg'
    }
];
```

### 修改按钮链接

打开 `config.js`，找到 `CONFIG_BUTTONS`：

```javascript
const CONFIG_BUTTONS = {
    register: {
        url: 'https://your-register-url.com',  // 注册链接
        text: 'ĐĂNG KÝ',                       // 按钮文字
        icon: '⚙️'                              // 图标
    },
    login: {
        url: 'https://your-login-url.com',     // 登录链接
        text: 'ĐĂNG NHẬP',
        icon: '🔓'
    }
};
```

### 修改联系方式

打开 `config.js`，找到 `CONFIG_CONTACT`：

```javascript
const CONFIG_CONTACT = {
    website: 'https://p3.com/home',
    zalo: 'p3bet',
    telegram: '@p3bet'
};
```

### 修改轮播速度

打开 `config.js`，找到：

```javascript
const CONFIG_CAROUSEL_INTERVAL = 3000;  // 3000毫秒 = 3秒
```

## 🎨 样式修改

如果需要修改颜色、字体等样式，编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #FF6B00;           /* 主色 */
    --secondary-color: #1a237e;         /* 副色 */
    --text-color: #333;                 /* 文字颜色 */
    --bg-light: #f5f5f5;               /* 背景颜色 */
}
```

## 📱 响应式设计说明

### 移动端（< 768px）
- 游戏网格：4列
- 按钮：竖向排列
- 视频：自动适配

### PC端（≥ 768px）
- 游戏网格：6列
- 按钮：横向排列
- 视频：最大3列

## 🧪 测试建议

1. **浏览器测试**：
   - Chrome/Edge
   - Firefox
   - Safari
   - 移动浏览器

2. **设备测试**：
   - 手机（竖屏/横屏）
   - 平板
   - 电脑（不同分辨率）

3. **功能测试**：
   - 轮播图自动播放和手动切换
   - 游戏卡片点击和悬停效果
   - 视频播放和全屏功能
   - 按钮链接跳转

## 🐛 常见问题

### 图片不显示？
- 检查图片路径是否正确
- 确保图片文件存在
- 检查文件名大小写（Linux 区分大小写）

### 视频无法播放？
- 检查视频格式（推荐 MP4）
- 确保视频文件不过大（建议 < 20MB）
- 检查浏览器是否支持该格式

### 样式错乱？
- 清除浏览器缓存
- 检查 CSS 文件是否正确加载
- 使用浏览器开发者工具检查

### 手机上显示不正常？
- 检查 viewport 设置
- 测试不同手机分辨率
- 使用浏览器响应式模式测试

## 📦 部署说明

### 本地测试
1. 双击 `index-optimized.html` 打开
2. 或使用本地服务器（推荐）

### 启动本地服务器
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

然后访问：`http://localhost:8000/index-optimized.html`

### 服务器部署
1. 将所有文件上传到服务器
2. 确保文件权限正确
3. 访问域名测试

## 🔒 安全建议

1. 使用 HTTPS
2. 定期更新依赖
3. 验证用户输入
4. 限制文件上传大小

## 📈 性能优化建议

1. **图片优化**：
   - 压缩图片（TinyPNG, ImageOptim）
   - 使用 WebP 格式
   - 设置合适的尺寸

2. **视频优化**：
   - 压缩视频文件
   - 使用流媒体服务
   - 添加多种分辨率

3. **代码优化**：
   - 压缩 CSS/JS
   - 启用 Gzip
   - 使用 CDN

## 📞 技术支持

如有问题，请检查：
1. 浏览器控制台错误信息
2. 网络请求是否成功
3. 文件路径是否正确

## 📄 更新日志

### v2.0.0 (2024)
- ✅ 完全响应式设计
- ✅ 模块化代码结构
- ✅ 配置文件独立
- ✅ 改进动画效果
- ✅ 优化用户体验
- ✅ 添加触摸支持

### v1.0.0
- 初始版本

## 📜 许可证

© 2024 P3BET. All rights reserved.

---

**提示**：修改 `config.js` 后，刷新页面即可看到效果！
