<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Advanced Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div v-for="i in 20" :key="i" 
             class="particle" 
             :style="getParticleStyle(i)">
        </div>
      </div>
      
      <!-- Animated Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-1"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-2"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float-3"></div>
      <div class="absolute top-1/3 right-1/3 w-52 h-52 bg-pink-500/15 rounded-full blur-3xl animate-float-4"></div>
      
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-20">
        <div class="grid-pattern"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 text-center relative z-10">
      <!-- Main Content Card -->
      <div class="hero-content-card">
        <!-- Status Badge -->
        <div class="status-badge">
          <div class="status-dot"></div>
          <span>Available for work</span>
        </div>
        
        <!-- Greeting with Animation -->
        <div class="greeting-container">
          <span class="wave-emoji">👋</span>
          <p class="greeting-text">Hello, I'm</p>
        </div>
        
        <!-- Name with Advanced Typography -->
        <h1 class="hero-name">
          <span class="name-part-1">Mochamad Iftichor</span>
          <span class="name-part-2">Al Ashief</span>
        </h1>
        
        <!-- Title with Glitch Effect -->
        <div class="title-container">
          <h2 class="hero-title glitch" data-text="Full Stack Developer">
            Full Stack Developer
          </h2>
        </div>
        
        <!-- Enhanced Typing Animation -->
        <div class="typing-container">
          <span class="typing-prefix">></span>
          <span class="typed-text">{{ typedText }}</span>
          <span class="cursor-blink">|</span>
        </div>
        
        <!-- Description with Better Typography -->
        <p class="hero-description">
          Passionate about creating <span class="highlight">innovative web solutions</span> 
          with modern technologies. I love turning ideas into reality through 
          <span class="highlight">clean, efficient code</span>.
        </p>
        
        <!-- Single Enhanced CTA Button -->
        <div class="cta-container">
          <a href="#contact" class="cta-button">
            <span class="button-content">
              <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Let's Talk
            </span>
            <div class="button-glow"></div>
          </a>
        </div>
        
        <!-- Tech Stack Icons -->
        <div class="tech-stack">
         
        </div>
      </div>
      
      <!-- Enhanced Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-container">
          <div class="scroll-text">Scroll to explore</div>
          <div class="scroll-animation">
            <div class="scroll-line"></div>
            <div class="scroll-wheel">
              <div class="scroll-dot"></div>
            </div>
            <div class="scroll-arrows">
              <div class="arrow arrow-1"></div>
              <div class="arrow arrow-2"></div>
              <div class="arrow arrow-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      typedText: '',
      textArray: [
        'Building amazing web experiences',
        'Creating responsive designs', 
        'Developing scalable applications',
        'Solving complex problems',
        'Crafting digital solutions'
      ],
      textIndex: 0,
      charIndex: 0,
      isDeleting: false,
      typeSpeed: 100,
      particles: []
    }
  },
  mounted() {
    this.typeWriter()
    this.initParticles()
    this.setupScrollIndicator()
  },
  methods: {
    typeWriter() {
      const currentText = this.textArray[this.textIndex]
      
      if (this.isDeleting) {
        this.typedText = currentText.substring(0, this.charIndex - 1)
        this.charIndex--
        this.typeSpeed = 50
      } else {
        this.typedText = currentText.substring(0, this.charIndex + 1)
        this.charIndex++
        this.typeSpeed = 100
      }
      
      if (!this.isDeleting && this.charIndex === currentText.length) {
        this.typeSpeed = 2000
        this.isDeleting = true
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false
        this.textIndex = (this.textIndex + 1) % this.textArray.length
      }
      
      setTimeout(this.typeWriter, this.typeSpeed)
    },
    
    initParticles() {
      for (let i = 0; i < 20; i++) {
        this.particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10
        })
      }
    },
    
    getParticleStyle(index) {
      const particle = this.particles[index - 1] || { x: 50, y: 50, size: 3, duration: 15 }
      return {
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        animationDuration: `${particle.duration}s`,
        animationDelay: `${index * 0.5}s`
      }
    },
    
    setupScrollIndicator() {
      const scrollIndicator = document.querySelector('.scroll-indicator')
      if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
/* Particle Animation */
.particle {
  @apply absolute bg-white/20 rounded-full;
  animation: float-particle infinite ease-in-out;
}

@keyframes float-particle {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
}

/* Grid Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
}

/* Enhanced Floating Animations */
@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-40px, -20px) rotate(180deg); }
}

