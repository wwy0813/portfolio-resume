<template>
  <div class="container">
    <section class="page">
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
      <h1>晚吟</h1>
      <p>这是一个简单主页。</p>
      <div><button>jiaoyu</button></div>
    </section>
    <section class="page">
      <div>
        <p>教育背景</p>
        <p>广州软件学院23级电子与计算机工程</p>
        <p>主要课程：前端脚本应用开发、微信小程序应用开发</p>
      </div>
    </section>
    <section class="page">
      <div>
        <p>经历</p>
        <p>熟悉HTML、CSS、JavaScript等前端技术</p>
        <p>熟悉Vue.js框架和相关生态系统</p>
        <p>熟悉微信小程序开发</p>
      </div>
    </section>
    <section class="page">
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
      <h1>晚吟</h1>
      <p>这是一个简单主页。</p>
    </section>
    <section class="page">
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
      <h1>晚吟</h1>
      <p>这是一个简单主页。</p>
    </section>
    <section class="page">
      <div>
        <p>有事请联系我</p>
        <p>邮箱：242536xxxx@qq.com</p>
        <p>微信：Clarence_xxxx</p>
        <input type="text" placeholder="名字" />
        <input type="email" placeholder="邮箱" />
        <textarea placeholder="留言" />
        <button type="button">发送</button>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
template {
  background: linear-gradient(135deg, #e0f2ff 0%, #ffffff 50%, #dbeafe 100%);
}
.page {
  height: 100vh;
  height: 100dvh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  box-sizing: border-box;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-y: contain;
  text-align: center;
  background: linear-gradient(135deg, #e0f2ff 0%, #ffffff 50%, #dbeafe 100%);
  background-attachment: local;
}
.avatar {
  width: 250px;
  height: auto;
  border-radius: 80%;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-top: 2rem;
}

p {
  font-size: 1.25rem;
  color: #080505;
}
</style>
