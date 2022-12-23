import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a,e as n,b as s,d as t,r}from"./app.fec28137.js";const c={},d=a("h1",{id:"go语言发展简史",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#go语言发展简史","aria-hidden":"true"},"#"),n(" Go语言发展简史")],-1),p=a("h2",{id:"开发文档",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#开发文档","aria-hidden":"true"},"#"),n(" 开发文档")],-1),u={href:"https://studygolang.com/pkgdoc",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="go语言核心开发团队" tabindex="-1"><a class="header-anchor" href="#go语言核心开发团队" aria-hidden="true">#</a> Go语言核心开发团队</h2><p>Ken Thompson（肯·汤普森）：1983年图灵奖（Turing Award）和1998年美国国家技术奖（National Medal of Technology）得主。他与Dennis Ritchie是Unix的原创者。Thompson也发明了后来衍生出C语言的B程序语言，同时也是C语言的主要发明人。</p><p>Rob Pike（罗布-派克）：曾是贝尔实验室（Bell Labs）的Unix团队，和Plan 9操作系统计划的成员。 他与Thompson共事多年，并共创出广泛使用的UTF-8字元编码。</p><p>Robert Griesemer：曾协助制作Java的HotSpot编译器，和Chrome浏览器的JavaScript引擎V8。</p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221425599.png" alt="image-20200718103112309"></p><h2 id="google为什么要创建go" tabindex="-1"><a class="header-anchor" href="#google为什么要创建go" aria-hidden="true">#</a> Google为什么要创建Go</h2><ul><li>计算机硬件技术更新频繁，性能提高很快。目前主流的编程语言发展明显落后于硬件，不能合理利用多核多CPU的优势提升软件系统性能。</li><li>软件系统复杂度越来越高，维护成本越来越高，目前缺乏一个足够简洁高效的编程语言。 <ul><li>现有编程语言存在：风格不统一、计算能力不够、处理大并发不够好</li></ul></li><li>企业运行维护很多c/c++的项目，c/c++程序运行速度虽然很快，但是编译速度确很慢，同时还存在内存泄漏的一系列的困扰需要解决。</li></ul><h2 id="go语言发展历史" tabindex="-1"><a class="header-anchor" href="#go语言发展历史" aria-hidden="true">#</a> Go语言发展历史</h2><ul><li>2007年，谷歌工程师Rob Pike，Ken Thompson和Robert Griesemer开始设计一门全新的语言，这是Go语言的最初原型。</li><li>2009年11月10日，Google将Go语言以开放源代码的方式向全球发布。</li><li>2015年8月19日，Go1.5版发布，本次更新中移除了”最后残余的c代码”</li><li>2017年2月17日，Go语言Go1.8版发布。</li><li>2017年8月24日，Go语言Go1.9版发布。</li><li>2018年2月16日，Go语言Go1.10版发布。</li></ul><h2 id="go语言的特点" tabindex="-1"><a class="header-anchor" href="#go语言的特点" aria-hidden="true">#</a> Go语言的特点</h2><p>Go语言保证了既能到达静态编译语言的安全和性能，又达到了动态语言开发维护的高效率，使用一个表达式来形容Go语言：Go=C+Python，说明Go语言既有C静态语言程序的运行速度，又能达到Python动态语言的快速开发。</p><ul><li>从c语言中继承了很多理念，包括表达式语法，控制结构，基础数据类型，调用参数传值，指针等等，也保留了和C语言一样的编译执行方式及弱化的指针。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// go语言的指针使用特点</span>
<span class="token keyword">func</span> <span class="token function">testPtr</span><span class="token punctuation">(</span>num <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token operator">*</span>num <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>引入包的概念，用于组织程序结构，Go语言的一个文件都要归属于一个包，而不能单独存在。</li><li>垃圾回收机制，内存自动回收，不需开发人员管理 【稍微不注意就会出现内存泄漏】</li><li>天然并发【重要特点】 <ul><li>从语言层面支持并发，实现简单</li><li>goroutine，轻量级线程，可实现大并发处理，高效利用多核。</li><li>基于CPS并发模型（Communicating Sequential Processes）实现</li></ul></li><li>吸收了管道通信机制，形成go语言特有的管道channel，通过管道channel，可以实现不同的goroute之间的相互通信</li><li>函数返回多个值（实例代码）</li><li>新的创新：比如切片slice，延时执行defer等</li></ul><h2 id="hello-go" tabindex="-1"><a class="header-anchor" href="#hello-go" aria-hidden="true">#</a> Hello Go</h2><p>我们写一个最简单的入门代码，在控制台输出hello go！</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token comment">// fmt包中提供格式化，输入和输出的函数</span>
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello go!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="golang执行流程分析" tabindex="-1"><a class="header-anchor" href="#golang执行流程分析" aria-hidden="true">#</a> Golang执行流程分析</h2><p>我们可以通过以下命令来进行操作</p><ul><li>go build hello.go -&gt; hello.exe</li><li>go run hello.go</li></ul><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221425600.png" alt="image-20200718161111596"></p><h3 id="两种执行流程分析" tabindex="-1"><a class="header-anchor" href="#两种执行流程分析" aria-hidden="true">#</a> 两种执行流程分析</h3><ul><li>如果我们先编译生成了可执行文件，那么我们可以将该可执行文件拷贝到没有go开发环境的机器上，然可以运行</li><li>如果我们是直接go run go源代码，那么如果要在另外一个机器上运行，也需要go开发环境，否则无法执行。</li><li>在编译时，编译器会将程序运行依赖的库文件包含在可执行文件中，所以，可执行文件变大了很多。</li></ul><h3 id="什么是编译" tabindex="-1"><a class="header-anchor" href="#什么是编译" aria-hidden="true">#</a> 什么是编译</h3><ul><li>有了go源文件，通过编译器将其编译成机器可以识别的二进制码文件。</li><li>在该源文件目录下，通过go build 对hello.go文件进行编译。可以指定生成的可执行文件名，在windows下必须是.exe后缀。</li><li>如果程序没有错误，没有任何提示，会在当前目录下会出现一个可执行文件（windows下是.exe Linux下是一个可执行文件），该文件是二进制码文件，也是可以执行的程序。</li><li>如果程序有错误，编译时，会在错误的那行报错。</li></ul><h2 id="go语言开发注意事项" tabindex="-1"><a class="header-anchor" href="#go语言开发注意事项" aria-hidden="true">#</a> Go语言开发注意事项</h2><ul><li>Go源文件以“go”为扩展名</li><li>Go应用程序的执行入口是main()方法</li><li>Go语言严格区分大小写。</li><li>Go方法由一条条语句构成，每个语句后不需要分号（Go语言会在每行后自动加分号），这也体现出Golang的简洁性。</li><li>Go编译器是一行行进行编译的，因此我们一行就写一条语句，不能把多条语句写在同一个，否则报错</li><li>Go语言定义的变量或者import的包如果没有使用到，代码不能编译通过</li><li>大括号都是成对出现的，缺一不可。</li></ul><h2 id="go语言中的转义字符" tabindex="-1"><a class="header-anchor" href="#go语言中的转义字符" aria-hidden="true">#</a> Go语言中的转义字符</h2><p>GoLang常用的转义字符（escape char）</p><ul><li>\\t：一个制表位，实现对齐的功能</li><li>\\n：换行符</li><li><code>\\\\</code>：一个\\</li><li>\\r：一个回车</li></ul>`,30);function g(m,k){const e=r("ExternalLinkIcon");return i(),l("div",null,[d,p,a("p",null,[a("a",u,[n("https://studygolang.com/pkgdoc"),s(e)])]),h])}const v=o(c,[["render",g],["__file","1_Go语言发展简史.html.vue"]]);export{v as default};
