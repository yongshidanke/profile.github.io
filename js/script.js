// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 你可以在这里添加页面交互效果
    console.log('页面加载完成');
});

// 平滑滚动效果（可选）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 你可以在这里添加其他交互功能，比如：
// - 动画效果
// - 点击事件
// - 数据动态加载等