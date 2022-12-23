import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.fec28137.js";const p={},e=t(`<h1 id="go中的接口" tabindex="-1"><a class="header-anchor" href="#go中的接口" aria-hidden="true">#</a> Go中的接口</h1><h2 id="接口的介绍" tabindex="-1"><a class="header-anchor" href="#接口的介绍" aria-hidden="true">#</a> 接口的介绍</h2><p>现实生活中手机、相机、U盘都可以和电脑的USB接口建立连接。我们不需要关注usb卡槽大小是否一样，因为所有的USB接口都是按照统一的标准来设计的。</p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221437279.png" alt="image-20200722201435128"></p><p>Golang中的接口是一种抽象数据类型，Golang中接口定义了对象的行为规范，只定义规范不实现。接口中定义的规范由具体的对象来实现。</p><p>通俗的讲接口就一个标准，它是对一个对象的行为和规范进行约定，约定实现接口的对象必须得按照接口的规范。</p><h2 id="go接口的定义" tabindex="-1"><a class="header-anchor" href="#go接口的定义" aria-hidden="true">#</a> Go接口的定义</h2><p>在Golang中接口（interface）是一种类型，一种抽象的类型。接口（interface）是一组函数method的集合，Golang中的接口不能包含任何变量。</p><p>在Golang中接口中的所有方法都没有方法体，接口定义了一个对象的行为规范，只定义规范不实现。接口体现了程序设计的多态和高内聚低耦合的思想N Golang中的接口也是一种数据类型，不需要显示实现。只需要一个变量含有接口类型中的所有方法，那么这个变量就实现了这个接口。</p><p>Golang中每个接口由数个方法组成，接口的定义格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> 接口名 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    方法名<span class="token number">1</span> <span class="token punctuation">(</span>参数列表<span class="token number">1</span><span class="token punctuation">)</span> 返回值列表<span class="token number">1</span>
    方法名<span class="token number">2</span> <span class="token punctuation">(</span>参数列表<span class="token number">2</span><span class="token punctuation">)</span> 返回值列表<span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其中</strong></p><ul><li><strong>接口名</strong>：使用type将接口定义为自定义的类型名。Go语言的接口在命名时，一般会在单词后面添加er，如有写操作的接口叫Writer，有字符串功能的接口叫Stringer等，接口名最好突出该接口的类型含义。</li><li><strong>方法名</strong>：当方法名首字母是大写且这个接口类型名首字母也是大写时，这个方法可以被接口所在的包（package）之外的代码访问。</li><li><strong>参数列表、返回值列表</strong>：参数列表和返回值列表中的参数变量名是可以省略</li></ul><p>演示：定义一个Usber接口让Phone 和 Camera结构体实现这个接口</p><p>首先我们定义一个Usber接口，接口里面就定义了两个方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定义一个Usber接口
