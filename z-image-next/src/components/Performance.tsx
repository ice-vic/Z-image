export default function Performance() {
  const benchmarks = [
    {
      gpu: 'RTX 3060 12GB',
      speed: '3.2s',
      batch: '1',
      precision: 'FP16'
    },
    {
      gpu: 'RTX 4090 24GB',
      speed: '0.8s',
      batch: '4',
      precision: 'FP16'
    },
    {
      gpu: 'RTX 3090 24GB',
      speed: '1.2s',
      batch: '3',
      precision: 'FP16'
    },
    {
      gpu: 'RTX 4070 Ti 12GB',
      speed: '1.8s',
      batch: '2',
      precision: 'FP16'
    }
  ];

  const comparisons = [
    {
      metric: '生成速度',
      zimage: '8步',
      sd15: '20步',
      sdxl: '25步',
      unit: '达到相同质量'
    },
    {
      metric: '显存占用',
      zimage: '6GB',
      sd15: '8GB',
      sdxl: '12GB',
      unit: '1024x1024'
    },
    {
      metric: '图像质量',
      zimage: '0.32',
      sd15: '0.28',
      sdxl: '0.35',
      unit: 'CLIP Score'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            性能基准测试
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            经过严格的性能测试，Z-Image 在各个方面都表现出色
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-8">硬件性能测试</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400">GPU型号</th>
                    <th className="text-center py-3 px-4 text-gray-400">生成速度</th>
                    <th className="text-center py-3 px-4 text-gray-400">批处理</th>
                    <th className="text-center py-3 px-4 text-gray-400">精度</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-4 text-white">{item.gpu}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-400 font-semibold">{item.speed}</span>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-300">{item.batch}</td>
                      <td className="py-4 px-4 text-center text-gray-300">{item.precision}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-8">与主流模型对比</h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold">{item.metric}</span>
                    <span className="text-gray-500 text-sm">{item.unit}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{item.zimage}</div>
                      <div className="text-sm text-gray-500">Z-Image</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400">{item.sd15}</div>
                      <div className="text-sm text-gray-500">SD 1.5</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400">{item.sdxl}</div>
                      <div className="text-sm text-gray-500">SDXL</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl p-12 border border-green-500/30 animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">性能优化技术</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Z-Image 采用多种先进技术，确保在各种硬件平台上都能获得最佳性能
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-white mb-2">快速收敛</h4>
              <p className="text-gray-400">创新的扩散架构，仅需8步即可生成高质量图像</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🧠
              </div>
              <h4 className="text-xl font-bold text-white mb-2">智能优化</h4>
              <p className="text-gray-400">自动优化模型参数，平衡速度与质量</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                💾
              </div>
              <h4 className="text-xl font-bold text-white mb-2">内存管理</h4>
              <p className="text-gray-400">先进的内存管理技术，最大化利用硬件资源</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}