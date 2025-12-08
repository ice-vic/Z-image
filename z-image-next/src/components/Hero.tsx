'use client';

export default function Hero() {
  return (
    <section className="hero min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 animate-on-scroll">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">v1.0 正式发布</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              6B参数，8步成画
            </span>
            <br />
            <span className="text-3xl md:text-5xl mt-4 block text-white">
              RTX 3060也能跑的AI生图神器
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            新一代AI图像生成模型，60亿参数精心调优，仅需8步推理即可生成高质量图像。
            <br className="hidden md:block" />
            支持消费级显卡，让每个人都能享受AI创作的乐趣。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <a
              href="#generator"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              立即体验
            </a>
            <a
              href="#quickstart"
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300"
            >
              快速开始
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">6B</div>
              <div className="text-gray-400">参数规模</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">8步</div>
              <div className="text-gray-400">生成步数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">3秒</div>
              <div className="text-gray-400">生成速度</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}