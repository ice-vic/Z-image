export default function Footer() {
  const footerLinks = {
    product: [
      { name: '功能特点', href: '#features' },
      { name: '快速开始', href: '#quickstart' },
      { name: 'API文档', href: '#' },
      { name: '下载', href: '#' }
    ],
    resources: [
      { name: '教程中心', href: '#tutorials' },
      { name: '常见问题', href: '#faq' },
      { name: '社区论坛', href: '#' },
      { name: '博客', href: '#' }
    ],
    company: [
      { name: '关于我们', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '合作伙伴', href: '#' },
      { name: '加入我们', href: '#' }
    ],
    legal: [
      { name: '服务条款', href: '#' },
      { name: '隐私政策', href: '#' },
      { name: '许可证', href: '#' },
      { name: '版权声明', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: '📦', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Discord', icon: '💬', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center font-bold text-2xl">
                Z
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Z-Image</h3>
                <p className="text-sm text-gray-400">AI图像生成新时代</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              新一代AI图像生成模型，让每个人都能享受AI创作的乐趣。
              6B参数，8步成画，RTX 3060也能跑。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">法律</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Z-Image. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">
                Powered by{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300">Z-Model Team</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}