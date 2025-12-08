// API调用模块 - 硅基流动图像生成API
class ImageGeneratorAPI {
    constructor() {
        // 在实际部署中，这些值应该从环境变量或安全配置中获取
        // 这里为了演示直接使用
        this.apiKey = 'sk-gffvslaiesaueihepijwvpzrcblkxxgtlgvkgakpjcvvuzqt';
        this.baseUrl = 'https://api.siliconflow.cn/v1/images/generations';
        this.model = 'Qwen/Qwen-Image-Edit-2509';
    }

    // 生成图像
    async generateImage(params) {
        const {
            prompt,
            negativePrompt = '',
            width = 1024,
            height = 1024,
            batchSize = 1,
            seed = null,
            steps = 20,
            guidance = 7.5
        } = params;

        // 构建请求体
        const requestBody = {
            model: this.model,
            prompt: prompt,
            negative_prompt: negativePrompt,
            image_size: `${width}x${height}`,
            batch_size: batchSize,
            num_inference_steps: steps,
            guidance_scale: guidance
        };

        // 如果提供了seed，添加到请求中
        if (seed !== null && seed !== '') {
            requestBody.seed = parseInt(seed);
        }

        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `API请求失败: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API调用失败:', error);
            throw error;
        }
    }

    // 下载图像
    downloadImage(imageUrl, filename = null) {
        const link = document.createElement('a');
        link.href = imageUrl;

        // 如果没有提供文件名，尝试从URL中提取
        if (!filename) {
            const urlParts = imageUrl.split('/');
            filename = urlParts[urlParts.length - 1] || 'generated-image.jpg';
            // 确保有文件扩展名
            if (!filename.includes('.')) {
                filename += '.jpg';
            }
        }

        link.download = filename;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// 导出API实例
const imageAPI = new ImageGeneratorAPI();

// 为了在HTML中使用，将其挂载到window对象
if (typeof window !== 'undefined') {
    window.imageAPI = imageAPI;
}

// 导出为模块（如果在Node.js环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ImageGeneratorAPI, imageAPI };
}