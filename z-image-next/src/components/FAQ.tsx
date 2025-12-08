'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Z-Image 与其他 AI 图像生成模型相比有什么优势？',
      answer: 'Z-Image 的主要优势包括：1）仅需8步即可生成高质量图像，速度比传统模型快5倍以上；2）专为消费级显卡优化，RTX 3060即可运行；3）6B参数的轻量级设计，降低硬件门槛；4）完整的工具链支持，易于集成；5）持续优化的模型质量。'
    },
    {
      question: '我需要什么样的硬件配置才能运行 Z-Image？',
      answer: '最低配置要求：NVIDIA显卡（RTX 3060或更高），6GB显存，16GB系统内存。推荐配置：RTX 4070或更高，12GB+显存，32GB系统内存。模型支持FP16精度，可在较低端硬件上运行。'
    },
    {
      question: 'Z-Image 是否支持商业使用？',
      answer: 'Z-Image 提供商业许可证选项，您可以将生成的图像用于商业目的。具体的授权条款取决于您选择的版本，建议查看详细的服务条款或联系销售团队获取更多信息。'
    },
    {
      question: '如何提高生成图像的质量？',
      answer: '提高图像质量的方法：1）编写详细具体的提示词；2）使用负面提示词排除不需要的元素；3）适当调整引导比例（guidance scale）；4）使用种子（seed）保持一致性；5）尝试不同的采样器和步数组合。'
    },
    {
      question: 'Z-Image 支持哪些图像生成任务？',
      answer: 'Z-Image 支持多种任务：文生图（Text-to-Image）、图生图（Image-to-Image）、图像修复（Inpainting）、图像扩展（Outpainting）、风格迁移等。同时兼容 ControlNet、LoRA 等扩展功能。'
    },
    {
      question: '模型更新频率如何？如何获取最新版本？',
      answer: '我们每月定期发布模型更新，包括性能优化、质量提升和新功能。您可以通过官方渠道获取最新版本，商业用户可获得优先更新和专属技术支持。'
    },
    {
      question: '是否支持本地离线部署？',
      answer: '是的，Z-Image 支持完全离线部署。您可以将模型部署在本地服务器或个人电脑上，无需联网即可使用。这对于隐私保护和数据安全非常重要。'
    },
    {
      question: '遇到技术问题如何获得支持？',
      answer: '我们提供多渠道技术支持：1）详细的文档和教程；2）GitHub Issues 问题反馈；3）社区论坛和Discord群组；4）商业用户的专属技术支持邮箱。平均响应时间小于24小时。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            常见问题
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            关于 Z-Image 的常见问题解答，帮助您更好地了解和使用我们的产品
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item mb-4 bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <span className={`text-2xl text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold text-white mb-6">还有其他问题？</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            如果您没有找到答案，请随时联系我们的技术支持团队
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@zimage.ai"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              联系技术支持
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800/50 transition-all duration-300"
            >
              查看完整文档
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}