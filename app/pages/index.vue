<template>
  <div class="container">
    <section id="home" class="page">
      <div class="avatar-orbit">
        <span class="orbit-ring ring-1" />
        <span class="orbit-ring ring-2" />
        <span class="orbit-ring ring-3" />
        <span class="orbit-ring ring-4" />

        <span class="ripple ripple-1" />
        <span class="ripple ripple-2" />
        <span class="ripple ripple-3" />

        <img src="/images/头像.jpg" alt="个人头像" class="avatar" />
      </div>

      <h1>吴莞盈</h1>
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

        <div class="experience-list" :class="{ 'experience-visible': experienceVisible }">
          <!-- 第一份工作 -->
          <div class="experience-card" data-direction="left">
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
          <div class="experience-card" data-direction="right">
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
      <div class="skills-section">
        <p class="skills-label">MY SKILLS</p>
        <h2 class="skills-title">技术栈</h2>

        <div class="skills-grid" :class="{ 'skills-visible': skillsVisible }">
          <div class="skill-item">
            <img src="/images/HTML5.svg" alt="HTML" class="skill-image" />
            <div class="skill-overlay"><span>HTML</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/css-3.svg" alt="CSS" class="skill-image" />
            <div class="skill-overlay"><span>CSS</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/javascript.svg" alt="JavaScript" class="skill-image" />
            <div class="skill-overlay"><span>JavaScript</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/typescript-icon.svg" alt="TypeScript" class="skill-image" />
            <div class="skill-overlay"><span>TypeScript</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/nodejs.svg" alt="Node.js" class="skill-image" />
            <div class="skill-overlay"><span>Node.js</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/vue.svg" alt="Vue.js" class="skill-image" />
            <div class="skill-overlay"><span>Vue.js</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/nuxt-icon.svg" alt="Nuxt.js" class="skill-image" />
            <div class="skill-overlay"><span>Nuxt.js</span></div>
          </div>
          <div class="skill-item">
            <img src="/images/spring.svg" alt="Spring Boot" class="skill-image" />
            <div class="skill-overlay"><span>Spring Boot</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/python.svg" alt="Python" class="skill-image" />
            <div class="skill-overlay"><span>Python</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/mysql.svg" alt="MySQL" class="skill-image" />
            <div class="skill-overlay"><span>MySQL</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/git-icon.svg" alt="Git" class="skill-image" />
            <div class="skill-overlay"><span>Git</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/github-icon.svg" alt="GitHub" class="skill-image" />
            <div class="skill-overlay"><span>GitHub</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/java.svg" alt="Java" class="skill-image" />
            <div class="skill-overlay"><span>Java</span></div>
          </div>

          <div class="skill-item">
            <img
              src="/images/Visual Studio Code (VS Code).svg"
              alt="Visual Studio Code"
              class="skill-image"
            />
            <div class="skill-overlay"><span>Visual Studio Code</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/IntelliJ IDEA.svg" alt="IntelliJ IDEA" class="skill-image" />
            <div class="skill-overlay"><span>IntelliJ IDEA</span></div>
          </div>

          <div class="skill-item">
            <img src="/images/Android Studio.svg" alt="Android Studio" class="skill-image" />
            <div class="skill-overlay"><span>Android Studio</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="page">
      <div class="projects-section">
        <p class="projects-label">MY PROJECTS</p>
        <h2 class="projects-title">项目实践</h2>

        <div class="projects-list">
          <article class="project-card">
            <img
              src="/images/爱刻.png"
              alt="爱刻 APP 功能展示"
              class="project-image"
              @click="openPreview('/images/爱刻.png', '爱刻 APP 功能展示')"
            />

            <div class="project-content">
              <span class="project-type">移动端 </span>
              <h3>爱刻</h3>
              <p class="project-description">
                智能设备配套应用，围绕蓝牙连接、设备控制及应用页面， 验证功能是否正常运行。
              </p>

              <div class="project-divider" />

              <h4>核心测试工作</h4>
              <ul class="project-work">
                <li>蓝牙连接与设备配对验证</li>
                <li>设备控制及玩具联动通话测试</li>
                <li>社交页面与个人中心功能测试</li>
                <li>编写 Bug 报告及测试报告</li>
              </ul>

              <div class="project-tags">
                <span>功能测试</span>
                <span>蓝牙连接</span>
                <span>移动端测试</span>
                <span>缺陷管理</span>
              </div>
            </div>
          </article>

          <article class="project-card">
            <img
              src="/images/Umove网页.png"
              alt="Umove 网页测试展示"
              class="project-image"
              @click="openPreview('/images/Umove网页.png', 'Umove 网页测试展示')"
            />

            <div class="project-content">
              <span class="project-type">Web 端</span>
              <h3>Umove 网页</h3>
              <p class="project-description">
                对 Umove 网页进行功能测试，验证页面跳转是否正常， 检查各项功能能否正常使用。
              </p>

              <div class="project-divider" />

              <h4>核心测试工作</h4>
              <ul class="project-work">
                <li>测试页面跳转与导航功能</li>
                <li>验证页面功能及交互是否正常</li>
                <li>检查异常情况并记录问题</li>
                <li>整理 Bug 报告并反馈测试结果</li>
              </ul>

              <div class="project-tags">
                <span>Web 测试</span>
                <span>页面跳转</span>
                <span>功能测试</span>
                <span>缺陷管理</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div
      v-if="previewVisible"
      class="image-preview"
      @click.self="closePreview"
      @keydown.esc="closePreview"
    >
      <button class="preview-close" aria-label="关闭图片预览" @click="closePreview">×</button>

      <img :src="previewImage" :alt="previewAlt" class="preview-image" @click.stop />
    </div>

    <section id="contact" class="page">
      <div class="contact-section">
        <p class="contact-label">CONTACT</p>
        <h2>让我们聊聊吧。</h2>
        <p class="contact-subtitle">如果你对我的经历或项目感兴趣，欢迎与我联系。</p>

        <div class="contact-info">
          <a href="mailto:你的邮箱地址" class="contact-item">
            <span class="contact-icon">✉</span>
            <span>2425368446@qq.com</span>
          </a>

          <div class="contact-item">
            <span class="contact-icon">☎</span>
            <span>13356461672</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💬</span>
            <span>Clarence_0813</span>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="sendMessage">
          <div class="contact-row">
            <input v-model.trim="contactForm.name" type="text" placeholder="姓名" required />
            <input v-model.trim="contactForm.email" type="email" placeholder="邮箱" required />
          </div>

          <input v-model.trim="contactForm.subject" type="text" placeholder="主题" required />

          <textarea v-model.trim="contactForm.message" placeholder="留言" rows="4" required />

          <button type="submit">发送留言</button>
        </form>
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
const activeIndex = ref(0)
const aboutList = [
  {
    question: '关于我的背景以及我是一个怎样的人？',
    answer:
      '我目前就读于广州软件学院电子与计算机工程专业，是一名2027届的大四学生，同时也是一名学生党员。关于我是一个怎样的人这件事，我认为我是一个始终走在向“好”字靠拢的人，想成为一个好人，做很多好事，学习更多的技能去完善自身，做一切我认为正确的事。',
  },
  {
    question: '为什么想成为一名测试工程师？',
    answer:
      '因为喜欢吧，喜欢去发现问题，分析问题，解决问题，这能给我带来极大地成就感。在不断完善产品的过程中，也会觉得与有荣焉，恰好我也有足够的耐心和细心去做好这件事。',
  },
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
const previewVisible = ref(false)
const previewImage = ref('')
const previewAlt = ref('')
const sentenceList = [
  '你好，我是吴莞盈。',
  '我是一名测试工程师。',
  '我热爱编程，喜欢探索新技术。',
  '欢迎访问我的个人主页！',
]
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const contactEmail = '你的真实邮箱地址'
const skillsVisible = ref(false)
const experienceVisible = ref(false)
let experienceObserver = null
let skillsObserver = null
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

  const container = document.querySelector('.container')
  const skillsSection = document.getElementById('skills')

  if (container && skillsSection) {
    skillsObserver = new IntersectionObserver(
      ([entry]) => {
        skillsVisible.value = entry.isIntersecting
      },
      {
        root: container,
        threshold: 0.25,
      }
    )

    skillsObserver.observe(skillsSection)
  }

  // 工作经历进入视野时触发动画
  const experienceList = document.querySelector('.experience-list')

  if (container && experienceList) {
    experienceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experienceVisible.value = true

          if (experienceObserver) {
            experienceObserver.disconnect()
            experienceObserver = null
          }
        }
      },
      {
        root: container,
        threshold: 0.25,
      }
    )

    experienceObserver.observe(experienceList)
  }
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }

  if (skillsObserver) {
    skillsObserver.disconnect()
    skillsObserver = null
  }

  if (experienceObserver) {
    experienceObserver.disconnect()
    experienceObserver = null
  }

  document.body.style.overflow = ''
})

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
function sendMessage() {
  const { name, email, subject, message } = contactForm.value

  const body = `姓名：${name}\n邮箱：${email}\n\n${message}`

  const url =
    `mailto:${contactEmail}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`

  window.location.href = url
}
function openPreview(src, alt) {
  previewImage.value = src
  previewAlt.value = alt
  previewVisible.value = true
  document.body.style.overflow = 'hidden'
}

