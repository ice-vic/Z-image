export default function Tutorials() {
  const tutorials = [
    {
      title: '基础入门：您的第一张AI图像',
      difficulty: '入门',
      duration: '10分钟',
      description: '学习如何使用简单的提示词生成您的第一张AI图像',
      tags: ['基础操作', '提示词', '参数设置'],
      link: '#'
    },
    {
      title: '进阶技巧：专业提示词编写',
      difficulty: '进阶',
      duration: '20分钟',
      description: '掌握编写高质量提示词的技巧，提升图像生成质量',
      tags: ['提示词工程', '风格控制', '细节优化'],
      link: '#'
    },
    {
      title: '高级应用：ControlNet使用指南',
      difficulty: '高级',
      duration: '30分钟',
      description: '学习使用ControlNet精确控制图像构图和姿态',
      tags: ['ControlNet', '姿态控制', '构图技巧'],
      link: '#'
    },
    {
      title: '批量生成：工作流程优化',
      difficulty: '进阶',
      duration: '15分钟',
      description: '了解如何设置批量生成，提高工作效率',
      tags: ['批量处理', '脚本自动化', '工作流'],
      link: '#'
    },
    {
      title: '模型微调：打造专属风格',
      difficulty: '高级',
      duration: '45分钟',
      description: '学习如何使用LoRA进行模型微调，创建独特风格',
      tags: ['LoRA', '模型训练', '风格定制'],
      link: '#'
    },
    {
      title: '性能优化：硬件配置指南',
      difficulty: '进阶',
      duration: '25分钟',
      description: '了解不同硬件配置下的性能优化方案',
      tags: ['性能调优', '硬件配置', '内存管理'],
      link: '#'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case '入门': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case '进阶': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case '高级': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            教程与指南
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            从入门到精通，详细的教程帮助您快速掌握 Z-Image 的使用技巧
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="tutorial-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-gray-500 text-sm">{tutorial.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                <p className="text-gray-400 mb-6">{tutorial.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tutorial.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={tutorial.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  开始学习
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-12 border border-blue-500/30 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">视频教程系列</h3>
              <p className="text-gray-400 mb-8">
                我们还提供了完整的视频教程系列，包括实战演示、技巧分享和问题解答
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">▶</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">YouTube 频道</h4>
                    <p className="text-gray-500 text-sm">每周更新最新教程</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">📹</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Bilibili 空间</h4>
                    <p className="text-gray-500 text-sm">中文视频教程</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  ▶
                </div>
                <p className="text-gray-400">点击观看教程视频</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}