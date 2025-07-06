// 处理通讯订阅链接的平滑滚动
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有指向#newsletter的链接
  const newsletterLinks = document.querySelectorAll('a[href="/#newsletter"]');
  
  // 为每个链接添加事件处理
  newsletterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 检查当前是否在首页
      if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        e.preventDefault();
        
        // 获取目标元素
        const newsletterSection = document.getElementById('newsletter');
        
        // 如果找到目标元素，则平滑滚动到它
        if (newsletterSection) {
          newsletterSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      // 如果不在首页，则正常跳转（不阻止默认行为）
    });
  });
});
