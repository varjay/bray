<template>
  <div class="top-bar">
    <div class="container">
      <div class="content">
        <div class="left">
          <span>欢迎访问博雷阀门官方网站</span>
        </div>
        <div class="right">
          <span class="desktop-only">联系电话: +86-139 1744 4407</span>
          <span class="separator desktop-only">|</span>
          <span class="desktop-only">邮箱: 13917444407@163.com</span>
          <span class="mobile-only">电话: 139 1744 4407 <span class="separator">|</span> 13917444407@163.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  background-color: var(--vp-c-brand-1);
  color: white;
  font-size: 14px;
  height: 36px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 33;
}

.container {
  margin: 0 auto;
  max-width: 100%;
  padding: 0 32px;
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right {
  display: flex;
  gap: 12px;
}

.separator {
  color: rgba(255, 255, 255, 0.6);
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  .top-bar {
    height: auto;
    padding: 8px 0;
  }
  
  .left {
    display: none;
  }
  
  .desktop-only {
    display: none;
  }
  
  .mobile-only {
    display: inline;
  }
  
  .content {
    justify-content: center;
  }
}
</style>
