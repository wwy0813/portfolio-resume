<template>
  <div class="container">
    <section id="home" class="page">
      <img alt="Vue logo" src="/images/头像.jpg" width="100" height="100" class="avatar" />
      <h1>晚吟</h1>
      <p class="type-text">{{ typeText }}<span class="cursor">|</span></p>
      <div class="btn-group">
        <button @click="scrollToSection('about')">关于</button>
        <button @click="scrollToSection('experience')">经历</button>
        <button @click="scrollToSection('skills')">技术栈</button>
        <button @click="scrollToSection('projects')">项目</button>
        <button @click="scrollToSection('contact')">联系</button>
      </div>
    </section>
    <section id="about" class="page">
      <div class="about-section">
        <h2>关于我</h2>
        <div class="about-content">
          <div v-for="(item, index) in aboutList" :key="index" class="about-item">
            <button
              class="about-question"
              :aria-expanded="activeIndex === index"
              @click="toggleAnswer(index)"
            >
              <span>{{ item.question }}</span>
              <span class="about-icon">{{ activeIndex === index ? '−' : '+' }}</span>
            </button>
            <div v-if="activeIndex === index" class="about-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="page">
      <div class="experience-section">
        <h2 class="experience-title">工作经历</h2>
        <p class="experience-subtitle">我的职业经历与成长</p>

        <div class="experience-list">
          <!-- 第一份工作 -->
          <div class="experience-card">
            <div class="experience-header">
              <h3>软件测试</h3>
              <p class="experience-time">2026年9月 — 2027年2月</p>
            </div>
            <h5>东莞缀梦智能科技有限公司</h5>

            <div class="experience-divider" />

            <h4>工作内容</h4>
            <p class="experience-description">
              功能测试： 负责「爱刻」「Umove」两款
              APP功能测试，验证蓝牙设备连接、玩具绑定及通话等功能，排查功能异常。 <br />
              缺陷管理：编写测试报告及 Bug 报告，记录缺陷并跟进问题反馈与验证。 <br />
              竞品分析：分析同类产品功能及交互体验，提出产品功能优化与需求改进建议。<br />
              产品协作：参与产品网页功能评审与完善，了解产品上线流程及 Android、iOS 平台差异。
            </p>
          </div>

          <!-- 第二份工作 -->
          <div class="experience-card">
            <div class="experience-header">
              <h3>工艺工程师</h3>
              <p class="experience-time">2026年2月 — 2026年8月</p>
            </div>

            <h5>广东保伦电子股份有限公司</h5>

            <div class="experience-divider" />

            <h4>工作内容</h4>
            <p class="experience-description">
              流程规范： 负责装配、半成品及调试全流程 SOP 编写，运用边界值、场景法等测试思维
              拆解产品功能，规范异常操作处理流程。<br />
              硬件调试：熟练使用示波器、万用表进行信号测试与故障定位，独立搭建测试环境并协
              助复现硬件缺陷，具备软硬件联调基础。<br />
              产品认知：深入产线熟悉多款音视频产品全生命周期，善于从用户视角梳理功能逻辑，
              提升测试覆盖全面性。
            </p>
          </div>
        </div>
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
    <button
      class="back-to-home"
      aria-label="返回首页"
      title="返回首页"
      @click="scrollToSection('home')"
    >
      <span class="back-arrow">↑</span>
      <span class="back-text">首页</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const activeIndex = ref(-1)
const aboutList = [
  {
    question: '我如何发现问题？',
    answer:
      '再发现问题之前，首先需要做的就是了解产品本身，只有了解了，才能够去发现问题。剩下的就是敏锐的观察力，去细心的观察每一处细节，用拓展思维，站在用户的角度上去看待这个产品。',
  },
  {
    question: '我如何分析问题？',
    answer:
      '在测试过程中，发现问题时，我会先记录下问题的现象和具体的操作步骤，确认他的可复现率，再去和开发进行商讨，查看具体的日志去分析他产生的原因，提交缺陷报告。',
  },
  {
    question: '面对冲突，我如何处理？',
    answer:
      '在日常工作生活中，难免会遇到一些小小的冲突，比如当你提交的bug报告与开发人员产生分歧时，需要先认真倾听他人的想法，再去阐述你的意见，以及探讨性的分析问题。我们的首要任务是要去解决这个问题，而并非争论，先去了解问题，再去解决问题，彼此都需要拥有一颗包容的心。',
  },
  {
    question: '我如何让自己持续进步？',
    answer:
      '保持一颗向上的心，多多得去了解更前沿的技术，学会和AI共处随时代发展，将学会的技术应用到我们的工作中，也能够使我们更好的和同事沟通，去理解对方，更加熟悉产品的底层架构。',
  },
]
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

