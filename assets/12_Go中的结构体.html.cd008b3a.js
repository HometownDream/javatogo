import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.fec28137.js";const e={},p=t(`<h1 id="go中的结构体" tabindex="-1"><a class="header-anchor" href="#go中的结构体" aria-hidden="true">#</a> Go中的结构体</h1><h2 id="关于结构体" tabindex="-1"><a class="header-anchor" href="#关于结构体" aria-hidden="true">#</a> 关于结构体</h2><p>Golang中没有“类”的概念，Golang中的结构体和其他语言中的类有点相似。和其他面向对象语言中的类相比，Golang中的结构体具有更高的扩展性和灵活性。</p><p>Golang中的基础数据类型可以装示一些事物的基本属性，但是当我们想表达一个事物的全部或部分属性时，这时候再用单一的基本数据类型就无法满足需求了，Golang提供了一种自定义数据类型，可以封装多个基本数据类型，这种数据类型叫结构体，英文名称struct。也就是我们可以通过struct来定义自己的类型了。</p><h2 id="type关键字" tabindex="-1"><a class="header-anchor" href="#type关键字" aria-hidden="true">#</a> Type关键字</h2><p>Golang中通过type关键词定义一个结构体，需要注意的是，数组和结构体都是值类型，在这个和Java是有区别的</p><h3 id="自定义类型" tabindex="-1"><a class="header-anchor" href="#自定义类型" aria-hidden="true">#</a> 自定义类型</h3><p>在Go语言中有一些基本的数据类型，如string、整型、浮点型、布尔等数据类型，Go语言中可以使用type关键字来定义自定义类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> myInt <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码表示：将mylnt定义为int类型，通过type关键字的定义，mylnt就是一种新的类型，它具有int的特性。</p><p>示例：如下所示，我们定义了一个myInt类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type myInt int
func main() {
	var a myInt = 10
	fmt.Printf(&quot;%v %T&quot;, a, a)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出查看它的值以及类型，能够发现该类型就是myInt类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token number">10</span> main<span class="token punctuation">.</span>myInt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除此之外，我们还可以定义一个方法类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fun</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> fn myFn <span class="token operator">=</span> fun
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后调用并输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3><p>Golang1.9版本以后添加的新功能</p><p>类型别名规定：TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型。就像一个孩子小时候有大名、小名、英文名，但这些名字都指的是他本人</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TypeAlias <span class="token operator">=</span> Type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们之前见过的rune 和 byte 就是类型别名，他们的底层代码如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token builtin">uint8</span>
<span class="token keyword">type</span> <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token builtin">int32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体定义和初始化" tabindex="-1"><a class="header-anchor" href="#结构体定义和初始化" aria-hidden="true">#</a> 结构体定义和初始化</h2><h3 id="结构体的定义" tabindex="-1"><a class="header-anchor" href="#结构体的定义" aria-hidden="true">#</a> 结构体的定义</h3><p>使用type 和 struct关键字来定义结构体，具体代码格式如下所示：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
	定义一个人结构体
 */</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
	sex <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 实例化结构体</span>
	<span class="token keyword">var</span> person Person
	person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
	person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
	person<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;男&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：结构体首字母可以大写也可以小写，大写表示这个结构体是公有的，在其它的包里面也可以使用，小写表示结构体属于私有的，在其它地方不能使用</p></blockquote><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
	Sex <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化结构体" tabindex="-1"><a class="header-anchor" href="#实例化结构体" aria-hidden="true">#</a> 实例化结构体</h3><p>刚刚实例化结构体用到了：var person Person</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 实例化结构体</span>
<span class="token keyword">var</span> person Person
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
person<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;男&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化结构体2" tabindex="-1"><a class="header-anchor" href="#实例化结构体2" aria-hidden="true">#</a> 实例化结构体2</h3><p>我们下面使用另外一个方式来实例化结构体，通过new关键字来实例化结构体，得到的是结构体的地址，格式如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span>
person2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span>
person2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
person2<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;女&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下所示，从打印结果可以看出person2是一个结构体指针</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&amp;</span>main.Person<span class="token punctuation">{</span>name:<span class="token string">&quot;李四&quot;</span>, age:30, sex:<span class="token string">&quot;女&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意：在Golang中支持对结构体指针直接使用，来访问结构体的成员</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>person2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span>
<span class="token comment">// 等价于</span>
<span class="token punctuation">(</span><span class="token operator">*</span>person2<span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化结构体3" tabindex="-1"><a class="header-anchor" href="#实例化结构体3" aria-hidden="true">#</a> 实例化结构体3</h3><p>使用&amp;对结构体进行取地址操作，相当于对该结构体类型进行了一次new实例化操作</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 第三种方式实例化</span>
<span class="token keyword">var</span> person3 <span class="token operator">=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
person3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;赵四&quot;</span>
person3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">28</span>
person3<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;男&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化结构体4" tabindex="-1"><a class="header-anchor" href="#实例化结构体4" aria-hidden="true">#</a> 实例化结构体4</h3><p>使用键值对的方式来实例化结构体，实例化的时候，可以直接指定对应的值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 第四种方式初始化</span>
<span class="token keyword">var</span> person4 <span class="token operator">=</span> Person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    sex<span class="token punctuation">:</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化结构体5" tabindex="-1"><a class="header-anchor" href="#实例化结构体5" aria-hidden="true">#</a> 实例化结构体5</h3><p>第五种和第四种差不多，不过是用了取地址，然后返回的也是一个地址</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 第五种方式初始化</span>
<span class="token keyword">var</span> person5 <span class="token operator">=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;孙五&quot;</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    sex<span class="token punctuation">:</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person5<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例化结构体6" tabindex="-1"><a class="header-anchor" href="#实例化结构体6" aria-hidden="true">#</a> 实例化结构体6</h3><p>第六种方式是可以简写结构体里面的key</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> person6 <span class="token operator">=</span> Person<span class="token punctuation">{</span>
    <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体方法和接收者" tabindex="-1"><a class="header-anchor" href="#结构体方法和接收者" aria-hidden="true">#</a> 结构体方法和接收者</h2><p>在go语言中，没有类的概念但是可以给类型（结构体，自定义类型）定义方法。所谓方法就是定义了接收者的函数。接收者的概念就类似于其他语言中的this 或者self。</p><p>方法的定义格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>接收者变量 接收者类型<span class="token punctuation">)</span> 方法名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">(</span>返回参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其中</strong></p><ul><li>接收者变量：接收者中的参数变量名在命名时，官方建议使用接收者类型名的第一个小写字母，而不是self、this之类的命名。例如，Person类型的接收者变量应该命名为p，Connector类型的接收者变量应该命名为c等。、</li><li>接收者类型：接收者类型和参数类似，可以是指针类型和非指针类型。 <ul><li>非指针类型：表示不修改结构体的内容</li><li>指针类型：表示修改结构体中的内容</li></ul></li><li>方法名、参数列表、返回参数：具体格式与函数定义相同</li></ul><p>如果示例所示：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
	定义一个人结构体
 */</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
	sex <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个结构体方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot; 姓名: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot; 年龄: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot; 性别: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetInfo</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> sex <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
	p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
	p<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> person <span class="token operator">=</span> Person<span class="token punctuation">{</span>
		<span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
		<span class="token number">18</span><span class="token punctuation">,</span>
		<span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	person<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	person<span class="token punctuation">.</span><span class="token function">SetInfo</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span>
	person<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 姓名: 张三 年龄: <span class="token number">18</span> 性别: 女
 姓名: 李四 年龄: <span class="token number">18</span> 性别: 男
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，因为结构体是值类型，所以我们修改的时候，因为是传入的指针</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetInfo</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> sex <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
	p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
	p<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给任意类型添加方法" tabindex="-1"><a class="header-anchor" href="#给任意类型添加方法" aria-hidden="true">#</a> 给任意类型添加方法</h2><p>在Go语言中，接收者的类型可以是任何类型，不仅仅是结构体，任何类型都可以拥有方法。</p><p>举个例子，我们基于内置的int类型使用type关键字可以定义新的自定义类型，然后为我们的自定义类型添加方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> myInt <span class="token builtin">int</span>
<span class="token keyword">func</span> <span class="token function">fun</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m myInt<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;我是自定义类型里面的自定义方法&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a myInt <span class="token operator">=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v %T \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	a<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体的匿名字段" tabindex="-1"><a class="header-anchor" href="#结构体的匿名字段" aria-hidden="true">#</a> 结构体的匿名字段</h2><p>结构体允许其成员字段在声明时没有字段名而只有类型，这种没有名字的字段就被称为匿名字段</p><p>匿名字段默认采用类型名作为字段名，结构体要求字段名称必须唯一，因此一个结构体中同种类型的匿名字段只能一个</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
	定义一个人结构体
 */</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">string</span>
	<span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 结构体的匿名字段</span>
	<span class="token keyword">var</span> person <span class="token operator">=</span> Person<span class="token punctuation">{</span>
		<span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
		<span class="token number">18</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构体的字段类型可以是：基本数据类型，也可以是切片、Map 以及结构体</p><p>如果结构体的字段类似是：指针、slice、和 map 的零值都是nil，即还没有分配空间</p><p>如果需要使用这样的字段，需要先make，才能使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
	定义一个人结构体
 */</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
	hobby <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	mapValue <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 结构体的匿名字段</span>
	<span class="token keyword">var</span> person <span class="token operator">=</span> Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
	person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
	person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span>

	<span class="token comment">// 给切片申请内存空间</span>
	person<span class="token punctuation">.</span>hobby <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
	person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;睡觉&quot;</span>
	person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;吃饭&quot;</span>
	person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;打豆豆&quot;</span>

	<span class="token comment">// 给map申请存储空间</span>
	person<span class="token punctuation">.</span>mapValue <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	person<span class="token punctuation">.</span>mapValue<span class="token punctuation">[</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;北京&quot;</span>
	person<span class="token punctuation">.</span>mapValue<span class="token punctuation">[</span><span class="token string">&quot;phone&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span>

	<span class="token comment">// 加入#打印完整信息</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时我们还支持结构体的嵌套，如下所示</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	userName <span class="token builtin">string</span>
	password <span class="token builtin">string</span>
	sex <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
	address Address <span class="token comment">// User结构体嵌套Address结构体</span>
<span class="token punctuation">}</span>

<span class="token comment">// 收货地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	phone <span class="token builtin">string</span>
	city <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> u User
	u<span class="token punctuation">.</span>userName <span class="token operator">=</span> <span class="token string">&quot;moguBlog&quot;</span>
	u<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
	u<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;男&quot;</span>
	u<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
	
	<span class="token keyword">var</span> address Address
	address<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
	address<span class="token punctuation">.</span>phone <span class="token operator">=</span> <span class="token string">&quot;110&quot;</span>
	address<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;北京&quot;</span>
	u<span class="token punctuation">.</span>address <span class="token operator">=</span> address
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套结构体的字段名冲突" tabindex="-1"><a class="header-anchor" href="#嵌套结构体的字段名冲突" aria-hidden="true">#</a> 嵌套结构体的字段名冲突</h2><p>嵌套结构体内部可能存在相同的字段名，这个时候为了避免歧义，需要指定具体的内嵌结构体的字段。（例如，父结构体中的字段 和 子结构体中的字段相似）</p><p>默认会从父结构体中寻找，如果找不到的话，再去子结构体中在找</p><p>如果子类的结构体中，同时存在着两个相同的字段，那么这个时候就会报错了，因为程序不知道修改那个字段的为准。</p><h2 id="结构体的继承" tabindex="-1"><a class="header-anchor" href="#结构体的继承" aria-hidden="true">#</a> 结构体的继承</h2><p>结构体的继承，其实就类似于结构体的嵌套，如下所示，我们定义了两个结构体，分别是Animal 和 Dog，其中每个结构体都有各自的方法，然后通过Dog结构体 继承于 Animal结构体</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 用户结构体</span>
<span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a Animal<span class="token punctuation">)</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v 在运动 \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 子结构体</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	age <span class="token builtin">int</span>
	<span class="token comment">// 通过结构体嵌套，完成继承</span>
	Animal
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>dog Dog<span class="token punctuation">)</span> <span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v 在汪汪汪 \\n&quot;</span><span class="token punctuation">,</span> dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> dog <span class="token operator">=</span> Dog<span class="token punctuation">{</span>
		age<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
		Animal<span class="token punctuation">:</span> Animal<span class="token punctuation">{</span>
			name<span class="token punctuation">:</span> <span class="token string">&quot;阿帕奇&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dog<span class="token punctuation">.</span><span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后，发现Dog拥有了父类的方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>阿帕奇 在运动 
阿帕奇 在汪汪汪
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go中的结构体和json相互转换" tabindex="-1"><a class="header-anchor" href="#go中的结构体和json相互转换" aria-hidden="true">#</a> Go中的结构体和Json相互转换</h2><p>JSON（JavaScript Object Notation）是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。RESTfull Api接口中返回的数据都是json数据。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们Golang要给App或者小程序提供Api接口数据，这个时候就需要涉及到结构体和Json之间的相互转换 Golang JSON序列化是指把结构体数据转化成JSON格式的字符串，Golang JSON的反序列化是指把JSON数据转化成Golang中的结构体对象</p><p>Golang中的序列化和反序列化主要通过“encoding/json”包中的 json.Marshal() 和 son.Unmarshal()</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个学生结构体，注意结构体的首字母必须大写，代表公有，否则将无法转换</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID <span class="token builtin">string</span>
	Gender <span class="token builtin">string</span>
	Name <span class="token builtin">string</span>
	Sno <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s1 <span class="token operator">=</span> Student<span class="token punctuation">{</span>
		ID<span class="token punctuation">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
		Gender<span class="token punctuation">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
		Name<span class="token punctuation">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
		Sno<span class="token punctuation">:</span> <span class="token string">&quot;s001&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 结构体转换成Json（返回的是byte类型的切片）</span>
	jsonByte<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
	jsonStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>jsonByte<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将字符串转换成结构体类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个学生结构体，注意结构体的首字母必须大写，代表公有，否则将无法转换</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID <span class="token builtin">string</span>
	Gender <span class="token builtin">string</span>
	Name <span class="token builtin">string</span>
	Sno <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Json字符串转换成结构体</span>
	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">\`{&quot;ID&quot;:&quot;12&quot;,&quot;Gender&quot;:&quot;男&quot;,&quot;Name&quot;:&quot;李四&quot;,&quot;Sno&quot;:&quot;s001&quot;}\`</span>
	<span class="token keyword">var</span> s2 <span class="token operator">=</span> Student<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 第一个是需要传入byte类型的数据，第二参数需要传入转换的地址</span>
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;转换失败 \\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v \\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>我们想要实现结构体转换成字符串，必须保证结构体中的字段是公有的，也就是首字母必须是大写的，这样才能够实现结构体 到 Json字符串的转换。</p><h2 id="结构体标签tag" tabindex="-1"><a class="header-anchor" href="#结构体标签tag" aria-hidden="true">#</a> 结构体标签Tag</h2><p>Tag是结构体的元信息，可以在运行的时候通过反射的机制读取出来。Tag在结构体字段的后方定义，由一对反引号包裹起来，具体的格式如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>key1：<span class="token string">&quot;value1&quot;</span> key2：<span class="token string">&quot;value2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结构体tag由一个或多个键值对组成。键与值使用冒号分隔，值用双引号括起来。同一个结构体字段可以设置多个键值对tag，不同的键值对之间使用空格分隔。</p><p>注意事项：为结构体编写Tag时，必须严格遵守键值对的规则。结构体标签的解析代码的容错能力很差，一旦格式写错，编译和运行时都不会提示任何错误，通过反射也无法正确取值。例如不要在key和value之间添加空格。</p><p>如下所示，我们通过tag标签，来转换字符串的key</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个Student体，使用结构体标签</span>
<span class="token keyword">type</span> Student2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id <span class="token builtin">string</span> <span class="token string">\`json:&quot;id&quot;\`</span> <span class="token comment">// 通过指定tag实现json序列化该字段的key</span>
	Gender <span class="token builtin">string</span> <span class="token string">\`json:&quot;gender&quot;\`</span>
	Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Sno <span class="token builtin">string</span> <span class="token string">\`json:&quot;sno&quot;\`</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s1 <span class="token operator">=</span> Student2<span class="token punctuation">{</span>
		Id<span class="token punctuation">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
		Gender<span class="token punctuation">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
		Name<span class="token punctuation">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
		Sno<span class="token punctuation">:</span> <span class="token string">&quot;s001&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 结构体转换成Json</span>
	jsonByte<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
	jsonStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>jsonByte<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span>

	<span class="token comment">// Json字符串转换成结构体</span>
	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">\`{&quot;Id&quot;:&quot;12&quot;,&quot;Gender&quot;:&quot;男&quot;,&quot;Name&quot;:&quot;李四&quot;,&quot;Sno&quot;:&quot;s001&quot;}\`</span>
	<span class="token keyword">var</span> s2 <span class="token operator">=</span> Student2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 第一个是需要传入byte类型的数据，第二参数需要传入转换的地址</span>
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;转换失败 \\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v \\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套结构体和json序列化反序列化" tabindex="-1"><a class="header-anchor" href="#嵌套结构体和json序列化反序列化" aria-hidden="true">#</a> 嵌套结构体和Json序列化反序列化</h2><p>和刚刚类似，我们同样也是使用的是 json.Marshal()</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 嵌套结构体 到 Json的互相转换</span>

<span class="token comment">// 定义一个Student结构体</span>
<span class="token keyword">type</span> Student3 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id <span class="token builtin">int</span>
	Gender <span class="token builtin">string</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个班级结构体</span>
<span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Title <span class="token builtin">string</span>
	Students <span class="token punctuation">[</span><span class="token punctuation">]</span>Student3
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> class <span class="token operator">=</span> Class<span class="token punctuation">{</span>
		Title<span class="token punctuation">:</span> <span class="token string">&quot;1班&quot;</span><span class="token punctuation">,</span>
		Students<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Student3<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		s <span class="token operator">:=</span> Student3<span class="token punctuation">{</span>
			Id<span class="token punctuation">:</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			Gender<span class="token punctuation">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
			Name<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;stu_%v&quot;</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		class<span class="token punctuation">.</span>Students <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>class<span class="token punctuation">.</span>Students<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v \\n&quot;</span><span class="token punctuation">,</span> class<span class="token punctuation">)</span>

	<span class="token comment">// 转换成Json字符串</span>
	strByte<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>class<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印失败&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>strByte<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,108),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","12_Go中的结构体.html.vue"]]);export{d as default};
