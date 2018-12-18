# http2test
一个可以直接跑起来的http2与http1.1性能对比的测试

详情可见
[http/2深入学习](https://github.com/liujiusheng/blog/issues/87)

# 启动方法

1.clone代码到Tomcat,Nginx,Apache或IIS目录下，并启动服务器

2.命令行内切换到http2test文件夹

3.运行node index.js命令启动后端服务

4.浏览器内访问index.html页面


## 测试结果：
因为本地加载实在太快，为尽量模拟生产环境网络情况，以下测试都是使用Chrome的fast3G模式。
<table>
<tr>
<th>类型 </th>
<th>请求方式</th>
<th>大（237kb）小（2kb）文件</th>
<th>文件数</th>
<th>加载时间</th>
</tr>
<tr>
<td>HTTP/2</td>
<td>浏览器加载</td>
<td>小</td>
<td>40</td>
<td>2.81s</td>
</tr>
<tr>
<td>HTTP/1.1</td>
<td>浏览器加载</td>
<td>小</td>
<td>40</td>
<td>5.89s</td>
</tr>
<tr>
<td>HTTP/2</td>
<td>AJAX</td>
<td>小</td>
<td>40</td>
<td>2.49s</td>
</tr>
<tr>
<td>HTTP/1.1</td>
<td>AJAX</td>
<td>小</td>
<td>40</td>
<td>5.82s</td>
</tr>
<tr>
<td>HTTP/2</td>
<td>浏览器加载</td>
<td>大</td>
<td>40</td>
<td>52.59s</td>
</tr>
<tr>
<td>HTTP/1.1</td>
<td>浏览器加载</td>
<td>大</td>
<td>40</td>
<td>52.57s</td>
</tr>
<tr>
<td>HTTP/2</td>
<td>AJAX</td>
<td>大</td>
<td>40</td>
<td>52.66s</td>
</tr>
<tr>
<td>HTTP/1.1</td>
<td>AJAX</td>
<td>大</td>
<td>40</td>
<td>52.58s</td>
</tr>
</table>

**由此可见**： 
_HTTP/2的优势主要体现在大量小图片的加载上，对于少量大图片的加载并不占太大优势，并且，网络条件如果非常好的时候，由于加载非常快，HTTP/2也不能体现出优势_