function toggleAnswer(index) {
  activeIndex.value = activeIndex.value === index ? -1 : index
}

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

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped>
.experience-section {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.experience-title {
  margin: 0 0 8px;
  color: #43566e;
  font-size: 30px;
  font-weight: 700;
}

.experience-subtitle {
  margin: 0 0 32px;
  color: #8291a5;
  font-size: 14px;
}

.experience-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  text-align: left;
}

.experience-card {
  box-sizing: border-box;
  min-width: 0;
  padding: 28px 26px;

  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(153, 178, 205, 0.4);
  border-radius: 16px;

  box-shadow: 0 8px 24px rgba(66, 94, 130, 0.05);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(66, 94, 130, 0.1);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.experience-header h3 {
  margin: 0;
  font-size: 21px;
  font-weight: 650;
  color: #43566e;
}
.experience-time {
  margin: 14px 0 18px;
  font-size: 13px;
  line-height: 1.7;
  color: #8291a5;
}
.experience-divider {
  height: 1px;
  background: #e1eaf3;
  margin-bottom: 20px;
}
.experience-card h4 {
  margin: 0 0 10px;
  font-size: 15px;
  color: #526b8a;
}
.experience-description {
  margin: 0;
  font-size: 14px;
  line-height: 1.9;
  color: #637287;
}
@media (max-width: 650px) {
  .experience-title {
    font-size: 25px;
  }

  .experience-subtitle {
    margin-bottom: 22px;
  }

  .experience-list {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .experience-card {
    padding: 22px 20px;
  }

  .experience-header h3 {
    font-size: 19px;
  }
}
.back-to-home {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  width: 54px;
  height: 54px;
  border: 1px solid rgba(153, 178, 205, 0.5);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.9);
  color: #526b8a;
  box-shadow: 0 4px 16px rgba(66, 94, 130, 0.15);
  backdrop-filter: blur(8px);

  cursor: pointer;
  transition: all 0.25s ease;
}
.back-to-home:hover {
  background: #526b8a;
  color: #ffffff;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(66, 94, 130, 0.22);
}
.back-arrow {
  font-size: 22px;
  line-height: 1;
}
.back-text {
  font-size: 11px;
  line-height: 1;
}
.back-to-home:focus-visible {
  outline: 2px solid #526b8a;
  outline-offset: 4px;
}
.about-section {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  max-width: 760px;
  box-sizing: border-box;
}
.about-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #43566e;
}
.about-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
}
.about-item {
  width: 100%;
}
.about-item:hover {
  background-color: rgba(255, 255, 255, 0.65);
}
.about-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.65);
  color: #43566e;
  border: 1px solid rgba(153, 178, 205, 0.45);
  border-radius: 8px;
  cursor: pointer;
}
.about-question:focus-visible {
  outline: 2px solid #526b8a;
  outline-offset: -3px;
}
.about-icon {
  font-size: 1.5rem;
  font-shrink: 0;
  color: #526b8a;
}
.about-answer {
  padding: 12px 16px;
  font-size: 0.95rem;
  color: #43566e;
  background-color: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(153, 178, 205, 0.45);
  border-radius: 8px;
}
.about-answer p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #526174;
}
.btn-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}
.btn-group button {
  padding: 9px 20px;
  font-size: 1rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.65);
  color: #43566e;
  border: 1px solid rgba(153, 178, 205, 0.45);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-group button:hover {
  background-color: #526b8a;
  color: #ffffff;
  border-color: #526b8a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 94, 130, 0.15);
}
.btn-group button:active {
  transform: translateY(0);
  box-shadow: none;
}
.btn-group button:focus-visible {
  outline: 2px solid #526b8a;
  outline-offset: 3cqmax;
}

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
@keyframes answer-in {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
@media (max-width: 600px) {
  .about-section h2 {
    font-size: 1.5rem;
  }
  .about-question {
    padding: 15px;
    font-size: 0.9rem;
  }
  .about-answer {
    padding: 0 15px 15px;
  }
  .about-answer p {
    font-size: 0.85rem;
  }
}
@media (max-width: 600px) {
  .back-to-home {
    right: 16px;
    bottom: 18px;
    width: 46px;
    height: 46px;
  }

  .back-arrow {
    font-size: 19px;
  }

  .back-text {
    font-size: 10px;
  }
}
</style>
