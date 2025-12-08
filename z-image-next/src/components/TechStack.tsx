export default function TechStack() {
  const techSpecs = [
    {
      category: '模型架构',
      items: [
        { name: '参数规模', value: '6 Billion' },
        { name: '网络结构', value: 'Diffusion Transformer' },
        { name: '训练数据', value: '12B+ 图像-文本对' },
        { name: '推理步数', value: '8-50 Steps' }
      ]
    },
    {
      category: '性能指标',
      items: [
        { name: 'CLIP Score', value: '0.32+' },
        { name: '图像质量', value: '1024x1024' },
        { name: '生成速度', value: '~3秒/张' },
        { name: '支持分辨率', value: '最高 2048px' }
      ]
    },
    {
      category: '硬件需求',
      items: [
        { name: '最低显存', value: '6GB (RTX 3060)' },
        { name: '推荐显存', value: '12GB+' },
        { name: '系统内存', value: '16GB+' },
        { name: '推理精度', value: 'FP16/FP32' }
      ]
    }
  ];

  const features = [
    { icon: '🎨', label: '文生图', desc: 'Text to Image' },
    { icon: '✏️', label: '图生图', desc: 'Image to Image' },
    { icon: '🖌️', label: '图像修复', desc: 'Inpainting' },
    { icon: '📐', label: '控制网', desc: 'ControlNet' },
    { icon: '🎭', label: '风格迁移', desc: 'Style Transfer' },
    { icon: '🔧', label: 'LoRA支持', desc: 'LoRA Compatible' },
    { icon: '⚙️', label: 'API兼容', desc: 'Stable Diffusion' },
    { icon: '🚀', label: '量化支持', desc: 'INT8/INT4' }
  ];

  return (
    <section id="tech" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            技术规格
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            强大的技术实力，为您带来卓越的AI图像生成体验
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {techSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{spec.category}</h3>
              <div className="space-y-4">
                {spec.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                    <span className="text-gray-400">{item.name}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-12 border border-blue-500/30 animate-on-scroll">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">核心功能支持</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <div className="text-white font-semibold mb-1">{feature.label}</div>
                <div className="text-gray-500 text-sm">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 animate-on-scroll">
            <h4 className="text-2xl font-bold text-white mb-4">模型优势</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>创新的扩散架构，实现8步快速收敛</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>优化的注意力机制，降低计算复杂度</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>渐进式训练策略，提升图像质量</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>支持多种采样器和调度器</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-2xl font-bold text-white mb-4">优化技术</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">▸</span>
                <span>模型量化技术，支持INT8/INT4推理</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">▸</span>
                <span>知识蒸馏，保持质量的同时减小体积</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">▸</span>
                <span>动态批处理，提升GPU利用率</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">▸</span>
                <span>内存优化技术，支持更大批次</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}