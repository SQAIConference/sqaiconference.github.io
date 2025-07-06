// 全局变量，使轮播索引在各个函数间共享
let carouselSlideIndex = 0;
let carouselTimer;

// 页面加载完成后初始化轮播
window.addEventListener('load', function() {
  initCarousel();
});

// 初始化轮播
function initCarousel() {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (!slides.length || !dots.length) {
    console.log("轮播元素未找到，500毫秒后重试...");
    setTimeout(initCarousel, 500);
    return;
  }
  
  // 为第一个轮播点添加active类
  dots[0].className += " active";
  
  // 显示第一张幻灯片
  slides[0].style.display = "block";
  
  // 开始自动播放
  startCarouselAutoplay();
}

// 自动播放功能
function startCarouselAutoplay() {
  // 清除任何现有的定时器
  if (carouselTimer) {
    clearTimeout(carouselTimer);
  }
  
  // 设置新的定时器，每5秒切换一次
  carouselTimer = setTimeout(function() {
    showSlides(carouselSlideIndex + 1);
  }, 5000);
}

// 手动显示特定幻灯片的公共函数
function currentSlide(n) {
  showSlides(n - 1); // 转换为从0开始的索引
}

// 显示指定幻灯片
function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (!slides.length || !dots.length) {
    return;
  }
  
  // 边界检查
  if (n >= slides.length) {
    n = 0;
  }
  if (n < 0) {
    n = slides.length - 1;
  }
  
  // 更新全局索引
  carouselSlideIndex = n;
  
  // 隐藏所有幻灯片
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // 移除所有点的active状态
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // 显示当前幻灯片并激活对应的点
  slides[carouselSlideIndex].style.display = "block";
  dots[carouselSlideIndex].className += " active";
  
  // 重新开始自动播放
  startCarouselAutoplay();
}
