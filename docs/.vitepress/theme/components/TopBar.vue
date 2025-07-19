<template>
  <div class="top-bar">
    <div class="container">
      <div class="content">
        <div class="left">
          <span>欢迎访问博雷阀门官方网站</span>
        </div>
        <div class="right">
          <span>联系电话: +86-21-12345678</span>
          <span class="separator">|</span>
          <span>邮箱: info@braycn.com</span>
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

@media (max-width: 768px) {
  .top-bar {
    display: none;
  }
}
</style>
