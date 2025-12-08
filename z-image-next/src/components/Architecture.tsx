export default function Architecture() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            模型架构设计
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            基于最新的扩散模型架构，Z-Image 实现了性能与质量的完美平衡
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <img
              src="/api/placeholder/600/400"
              alt="Z-Image Architecture Diagram"
              className="w-full rounded-2xl border border-gray-700"
            />
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-white mb-6">核心技术特点</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  🏗️
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">U-Net 架构</h4>
                  <p className="text-gray-400">改进的U-Net结构，增加残差连接和注意力机制</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">文本编码器</h4>
                  <p className="text-gray-400">使用CLIP ViT-L/14作为文本编码器，准确理解提示词</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  ⚙️
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">调度器优化</h4>
                  <p className="text-gray-400">自定义DDIM调度器，实现8步高质量生成</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  🔬
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">渐进式训练</h4>
                  <p className="text-gray-400">多阶段训练策略，从低分辨率逐步提升到高分辨率</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-12 border border-blue-500/30 animate-on-scroll">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">训练流程</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">数据预处理</h4>
              <p className="text-gray-400 text-sm">清洗和标注12B+图像-文本对</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">基础训练</h4>
              <p className="text-gray-400 text-sm">512×512分辨率，20步扩散</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">超分辨率</h4>
              <p className="text-gray-400 text-sm">提升到1024×1024</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                4
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">蒸馏优化</h4>
              <p className="text-gray-400 text-sm">知识蒸馏，压缩到8步</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}