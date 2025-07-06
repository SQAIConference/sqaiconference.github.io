// Sidebar category animation and interaction
document.addEventListener('DOMContentLoaded', function() {
  // Hover effect for date items
  const dateItems = document.querySelectorAll('.date-item');
  dateItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const icon = item.querySelector('.date-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const icon = item.querySelector('.date-icon i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
  
  // Expand/collapse category sections (for mobile)
  const categoryTitles = document.querySelectorAll('.category-title');
  categoryTitles.forEach(title => {
    title.addEventListener('click', () => {
      // This will only take effect on smaller screens
      if (window.innerWidth <= 1100) {
        const datesList = title.nextElementSibling;
        if (datesList) {
          datesList.classList.toggle('collapsed');
          title.classList.toggle('collapsed');
        }
      }
    });
  });
  
  // Mobile toggle button for important dates
  const mobileToggle = document.querySelector('.mobile-dates-toggle');
  const sidebar = document.querySelector('.sqai-dates-fixed-sidebar');
  
  // 移动端处理放到了mobile-dates.js文件中
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-visible');
      
      if (sidebar.classList.contains('mobile-visible')) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
        
        // Add close button to sidebar when visible on mobile
        if (!document.querySelector('.mobile-sidebar-close')) {
          const closeBtn = document.createElement('div');
          closeBtn.className = 'mobile-sidebar-close';
          closeBtn.innerHTML = '<i class="fas fa-times"></i>';
          closeBtn.style.position = 'absolute';
          closeBtn.style.top = '15px';
          closeBtn.style.right = '15px';
          closeBtn.style.fontSize = '24px';
          closeBtn.style.cursor = 'pointer';
          closeBtn.style.zIndex = '10000';
          
          closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('mobile-visible');
            document.body.style.overflow = '';
            closeBtn.remove();
          });
          
          sidebar.appendChild(closeBtn);
        }
      } else {
        document.body.style.overflow = '';
        const closeBtn = document.querySelector('.mobile-sidebar-close');
        if (closeBtn) closeBtn.remove();
      }
  });
});
