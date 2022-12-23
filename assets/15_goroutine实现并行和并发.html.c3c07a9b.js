import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.fec28137.js";const p={},e=t(`<h1 id="golang-goroutine-channel-实现并发和并行" tabindex="-1"><a class="header-anchor" href="#golang-goroutine-channel-实现并发和并行" aria-hidden="true">#</a> Golang goroutine channel 实现并发和并行</h1><h2 id="为什么要使用goroutine呢" tabindex="-1"><a class="header-anchor" href="#为什么要使用goroutine呢" aria-hidden="true">#</a> 为什么要使用goroutine呢</h2><p>需求：要统计1-10000000的数字中那些是素数，并打印这些素数？</p><p>素数：就是除了1和它本身不能被其他数整除的数</p><p><strong>实现方法：</strong></p><ul><li>传统方法，通过一个for循环判断各个数是不是素数</li><li>使用并发或者并行的方式，将统计素数的任务分配给多个goroutine去完成，这个时候就用到了goroutine</li><li>goroutine 结合 channel</li></ul><h2 id="进程、线程以及并行、并发" tabindex="-1"><a class="header-anchor" href="#进程、线程以及并行、并发" aria-hidden="true">#</a> 进程、线程以及并行、并发</h2><h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h3><p>进程（Process）就是程序在操作系统中的一次执行过程，是系统进行资源分配和调度的基本单位，进程是一个动态概念，是程序在执行过程中分配和管理资源的基本单位，每一个进程都有一个自己的地址空间。一个进程至少有5种基本状态，它们是：初始态，执行态，等待状态，就绪状态，终止状态。</p><p>通俗的讲进程就是一个正在执行的程序。</p><h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3><p>线程是进程的一个执行实例，是程序执行的最小单元，它是比进程更小的能独立运行的基本单位</p><p>一个进程可以创建多个线程，同一个进程中多个线程可以并发执行 ，一个线程要运行的话，至少有一个进程</p><h3 id="并发和并行" tabindex="-1"><a class="header-anchor" href="#并发和并行" aria-hidden="true">#</a> 并发和并行</h3><p>并发：多个线程同时竞争一个位置，竞争到的才可以执行，每一个时间段只有一个线程在执行。</p><p>并行：多个线程可以同时执行，每一个时间段，可以有多个线程同时执行。</p><p>通俗的讲多线程程序在单核CPU上面运行就是并发，多线程程序在多核CUP上运行就是并行，如果线程数大于CPU核数，则多线程程序在多个CPU上面运行既有并行又有并发</p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221437674.png" alt="image-20200723091802816"></p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221437675.png" alt="image-20200723092334895"></p><h2 id="golang中协程-goroutine-以及主线程" tabindex="-1"><a class="header-anchor" href="#golang中协程-goroutine-以及主线程" aria-hidden="true">#</a> Golang中协程（goroutine）以及主线程</h2><p>golang中的主线程：（可以理解为线程/也可以理解为进程），在一个Golang程序的主线程上可以起多个协程。Golang中多协程可以实现并行或者并发。</p><p><strong>协程</strong>：可以理解为用户级线程，这是对内核透明的，也就是系统并不知道有协程的存在，是完全由用户自己的程序进行调度的。Golang的一大特色就是从语言层面原生持协程，在函数或者方法前面加go关键字就可创建一个协程。可以说Golang中的协程就是goroutine。</p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221437676.png" alt="image-20200723092645188"></p><p>Golang中的多协程有点类似于Java中的多线程</p><h3 id="多协程和多线程" tabindex="-1"><a class="header-anchor" href="#多协程和多线程" aria-hidden="true">#</a> 多协程和多线程</h3><p>多协程和多线程：Golang中每个goroutine（协程）默认占用内存远比Java、C的线程少。</p><p>OS线程（操作系统线程）一般都有固定的栈内存（通常为2MB左右），一个goroutine（协程）占用内存非常小，只有2KB左右，多协程goroutine切换调度开销方面远比线程要少。</p><p>这也是为什么越来越多的大公司使用Golang的原因之一。</p><h2 id="goroutine的使用以及sync-waitgroup" tabindex="-1"><a class="header-anchor" href="#goroutine的使用以及sync-waitgroup" aria-hidden="true">#</a> goroutine的使用以及sync.WaitGroup</h2><h3 id="并行执行需求" tabindex="-1"><a class="header-anchor" href="#并行执行需求" aria-hidden="true">#</a> 并行执行需求</h3><p>在主线程（可以理解成进程）中，开启一个goroutine，该协程每隔50毫秒秒输出“你好golang&quot;</p><p>在主线程中也每隔50毫秒输出“你好golang&quot;，输出10次后，退出程序，要求主线程和goroutine同时执行。</p><p>这是时候，我们就可以开启协程来了，通过 go关键字开启</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 协程需要运行的方法</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test 你好golang&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// 通过go关键字，就可以直接开启一个协程</span>
	<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 这是主进程执行的</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main 你好golang&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下，我们能够看到他们之间不存在所谓的顺序关系了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>main 你好golang
