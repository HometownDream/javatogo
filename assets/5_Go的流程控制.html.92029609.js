import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.fec28137.js";const e={},p=t(`<h1 id="go的流程控制" tabindex="-1"><a class="header-anchor" href="#go的流程控制" aria-hidden="true">#</a> Go的流程控制</h1><p>流程控制是每种编程语言控制逻辑走向和执行次序的重要部分，流程控制可以说是一门语言的“经脉&quot;</p><p>Go 语言中最常用的流程控制有if和for，而switch和goto主要是为了简化代码、降低重复代码而生的结构，属于扩展类的流程控制。</p><h2 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> if else</h2><p>推荐if后面不适用括号，当然也可以使用括号括起来</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello == 10&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello &gt; 10&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello &lt; 10&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if的另外一种写法，下面的方法的区别是 num2是局部变量</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> num2<span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">;</span> num2<span class="token operator">&gt;=</span><span class="token number">10</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello &gt;=10&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-循环结构" tabindex="-1"><a class="header-anchor" href="#for-循环结构" aria-hidden="true">#</a> for 循环结构</h2><p>Go语言中的所有循环类型均可使用for关键字来完成</p><p>for循环的基本格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for 初始语句; 条件表达式; 结束语句 {
	循环体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件表达式返回true时循环体不停地进行循环，直到条件表达式返回false时自动退出循环</p><p>实例：打印1 ~ 10</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v &quot;</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在Go语言中，没有while语句，我们可以通过for来代替</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
    循环体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for循环可以通过break、goto、return、panic语句退出循环</p><h2 id="for-range-键值循环" tabindex="-1"><a class="header-anchor" href="#for-range-键值循环" aria-hidden="true">#</a> for range（键值循环）</h2><p>Go 语言中可以使用for range遍历数组、切片、字符串、map及通道（channel）。通过for range遍历的返回值有以下规律：</p><ul><li>数组、切片、字符串返回索引和值。</li><li>map返回键和值。</li><li>通道（channel）只返回通道内的值。</li></ul><p>实例：遍历字符串</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;你好golang&quot;</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v - %c &quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历切片（数组）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;php&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;golang&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> array <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v %s &quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-case" tabindex="-1"><a class="header-anchor" href="#switch-case" aria-hidden="true">#</a> switch case</h2><p>使用switch语句可方便的对大量的值进行条件判断</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>extname <span class="token operator">:=</span> <span class="token string">&quot;.a&quot;</span>
<span class="token keyword">switch</span> extname <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.doc&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.doc&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;其它后缀&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch的另外一种写法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> extname <span class="token operator">:=</span> <span class="token string">&quot;.a&quot;</span><span class="token punctuation">;</span> extname <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.doc&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.doc&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;其它后缀&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时一个分支可以有多个值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>extname <span class="token operator">:=</span> <span class="token string">&quot;.txt&quot;</span>
<span class="token keyword">switch</span> extname <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;.doc&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;传递来的是文档&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;其它后缀&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tip：在golang中，break可以不写，也能够跳出case，而不会执行其它的。</p></blockquote><p>如果我们需要使用switch的穿透 fallthrought，fallthrough语法可以执行满足条件的 case 的下一个case，为了兼容c语言中的case设计</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extname := &quot;.txt&quot;
switch extname {
	case &quot;.html&quot;: {
		fmt.Println(&quot;.html&quot;)
		fallthrought
	}
	case &quot;.txt&quot;,&quot;.doc&quot;: {
		fmt.Println(&quot;传递来的是文档&quot;)
		fallthrought
	}
	case &quot;.js&quot;: {
		fmt.Println(&quot;.js&quot;)
		fallthrought
	}
	default: {
		fmt.Println(&quot;其它后缀&quot;)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fallthrought 只能穿透紧挨着的一层，不会一直穿透，但是如果每一层都写的话，就会导致每一层都进行穿透</p><h2 id="break-跳出循环" tabindex="-1"><a class="header-anchor" href="#break-跳出循环" aria-hidden="true">#</a> break：跳出循环</h2><p>Go语言中break 语句用于以下几个方面：</p><ul><li>用于循环语句中跳出循环，并开始执行循环之后的语句。</li><li>break在switch（开关语句）中在执行一条case后跳出语句的作用。</li><li>在多重循环中，可以用标号label标出想break的循环。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;跳出循环&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go-跳转到指定标签" tabindex="-1"><a class="header-anchor" href="#go-跳转到指定标签" aria-hidden="true">#</a> go：跳转到指定标签</h2><p>goto 语句通过标签进行代码间的无条件跳转。goto 语句可以在快速跳出循环、避免重复退出上有一定的帮助。Go语言中使用goto语句能简化一些代码的实现过程。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">20</span>
	<span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">24</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;成年人&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">goto</span> lable3
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span>
lable3<span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","5_Go的流程控制.html.vue"]]);export{d as default};