function closePreview() {
  previewVisible.value = false
  document.body.style.overflow = ''
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
/* 图片点击放大预览 */
.project-image {
  cursor: zoom-in;
  transition: transform 0.25s ease;
}

.project-image:hover {
  transform: scale(1.02);
}

.image-preview {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
  box-sizing: border-box;

  background: rgba(12, 18, 30, 0.88);
  backdrop-filter: blur(6px);
}

.preview-image {
  display: block;
  max-width: 90vw;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;

  border-radius: 10px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

  cursor: zoom-out;
}

.preview-close {
  position: absolute;
  top: 20px;
  right: 28px;

  width: 42px;
  height: 42px;
  padding: 0;

  color: #fff;
  font-size: 32px;
  line-height: 1;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  cursor: pointer;
  transition: background 0.2s ease;
}

.preview-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 600px) {
  .image-preview {
    padding: 16px;
  }

  .preview-image {
    max-width: 94vw;
    max-height: 82vh;
  }

  .preview-close {
    top: 12px;
    right: 12px;
  }
}
/* 项目展示整体 */
.projects-section {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
}

.projects-label {
  margin: 0 0 6px;
  color: #8291a5;
  font-size: 11px;
  letter-spacing: 4px;
}

.projects-title {
  margin: 0 0 18px;
  color: #43566e;
  font-size: 28px;
  font-weight: 700;
}