test 你好golang
main 你好golang
test 你好golang
test 你好golang
main 你好golang
main 你好golang
test 你好golang
test 你好golang
main 你好golang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是上述的代码其实还有问题的，也就是说当主进程执行完毕后，不管协程有没有执行完成，都会退出</p><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221437677.png" alt="image-20200723094125527"></p><p>这是使用我们就需要用到 sync.WaitGroup等待协程</p><p>首先我们需要创建一个协程计数器</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个协程计数器</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后当我们开启协程的时候，我们要让计数器加1</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 开启协程，协程计数器加1</span>
wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们协程结束前，我们需要让计数器减1</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 协程计数器减1</span>
wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个协程计数器</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">// 这是主进程执行的</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test1 你好golang&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token comment">//time.Sleep(time.Millisecond * 100)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 协程计数器减1</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">// 这是主进程执行的</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test2 你好golang&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token comment">//time.Sleep(time.Millisecond * 100)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 协程计数器减1</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// 通过go关键字，就可以直接开启一个协程</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 协程计数器加1</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 这是主进程执行的</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main 你好golang&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token comment">//time.Sleep(time.Millisecond * 100)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 等待所有的协程执行完毕</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;主线程退出&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置go并行运行的时候占用的cpu数量" tabindex="-1"><a class="header-anchor" href="#设置go并行运行的时候占用的cpu数量" aria-hidden="true">#</a> 设置Go并行运行的时候占用的cpu数量</h2><p>Go运行时的调度器使用GOMAXPROCS参数来确定需要使用多少个OS线程来同时执行Go代码。默认值是机器上的CPU核心数。例如在一个8核心的机器上，调度器会把Go代码同时调度到8个oS线程上。</p><p>Go 语言中可以通过runtime.GOMAXPROCS（）函数设置当前程序并发时占用的CPU逻辑核心数。</p><p>Go1.5版本之前，默认使用的是单核心执行。Go1.5版本之后，默认使用全部的CPU逻辑核心数。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取cpu个数</span>
	npmCpu <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cup的个数:&quot;</span><span class="token punctuation">,</span> npmCpu<span class="token punctuation">)</span>
	<span class="token comment">// 设置允许使用的CPU数量</span>
	runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span>runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for循环开启多个协程" tabindex="-1"><a class="header-anchor" href="#for循环开启多个协程" aria-hidden="true">#</a> for循环开启多个协程</h2><p>类似于Java里面开启多个线程，同时执行</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;协程（%v）打印的第%v条数据 \\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 协程计数器减1</span>
	vg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> vg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		vg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	vg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;主线程退出&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为我们协程会在主线程退出后就终止，所以我们还需要使用到 sync.WaitGroup来控制主线程的终止。</p><h2 id="channel管道" tabindex="-1"><a class="header-anchor" href="#channel管道" aria-hidden="true">#</a> Channel管道</h2><p>管道是Golang在语言级别上提供的goroutine间的通讯方式，我们可以使用channel在多个goroutine之间传递消息。如果说goroutine是Go程序并发的执行体，channel就是它们之间的连接。channel是可以让一个goroutine发送特定值到另一个goroutine的通信机制。</p><p>Golang的并发模型是CSP（Communicating Sequential Processes），提倡通过通信共享内存而不是通过共享内存而实现通信。</p><p>Go语言中的管道（channel）是一种特殊的类型。管道像一个传送带或者队列，总是遵循先入先出（First In First Out）的规则，保证收发数据的顺序。每一个管道都是一个具体类型的导管，也就是声明channel的时候需要为其指定元素类型。</p><h3 id="channel类型" tabindex="-1"><a class="header-anchor" href="#channel类型" aria-hidden="true">#</a> channel类型</h3><p>channel是一种类型，一种引用类型。声明管道类型的格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明一个传递整型的管道</span>
