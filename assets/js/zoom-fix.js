/**
 * 确保移动设备可以正常缩放的JavaScript修复
 */

document.addEventListener('DOMContentLoaded', function() {
  // 移除任何可能阻止触摸事件的监听器
  document.addEventListener('touchstart', function(e) {
    // 允许默认触摸行为
  }, { passive: true });
  
  document.addEventListener('touchmove', function(e) {
    // 允许默认的触摸移动行为，包括缩放
  }, { passive: true });
  
  // 监听页面加载完成后事件
  window.addEventListener('load', function() {
    // 短暂延迟以确保视口正确设置
    setTimeout(function() {
      // 尝试触发布局重新计算
      window.dispatchEvent(new Event('resize'));
    }, 300);
  });
});
