<template>
  <footer class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-6 py-16">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div class="text-4xl md:text-5xl font-bold gradient-text mb-6">
          &lt;Dev/&gt;
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Passionate Full Stack Developer creating innovative web solutions 
          with modern technologies. Let's build something amazing together!
        </p>
      </div>

      <!-- Interactive Cards Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Expertise Card -->
        <div class="footer-card group">
          <div class="footer-card-icon">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-3">Innovation</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Constantly exploring new technologies and creative solutions to solve complex problems.
          </p>
        </div>

        <!-- Quality Card -->
        <div class="footer-card group">
          <div class="footer-card-icon">
            <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-3">Excellence</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Delivering high-quality code with attention to detail and best practices.
          </p>
        </div>

        <!-- Collaboration Card -->
        <div class="footer-card group">
          <div class="footer-card-icon">
            <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-3">Collaboration</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Working together to turn your ideas into powerful digital experiences.
          </p>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-wrap justify-center gap-8 mb-12">
        <a href="#home" class="footer-link">Home</a>
        <a href="#about" class="footer-link">About</a>
        <a href="#skills" class="footer-link">Skills</a>
        <a href="#projects" class="footer-link">Social Media</a>
        <a href="#contact" class="footer-link">Contact</a>
      </div>

      <!-- Separator Line -->
      <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
          <span class="mr-2">©</span>
          <span>{{ currentYear }} Mochamad Iftichor Al Ashief.</span>
        </div>
        
        <div class="flex items-center space-x-6">
          <div class="text-xs text-gray-500">
            Made in Indonesia 
          </div>
          <button @click="scrollToTop" class="footer-scroll-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            <span class="ml-2 text-xs">Back to Top</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Floating Back to Top Button -->
    <button 
      v-show="showBackToTop"
      @click="scrollToTop"
      class="floating-btn"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      showBackToTop: false
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Footer Cards */
.footer-card {
  @apply p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.footer-card:hover {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(59, 130, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.footer-card-icon {
  @apply w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Footer Links */
.footer-link {
  @apply text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium relative;
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

/* Scroll Button */
.footer-scroll-btn {
  @apply flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-white/20;
}

/* Floating Button */
.floating-btn {
  @apply fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 z-50;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.floating-btn:hover {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(59, 130, 246, 0.4);
}

/* Animation Classes */
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 6s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.1; transform: scale(1.1); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-card {
    @apply p-4;
  }
  
  .floating-btn {
    @apply w-12 h-12 bottom-6 right-6;
  }
}
</style>