<span class="token keyword">var</span> ch1 <span class="token keyword">chan</span> <span class="token builtin">int</span>
<span class="token comment">// 声明一个传递布尔类型的管道</span>
<span class="token keyword">var</span> ch2 <span class="token keyword">chan</span> <span class="token builtin">bool</span>
<span class="token comment">// 声明一个传递int切片的管道</span>
<span class="token keyword">var</span> ch3 <span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建channel" tabindex="-1"><a class="header-anchor" href="#创建channel" aria-hidden="true">#</a> 创建channel</h3><p>声明管道后，需要使用make函数初始化之后才能使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> 元素类型<span class="token punctuation">,</span> 容量<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建一个能存储10个int类型的数据管道</span>
ch1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个能存储4个bool类型的数据管道</span>
ch2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个能存储3个[]int切片类型的管道</span>
ch3 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="channel操作" tabindex="-1"><a class="header-anchor" href="#channel操作" aria-hidden="true">#</a> channel操作</h3><p>管道有发送，接收和关闭的三个功能</p><p>发送和接收 都使用 &lt;- 符号</p><p>现在我们先使用以下语句定义一个管道：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h4><p>将数据放到管道内，将一个值发送到管道内</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 把10发送到ch中</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取操作" tabindex="-1"><a class="header-anchor" href="#取操作" aria-hidden="true">#</a> 取操作</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="关闭管道" tabindex="-1"><a class="header-anchor" href="#关闭管道" aria-hidden="true">#</a> 关闭管道.</h4><p>通过调用内置的close函数来关闭管道</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例" aria-hidden="true">#</a> 完整示例</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建管道</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 给管道里面存储数据</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">21</span>
ch <span class="token operator">&lt;-</span> <span class="token number">32</span>

<span class="token comment">// 获取管道里面的内容</span>
a <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印出管道的值：&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印出管道的值：&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印出管道的值：&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>

<span class="token comment">// 管道的值、容量、长度</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;地址：%v 容量：%v 长度：%v \\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 管道的类型</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T \\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>

<span class="token comment">// 管道阻塞（当没有数据的时候取，会出现阻塞，同时当管道满了，继续存也会）</span>
<span class="token operator">&lt;-</span> ch  <span class="token comment">// 没有数据取，出现阻塞</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span> <span class="token comment">// 管道满了，继续存，也出现阻塞</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-range从管道循环取值" tabindex="-1"><a class="header-anchor" href="#for-range从管道循环取值" aria-hidden="true">#</a> for range从管道循环取值</h2><p>当向管道中发送完数据时，我们可以通过close函数来关闭管道，当管道被关闭时，再往该管道发送值会引发panic，从该管道取值的操作会去完管道中的值，再然后取到的值一直都是对应类型的零值。那如何判断一个管道是否被关闭的呢？</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建管道</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 循环写入值</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    ch <span class="token operator">&lt;-</span> i
<span class="token punctuation">}</span>
<span class="token comment">// 关闭管道</span>
<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

<span class="token comment">// for range循环遍历管道的值(管道没有key)</span>
<span class="token keyword">for</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 通过上述的操作，能够打印值，但是出出现一个deadlock的死锁错误，也就说我们需要关闭管道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：使用for range遍历的时候，一定在之前需要先关闭管道</p><p>思考：通过for循环来遍历管道，需要关闭么？</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建管道</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 循环写入值</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    ch <span class="token operator">&lt;-</span> i
<span class="token punctuation">}</span>

