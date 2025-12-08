import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.IMAGE_API_URL || 'https://api.siliconflow.cn/v1/images/generations';
const API_KEY = process.env.IMAGE_API_KEY;

export async function POST(request: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API密钥未配置' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const {
      prompt,
      negative_prompt = '',
      width = 1024,
      height = 1024,
      batch_size = 1,
      seed,
      num_inference_steps = 20,
      guidance_scale = 7.5
    } = body;

    // 验证必要参数
    if (!prompt || prompt.trim() === '') {
      return NextResponse.json(
        { error: '请提供图像描述' },
        { status: 400 }
      );
    }

    // 构建请求体
    const requestBody = {
      model: process.env.DEFAULT_MODEL || 'Qwen/Qwen-Image-Edit-2509',
      prompt: prompt.trim(),
      negative_prompt: negative_prompt.trim(),
      image_size: `${width}x${height}`,
      batch_size,
      num_inference_steps,
      guidance_scale,
      ...(seed && seed !== '' ? { seed: parseInt(seed) } : {})
    };

    console.log('Sending request to API:', requestBody);

    // 调用硅基流动API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);

      return NextResponse.json(
        {
          error: errorData.message || `API请求失败: ${response.status} ${response.statusText}`,
          details: errorData
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('API Response:', data);

    // 返回生成的图像URL
    if (data.data && data.data.length > 0) {
      return NextResponse.json({
        success: true,
        images: data.data.map((item: any) => ({
          url: item.url,
          b64_json: item.b64_json
        }))
      });
    } else {
      return NextResponse.json(
        { error: 'API返回数据格式异常' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('生成图像时出错:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : '生成图像时发生未知错误',
        type: 'internal_error'
      },
      { status: 500 }
    );
  }
}