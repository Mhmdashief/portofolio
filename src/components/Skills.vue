<template>
  <section id="skills" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>
      
      <!-- Skills Categories -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <!-- Frontend -->
        <div class="tech-card">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p class="text-gray-400 text-sm">Creating beautiful user interfaces</p>
          </div>
          
          <div class="space-y-4">
            <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                <span class="text-blue-400 text-sm">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: animateSkills ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Backend -->
        <div class="tech-card">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM4.875 12.75a.375.375 0 00-.375.375v4.125c0 1.035.84 1.875 1.875 1.875h.75c1.036 0 1.875-.84 1.875-1.875V13.5a.75.75 0 00-.75-.75h-4.5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Backend</h3>
            <p class="text-gray-400 text-sm">Building robust server solutions</p>
          </div>
          
          <div class="space-y-4">
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                <span class="text-purple-400 text-sm">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: animateSkills ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tools & Others -->
        <div class="tech-card">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 0 1-.1-3.528l.893-.893a2.548 2.548 0 0 1 3.528-.1l5.653 4.655M8.77 15.17l1.414 1.414M8.77 15.17l-1.06-1.06M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Tools & Others</h3>
            <p class="text-gray-400 text-sm">Development tools and workflows</p>
          </div>
          
          <div class="space-y-4">
            <div v-for="skill in toolsSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-300 font-medium">{{ skill.name }}</span>
                <span class="text-green-400 text-sm">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: animateSkills ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Technology Icons -->
      <div class="text-center">
        <h3 class="text-2xl font-semibold text-white mb-8">Technologies I Work With</h3>
        
        <!-- Sliding Technology Carousel -->
        <div class="tech-carousel-container">
          <div class="tech-carousel-track">
            <!-- First set of technologies -->
            <div v-for="tech in technologies" :key="`first-${tech.name}`" class="tech-icon-card group">
              <div class="tech-image-container">
                <img 
                  :src="tech.image" 
                  :alt="tech.name" 
                  class="tech-image"
                  @error="handleImageError"
                  loading="lazy"
                />
              </div>
              <p class="tech-label">{{ tech.name }}</p>
            </div>
            <!-- Duplicate set for seamless loop -->
            <div v-for="tech in technologies" :key="`second-${tech.name}`" class="tech-icon-card group">
              <div class="tech-image-container">
                <img 
                  :src="tech.image" 
                  :alt="tech.name" 
                  class="tech-image"
                  @error="handleImageError"
                  loading="lazy"
                />
              </div>
              <p class="tech-label">{{ tech.name }}</p>
            </div>
          </div>
        </div>
        
        <!-- Pause on hover indicator -->
        <!-- <div class="tech-carousel-info">
          <p class="text-xs text-gray-500 mt-4">Hover to pause • Auto-scrolling</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
// Import all technology images
import vueImg from '@/assets/images/vue.png'
import reactImg from '@/assets/images/React.png'
import nodeImg from '@/assets/images/node.png'
import jsImg from '@/assets/images/Javascript.png'
import pythonImg from '@/assets/images/python.png'
import phpImg from '@/assets/images/php.png'
import laravelImg from '@/assets/images/laravel.png'
import htmlImg from '@/assets/images/html.png'
import cssImg from '@/assets/images/css.png'
import tailwindImg from '@/assets/images/tailwind.png'
import mongoImg from '@/assets/images/mongo db.png'
import mysqlImg from '@/assets/images/mysql.png'
import dockerImg from '@/assets/images/docker.png'
import gitImg from '@/assets/images/git.png'
import vscodeImg from '@/assets/images/vscode.png'
import figmaImg from '@/assets/images/figma.png'
import linuxImg from '@/assets/images/linux.png'

