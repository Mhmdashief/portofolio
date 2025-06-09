<template>
  <section id="about" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Get to know more about who I am, what I do, and what skills I have
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Image & Biodata -->
        <div class="flex flex-col items-center lg:items-start">
          <!-- Foto dan Biodata dalam satu container -->
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
            <!-- Foto -->
            <div class="flex-shrink-0">
              <div class="w-48 h-64 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div class="w-full h-full rounded-lg overflow-hidden">
                  <img src="@/assets/images/foto diri.jpg" alt="Foto Diri" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <!-- Biodata -->
            <div class="tech-card flex-1 p-6 min-w-0">
              <h4 class="text-xl font-semibold text-white mb-6 text-center lg:text-left">Biodata</h4>
              <div class="space-y-4">
                <div class="border-b border-gray-600 pb-3">
                  <div class="text-sm text-gray-400 mb-1">Fullname</div>
                  <div class="text-white font-medium">Mochamad Iftichor Al Ashief</div>
                </div>
                <div class="border-b border-gray-600 pb-3">
                  <div class="text-sm text-gray-400 mb-1">Age</div>
                  <div class="text-white font-medium">21 Years</div>
                </div>
                <div class="pb-2">
                  <div class="text-sm text-gray-400 mb-1">Education</div>
                  <div class="text-white font-medium">Undergraduate Student</div>
                  <div class="text-sm text-gray-300 mt-1">Brawijaya University</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Stats & GitHub -->
          <div class="mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <!-- Experience Card -->
              <div class="tech-card text-center p-4">
                <div class="text-2xl font-bold text-blue-400 mb-1">1.5+</div>
                <div class="text-sm text-gray-400">Years Experience</div>
              </div>
              
              <!-- Projects Experience Card -->
              <div class="tech-card text-center p-4">
                <div class="text-2xl font-bold text-purple-400 mb-1">Experience at handling projects</div>
              </div>
            </div>
            
            <!-- GitHub Card -->
            <div class="w-full">
              <a href="https://github.com/Mhmdashief" target="_blank" class="block tech-card p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div class="flex items-center justify-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-semibold text-white mb-1">Visit My GitHub</div>
                    <div class="text-sm text-gray-400">Check out my repositories and projects</div>
                  </div>
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Content -->
        <div>
          <h3 class="text-2xl font-semibold text-white mb-6">
            I'm a passionate Full Stack Developer based in Indonesia
          </h3>
          
          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I am an undergraduate student at Brawijaya University who has the ability and experience in the field of technology, especially fullstack developer in creating and developing websites and also has the ability in the field of computer networks.
            </p>
            
            <p>
              My journey in web development started with curiosity about how websites work, 
              and it has evolved into a career where I get to solve complex problems and 
              create solutions that make a difference.
            </p>
            
            <p>
              contact me if you want to work with me and create something amazing together.
            </p>
          </div>
          
          <!-- Skills Highlights -->
          <div class="mt-8">
            <h4 class="text-lg font-semibold text-white mb-4">What I Do</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-gray-300">Frontend Development</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-gray-300">Backend Development</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span class="text-gray-300">UI/UX Design</span>
              </div>
            </div>
          </div>
          
          <!-- Download CV Button -->
          <div class="mt-8">
            <a href="#" class="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-card {
  @apply bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg;
}
</style>