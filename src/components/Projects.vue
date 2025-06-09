<template>
  <section id="projects" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">Connect With Me</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Let's connect and collaborate! Find me on these platforms
        </p>
      </div>
      
      <!-- Social Media Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- LinkedIn Card -->
        <a 
          href="https://www.linkedin.com/in/mochamad-iftichor-al-ashief-81636b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank"
          class="social-card group bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/25"
        >
          <div class="relative overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-500/30 to-blue-700/30 h-32 flex items-center justify-center">
            <svg class="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div class="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
              LinkedIn
            </h3>
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">
              Connect with me professionally and see my career journey
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                Professional Network
              </span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>
        </a>
        
        <!-- Instagram Card -->
        <a 
          href="https://www.instagram.com/m.ashieff?igsh=MXN0emNtOXJoejlrZQ==" 
          target="_blank"
          class="social-card group bg-gradient-to-br from-pink-600/20 to-purple-800/20 border-pink-500/30 hover:border-pink-400 hover:shadow-pink-500/25"
        >
          <div class="relative overflow-hidden rounded-t-xl bg-gradient-to-br from-pink-500/30 to-purple-700/30 h-32 flex items-center justify-center">
            <svg class="w-16 h-16 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div class="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors duration-300 mb-2">
              Instagram
            </h3>
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">
              Follow my daily life and behind-the-scenes moments
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full">
                Personal Stories
              </span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>
        </a>
        
        <!-- GitHub Card -->
        <a 
          href="https://github.com/Mhmdashief" 
          target="_blank"
          class="social-card group bg-gradient-to-br from-gray-600/20 to-gray-800/20 border-gray-500/30 hover:border-gray-400 hover:shadow-gray-500/25"
        >
          <div class="relative overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-500/30 to-gray-700/30 h-32 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <div class="absolute inset-0 bg-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300 mb-2">
              GitHub
            </h3>
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">
              Explore my code repositories and open source contributions
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full">
                Code Repository
              </span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.social-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105;
}
</style>