export default {
  name: 'Skills',
  data() {
    return {
      animateSkills: false,
      frontendSkills: [
        { name: 'Vue.js', level: 50 },
        { name: 'React', level: 60 },
        { name: 'JavaScript', level: 50 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'HTML/CSS', level: 85 }
      ],
      backendSkills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 50 },
        { name: 'PHP', level: 85 },
        { name: 'MongoDB', level: 50 },
        { name: 'MySQL', level: 90 },
        { name: 'REST APIs', level: 70 },
        { name: 'Laravel', level: 80 }
      ],
      toolsSkills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 50 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 60 }
      ],
      technologies: [
        { name: 'Vue.js', image: vueImg },
        { name: 'React', image: reactImg },
        { name: 'Node.js', image: nodeImg },
        { name: 'JavaScript', image: jsImg },
        { name: 'Python', image: pythonImg },
        { name: 'PHP', image: phpImg },
        { name: 'Laravel', image: laravelImg },
        { name: 'HTML', image: htmlImg },
        { name: 'CSS', image: cssImg },
        { name: 'Tailwind', image: tailwindImg },
        { name: 'MongoDB', image: mongoImg },
        { name: 'MySQL', image: mysqlImg },
        { name: 'Docker', image: dockerImg },
        { name: 'Git', image: gitImg },
        { name: 'VS Code', image: vscodeImg },
        { name: 'Figma', image: figmaImg },
        { name: 'Linux', image: linuxImg }
      ]
    }
  },
  mounted() {
    this.observeSkillsSection()
  },
  methods: {
    observeSkillsSection() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                this.animateSkills = true
              }, 300)
            }
          })
        },
        { threshold: 0.3 }
      )
      
      observer.observe(this.$el)
    },
    handleImageError(event) {
      console.log('Image failed to load:', event.target.src)
      // You can set a fallback image here if needed
      // event.target.src = '/path/to/fallback-image.png'
    }
  }
}
</script>

<style scoped>
/* Carousel Container */
.tech-carousel-container {
  @apply relative overflow-hidden w-full;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 1) 95%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 1) 95%,
    transparent 100%
  );
}

.tech-carousel-track {
  @apply flex gap-6;
  animation: slide-left 30s linear infinite;
  width: fit-content;
}

.tech-carousel-container:hover .tech-carousel-track {
  animation-play-state: paused;
}

/* Keyframe for sliding animation */
@keyframes slide-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Tech Cards */
.tech-icon-card {
  @apply flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-110 cursor-pointer flex-shrink-0;
  min-height: 140px;
  width: 140px;
  position: relative;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.tech-icon-card:hover {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(59, 130, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: scale(1.1) translateY(-8px);
  z-index: 10;
}

.tech-image-container {
  @apply relative w-16 h-16 flex items-center justify-center mb-4 rounded-xl bg-white backdrop-blur-sm border border-white/30 group-hover:bg-white group-hover:shadow-lg transition-all duration-500;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.tech-image {
  @apply w-10 h-10 object-contain transition-all duration-500;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.tech-icon-card:hover .tech-image {
  @apply transform scale-125;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
}

.tech-label {
  @apply text-sm text-gray-300 font-semibold group-hover:text-white transition-all duration-500 text-center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.025em;
}

/* Enhanced hover effects */
.tech-icon-card:hover .tech-image-container {
  transform: translateY(-4px) rotateY(5deg);
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(59, 130, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

.tech-icon-card:hover .tech-label {
  transform: translateY(-2px);
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
}

/* Carousel info */
.tech-carousel-info {
  @apply flex justify-center items-center mt-6;
}

/* Individual glow effects for specific technologies */
.tech-icon-card:nth-child(1):hover { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(76, 175, 80, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); } /* Vue - Green */
.tech-icon-card:nth-child(2):hover { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(97, 218, 251, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); } /* React - Blue */
.tech-icon-card:nth-child(3):hover { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(104, 160, 99, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); } /* Node - Green */
.tech-icon-card:nth-child(4):hover { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(247, 223, 30, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); } /* JS - Yellow */
.tech-icon-card:nth-child(5):hover { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(55, 119, 171, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); } /* Python - Blue */

/* Responsive adjustments */
@media (max-width: 768px) {
  .tech-carousel-track {
    animation-duration: 25s;
    @apply gap-4;
  }
  
  .tech-icon-card {
    min-height: 120px;
    width: 120px;
    @apply p-4;
  }
  
  .tech-image-container {
    @apply w-12 h-12 mb-3;
  }
  
  .tech-image {
    @apply w-8 h-8;
  }
  
  .tech-label {
    @apply text-xs;
  }
}

@media (max-width: 480px) {
  .tech-carousel-track {
    animation-duration: 20s;
    @apply gap-3;
  }
  
  .tech-icon-card {
    min-height: 100px;
    width: 100px;
    @apply p-3;
  }
  
  .tech-image-container {
    @apply w-10 h-10 mb-2;
  }
  
  .tech-image {
    @apply w-6 h-6;
  }
}

/* Smooth entrance animation */
.tech-carousel-container {
  animation: fadeInUp 1s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>