<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码没有报错，说明通过for i的循环方式，可以不关闭管道</p><h2 id="goroutine-结合-channel-管道" tabindex="-1"><a class="header-anchor" href="#goroutine-结合-channel-管道" aria-hidden="true">#</a> Goroutine 结合 channel 管道</h2><p>需求1：定义两个方法，一个方法给管道里面写数据，一个给管道里面读取数据。要求同步进行。</p><ul><li>开启一个fn1的的协程给向管道inChan中写入00条数据</li><li>开启一个fn2的协程读取inChan中写入的数据</li><li>注意：fn1和fn2同时操作一个管道</li><li>主线程必须等待操作完成后才可以退出</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">write</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;写入:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		ch <span class="token operator">&lt;-</span> i
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Microsecond <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">read</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;读取:&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Microsecond <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">write</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">read</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

	<span class="token comment">// 等待</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;主线程执行完毕&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>管道是安全的，是一边写入，一边读取，当读取比较快的时候，会等待写入</p><h2 id="goroutine-结合-channel打印素数" tabindex="-1"><a class="header-anchor" href="#goroutine-结合-channel打印素数" aria-hidden="true">#</a> goroutine 结合 channel打印素数</h2><p><img src="https://cdn.jsdelivr.net/gh/HometownDream/blogImage@main/imgJavaToGo202212221437678.png" alt="image-20200723214241459"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 想intChan中放入 1~ 120000个数</span>
