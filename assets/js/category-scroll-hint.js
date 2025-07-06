// 增强的滚动体验
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sqai-dates-fixed-sidebar');
  const categories = document.querySelectorAll('.dates-category');
  
  if (!sidebar || categories.length < 2) return;
  
  // 在第一个类别下方添加视觉提示
  const firstCategory = categories[0];
  const scrollHint = document.createElement('div');
  scrollHint.className = 'category-scroll-hint';
  scrollHint.innerHTML = `
    <div class="hint-line"></div>
    <div class="hint-icon"><i class="fas fa-angle-double-down"></i></div>
    <div class="hint-line"></div>
  `;
  
  // 将提示插入到第一个和第二个类别之间
  if (firstCategory && firstCategory.nextElementSibling) {
    sidebar.insertBefore(scrollHint, firstCategory.nextElementSibling);
  }
  
  // 监听滚动事件，当用户滚动超过第一个类别时，隐藏提示
  sidebar.addEventListener('scroll', function() {
    const scrollHintEl = document.querySelector('.category-scroll-hint');
    if (scrollHintEl && sidebar.scrollTop > firstCategory.offsetHeight) {
      scrollHintEl.classList.add('scrolled');
    }
  });
});
