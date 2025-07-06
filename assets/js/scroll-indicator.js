// 侧边栏滚动指示器功能
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sqai-dates-fixed-sidebar');
  const scrollIndicator = document.querySelector('.scroll-indicator-container');
  const scrollToTop = document.querySelector('.scroll-to-top');
  
  if (!sidebar || !scrollIndicator || !scrollToTop) return;
  
  // 初始化时检查是否需要滚动
  checkIfScrollable();
  
  // 监听窗口大小变化
  window.addEventListener('resize', checkIfScrollable);
  
  // 检查侧边栏是否可滚动
  function checkIfScrollable() {
    // 如果内容高度大于容器高度，显示滚动指示器
    if (sidebar.scrollHeight > sidebar.clientHeight) {
      scrollIndicator.style.display = 'flex';
      
      // 添加简短的延迟后添加一次性动画效果，提醒用户可以滚动
      setTimeout(() => {
        sidebar.style.overflowY = 'auto'; // 确保设置了溢出滚动
        sidebar.classList.add('has-scroll');
        
        // 短暂自动滚动一点点以显示有内容
        if (!sessionStorage.getItem('scrollHintShown')) {
          sidebar.scrollTop = 10;
          setTimeout(() => {
            sidebar.scrollTop = 0;
            sessionStorage.setItem('scrollHintShown', 'true');
          }, 800);
        }
      }, 500);
    } else {
      scrollIndicator.style.display = 'none';
      sidebar.classList.remove('has-scroll');
    }
  }
  
  // 监听滚动事件以显示/隐藏返回顶部按钮
  sidebar.addEventListener('scroll', function() {
    if (sidebar.scrollTop > 100) {
      sidebar.classList.add('scrolled');
      scrollIndicator.style.opacity = '0';
    } else {
      sidebar.classList.remove('scrolled');
      scrollIndicator.style.opacity = '0.7';
    }
    
    // 检测是否已经滚动到底部或接近底部
    if (sidebar.scrollHeight - sidebar.scrollTop - sidebar.clientHeight < 20) {
      sidebar.classList.add('scroll-end');
    } else {
      sidebar.classList.remove('scroll-end');
    }
  });
  
  // 点击返回顶部按钮
  scrollToTop.addEventListener('click', function() {
    smoothScrollTo(sidebar, 0, 300);
  });
  
  // 平滑滚动函数
  function smoothScrollTo(element, to, duration) {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;
    
    function animateScroll() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }
    
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    animateScroll();
  }
});
