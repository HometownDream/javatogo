import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.fec28137.js";const e={},p=t(`<h1 id="go的函数" tabindex="-1"><a class="header-anchor" href="#go的函数" aria-hidden="true">#</a> Go的函数</h1><h2 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义" aria-hidden="true">#</a> 函数定义</h2><p>函数是组织好的、可重复使用的、用于执行指定任务的代码块</p><p>Go语言支持：函数、匿名函数和闭包</p><p>Go语言中定义函数使用func关键字，具体格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> 函数名<span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">(</span>返回值<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p><ul><li>函数名：由字母、数字、下划线组成。但函数名的第一个字母不能是数字。在同一个包内，函数名也不能重名</li></ul><p>示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 求两个数的和</span>
<span class="token keyword">func</span> <span class="token function">sumFn</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token comment">// 调用方式</span>
<span class="token function">sunFn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取可变的参数，可变参数是指函数的参数数量不固定。Go语言中的可变参数通过在参数名后面加... 来标识。</p><p>注意：可变参数通常要作为函数的最后一个参数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sunFn2</span><span class="token punctuation">(</span>x <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	sum <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> x <span class="token punctuation">{</span>
		sum <span class="token operator">=</span> sum <span class="token operator">+</span> num
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
<span class="token comment">// 调用方法</span>
<span class="token function">sunFn2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法多返回值，Go语言中函数支持多返回值，同时还支持返回值命名，函数定义时可以给返回值命名，并在函数体中直接使用这些变量，最后通过return关键字返回</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 方法多返回值</span>
<span class="token keyword">func</span> <span class="token function">sunFn4</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>sum <span class="token builtin">int</span><span class="token punctuation">,</span> sub <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sum <span class="token operator">=</span> x <span class="token operator">+</span> y
	sub <span class="token operator">=</span> x <span class="token operator">-</span>y
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数类型和变量" tabindex="-1"><a class="header-anchor" href="#函数类型和变量" aria-hidden="true">#</a> 函数类型和变量</h2><h3 id="定义函数类型" tabindex="-1"><a class="header-anchor" href="#定义函数类型" aria-hidden="true">#</a> 定义函数类型</h3><p>我们可以使用type关键字来定义一个函数类型，具体格式如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">type</span> calculation func<span class="token punctuation">(</span>int, int<span class="token punctuation">)</span> int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语句定义了一个calculation类型，它是一种函数类型，这种函数接收两个int类型的参数并且返回一个int类型的返回值。</p><p>简单来说，凡是满足这两个条件的函数都是calculation类型的函数，例如下面的add 和 sub 是calculation类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> calc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token comment">// 求两个数的和</span>
<span class="token keyword">func</span> <span class="token function">sumFn</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> c calc
    c <span class="token operator">=</span> add
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法作为参数" tabindex="-1"><a class="header-anchor" href="#方法作为参数" aria-hidden="true">#</a> 方法作为参数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
	传递两个参数和一个方法
 */
func sunFn (a int, b int, sum func(int, int)int) int {
	return sum(a, b)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用switch定义方法，这里用到了匿名函数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 返回一个方法</span>
<span class="token keyword">type</span> calcType <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span>
<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span>o <span class="token builtin">string</span><span class="token punctuation">)</span> calcType <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> o <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> i2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> i <span class="token operator">+</span> i2
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> i2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> i <span class="token operator">-</span> i2
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> i2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> i <span class="token operator">*</span> i2
			<span class="token punctuation">}</span>
		<span class="token keyword">case</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> i2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> i <span class="token operator">/</span> i2
			<span class="token punctuation">}</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	add <span class="token operator">:=</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h2><p>函数当然还可以作为返回值，但是在Go语言中，函数内部不能再像之前那样定义函数了，只能定义匿名函数。匿名函数就是没有函数名的函数，匿名函数的定义格式如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">(</span>返回值<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名函数因为没有函数名，所以没有办法像普通函数那样调用，所以匿名函数需要保存到某个变量或者作为立即执行函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func main() {
	func () {
		fmt.Println(&quot;匿名自执行函数&quot;)
	}()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="golang中的闭包" tabindex="-1"><a class="header-anchor" href="#golang中的闭包" aria-hidden="true">#</a> Golang中的闭包</h2><h3 id="全局变量和局部变量" tabindex="-1"><a class="header-anchor" href="#全局变量和局部变量" aria-hidden="true">#</a> 全局变量和局部变量</h3><p>全局变量的特点：</p><ul><li>常驻内存</li><li>污染全局</li></ul><p>局部变量的特点</p><ul><li>不常驻内存</li><li>不污染全局</li></ul><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><ul><li>可以让一个变量常驻内存</li><li>可以让一个变量不污染全局</li></ul><p>闭包可以理解成 “定义在一个函数内部的函数”。在本质上，闭包就是将函数内部 和 函数外部连接起来的桥梁。或者说是函数和其引用环境的组合体。</p><ul><li>闭包是指有权访问另一个函数作用域中的变量的函数</li><li>创建闭包的常见的方式就是在一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量</li></ul><p>注意：由于闭包里作用域返回的局部变量资源不会被立刻销毁，所以可能会占用更多的内存，过度使用闭包会导致性能下降，建议在非常有必要的时候才使用闭包。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 闭包的写法：函数里面嵌套一个函数，最后返回里面的函数就形成了闭包</span>
