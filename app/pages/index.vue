<template>
  <div
    class="site-scroll h-dvh w-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto scroll-smooth overscroll-y-contain bg-[linear-gradient(135deg,#e0f2ff_0%,#ffffff_50%,#dbeafe_100%)] text-center"
  >
    <section
      id="home"
      class="relative isolate flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 text-center sm:px-6"
    >
      <!-- 淡蓝色氛围光，不再依赖原来的 #home::before / ::after -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute left-[5%] top-[8%] -z-10 size-48 rounded-full bg-sky-300/20 blur-3xl sm:size-72"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute bottom-[8%] right-[5%] -z-10 size-48 rounded-full bg-blue-200/30 blur-3xl sm:size-72"
      />

      <!-- 同心圆区域：整体根据屏幕宽度缩放 -->
      <div
        class="relative isolate flex size-[min(82vw,620px)] shrink-0 items-center justify-center"
      >
        <!-- 四层淡蓝色同心圆 -->
        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[38.46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/50"
        />

        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[63.08%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/45"
        />

        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[76.92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/40"
        />

        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-300/40"
        />

        <!-- 三层扩散波纹 -->
        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[32.3%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/80 opacity-0 motion-safe:animate-[ripple-out_10s_ease-out_infinite] motion-reduce:hidden"
        />

        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[32.3%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/80 opacity-0 [animation:ripple-out_10s_ease-out_infinite] [animation-delay:1.66s] motion-reduce:hidden"
        />

        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[32.3%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/80 opacity-0 [animation:ripple-out_10s_ease-out_infinite] [animation-delay:3.33s] motion-reduce:hidden"
        />

        <!-- 头像 -->
        <img
          src="/images/头像.jpg"
          alt="吴莞盈的个人头像"
          class="relative z-10 aspect-square w-[30.77%] rounded-full object-cover shadow-lg ring-4 ring-white/70"
        />
      </div>

      <!-- 姓名 -->
      <h1
        class="-mt-[7%] relative z-10 text-2xl font-bold tracking-wide text-slate-800 sm:text-3xl md:text-4xl"
      >
        吴莞盈
      </h1>

      <!-- 打字机文字：保留原有 Vue 逻辑 -->
      <p
        class="relative z-10 mt-5 min-h-7 max-w-full px-2 text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg"
      >
        {{ typeText }}<span class="ml-1 inline-block animate-pulse">|</span>
      </p>

      <!-- 导航按钮 -->
      <nav
        aria-label="首页导航"
        class="relative z-10 mt-5 flex w-full max-w-xl flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3"
      >
        <button
          class="rounded-lg border border-sky-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:text-base"
          @click="scrollToSection('about')"
        >
          关于
        </button>

        <button
          class="rounded-lg border border-sky-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:text-base"
          @click="scrollToSection('experience')"
        >
          经历
        </button>

        <button
          class="rounded-lg border border-sky-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:text-base"
          @click="scrollToSection('skills')"
        >
          技术栈
        </button>

        <button
          class="rounded-lg border border-sky-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:text-base"
          @click="scrollToSection('projects')"
        >
          项目
        </button>

        <button
          class="rounded-lg border border-sky-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:text-base"
          @click="scrollToSection('contact')"
        >
          联系
        </button>
      </nav>
    </section>
    <section
      id="about"
      class="flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4 py-12 text-center sm:px-6"
    >
      <div class="box-border max-h-full w-full max-w-[760px] overflow-y-auto">
        <h2 class="mb-8 text-[2rem] font-bold text-[#43566e] max-[600px]:text-2xl">关于我</h2>

        <div class="flex flex-col gap-3 text-left">
          <div
            v-for="(item, index) in aboutList"
            :key="index"
            class="w-full rounded-lg transition-colors hover:bg-white/65"
          >
            <button
              class="flex w-full cursor-pointer items-center justify-between rounded-lg border border-[rgba(153,178,205,0.45)] bg-white/65 px-4 py-3 text-base font-medium text-[#43566e] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#526b8a] max-[600px]:px-[15px] max-[600px]:py-[15px] max-[600px]:text-[0.9rem]"
              :aria-expanded="activeIndex === index"
              @click="toggleAnswer(index)"
            >
              <span>{{ item.question }}</span>

              <span class="shrink-0 text-2xl text-[#526b8a]">
                {{ activeIndex === index ? '−' : '+' }}
              </span>
            </button>

            <div
              v-if="activeIndex === index"
              class="rounded-lg border border-[rgba(153,178,205,0.45)] bg-white/65 px-4 py-3 text-[#43566e] max-[600px]:px-[15px] max-[600px]:pb-[15px] max-[600px]:pt-0"
            >
              <p
                class="m-0 text-[0.95rem] leading-normal text-[#526174] max-[600px]:text-[0.85rem]"
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="experience"
      class="flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4 py-12 text-center sm:px-6"
    >
      <div class="mx-auto w-full max-w-5xl">
        <h2 class="mb-2 text-2xl font-bold text-slate-700 sm:text-3xl">工作经历</h2>
        <p class="mb-6 text-sm text-slate-500 sm:mb-8 sm:text-base">我的职业经历与成长</p>

        <div
          class="experience-list grid w-full grid-cols-1 gap-4 text-left md:grid-cols-2 md:gap-6"
          :class="{ 'experience-visible': experienceVisible }"
        >
          <!-- 第一份工作 -->
          <div
            class="experience-card min-w-0 rounded-2xl border border-[rgba(153,178,205,0.4)] bg-white/80 p-7 opacity-0 scale-[0.88] shadow-[0_8px_24px_rgba(66,94,130,0.05)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_12px_28px_rgba(66,94,130,0.1)] max-[650px]:px-5 max-[650px]:py-[22px]"
            data-direction="left"
          >
            <div class="flex items-center justify-between gap-3">
              <h3 class="m-0 text-[21px] font-semibold text-[#43566e] max-[650px]:text-[19px]">
                软件测试
              </h3>
              <p class="mt-[14px] mb-[18px] text-[13px] leading-[1.7] text-[#8291a5]">
                2026年9月 — 2027年2月
              </p>
            </div>
            <h5 class="mt-2 mb-0 text-sm font-semibold text-[#43566e]">东莞缀梦智能科技有限公司</h5>

            <div class="mb-5 h-px bg-[#e1eaf3]" />

            <h4 class="mb-2.5 text-[15px] font-semibold text-[#526b8a]">工作内容</h4>
            <p class="m-0 text-sm leading-[1.9] text-[#637287]">
              功能测试： 负责「爱刻」「Umove」两款
              APP功能测试，验证蓝牙设备连接、玩具绑定及通话等功能，排查功能异常。 <br />
              缺陷管理：编写测试报告及 Bug 报告，记录缺陷并跟进问题反馈与验证。 <br />
              竞品分析：分析同类产品功能及交互体验，提出产品功能优化与需求改进建议。<br />
              产品协作：参与产品网页功能评审与完善，了解产品上线流程及 Android、iOS 平台差异。
            </p>
          </div>
          <!-- 第二份工作 -->
          <div
            class="experience-card min-w-0 rounded-2xl border border-[rgba(153,178,205,0.4)] bg-white/80 p-7 opacity-0 scale-[0.88] shadow-[0_8px_24px_rgba(66,94,130,0.05)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_12px_28px_rgba(66,94,130,0.1)] max-[650px]:px-5 max-[650px]:py-[22px]"
            data-direction="right"
          >
            <div class="flex items-center justify-between gap-3">
              <h3 class="m-0 text-[21px] font-semibold text-[#43566e] max-[650px]:text-[19px]">
                工艺工程师
              </h3>
              <p class="mt-[14px] mb-[18px] text-[13px] leading-[1.7] text-[#8291a5]">
                2026年2月 — 2026年8月
              </p>
            </div>
            <h5 class="mt-2 mb-0 text-sm font-semibold text-[#43566e]">广东保伦电子股份有限公司</h5>

            <div class="mb-5 h-px bg-[#e1eaf3]" />

            <h4 class="mb-2.5 text-[15px] font-semibold text-[#526b8a]">工作内容</h4>
            <p class="m-0 text-sm leading-[1.9] text-[#637287]">
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

    <section
      id="skills"
      class="flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4 py-12 text-center sm:px-6"
    >
      <div class="mx-auto box-border flex w-full max-w-[640px] flex-col items-center">
        <p class="mb-2 text-[11px] tracking-[4px] text-[#8291a5]">MY SKILLS</p>

        <h2
          class="mb-6 text-[28px] font-bold text-[#43566e] max-[600px]:mb-5 max-[600px]:text-[25px]"
        >
          技术栈
        </h2>

        <div
          class="skills-grid mx-auto grid w-full max-w-[560px] grid-cols-4 items-center justify-items-center gap-5 max-[600px]:gap-3"
          :class="{ 'skills-visible': skillsVisible }"
        >
          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/HTML5.svg"
              alt="HTML"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >HTML</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/css-3.svg"
              alt="CSS"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >CSS</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/javascript.svg"
              alt="JavaScript"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >JavaScript</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/typescript-icon.svg"
              alt="TypeScript"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >TypeScript</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/nodejs.svg"
              alt="Node.js"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Node.js</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/vue.svg"
              alt="Vue.js"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Vue.js</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/nuxt-icon.svg"
              alt="Nuxt.js"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Nuxt.js</span
              >
            </div>
          </div>
          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/spring.svg"
              alt="Spring Boot"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Spring Boot</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/python.svg"
              alt="Python"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Python</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/mysql.svg"
              alt="MySQL"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >MySQL</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/git-icon.svg"
              alt="Git"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Git</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/github-icon.svg"
              alt="GitHub"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >GitHub</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/java.svg"
              alt="Java"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Java</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/Visual Studio Code (VS Code).svg"
              alt="Visual Studio Code"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Visual Studio Code</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/IntelliJ IDEA.svg"
              alt="IntelliJ IDEA"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >IntelliJ IDEA</span
              >
            </div>
          </div>

          <div
            class="skill-item group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(153,178,205,0.4)] bg-white/80 p-4 opacity-0 transition-[opacity,transform,box-shadow] duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_12px_26px_rgba(66,94,130,0.15)] max-[600px]:p-2 motion-reduce:transform-none motion-reduce:opacity-100"
          >
            <img
              src="/images/Android Studio.svg"
              alt="Android Studio"
              class="block size-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div
              class="absolute inset-0 z-[2] flex items-center justify-center rounded-full bg-[rgba(132,177,233,0.72)] opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="break-words px-1 text-center text-sm font-semibold text-white sm:text-lg"
                >Android Studio</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4 py-12 text-center sm:px-6"
    >
      <div class="mx-auto box-border w-full max-w-[760px] text-center">
        <p class="mb-[6px] text-[11px] tracking-[4px] text-[#8291a5]">MY PROJECTS</p>
        <h2
          class="mb-[18px] text-[28px] font-bold text-[#43566e] max-[600px]:mb-[14px] max-[600px]:text-[25px]"
        >
          项目实践
        </h2>

        <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <article
            class="min-w-0 overflow-hidden rounded-2xl border border-sky-100 bg-white/80 text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src="/images/爱刻.png"
              alt="爱刻 APP 功能展示"
              class="mx-auto mt-4 block h-40 w-[calc(100%-2rem)] cursor-zoom-in rounded-xl object-contain transition-transform duration-300 hover:scale-[1.02] sm:h-48"
              @click="openPreview('/images/爱刻.png', '爱刻 APP 功能展示')"
            />

            <div class="p-4 sm:p-5">
              <span class="text-xs tracking-wide text-slate-500">移动端 </span>
              <h3 class="mt-2 text-xl font-bold text-slate-700">爱刻</h3>
              <p class="mt-2 text-sm leading-7 text-slate-600">
                智能设备配套应用，围绕蓝牙连接、设备控制及应用页面， 验证功能是否正常运行。
              </p>

              <div class="my-3.5 h-px bg-[#e1eaf3]" />

              <h4 class="mb-2.5 text-[13px] font-semibold text-[#526b8a]">核心测试工作</h4>
              <ul class="m-0 grid list-none gap-[7px] p-0">
                <li
                  class="relative pl-[13px] text-xs leading-[1.6] text-[#637287] before:absolute before:left-0 before:top-[7px] before:size-[5px] before:rounded-full before:bg-[#829bb8] before:content-['']"
                >
                  蓝牙连接与设备配对验证
                </li>
                <li
                  class="relative pl-[13px] text-xs leading-[1.6] text-[#637287] before:absolute before:left-0 before:top-[7px] before:size-[5px] before:rounded-full before:bg-[#829bb8] before:content-['']"
                >
                  设备控制及玩具联动通话测试
                </li>
                <li
                  class="relative pl-[13px] text-xs leading-[1.6] text-[#637287] before:absolute before:left-0 before:top-[7px] before:size-[5px] before:rounded-full before:bg-[#829bb8] before:content-['']"
                >
                  社交页面与个人中心功能测试
                </li>
                <li
                  class="relative pl-[13px] text-xs leading-[1.6] text-[#637287] before:absolute before:left-0 before:top-[7px] before:size-[5px] before:rounded-full before:bg-[#829bb8] before:content-['']"
                >
                  编写 Bug 报告及测试报告
                </li>
              </ul>

              <div class="mt-[15px] flex flex-wrap gap-1.5">
                <span
                  class="rounded-full border border-[rgba(153,178,205,0.3)] bg-[#edf3fa] px-[9px] py-[5px] text-[10px] text-[#526b8a]"
                  >功能测试</span
                >
                <span
                  class="rounded-full border border-[rgba(153,178,205,0.3)] bg-[#edf3fa] px-[9px] py-[5px] text-[10px] text-[#526b8a]"
                  >蓝牙连接</span
                >
                <span
                  class="rounded-full border border-[rgba(153,178,205,0.3)] bg-[#edf3fa] px-[9px] py-[5px] text-[10px] text-[#526b8a]"
                  >移动端测试</span
                >
                <span
                  class="rounded-full border border-[rgba(153,178,205,0.3)] bg-[#edf3fa] px-[9px] py-[5px] text-[10px] text-[#526b8a]"
                  >缺陷管理</span
                >
              </div>
            </div>
          </article>

          <article
            class="min-w-0 overflow-hidden rounded-2xl border border-sky-100 bg-white/80 text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src="/images/Umove网页.png"
              alt="Umove 网页测试展示"
              class="mx-auto mt-4 block h-40 w-[calc(100%-2rem)] max-h-[200px] cursor-zoom-in rounded-xl object-contain transition-transform duration-300 hover:scale-[1.02] sm:h-48"
              @click="openPreview('/images/Umove网页.png', 'Umove 网页测试展示')"
            />

            <div class="p-4 sm:p-5">
              <span class="text-[11px] tracking-[1px] text-[#8291a5]"> Web 端 </span>

              <h3 class="mt-2 text-xl font-bold text-slate-700">Umove 网页</h3>

              <p class="mt-2 text-sm leading-7 text-slate-600">
                对 Umove 网页进行功能测试，验证页面跳转是否正常，检查各项功能能否正常使用。
              </p>

              <div class="my-3.5 h-px bg-[#e1eaf3]" />

              <h4 class="mb-2.5 text-[13px] font-semibold text-[#526b8a]">核心测试工作</h4>

              <ul class="m-0 grid list-none gap-[7px] p-0">
                <li
                  v-for="item in [
                    '测试页面跳转与导航功能',
                    '验证页面功能及交互是否正常',
                    '检查异常情况并记录问题',
                    '整理 Bug 报告并反馈测试结果',
                  ]"
                  :key="item"
                  class="relative pl-[13px] text-xs leading-[1.6] text-[#637287] before:absolute before:left-0 before:top-[7px] before:size-[5px] before:rounded-full before:bg-[#829bb8] before:content-['']"
                >
                  {{ item }}
                </li>
              </ul>

              <div class="mt-[15px] flex flex-wrap gap-1.5">
                <span
                  v-for="tag in ['Web 测试', '页面跳转', '功能测试', '缺陷管理']"
                  :key="tag"
                  class="rounded-full border border-[rgba(153,178,205,0.3)] bg-[#edf3fa] px-[9px] py-[5px] text-[10px] text-[#526b8a]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div
      v-if="previewVisible"
      class="fixed inset-0 z-[9999] box-border flex items-center justify-center bg-[rgba(12,18,30,0.88)] p-10 backdrop-blur-[6px] max-[600px]:p-4"
      @click.self="closePreview"
      @keydown.esc="closePreview"
    >
      <button
        class="absolute top-5 right-7 flex size-[42px] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/15 p-0 text-[32px] leading-none text-white transition-colors hover:bg-white/30 max-[600px]:top-3 max-[600px]:right-3"
        aria-label="关闭图片预览"
        @click="closePreview"
      >
        ×
      </button>

      <img
        :src="previewImage"
        :alt="previewAlt"
        class="block h-auto w-auto max-h-[88vh] max-w-[90vw] cursor-zoom-out rounded-[10px] object-contain shadow-[0_12px_40px_rgba(0,0,0,0.3)] max-[600px]:max-h-[82vh] max-[600px]:max-w-[94vw]"
        @click.stop
      />
    </div>

    <section
      id="contact"
      class="flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4 py-12 text-center sm:px-6"
    >
      <div class="mx-auto box-border w-full max-w-[650px]">
        <p class="mb-[18px] text-[13px] tracking-[5px] text-[#8291a5]">CONTACT</p>

        <h2 class="mb-3 text-[30px] font-bold text-[#43566e] max-[600px]:text-[25px]">
          让我们聊聊吧。
        </h2>

        <p class="mb-7 text-sm leading-[1.8] text-[#8291a5]">
          如果你对我的经历或项目感兴趣，欢迎与我联系。
        </p>

        <div class="mb-8 flex flex-col items-center gap-[18px] max-[600px]:items-start">
          <a
            href="mailto:2425368446@qq.com"
            class="flex items-center gap-3 text-[15px] text-[#43566e] no-underline"
          >
            <span class="text-[21px] text-[#526b8a]">✉</span>
            <span>2425368446@qq.com</span>
          </a>

          <div class="flex items-center gap-3 text-[15px] text-[#43566e]">
            <span class="text-[21px] text-[#526b8a]">☎</span>
            <span>13356461672</span>
          </div>

          <div class="flex items-center gap-3 text-[15px] text-[#43566e]">
            <span class="text-[21px] text-[#526b8a]">💬</span>
            <span>Clarence_0813</span>
          </div>
        </div>

        <form class="flex w-full flex-col gap-3" @submit.prevent="sendMessage">
          <div class="grid grid-cols-2 gap-2.5 max-[600px]:grid-cols-1">
            <input
              v-model.trim="contactForm.name"
              type="text"
              placeholder="姓名"
              required
              class="box-border w-full min-w-0 rounded-lg border border-[rgba(153,178,205,0.45)] bg-white/65 px-4 py-3.5 text-sm text-[#43566e] outline-none transition-colors focus:border-[#526b8a]"
            />

            <input
              v-model.trim="contactForm.email"
              type="email"
              placeholder="邮箱"
              required
              class="box-border w-full min-w-0 rounded-lg border border-[rgba(153,178,205,0.45)] bg-white/65 px-4 py-3.5 text-sm text-[#43566e] outline-none transition-colors focus:border-[#526b8a]"
            />
          </div>

          <input
            v-model.trim="contactForm.subject"
            type="text"
            placeholder="主题"
            required
            class="box-border w-full min-w-0 rounded-lg border border-[rgba(153,178,205,0.45)] bg-white/65 px-4 py-3.5 text-sm text-[#43566e] outline-none transition-colors focus:border-[#526b8a]"
          />

          <textarea
            v-model.trim="contactForm.message"
            placeholder="留言"
            rows="4"
            required
            class="box-border min-h-[100px] w-full min-w-0 resize-y rounded-lg border border-[rgba(153,178,205,0.45)] bg-white/65 px-4 py-3.5 text-sm text-[#43566e] outline-none transition-colors focus:border-[#526b8a]"
          />

          <button
            type="submit"
            class="cursor-pointer rounded-lg border border-[#526b8a] bg-[#526b8a] px-4 py-[13px] text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#43566e]"
          >
            发送留言
          </button>
        </form>
      </div>
    </section>

    <button
      type="button"
      aria-label="返回首页"
      title="返回首页"
      class="fixed bottom-4 right-4 z-[1000] flex size-12 flex-col items-center justify-center gap-0.5 rounded-full border border-sky-200/80 bg-white/90 text-slate-600 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 sm:bottom-7 sm:right-7 sm:size-[54px]"
      @click="scrollToSection('home')"
    >
      <span class="text-xl leading-none">↑</span>
      <span class="text-[10px] leading-none">首页</span>
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

const contactEmail = '2425368446@qq.com'
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

  const container = document.querySelector('.site-scroll')
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
  const container = document.querySelector('.site-scroll')
  const section = document.getElementById(sectionId)

  if (!container || !section) return

  const containerRect = container.getBoundingClientRect()
  const sectionRect = section.getBoundingClientRect()

  const top = sectionRect.top - containerRect.top + container.scrollTop

  container.scrollTo({
    top,
    behavior: 'smooth',
  })
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

  const container = document.querySelector('.site-scroll')
  if (container) {
    container.style.overflowY = 'hidden'
  }
}

function closePreview() {
  previewVisible.value = false

  const container = document.querySelector('.site-scroll')
  if (container) {
    container.style.overflowY = 'auto'
  }
}
</script>
