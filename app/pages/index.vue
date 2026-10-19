<template>
  <div class="container">
    <section id="home" class="page">
      <img alt="Vue logo" src="/images/头像.jpg" width="100" height="100" class="avatar" />
      <h1>晚吟</h1>
      <p class="type-text">{{ typeText }}<span class="cursor">|</span></p>
      <div>
        <button @click="scrollToSection('education')">背景</button>
        <button @click="scrollToSection('experience')">经历</button>
        <button @click="scrollToSection('skills')">技术栈</button>
        <button @click="scrollToSection('projects')">项目</button>
        <button @click="scrollToSection('contact')">联系</button>
      </div>
    </section>
    <section id="education" class="page">
      <div>
        <p>教育背景</p>
        <p>广州软件学院23级电子与计算机工程</p>
        <p>主要课程：前端脚本应用开发、微信小程序应用开发</p>
      </div>
    </section>
    <section id="experience" class="page">
      <p>工作经历</p>
      <div>
        <p>软件测试</p>
        <p>时间：2023年9月 - 2024年6月</p>
        <p>工作内容.....</p>
      </div>
      <div>
        <p>工艺工程师</p>
        <p>时间：2023年9月 - 2024年6月</p>
        <p>工作内容：.....</p>
      </div>
    </section>
    <section id="skills" class="page">
      <p>技术栈展示</p>
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
      <img alt="Vue logo" src="/images/头像.jpg" width="125" height="125" class="avatar" />
    </section>
    <section id="projects" class="page">
      <p>项目展示</p>
      <p>xxxxxxxxxxx</p>
    </section>
    <section id="contact" class="page">
      <div>
        <p>有事请联系我</p>
        <p>邮箱：242536xxxx@qq.com</p>
        <p>微信：Clarence_xxxx</p>
        <input type="text" placeholder="名字" />
        <input type="email" placeholder="邮箱" />
        <div><textarea placeholder="留言" /></div>
        <div><button type="button">发送</button></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const typeText = ref('')
const sentenceList = [
  '你好，我是晚吟。',
  '我是一名前端开发工程师。',
  '我热爱编程，喜欢探索新技术。',
  '欢迎访问我的个人主页！',
]
let timer = null
let sentenceIndex = 0
let charIndex = 0

function startType() {
  const currentStr = sentenceList[sentenceIndex]
  timer = setInterval(() => {
    if (charIndex < currentStr.length) {
      typeText.value += currentStr.charAt(charIndex)
      charIndex++
    } else {
      clearInterval(timer)
      setTimeout(() => {
        typeText.value = ''
        charIndex = 0
        sentenceIndex = (sentenceIndex + 1) % sentenceList.length
        startType()
      }, 1000)
    }
  }, 120)
}

onMounted(() => {
  startType()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

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
  width: 200px;
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
.cursor {
  animation: blink 0.7s infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