<span class="token keyword">func</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后输出的结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">11</span>
<span class="token number">11</span>
<span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个闭包的写法，让一个变量常驻内存，不污染全局</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func adder2() func(y int) int {
	var i = 10
	return func(y int) int {
		i = i + y
		return i
	}
}

func main() {
	var fn2 = adder2()
	fmt.Println(fn2(10))
	fmt.Println(fn2(10))
	fmt.Println(fn2(10))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defer语句" tabindex="-1"><a class="header-anchor" href="#defer语句" aria-hidden="true">#</a> defer语句</h2><p>Go 语言中的defer 语句会将其后面跟随的语句进行延迟处理。在defer归属的函数即将返回时，将延迟处理的语句按defer定义的逆序进行执行，也就是说，先被defer的语句最后被执行，最后被defer的语句，最先被执行。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// defer函数</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>defer将会延迟执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有多个defer修饰的语句，将会逆序进行执行</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// defer函数</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>
<span class="token number">4</span>
<span class="token number">3</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要用defer运行一系列的语句，那么就可以使用匿名函数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;开始&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>开始
结束
<span class="token number">1</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defer执行时机" tabindex="-1"><a class="header-anchor" href="#defer执行时机" aria-hidden="true">#</a> defer执行时机</h3><p>在Go语言的函数中return语句在底层并不是原子操作，它分为返回值赋值和RET指令两步。而defer语句执行的时机就在返回值赋值操作后，RET指令执行前，具体如下图所示</p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221434226.png" alt="image-20200720220700249"></p><h2 id="panic-revocer处理异常" tabindex="-1"><a class="header-anchor" href="#panic-revocer处理异常" aria-hidden="true">#</a> panic/revocer处理异常</h2><p>Go语言中是没有异常机制，但是使用panic / recover模式来处理错误</p><ul><li>panic：可以在任何地方引发</li><li>recover：只有在defer调用函数内有效</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;fn1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;抛出一个异常&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述程序会直接抛出异常，无法正常运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fn1
panic: 抛出一个异常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法就是使用 recover进行异常的监听</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;fn1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用recover监听异常</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;抛出一个异常&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><ol><li><code>recover()</code>必须搭配<code>defer</code>使用。</li><li><code>defer</code>一定要在可能引发<code>panic</code>的语句之前定义。</li></ol><h2 id="异常运用场景" tabindex="-1"><a class="header-anchor" href="#异常运用场景" aria-hidden="true">#</a> 异常运用场景</h2><p>模拟一个读取文件的方法，这里可以主动发送使用panic 和 recover</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">readFile</span><span class="token punctuation">(</span>fileName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> fileName <span class="token operator">==</span> <span class="token string">&quot;main.go&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;读取文件失败&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> myFn <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;给管理员发送邮件&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">:=</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;XXX.go&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">myFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2><table><thead><tr><th>内置函数</th><th>介绍</th></tr></thead><tbody><tr><td>close</td><td>主要用来关闭channel</td></tr><tr><td>len</td><td>用来求长度，比如string、array、slice、map、channel</td></tr><tr><td>new</td><td>用来分配内存、主要用来分配值类型，比如 int、struct ，返回的是指针</td></tr><tr><td>make</td><td>用来分配内存，主要用来分配引用类型，比如chan、map、slice</td></tr><tr><td>append</td><td>用来追加元素到数组、slice中</td></tr><tr><td>panic\\recover</td><td>用来处理错误</td></tr></tbody></table>`,78),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","9_Go的函数.html.vue"]]);export{r as default};
