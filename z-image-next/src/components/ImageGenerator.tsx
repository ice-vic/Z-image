'use client';

import { useState } from 'react';

interface ImageData {
  url: string;
  b64_json?: string;
}

export default function ImageGenerator() {
  const [formData, setFormData] = useState({
    prompt: '',
    negativePrompt: '',
    width: 1024,
    height: 1024,
    steps: 20,
    guidance: 7.5,
    seed: '',
    batchSize: 1
  });

  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [error, setError] = useState('');

  const examplePrompts = [
    "赛博朋克风格的未来城市，霓虹灯闪烁，雨后的街道反射着彩色光芒",
    "一只可爱的熊猫正在竹林里吃竹子，阳光透过树叶洒下斑驳的光影",
    "宇宙深处的星云，绚烂的色彩，恒星诞生的场景",
    "古典水墨画风格的山水画，云雾缭绕的山峰，意境深远",
    "现代化的科技办公室，落地窗外的城市天际线，简约的设计风格"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleExampleClick = (prompt: string) => {
    setFormData(prev => ({ ...prev, prompt }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.prompt.trim()) {
      setError('请输入图像描述');
      return;
    }

    setIsLoading(true);
    setError('');
    setProgress(0);

    // 模拟进度
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 10;
      });
    }, 500);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '生成失败');
      }

      setImages(data.images);
      setProgress(100);
    } catch (err: any) {
      setError(err.message || '生成图像时发生错误');
    } finally {
      setIsLoading(false);
      clearInterval(progressInterval);
    }
  };

  const downloadImage = (imageUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `z-image-generated-${index + 1}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyImage = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      alert('图像已复制到剪贴板');
    } catch (err) {
      alert('复制失败，请右键保存图像');
    }
  };

  return (
    <section id="generator" className="py-20 animate-on-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AI 图像生成器
        </h2>

        <div className="generator-container">
          {/* Input Panel */}
          <div className="input-panel">
            <h3 className="panel-title">
              <span className="text-2xl">🎨</span>
              创作设置
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Prompt Input */}
              <div className="input-group">
                <label>图像描述 *</label>
                <textarea
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleInputChange}
                  placeholder="请描述您想要生成的图像..."
                  required
                />

                {/* Example Prompts */}
                <div className="prompt-examples">
                  {examplePrompts.map((prompt, index) => (
                    <button
                      key={index}
                      type="button"
                      className="example-tag"
                      onClick={() => handleExampleClick(prompt)}
                    >
                      {prompt.slice(0, 20)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Settings */}
              <div className="input-row">
                <div className="input-group half">
                  <label>图像尺寸</label>
                  <select name="width" value={formData.width} onChange={handleInputChange}>
                    <option value={512}>512px</option>
                    <option value={768}>768px</option>
                    <option value={1024}>1024px</option>
                    <option value={1280}>1280px</option>
                  </select>
                </div>
                <div className="input-group half">
                  <label>生成数量</label>
                  <select name="batchSize" value={formData.batchSize} onChange={handleInputChange}>
                    <option value={1}>1张</option>
                    <option value={2}>2张</option>
                    <option value={3}>3张</option>
                    <option value={4}>4张</option>
                  </select>
                </div>
              </div>

              {/* Advanced Options */}
              <div className="advanced-options">
                <div className="options-header" onClick={() => setShowAdvanced(!showAdvanced)}>
                  <span>高级选项</span>
                  <span className={`toggle-icon ${showAdvanced ? 'rotate-180' : ''}`}>▼</span>
                </div>

                {showAdvanced && (
                  <div className="options-content">
                    <div className="input-group">
                      <label>反向提示词</label>
                      <textarea
                        name="negativePrompt"
                        value={formData.negativePrompt}
                        onChange={handleInputChange}
                        placeholder="描述您不希望出现在图像中的内容..."
                      />
                    </div>

                    <div className="input-row">
                      <div className="input-group half">
                        <label>采样步数: <span className="slider-value">{formData.steps}</span></label>
                        <input
                          type="range"
                          name="steps"
                          min="5"
                          max="50"
                          value={formData.steps}
                          onChange={handleInputChange}
                          className="slider"
                        />
                      </div>
                      <div className="input-group half">
                        <label>引导比例: <span className="slider-value">{formData.guidance}</span></label>
                        <input
                          type="range"
                          name="guidance"
                          min="1"
                          max="20"
                          step="0.5"
                          value={formData.guidance}
                          onChange={handleInputChange}
                          className="slider"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label>随机种子（可选）</label>
                      <input
                        type="text"
                        name="seed"
                        value={formData.seed}
                        onChange={handleInputChange}
                        placeholder="留空则随机生成"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Generate Button */}
              <button
                type="submit"
                className="generate-btn"
                disabled={isLoading || !formData.prompt.trim()}
              >
                <span className="btn-icon">{isLoading ? '⏳' : '✨'}</span>
                <span className="btn-text">{isLoading ? '生成中...' : '开始生成'}</span>
              </button>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Output Panel */}
          <div className="output-panel">
            <div className="output-header">
              <h3>生成结果</h3>
              {isLoading && <div className="output-status">生成中...</div>}
            </div>

            {/* Image Gallery */}
            <div className="image-gallery">
              {isLoading ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <div className="loading-text">
                    <p>AI正在为您创作图像...</p>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="progress-text">{Math.round(progress)}%</p>
                  </div>
                </div>
              ) : images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image.url}
                      alt={`Generated image ${index + 1}`}
                      className="generated-image"
                      onClick={() => window.open(image.url, '_blank')}
                    />
                    <div className="image-actions">
                      <button
                        className="action-btn"
                        onClick={() => downloadImage(image.url, index)}
                      >
                        下载
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => copyImage(image.url)}
                      >
                        复制
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-icon">🖼️</div>
                  <p>等待生成图像...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}