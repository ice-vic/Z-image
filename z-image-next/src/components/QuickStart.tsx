export default function QuickStart() {
  const installationSteps = [
    {
      title: '环境准备',
      description: '确保您的系统已安装 Python 3.8+ 和 CUDA 11.8+',
      code: `# 创建虚拟环境
python -m venv zimage-env
source zimage-env/bin/activate  # Linux/Mac
zimage-env\\Scripts\\activate  # Windows`
    },
    {
      title: '安装依赖',
      description: '使用 pip 安装必要的依赖包',
      code: `pip install torch torchvision torchaudio
pip install diffusers transformers
pip install accelerate Pillow numpy`
    },
    {
      title: '下载模型',
      description: '从 Hugging Face 下载预训练模型',
      code: `from diffusers import StableDiffusionPipeline
import torch

# 加载模型
pipe = StableDiffusionPipeline.from_pretrained(
    "zmodel/z-image-v1",
    torch_dtype=torch.float16,
    device_map="auto"
)`
    },
    {
      title: '生成图像',
      description: '使用几行代码即可生成高质量图像',
      code: `# 生成图像
prompt = "a beautiful landscape painting"
image = pipe(prompt, num_inference_steps=8).images[0]
image.save("generated_image.png")`
    }
  ];

  return (
    <section id="quickstart" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            快速开始
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            简单几步，即可在您的项目中集成 Z-Image
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {installationSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl p-12 border border-green-500/30 animate-on-scroll">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">快速体验</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🌐
              </div>
              <h4 className="text-xl font-bold text-white mb-2">在线演示</h4>
              <p className="text-gray-400 mb-4">无需安装，直接在浏览器中体验</p>
              <a
                href="#generator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                立即尝试
                <span>→</span>
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔌
              </div>
              <h4 className="text-xl font-bold text-white mb-2">API 接口</h4>
              <p className="text-gray-400 mb-4">简单的 REST API，轻松集成</p>
              <button className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800/50 transition-all duration-300">
                查看文档
              </button>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                💻
              </div>
              <h4 className="text-xl font-bold text-white mb-2">SDK 下载</h4>
              <p className="text-gray-400 mb-4">支持 Python、JavaScript 等多种语言</p>
              <button className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800/50 transition-all duration-300">
                下载 SDK
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold text-white mb-6">需要帮助？</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#faq"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              查看常见问题
            </a>
            <a
              href="mailto:support@zimage.ai"
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800/50 transition-all duration-300"
            >
              联系技术支持
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}