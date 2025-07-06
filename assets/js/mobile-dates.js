// 处理移动版的重要日期展示
document.addEventListener('DOMContentLoaded', function() {
  // 获取到重要日期的主容器
  const datesContainer = document.querySelector('.sqai-dates-fixed-sidebar');
  
  // 如果找不到日期容器，直接返回
  if (!datesContainer) return;
  
  // 创建移动版日期部分
  createMobileDatesSection();
  
  // 增强浮动按钮
  enhanceMobileToggle();
  
  // 处理响应式布局切换
  handleResponsiveLayout();
});

// 创建嵌入式移动版日期部分
function createMobileDatesSection() {
  // 获取原始侧边栏的内容
  const sidebarContent = document.querySelector('.sqai-dates-fixed-sidebar .sidebar-inner');
  if (!sidebarContent) return;
  
  // 创建新的移动版日期区块
  const mobileSection = document.createElement('div');
  mobileSection.className = 'mobile-dates-section';
  
  // 创建头部
  const header = document.createElement('div');
  header.className = 'mobile-dates-header';
  header.innerHTML = '<span>重要日期</span><i class="fas fa-chevron-up"></i>';
  
  // 创建内容容器
  const content = document.createElement('div');
  content.className = 'mobile-dates-content';
  
  // 创建Tab导航
  const tabs = document.createElement('div');
  tabs.className = 'mobile-dates-tabs';
  
  // 定义所有类别
  const categories = [
    { id: 'sqai-a', name: 'SQAI-A', icon: 'fa-graduation-cap' },
    { id: 'sqai-b', name: 'SQAI-B', icon: 'fa-briefcase' },
    { id: 'sqai-c', name: 'SQAI-C', icon: 'fa-landmark' },
    { id: 'sqai-d', name: 'SQAI-D', icon: 'fa-laptop' },
    { id: 'general', name: '通用', icon: 'fa-calendar-alt' }
  ];
  
  // 为每个类别创建一个Tab
  categories.forEach((category, index) => {
    const tab = document.createElement('div');
    tab.className = 'date-tab' + (index === 0 ? ' active' : '');
    tab.setAttribute('data-category', category.id);
    tab.innerHTML = `<i class="fas ${category.icon}"></i> ${category.name}`;
    tabs.appendChild(tab);
    
    // 添加事件监听
    tab.addEventListener('click', () => {
      // 移除所有tab的active类
      document.querySelectorAll('.date-tab').forEach(t => t.classList.remove('active'));
      // 给当前tab添加active类
      tab.classList.add('active');
      
      // 显示对应的内容
      document.querySelectorAll('.mobile-category-content').forEach(c => c.classList.remove('active'));
      document.querySelector(`.mobile-category-content[data-category="${category.id}"]`).classList.add('active');
    });
  });
  
  // 创建主体内容
  const body = document.createElement('div');
  body.className = 'mobile-dates-body';
  
  // 获取所有分类和内容
  const dateCategories = document.querySelectorAll('.dates-category');
  
  // 为每个类别创建内容区域
  categories.forEach((category, index) => {
    const categoryContent = document.createElement('div');
    categoryContent.className = 'mobile-category-content' + (index === 0 ? ' active' : '');
    categoryContent.setAttribute('data-category', category.id);
    
    // 查找匹配的类别内容
    let found = false;
    dateCategories.forEach(cat => {
      if (cat.querySelector(`.${category.id}-title`)) {
        // 为SQAI-C添加美国250周年纪念徽章
        if (category.id === 'sqai-c') {
          const america250Badge = document.createElement('div');
          america250Badge.className = 'america250-badge';
          america250Badge.style.cssText = 'margin: 5px 10px 10px;';
          america250Badge.innerHTML = '<i class="fas fa-flag-usa"></i><span>America\'s 250th Anniversary</span>';
          categoryContent.appendChild(america250Badge);
        }
        
        // 复制这个类别的日期列表
        const datesList = cat.querySelector('.important-dates-list').cloneNode(true);
        categoryContent.appendChild(datesList);
        found = true;
      }
    });
    
    // 如果没有找到内容，添加一个占位符
    if (!found) {
      categoryContent.innerHTML = '<p>此类别暂无重要日期。</p>';
    }
    
    body.appendChild(categoryContent);
  });
  
  // 组装移动版日期区块
  content.appendChild(tabs);
  content.appendChild(body);
  mobileSection.appendChild(header);
  mobileSection.appendChild(content);
  
  // 插入到页面中
  const mainContent = document.querySelector('.page__inner-wrap');
  if (mainContent) {
    mainContent.prepend(mobileSection);
    
    // 添加点击事件处理折叠
    header.addEventListener('click', () => {
      header.classList.toggle('collapsed');
      content.classList.toggle('collapsed');
    });
  }
}

// 增强移动版浮动按钮
function enhanceMobileToggle() {
  const toggle = document.querySelector('.mobile-dates-toggle');
  if (!toggle) return;
  
  // 清空现有内容
  toggle.innerHTML = '';
  
  // 添加图标和文本
  const icon = document.createElement('i');
  icon.className = 'fas fa-calendar-alt';
  toggle.appendChild(icon);
  
  const text = document.createElement('span');
  text.className = 'mobile-dates-toggle-text';
  text.textContent = '重要日期';
  toggle.appendChild(text);
}

// 处理响应式布局切换
function handleResponsiveLayout() {
  // 根据窗口大小设置适当的显示内容
  function setResponsiveDisplay() {
    const isMobile = window.innerWidth <= 1100;
    
    // 获取元素
    const mobileSection = document.querySelector('.mobile-dates-section');
    const toggle = document.querySelector('.mobile-dates-toggle');
    
    if (mobileSection) {
      if (isMobile) {
        mobileSection.style.display = 'block';
      } else {
        mobileSection.style.display = 'none';
      }
    }
    
    if (toggle) {
      // 我们通过CSS来控制显示和隐藏，这里不需要额外的JS逻辑
      // 让CSS的媒体查询处理这个问题
    }
  }
  
  // 初始调用
  setResponsiveDisplay();
  
  // 监听窗口大小变化
  window.addEventListener('resize', setResponsiveDisplay);
}