@keyframes float-3 {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
  33% { transform: translate(-50%, -60%) rotate(120deg); }
  66% { transform: translate(-40%, -40%) rotate(240deg); }
}

@keyframes float-4 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -10px) rotate(90deg); }
  50% { transform: translate(-10px, -30px) rotate(180deg); }
  75% { transform: translate(-30px, 10px) rotate(270deg); }
}

.animate-float-1 { animation: float-1 20s ease-in-out infinite; }
.animate-float-2 { animation: float-2 25s ease-in-out infinite; }
.animate-float-3 { animation: float-3 30s ease-in-out infinite; }
.animate-float-4 { animation: float-4 35s ease-in-out infinite; }

/* Hero Content Card */
.hero-content-card {
  @apply max-w-4xl mx-auto;
  animation: fadeInUp 1.5s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Status Badge */
.status-badge {
  @apply inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8;
  backdrop-filter: blur(10px);
  animation: pulse-glow 2s ease-in-out infinite;
}

.status-dot {
  @apply w-2 h-2 bg-green-400 rounded-full;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.3); }
  50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.6); }
}

/* Greeting */
.greeting-container {
  @apply flex items-center justify-center space-x-3 mb-6;
}

.wave-emoji {
  @apply text-2xl;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
}

.greeting-text {
  @apply text-xl md:text-2xl text-gray-300 font-light;
}

/* Hero Name */
.hero-name {
  @apply text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight;
}

.name-part-1 {
  @apply block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textShine 3s ease-in-out infinite;
}

.name-part-2 {
  @apply block;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textShine 3s ease-in-out infinite reverse;
}

