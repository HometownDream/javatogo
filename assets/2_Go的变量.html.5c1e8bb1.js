import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.fec28137.js";const t={},o=e(`<h1 id="go语言中的变量和常量" tabindex="-1"><a class="header-anchor" href="#go语言中的变量和常量" aria-hidden="true">#</a> Go语言中的变量和常量</h1><h2 id="go语言中变量的声明" tabindex="-1"><a class="header-anchor" href="#go语言中变量的声明" aria-hidden="true">#</a> Go语言中变量的声明</h2><p>Go语言变量是由字母、数字、下划线组成，其中首个字符不能为数字。Go语言中关键字和保留字都不能用作变量名</p><p>Go语言中变量需要声明后才能使用，同一作用域内不支持重复声明。并且Go语言的变量声明后必须使用。</p><p>变量声明后，没有初始化，打印出来的是空</p><h2 id="如何定义变量" tabindex="-1"><a class="header-anchor" href="#如何定义变量" aria-hidden="true">#</a> 如何定义变量</h2><h3 id="方式1" tabindex="-1"><a class="header-anchor" href="#方式1" aria-hidden="true">#</a> 方式1：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方式2-带类型" tabindex="-1"><a class="header-anchor" href="#方式2-带类型" aria-hidden="true">#</a> 方式2：带类型</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方式3-类型推导方式定义变量" tabindex="-1"><a class="header-anchor" href="#方式3-类型推导方式定义变量" aria-hidden="true">#</a> 方式3：类型推导方式定义变量</h3><p>a在函数内部，可以使用更简略的 := 方式声明并初始化变量</p><p>注意：短变量只能用于声明局部变量，不能用于全局变量声明</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>变量名 <span class="token operator">:=</span> 表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方式4-声明多个变量" tabindex="-1"><a class="header-anchor" href="#方式4-声明多个变量" aria-hidden="true">#</a> 方式4：声明多个变量</h3><p>类型都是一样的变量</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> 变量名称， 变量名称 类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类型不一样的变量</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	变量名称 类型
    变量名称 类型
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> a1<span class="token punctuation">,</span> a2 <span class="token builtin">string</span>
a1 <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
a2 <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>全部的定义方式</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span> <span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>

	<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;zhangsan1&quot;</span>
	<span class="token keyword">var</span> name2 <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;zhangsan2&quot;</span>
	name3 <span class="token operator">:=</span> <span class="token string">&quot;zhangsan3&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name3<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name1=%v name2=%v name3=%v \\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> name2<span class="token punctuation">,</span> name3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何定义常量" tabindex="-1"><a class="header-anchor" href="#如何定义常量" aria-hidden="true">#</a> 如何定义常量</h2><p>相对于变量，常量是恒定不变的值，多用于定义程序运行期间不会改变的那些值。常量的声明和变量声明非常类似，只是把var换成了const，常量在定义的时候必须赋值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义了常量，可以不用立即使用</span>
<span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.14</span>

<span class="token comment">// 定义两个常量</span>
<span class="token keyword">const</span><span class="token punctuation">(</span>
    A <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
    B <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// const同时声明多个常量时，如果省略了值表示和上面一行的值相同</span>
<span class="token keyword">const</span><span class="token punctuation">(</span>
    A <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
    B
    C
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const常量结合iota的使用" tabindex="-1"><a class="header-anchor" href="#const常量结合iota的使用" aria-hidden="true">#</a> Const常量结合iota的使用</h2><p>iota是golang 语言的常量计数器，只能在常量的表达式中使用</p><p>iota在const关键字出现时将被重置为0（const内部的第一行之前），const中每新增一行常量声明将使iota计数一次（iota可理解为const语句块中的行索引）。</p><p>每次const出现，都会让iota初始化为0【自增长】</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// a = 0</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	b <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// b=0</span>
    c        <span class="token comment">// c = 1</span>
    d        <span class="token comment">// d = 2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>const iota使用_跳过某些值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	b <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// b=0</span>
    <span class="token boolean">_</span>
    d        <span class="token comment">// d = 2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),i=[o];function p(c,l){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","2_Go的变量.html.vue"]]);export{r as default};
