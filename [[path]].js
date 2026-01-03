export default {
  async fetch(request, env, ctx) {
    // 1. 构建一个简单的HTML页面
    const html = `
<!DOCTYPE html>
<html>
<head><title>测试页</title><meta charset="UTF-8"></head>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>🎉 恭喜！Functions 通道已打通！</h1>
  <p>这个页面由 Cloudflare Pages Functions 生成。</p>
  <p>访问路径: ${new URL(request.url).pathname}</p>
  <p>时间: ${new Date().toISOString()}</p>
</body>
</html>
    `;
    
    // 2. 返回响应
    return new Response(html, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }
};