type Usber interface {
	start()
	stop()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们在创建一个手机结构体</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 如果接口里面有方法的话，必须要通过结构体或自定义类型实现这个接口</span>

<span class="token comment">// 使用结构体来实现 接口</span>
<span class="token keyword">type</span> Phone <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// 手机要实现Usber接口的话，必须实现usb接口的所有方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;启动&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;关闭&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们在创建一个Phone的结构体，来实现这个接口</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 如果接口里面有方法的话，必须要通过结构体或自定义类型实现这个接口</span>

<span class="token comment">// 使用结构体来实现 接口</span>
<span class="token keyword">type</span> Phone <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// 手机要实现Usber接口的话，必须实现usb接口的所有方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;启动&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;关闭&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> phone Usber <span class="token operator">=</span> Phone<span class="token punctuation">{</span>
		<span class="token string">&quot;三星手机&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	phone<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	phone<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在创建一个Camera结构体</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 使用相机结构体来实现 接口</span>
<span class="token keyword">type</span> Camera <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// 相机要实现Usber接口的话，必须实现usb接口的所有方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Camera<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;启动&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Camera<span class="token punctuation">)</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;关闭&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> camera Usber <span class="token operator">=</span> Camera<span class="token punctuation">{</span>
		<span class="token string">&quot;佳能&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	camera<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	camera<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建一个电脑的结构体，电脑的结构体就是用于接收两个实现了Usber的结构体，然后让其工作</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 电脑</span>
<span class="token keyword">type</span> Computer <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 接收一个实现了Usber接口的 结构体</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>computer Computer<span class="token punctuation">)</span> <span class="token function">Startup</span><span class="token punctuation">(</span>usb Usber<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	usb<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>computer Computer<span class="token punctuation">)</span> Shutdown <span class="token punctuation">(</span>usb Usber<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	usb<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们在main中调用方法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> camera interfaceDemo<span class="token punctuation">.</span>Camera <span class="token operator">=</span> interfaceDemo<span class="token punctuation">.</span>Camera<span class="token punctuation">{</span>
		<span class="token string">&quot;佳能&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> phone interfaceDemo<span class="token punctuation">.</span>Phone <span class="token operator">=</span> interfaceDemo<span class="token punctuation">.</span>Phone<span class="token punctuation">{</span>
		<span class="token string">&quot;苹果&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> computer interfaceDemo<span class="token punctuation">.</span>Computer <span class="token operator">=</span> interfaceDemo<span class="token punctuation">.</span>Computer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	computer<span class="token punctuation">.</span><span class="token function">Startup</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">Startup</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>佳能 启动
苹果 启动
佳能 关闭
苹果 关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空接口-object类型" tabindex="-1"><a class="header-anchor" href="#空接口-object类型" aria-hidden="true">#</a> 空接口（Object类型）</h2><p>Golang中的接口可以不定义任何方法，没有定义任何方法的接口就是空接口。空接口表示没有任何约束，因此任何类型变量都可以实现空接口。</p><p>空接口在实际项目中用的是非常多的，用空接口可以表示任意数据类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 空接口表示没有任何约束，任意的类型都可以实现空接口</span>
<span class="token keyword">type</span> EmptyA <span class="token keyword">interface</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a EmptyA
	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;你好golang&quot;</span>
	<span class="token comment">// 让字符串实现A接口</span>
	a <span class="token operator">=</span> str
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时golang中空接口也可以直接当做类型来使用，可以表示任意类型。相当于Java中的Object类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token number">20</span>
a <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
a <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>空接口可以作为函数的参数，使用空接口可以接收任意类型的函数参数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 空接口作为函数参数</span>
<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map的值实现空接口" tabindex="-1"><a class="header-anchor" href="#map的值实现空接口" aria-hidden="true">#</a> map的值实现空接口</h3><p>使用空接口实现可以保存任意值的字典</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个值为空接口类型</span>
<span class="token keyword">var</span> studentInfo <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
studentInfo<span class="token punctuation">[</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
studentInfo<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">15</span>
studentInfo<span class="token punctuation">[</span><span class="token string">&quot;isWork&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice切片实现空接口" tabindex="-1"><a class="header-anchor" href="#slice切片实现空接口" aria-hidden="true">#</a> slice切片实现空接口</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个空接口类型的切片</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
slice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
slice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
slice<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2><p>一个接口的值（简称接口值）是由一个具体类型和具体类型的值两部分组成的。这两部分分别称为接口的动态类型和动态值。</p><p>如果我们想要判断空接口中值的类型，那么这个时候就可以使用类型断言，其语法格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>x.<span class="token punctuation">(</span>T<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><ul><li>X：表示类型为interface{}的变量</li><li>T：表示断言x可能是的类型</li></ul><p>该语法返回两个参数，第一个参数是x转化为T类型后的变量，第二个值是一个布尔值，若为true则表示断言成功，为false则表示断言失败</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 类型断言</span>
<span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token string">&quot;132&quot;</span>
value<span class="token punctuation">,</span> isString <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> isString <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;是String类型, 值为：&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;断言失败&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者我们可以定义一个能传入任意类型的方法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个方法，可以传入任意数据类型，然后根据不同类型实现不同的功能</span>
<span class="token keyword">func</span> <span class="token function">Print</span><span class="token punctuation">(</span>x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span>ok <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;传入参数是string类型&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;传入参数是int类型&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;传入其它类型&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例代码中，如果要断言多次，那么就需要写很多if，这个时候我们可以使用switch语句来实现：</p><p><strong>注意：</strong> 类型.(type) 只能结合switch语句使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Print2</span><span class="token punctuation">(</span>x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int类型&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string类型&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool类型&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;其它类型&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体接收者" tabindex="-1"><a class="header-anchor" href="#结构体接收者" aria-hidden="true">#</a> 结构体接收者</h2><h3 id="值接收者" tabindex="-1"><a class="header-anchor" href="#值接收者" aria-hidden="true">#</a> 值接收者</h3><p>如果结构体中的方法是值接收者，那么实例化后的结构体值类型和结构体指针类型都可以赋值给接口变量</p><h2 id="结构体实现多个接口" tabindex="-1"><a class="header-anchor" href="#结构体实现多个接口" aria-hidden="true">#</a> 结构体实现多个接口</h2><p>实现多个接口的话，可能就同时用两个接口进行结构体的接受</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个Animal的接口，Animal中定义了两个方法，分别是setName 和 getName，分别让DOg结构体和Cat结构体实现</span>
<span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SetName</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口2</span>
<span class="token keyword">type</span> Animal2 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d Dog<span class="token punctuation">)</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> d<span class="token punctuation">.</span>Name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> dog <span class="token operator">=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
		<span class="token string">&quot;小黑&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 同时实现两个接口</span>
	<span class="token keyword">var</span> d1 Animal <span class="token operator">=</span> dog
	<span class="token keyword">var</span> d2 Animal2 <span class="token operator">=</span> dog
	d1<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span><span class="token string">&quot;小鸡&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d2<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口嵌套" tabindex="-1"><a class="header-anchor" href="#接口嵌套" aria-hidden="true">#</a> 接口嵌套</h2><p>在golang中，允许接口嵌套接口，我们首先创建一个 Animal1 和 Animal2 接口，然后使用Animal接受刚刚的两个接口，实现接口的嵌套。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个Animal的接口，Animal中定义了两个方法，分别是setName 和 getName，分别让DOg结构体和Cat结构体实现</span>
<span class="token keyword">type</span> Animal1 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SetName</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口2</span>
<span class="token keyword">type</span> Animal2 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	Animal1
	Animal2
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d Dog<span class="token punctuation">)</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> d<span class="token punctuation">.</span>Name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> dog <span class="token operator">=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
		<span class="token string">&quot;小黑&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 同时实现两个接口</span>
	<span class="token keyword">var</span> d Animal <span class="token operator">=</span> dog
	d<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span><span class="token string">&quot;小鸡&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="golang中空接口和类型断言" tabindex="-1"><a class="header-anchor" href="#golang中空接口和类型断言" aria-hidden="true">#</a> Golang中空接口和类型断言</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// golang中空接口和类型断言</span>
<span class="token keyword">var</span> userInfo <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
userInfo<span class="token punctuation">[</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span>
userInfo<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
userInfo<span class="token punctuation">[</span><span class="token string">&quot;hobby&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;吃饭&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;睡觉&quot;</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">[</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">[</span><span class="token string">&quot;hobby&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 但是我们空接口如何获取数组中的值？发现 userInfo[&quot;hobby&quot;][0]  这样做不行</span>
<span class="token comment">// fmt.Println(userInfo[&quot;hobby&quot;][0])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是我们的空接口，无法直接通过索引获取数组中的内容，因此这个时候就需要使用类型断言了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 这个时候我们就可以使用类型断言了</span>
hobbyValue<span class="token punctuation">,</span>ok <span class="token operator">:=</span> userInfo<span class="token punctuation">[</span><span class="token string">&quot;hobby&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>hobbyValue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过类型断言返回来的值，我们就能够直接通过角标获取了。</p>`,68),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","14_Go中的接口.html.vue"]]);export{r as default};