/* 两张卡片等宽、等高、左右对称 */
.projects-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 24px;
  width: 100%;
}

/* 卡片外观 */
.project-card {
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(153, 178, 205, 0.45);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(66, 94, 130, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(66, 94, 130, 0.12);
}

/* 图片尺寸统一，并与卡片边框保持距离 */
.project-image {
  display: block;
  width: calc(100% - 32px);
  height: 160px;
  margin: 16px auto 0;
  box-sizing: border-box;
  object-fit: contain;
  border-radius: 10px;
}

.project-content {
  padding: 20px 20px 22px;
}

.project-type {
  color: #8291a5;
  font-size: 11px;
  letter-spacing: 1px;
}

.project-content h3 {
  margin: 7px 0 9px;
  color: #43566e;
  font-size: 21px;
  font-weight: 700;
}

.project-description {
  margin: 0;
  color: #637287;
  font-size: 12px;
  line-height: 1.8;
}

.project-divider {
  height: 1px;
  margin: 14px 0;
  background: #e1eaf3;
}

.project-content h4 {
  margin: 0 0 10px;
  color: #526b8a;
  font-size: 13px;
}

.project-work {
  display: grid;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-work li {
  position: relative;
  padding-left: 13px;
  color: #637287;
  font-size: 12px;
  line-height: 1.6;
}

.project-work li::before {
  position: absolute;
  top: 7px;
  left: 0;
  width: 5px;
  height: 5px;
  content: '';
  background: #829bb8;
  border-radius: 50%;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 15px;
}

.project-tags span {
  padding: 5px 9px;
  color: #526b8a;
  font-size: 10px;
  background: #edf3fa;
  border: 1px solid rgba(153, 178, 205, 0.3);
  border-radius: 20px;
}

/* 小屏幕下改为上下排列 */
@media (max-width: 600px) {
  .projects-section {
    max-width: 360px;
  }

  .projects-list {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .projects-title {
    font-size: 25px;
    margin-bottom: 14px;
  }

  .project-image {
    height: auto;
    max-height: 200px;
  }

  .project-content {
    padding: 15px 16px 17px;
  }
}

.contact-section {
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  box-sizing: border-box;
}
.contact-label {
  margin-bottom: 18px;
  color: #8291a5;
  font-size: 13px;
  letter-spacing: 5px;
}
.contact-section h2 {
  margin: 0 0 12px;
  color: #43566e;
  font-size: 30px;
  font-weight: 700;
}
.contact-subtitle {
  margin-bottom: 28px;
  color: #8291a5;
  font-size: 14px;
  line-height: 1.8;
}
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-bottom: 32px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #43566e;
  font-size: 15px;
  text-decoration: none;
}
.contact-icon {
  color: #526b8a;
  font-size: 21px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
.contact-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 14px 16px;
  color: #43566e;
  font: inherit;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(153, 178, 205, 0.45);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #526b8a;
}
.contact-form textarea {
  resize: vertical;
  min-height: 100px;
}
.contact-form button {
  padding: 13px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  background: #526b8a;
  border: 1px solid #526b8a;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact-form button:hover {
  background: #43566e;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .contact-section h2 {
    font-size: 25px;
  }

  .contact-row {
    grid-template-columns: 1fr;
  }

  .contact-info {
    align-items: flex-start;
  }
}
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

.skills-section {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  box-sizing: border-box;
}

.skills-label {
  margin: 0 0 8px;
  color: #8291a5;
  font-size: 11px;
  letter-spacing: 4px;
}

.skills-title {
  margin: 0 0 24px;
  color: #43566e;
  font-size: 28px;
  font-weight: 700;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  min-width: 0;
  padding: 16px;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(153, 178, 205, 0.4);
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(66, 94, 130, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.skill-item:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 26px rgba(66, 94, 130, 0.15);
}

.skill-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.35s ease;
}

.skill-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: rgba(132, 177, 233, 0.72);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-overlay span {
  color: #ffffff;
  font-size: 23px;
  font-weight: 600;
  text-align: center;
  padding: 0 6px;
  overflow-wrap: anywhere;
}

.skill-item:hover .skill-overlay {
  opacity: 1;
}

.skill-item:hover .skill-image {
  transform: scale(1.08);
}

@media (max-width: 600px) {
  .skills-section {
    max-width: 400px;
  }

  .skills-title {
    margin-bottom: 20px;
    font-size: 25px;
  }

  .skills-grid {
    gap: 12px;
  }

  .skill-item {
    padding: 10px;
  }
}

.skills-grid .skill-item {
  opacity: 0;
  transform: translateX(-80px);

  transition:
    opacity 2s ease,
    transform 2s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease;
}

.skills-grid .skill-item:nth-child(4n + 3),
.skills-grid .skill-item:nth-child(4n + 4) {
  transform: translateX(80px);
}

.skills-grid.skills-visible .skill-item {
  opacity: 1;
  transform: translateX(0);
}

.skills-grid .skill-item:nth-child(4n + 1) {
  transition-delay: 0.05s;
}

.skills-grid .skill-item:nth-child(4n + 2) {
  transition-delay: 0.12s;
}

.skills-grid .skill-item:nth-child(4n + 3) {
  transition-delay: 0.19s;
}

.skills-grid .skill-item:nth-child(4n + 4) {
  transition-delay: 0.26s;
}

.skills-grid.skills-visible .skill-item:hover {
  transform: translateY(-4px) scale(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .skills-grid .skill-item {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

#home {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

#home::before,
#home::after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  filter: blur(65px);
  pointer-events: none;
  animation: home-glow 10s ease-in-out infinite alternate;
}

#home::before {
  top: 8%;
  left: 8%;
  background: rgba(120, 181, 255, 0.2);
}

#home::after {
  right: 8%;
  bottom: 8%;
  background: rgba(157, 205, 255, 0.25);
  animation-delay: -5s;
}

@keyframes home-glow {
  0% {
    transform: translate(-40px, -25px) scale(0.85);
  }

  50% {
    transform: translate(30px, 20px) scale(1.1);
  }

  100% {
    transform: translate(70px, -35px) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  #home::before,
  #home::after {
    animation: none;
  }
}
#home h1,
#home .type-text,
#home .btn-group {
  position: relative;
  z-index: 2;
}

