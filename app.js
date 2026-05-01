// ==================== P3BET 落地页主程序 ====================

// 使用配置文件中的数据
const banners = CONFIG_BANNERS || [];
const gameCategories = CONFIG_GAME_CATEGORIES || [];
const videos = CONFIG_VIDEOS || [];
const buttons = CONFIG_BUTTONS || {};
const contact = CONFIG_CONTACT || {};
const carouselInterval = CONFIG_CAROUSEL_INTERVAL || 3000;

// ==================== 初始化页面 ====================
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    initButtons();
    initGames();
    initVideos();
    initFooter();
});

// ==================== 轮播图功能 ====================
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const navContainer = document.getElementById('carouselNav');
    
    if (!track || !navContainer || banners.length === 0) return;
    
    // 生成轮播图
    banners.forEach(banner => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${banner.image}" alt="${banner.alt}">`;
        track.appendChild(slide);
    });
    
    // 生成导航点
    banners.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot' + (index === 0 ? ' active' : '');
        dot.dataset.index = index;
        navContainer.appendChild(dot);
    });
    
    let currentIndex = 0;
    let autoPlayTimer = null;
    
    const slides = Array.from(track.children);
    const dots = Array.from(navContainer.children);
    
    function getSlideWidth() {
        return slides[0].getBoundingClientRect().width;
    }
    
    function updateSlide() {
        const slideWidth = getSlideWidth();
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, carouselInterval);
    }
    
    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }
    
    // 导航点点击
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        });
    });
    
    // 鼠标悬停控制
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }
    
    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (container) {
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // 向左滑
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        }
        if (touchEndX > touchStartX + 50) {
            // 向右滑
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        }
    }
    
    // 窗口大小改变时重新计算
    window.addEventListener('resize', updateSlide);
    
    // 开始自动播放
    startAutoPlay();
}

// ==================== 按钮区域功能 ====================
function initButtons() {
    const buttonRow = document.getElementById('buttonRow');
    if (!buttonRow) return;
    
    // 注册按钮
    if (buttons.register) {
        const registerLink = document.createElement('a');
        registerLink.href = buttons.register.url;
        registerLink.target = '_blank';
        registerLink.innerHTML = `
            <button class="btn btn-register" type="button">
                <span class="btn-icon">${buttons.register.icon}</span>
                <span class="btn-text">${buttons.register.text}</span>
            </button>
        `;
        buttonRow.appendChild(registerLink);
    }
    
    // 登录按钮
    if (buttons.login) {
        const loginLink = document.createElement('a');
        loginLink.href = buttons.login.url;
        loginLink.target = '_blank';
        loginLink.innerHTML = `
            <button class="btn btn-login" type="button">
                <span class="btn-icon">${buttons.login.icon}</span>
                <span class="btn-text">${buttons.login.text}</span>
            </button>
        `;
        buttonRow.appendChild(loginLink);
    }
}

// ==================== 游戏区域功能 ====================
function initGames() {
    const gamesSection = document.getElementById('gamesSection');
    if (!gamesSection || gameCategories.length === 0) return;
    
    gameCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'game-category';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);
        
        const gameGrid = document.createElement('div');
        gameGrid.className = 'game-grid';
        
        category.games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.name}" class="game-image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22>图片</text></svg>'">
                <div class="game-name">${game.name}</div>
                ${game.hot ? '<div class="hot-badge">HOT</div>' : ''}
            `;
            
            gameCard.addEventListener('click', () => {
                handleGameClick(game);
            });
            
            gameGrid.appendChild(gameCard);
        });
        
        categoryDiv.appendChild(gameGrid);
        gamesSection.appendChild(categoryDiv);
    });
}

// 游戏点击事件处理
function handleGameClick(game) {
    console.log('点击了游戏:', game.name);
    // 这里可以添加游戏点击后的处理逻辑
    // 例如：跳转到游戏页面、显示游戏详情等
}

// ==================== 视频功能 ====================
function initVideos() {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer || videos.length === 0) return;
    
    const fullscreenPlayer = document.getElementById('fullscreen-player');
    const fullscreenVideo = document.getElementById('fullscreen-video');
    const videoSource = document.getElementById('video-source');
    const fullscreenTitle = document.getElementById('fullscreen-title');
    const closeButton = document.getElementById('close-player');
    
    // 生成视频缩略图
    videos.forEach(video => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'video-thumbnail';
        thumbnail.innerHTML = `
            <img src="${video.cover}" alt="${video.title}" class="thumbnail-cover" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22320%22 height=%22180%22><rect fill=%22%23000%22 width=%22320%22 height=%22180%22/><text x=%2250%%22 y=%2250%%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22>视频</text></svg>'">
            <div class="play-button" data-video-id="${video.id}"></div>
            <div class="thumbnail-title">${video.title}</div>
        `;
        
        thumbnail.addEventListener('click', () => {
            playVideo(video);
        });
        
        videosContainer.appendChild(thumbnail);
    });
    
    // 播放视频
    function playVideo(video) {
        if (!fullscreenPlayer || !fullscreenVideo) return;
        
        videoSource.src = video.source;
        fullscreenTitle.textContent = video.title;
        fullscreenVideo.load();
        
        fullscreenPlayer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            fullscreenVideo.play().catch(e => {
                console.log('自动播放被阻止:', e);
            });
        }, 300);
    }
    
    // 关闭播放器
    function closePlayer() {
        if (!fullscreenPlayer || !fullscreenVideo) return;
        
        fullscreenVideo.pause();
        fullscreenPlayer.style.display = 'none';
        document.body.style.overflow = 'auto';
        fullscreenVideo.currentTime = 0;
    }
    
    // 关闭按钮
    if (closeButton) {
        closeButton.addEventListener('click', closePlayer);
    }
    
    // 点击背景关闭
    if (fullscreenPlayer) {
        fullscreenPlayer.addEventListener('click', (e) => {
            if (e.target === fullscreenPlayer) {
                closePlayer();
            }
        });
    }
    
    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenPlayer && fullscreenPlayer.style.display === 'flex') {
            closePlayer();
        }
    });
    
    // 视频播放结束自动关闭
    if (fullscreenVideo) {
        fullscreenVideo.addEventListener('ended', () => {
            setTimeout(closePlayer, 1000);
        });
    }
}

// ==================== 底部功能 ====================
function initFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    
    footer.innerHTML = `
        <div class="contact-info">
            🌐 <a href="${contact.website || '#'}" class="contact-link" target="_blank">${contact.website || 'Website'}</a><br>
            📱 <a href="#" class="contact-link" target="_blank">Zalo: ${contact.zalo || 'N/A'}</a><br>
            ✈️ <a href="#" class="contact-link" target="_blank">Telegram: ${contact.telegram || 'N/A'}</a>
        </div>
        <div class="copyright">
            © 2024 P3BET. Tất cả các quyền được bảo lưu.<br>
            Dành cho người từ 18 tuổi trở lên.
        </div>
    `;
}

// ==================== 工具函数 ====================

// 图片加载错误处理
function handleImageError(img, placeholder = 'No Image') {
    img.onerror = function() {
        this.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="#ddd" width="100" height="100"/><text x="50%" y="50%" text-anchor="middle" dy=".3em">${placeholder}</text></svg>`;
    };
}

// 平滑滚动到元素
function smoothScrollTo(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 导出到全局作用域（可选）
window.P3BET = {
    banners,
    gameCategories,
    videos,
    buttons,
    contact,
    handleGameClick,
    smoothScrollTo
};

console.log('P3BET 落地页已加载完成！');