<span class="token keyword">func</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">120000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		intChan <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// cong intChan取出数据，并判断是否为素数，如果是的话，就把得到的素数放到primeChan中</span>
<span class="token keyword">func</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> primeChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> exitChan <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> intChan <span class="token punctuation">{</span>
		<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span>  i <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				flag <span class="token operator">=</span> <span class="token boolean">false</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
			<span class="token comment">// 是素数</span>
			primeChan <span class="token operator">&lt;-</span> value
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 这里需要关闭 primeChan，因为后面需要遍历输出 primeChan</span>
	exitChan <span class="token operator">&lt;-</span> <span class="token boolean">true</span>

	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 打印素数</span>
<span class="token keyword">func</span> <span class="token function">printPrime</span><span class="token punctuation">(</span>primeChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> primeChan <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 写入数字</span>
	intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

	<span class="token comment">// 存放素数</span>
	primeChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

	<span class="token comment">// 存放 primeChan退出状态</span>
	exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>

	<span class="token comment">// 开启写值的协程</span>
	<span class="token keyword">go</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>

	<span class="token comment">// 开启计算素数的协程</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">,</span> primeChan<span class="token punctuation">,</span> exitChan<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 开启打印的协程</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">printPrime</span><span class="token punctuation">(</span>primeChan<span class="token punctuation">)</span>

	<span class="token comment">// 匿名自运行函数</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">16</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果exitChan 没有完成16次遍历，将会等待</span>
			<span class="token operator">&lt;-</span> exitChan
		<span class="token punctuation">}</span>
		<span class="token comment">// 关闭primeChan</span>
		<span class="token function">close</span><span class="token punctuation">(</span>primeChan<span class="token punctuation">)</span>
		wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;主线程执行完毕&quot;</span><span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单向管道" tabindex="-1"><a class="header-anchor" href="#单向管道" aria-hidden="true">#</a> 单向管道</h2><p>有时候我们会将管道作为参数在多个任务函数间传递，很多时候我们在不同的任务函数中，使用管道都会对其进行限制，比如限制管道在函数中只能发送或者只能接受</p><blockquote><p>默认的管道是 可读可写</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一种可读可写的管道</span>
<span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
<span class="token operator">&lt;-</span> ch

<span class="token comment">// 管道声明为只写管道，只能够写入，不能读</span>
<span class="token keyword">var</span> ch2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
ch2 <span class="token operator">&lt;-</span> <span class="token number">10</span>

<span class="token comment">// 声明一个只读管道</span>
<span class="token keyword">var</span> ch3 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&lt;-</span> ch3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select多路复用" tabindex="-1"><a class="header-anchor" href="#select多路复用" aria-hidden="true">#</a> Select多路复用</h2><p>在某些场景下我们需要同时从多个通道接收数据。这个时候就可以用到golang中给我们提供的select多路复用。 通常情况通道在接收数据时，如果没有数据可以接收将会发生阻塞。</p><p>比如说下面代码来实现从多个通道接受数据的时候就会发生阻塞</p><p>这种方式虽然可以实现从多个管道接收值的需求，但是运行性能会差很多。为了应对这种场景，Go内置了select关键字，可以同时响应多个管道的操作。</p><p>select的使用类似于switch 语句，它有一系列case分支和一个默认的分支。每个case会对应一个管道的通信（接收或发送）过程。select会一直等待，直到某个case的通信操作完成时，就会执行case分支对应的语句。具体格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
intChan <span class="token operator">&lt;-</span> <span class="token number">10</span>
intChan <span class="token operator">&lt;-</span> <span class="token number">12</span>
intChan <span class="token operator">&lt;-</span> <span class="token number">13</span>
stringChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
stringChan <span class="token operator">&lt;-</span> <span class="token number">20</span>
stringChan <span class="token operator">&lt;-</span> <span class="token number">23</span>
stringChan <span class="token operator">&lt;-</span> <span class="token number">24</span>

<span class="token comment">// 每次循环的时候，会随机中一个chan中读取，其中for是死循环</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span> intChan<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;从initChan中读取数据：&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span> stringChan<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;从stringChan中读取数据：&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;所有的数据获取完毕&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tip：使用select来获取数据的时候，不需要关闭chan，不然会出现问题</p></blockquote><h2 id="goroutine-recover解决协程中出现的panic" tabindex="-1"><a class="header-anchor" href="#goroutine-recover解决协程中出现的panic" aria-hidden="true">#</a> Goroutine Recover解决协程中出现的Panic</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">errTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">// 捕获异常</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;errTest发生错误&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	myMap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> main <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">errTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们出现问题的时候，我们还是按照原来的方法，通过defer func创建匿名自启动</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 捕获异常</span>
<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;errTest发生错误&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go中的并发安全和锁" tabindex="-1"><a class="header-anchor" href="#go中的并发安全和锁" aria-hidden="true">#</a> Go中的并发安全和锁</h2><p>如下面一段代码，我们在并发环境下进行操作，就会出现并发访问的问题</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the count is : &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="互斥锁" tabindex="-1"><a class="header-anchor" href="#互斥锁" aria-hidden="true">#</a> 互斥锁</h3><p>互斥锁是传统并发编程中对共享资源进行访问控制的主要手段，它由标准库sync中的Mutex结构体类型表示。sync.Mutex类型只有两个公开的指针方法，Lock和Unlock。Lock锁定当前的共享资源，Unlock 进行解锁</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个锁</span>
<span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex
<span class="token comment">// 加锁</span>
mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 解锁</span>
mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">// 加锁</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the count is : &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 解锁</span>
	mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过下面命令，build的时候，可以查看是否具有竞争关系</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 通过 -race 参数进行构建</span>
<span class="token keyword">go</span> build <span class="token operator">-</span>race main<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token comment">// 运行插件</span>
main<span class="token punctuation">.</span>ext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读写互斥锁" tabindex="-1"><a class="header-anchor" href="#读写互斥锁" aria-hidden="true">#</a> 读写互斥锁</h3><p>互斥锁的本质是当一个goroutine访问的时候，其他goroutine都不能访问。这样在资源同步，避免竞争的同时也降低了程序的并发性能。程序由原来的并行执行变成了串行执行。</p><p>其实，当我们对一个不会变化的数据只做“读”操作的话，是不存在资源竞争的问题的。因为数据是不变的，不管怎么读取，多少goroutine同时读取，都是可以的。</p><p>所以问题不是出在“读”上，主要是修改，也就是“写”。修改的数据要同步，这样其他goroutine才可以感知到。所以真正的互斥应该是读取和修改、修改和修改之间，读和读是没有互斥操作的必要的。</p><p>因此，衍生出另外一种锁，叫做读写锁。</p><p>读写锁可以让多个读操作并发，同时读取，但是对于写操作是完全互斥的。也就是说，当一个goroutine进行写操作的时候，其他goroutine既不能进行读操作，也不能进行写操作。</p><p>GO中的读写锁由结构体类型sync.RWMutex表示。此类型的方法集合中包含两对方法：</p>`,130),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","15_goroutine实现并行和并发.html.vue"]]);export{d as default};