@keyframes textShine {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* Title with Glitch Effect */
.title-container {
  @apply mb-8;
}

.hero-title {
  @apply text-3xl md:text-5xl font-semibold text-white;
  position: relative;
}

.glitch {
  animation: glitch 3s infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-1 0.5s infinite;
  color: #ff00de;
  z-index: -1;
}

.glitch::after {
  animation: glitch-2 0.5s infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch {
  0%, 99% { transform: translate(0); }
  1% { transform: translate(2px, 0); }
  3% { transform: translate(-1px, 0); }
  5% { transform: translate(1px, 0); }
}

@keyframes glitch-1 {
  0%, 99% { transform: translate(0); }
  1% { transform: translate(-2px, 0); }
  3% { transform: translate(2px, 0); }
}

@keyframes glitch-2 {
  0%, 99% { transform: translate(0); }
  1% { transform: translate(1px, 0); }
  3% { transform: translate(-1px, 0); }
}

/* Enhanced Typing */
.typing-container {
  @apply text-xl md:text-2xl text-gray-300 mb-8 h-12 flex items-center justify-center font-mono;
}

.typing-prefix {
  @apply text-cyan-400 mr-2;
}

.typed-text {
  @apply text-white;
}

.cursor-blink {
  @apply text-cyan-400 ml-1;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Description */
.hero-description {
  @apply text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed;
}

.highlight {
  @apply text-cyan-400 font-semibold;
  background: linear-gradient(135deg, #00ffff, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Enhanced CTA Button */
.cta-container {
  @apply mb-16;
}

.cta-button {
  @apply relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 transform hover:scale-110;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.cta-button:hover {
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
}

.button-content {
  @apply flex items-center space-x-2 relative z-10;
}

.button-icon {
  @apply w-5 h-5;
}

.button-glow {
  @apply absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300;
  filter: blur(20px);
}

.cta-button:hover .button-glow {
  opacity: 0.7;
}

/* Tech Stack */
.tech-stack {
  @apply flex flex-col items-center space-y-4;
}

.tech-stack-label {
  @apply text-sm text-gray-500 uppercase tracking-wider;
}

.tech-icons {
  @apply flex space-x-4;
}

.tech-icon {
  @apply px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-110;
}

.tech-icon.vue {
  @apply bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20;
}

.tech-icon.node {
  @apply bg-green-600/10 border-green-600/30 text-green-500 hover:bg-green-600/20;
}

.tech-icon.python {
  @apply bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20;
}

.tech-icon.docker {
  @apply bg-blue-600/10 border-blue-600/30 text-blue-500 hover:bg-blue-600/20;
}

/* Enhanced Scroll Indicator */
.scroll-indicator {
  @apply absolute bottom-8 left-1/2 transform -translate-x-1/2;
  animation: fadeInUpDelay 2s ease-out 1s both;
}

.scroll-container {
  @apply flex flex-col items-center space-y-4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-container:hover {
  transform: translateY(-4px);
}

.scroll-container:hover .scroll-text {
  background: linear-gradient(135deg, #94a3b8, #cbd5e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.scroll-container:hover .scroll-wheel {
  border-color: #94a3b8;
  box-shadow: 0 0 20px rgba(148, 163, 184, 0.8);
}

.scroll-container:hover .arrow {
  border-top-color: #94a3b8;
}

.scroll-text {
  @apply text-xs text-gray-400 uppercase tracking-widest font-medium;
  background: linear-gradient(135deg, #64748b, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textGlow 3s ease-in-out infinite;
}

.scroll-animation {
  @apply relative flex flex-col items-center;
  height: 60px;
  width: 30px;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.scroll-line {
  @apply absolute top-0 left-1/2 transform -translate-x-1/2;
  width: 1px;
  height: 30px;
  background: linear-gradient(to bottom, transparent, #64748b, transparent);
  animation: lineGlow 2s ease-in-out infinite;
}

.scroll-wheel {
  @apply absolute top-2 left-1/2 transform -translate-x-1/2;
  width: 20px;
  height: 32px;
  border: 2px solid #64748b;
  border-radius: 12px;
  position: relative;
  background: rgba(30, 41, 59, 0.3);
  backdrop-filter: blur(10px);
  animation: wheelGlow 2s ease-in-out infinite;
}

.scroll-dot {
  @apply absolute top-2 left-1/2 transform -translate-x-1/2;
  width: 4px;
  height: 4px;
  background: #64748b;
  border-radius: 50%;
  animation: dotMove 2s ease-in-out infinite;
}

.scroll-arrows {
  @apply absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #64748b;
  margin-bottom: 2px;
  opacity: 0;
}

.arrow-1 {
  animation: arrowMove 2s ease-in-out infinite;
}

.arrow-2 {
  animation: arrowMove 2s ease-in-out infinite 0.2s;
}

.arrow-3 {
  animation: arrowMove 2s ease-in-out infinite 0.4s;
}

@keyframes fadeInUpDelay {
  from { opacity: 0; transform: translate(-50%, 20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

@keyframes textGlow {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

@keyframes lineGlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; box-shadow: 0 0 10px #64748b; }
}

@keyframes wheelGlow {
  0%, 100% { 
    border-color: #64748b; 
    box-shadow: 0 0 5px rgba(100, 116, 139, 0.3);
  }
  50% { 
    border-color: #94a3b8; 
    box-shadow: 0 0 15px rgba(100, 116, 139, 0.6);
  }
}

@keyframes dotMove {
  0%, 100% { transform: translate(-50%, 0); opacity: 1; }
  50% { transform: translate(-50%, 12px); opacity: 0.5; }
}

@keyframes arrowMove {
  0% { opacity: 0; transform: translateY(-10px); }
  50% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-name {
    @apply text-4xl;
  }
  
  .hero-title {
    @apply text-2xl;
  }
  
  .typing-container {
    @apply text-lg h-10;
  }
  
  .hero-description {
    @apply text-base;
  }
}
</style>