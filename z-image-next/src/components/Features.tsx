export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: '极速生成',
      description: '仅需8步推理即可生成高质量图像，比传统模型快5倍以上',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '💻',
      title: '消费级友好',
      description: '专为消费级显卡优化，RTX 3060即可流畅运行',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '🎯',
      title: '精准控制',
      description: '支持多种控制方式，精确实现您的创意构想',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🔧',
      title: '易于集成',
      description: '标准API接口，一行代码即可集成到您的应用',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🎨',
      title: '多样化风格',
      description: '支持写实、动漫、油画等多种艺术风格',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: '🚀',
      title: '持续优化',
      description: '模型持续更新迭代，不断提升生成质量',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            产品定位与核心亮点
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Z-Image 重新定义了AI图像生成的标准，将高性能与易用性完美结合
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl border border-blue-500/30 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">为什么选择 Z-Image？</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>业界领先的推理效率，大幅降低硬件门槛</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>完整的工具链支持，覆盖各种使用场景</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>活跃的开发社区，持续的技术支持</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>灵活的部署方案，支持云端和本地部署</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                <div className="text-gray-400">速度提升</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                <div className="text-gray-400">内存节省</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400">可用性</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400">技术支持</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}