.avatar-orbit {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  margin-bottom: 2rem;
  z-index: 0;
}

.avatar-orbit .avatar {
  position: relative;
  z-index: 0;
  width: 200px;
  height: auto;
  border-radius: 80%;
  margin: 0;
}

.orbit-ring,
.ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
}

.orbit-ring {
  z-index: -1;
  border: 1px solid rgba(104, 159, 218, 0.2);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.ring-1 {
  width: 250px;
  height: 250px;
}

.ring-2 {
  width: 410px;
  height: 410px;
}

.ring-3 {
  width: 500px;
  height: 500px;
}

.ring-4 {
  width: 650px;
  height: 650px;
}

.ripple {
  z-index: -1;
  width: 210px;
  height: 210px;
  border: 1px solid rgba(186, 211, 240, 0.7);
  opacity: 0;
  animation: ripple-out 10s ease-out infinite;
}

.ripple-2 {
  animation-delay: 1.66s;
}

.ripple-3 {
  animation-delay: 3.33s;
}

@keyframes ripple-out {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }

  12% {
    opacity: 0.65;
  }

  70% {
    opacity: 0.2;
  }

  100% {
    transform: translate(-50%, -50%) scale(3.2);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ripple {
    animation: none;
    opacity: 0;
  }
}

.project-card {
  position: relative;
  border: 1px solid rgba(120, 160, 210, 0.22);
  border-radius: 16px;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(120, 175, 240, 0.65);
  box-shadow: 0 8px 22px rgba(40, 90, 160, 0.12);
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card:hover {
    transition: none;
    transform: none;
  }
}

/* 工作经历卡片：初始状态 */
.experience-card {
  opacity: 0;
  transform: translateX(0) scale(0.88);
  transform-origin: center center;
  will-change: transform, opacity;
}

/* 左侧卡片：从左边弹入 */
.experience-card[data-direction='left'] {
  transform: translateX(-100px) scale(0.88);
}

/* 右侧卡片：从右边弹入 */
.experience-card[data-direction='right'] {
  transform: translateX(100px) scale(0.88);
}

/* 进入视野后触发动画 */
.experience-list.experience-visible .experience-card {
  animation: jelly-enter 1.15s both;
}

/* 左右错开一点时间 */
.experience-list.experience-visible .experience-card[data-direction='right'] {
  animation-delay: 0.16s;
}

/* 果冻弹性进入 */
@keyframes jelly-enter {
  0% {
    opacity: 0;
    transform: translateX(var(--enter-x, 0)) scale(0.88, 0.88);
  }

  45% {
    opacity: 1;
    transform: translateX(0) scale(1.04, 0.96);
  }

  62% {
    transform: translateX(0) scale(0.97, 1.03);
  }

  78% {
    transform: translateX(0) scale(1.015, 0.99);
  }

  90% {
    transform: translateX(0) scale(0.995, 1.005);
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1, 1);
  }
}

/* 左右方向分别设置初始位移 */
.experience-card[data-direction='left'] {
  --enter-x: -100px;
}

.experience-card[data-direction='right'] {
  --enter-x: 100px;
}

/* 动画结束后仍保留原本的悬停效果 */
.experience-card:hover {
  transform: translateY(-4px);
}

/* 尊重系统的减少动态效果设置 */
@media (prefers-reduced-motion: reduce) {
  .experience-card,
  .experience-list.experience-visible .experience-card {
    opacity: 1;
    transform: none;
    animation: none;
    will-change: auto;
  }
}
</style>
