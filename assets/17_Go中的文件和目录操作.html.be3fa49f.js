import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.fec28137.js";const e={},p=t(`<h1 id="go中的文件和目录操作" tabindex="-1"><a class="header-anchor" href="#go中的文件和目录操作" aria-hidden="true">#</a> Go中的文件和目录操作</h1><h2 id="文件的读取" tabindex="-1"><a class="header-anchor" href="#文件的读取" aria-hidden="true">#</a> 文件的读取</h2><h3 id="通过os-open方法读取文件" tabindex="-1"><a class="header-anchor" href="#通过os-open方法读取文件" aria-hidden="true">#</a> 通过os.Open方法读取文件</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 读取文件 方法1</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 关闭文件流</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件出错&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 读取文件里面的内容</span>
	<span class="token keyword">var</span> tempSlice <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> strSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		n<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>tempSlice<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;读取完毕&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;读取到了%v 个字节 \\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		strSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>strSlice<span class="token punctuation">,</span> tempSlice<span class="token operator">...</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>strSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过bufio的方式读取" tabindex="-1"><a class="header-anchor" href="#通过bufio的方式读取" aria-hidden="true">#</a> 通过bufio的方式读取</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 读取文件 方法2</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 关闭文件流</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件出错&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 通过创建bufio来读取</span>
	reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
	<span class="token keyword">var</span> fileStr <span class="token builtin">string</span>
	<span class="token keyword">var</span> count <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// 相当于读取一行</span>
		str<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
			<span class="token comment">// 读取完成的时候，也会有内容</span>
			fileStr <span class="token operator">+=</span> str
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;读取结束&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		count <span class="token operator">++</span>
		fileStr <span class="token operator">+=</span> str
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>fileStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过ioutil读取" tabindex="-1"><a class="header-anchor" href="#通过ioutil读取" aria-hidden="true">#</a> 通过ioutil读取</h3><p>文件比较少的时候，可以通过ioutil来读取文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 通过IOUtil读取</span>
byteStr<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>byteStr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件的写入" tabindex="-1"><a class="header-anchor" href="#文件的写入" aria-hidden="true">#</a> 文件的写入</h2><p>文件的写入，我们首先需要通过 os.OpenFile打开文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 打开文件</span>
file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE <span class="token operator">|</span> os<span class="token punctuation">.</span>O_RDWR<span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有三个参数</p><ul><li>name：要打开的文件名</li><li>flag：打开文件的模式 <ul><li>os.O_WRONLY：只读</li><li>os.O_CREATE：创建</li><li>os.O_RDONLY：只读</li><li>os.O_RDWR：读写</li><li>os.O_TRUNC：清空</li><li>os.O_APPEND：追加</li></ul></li><li>perm：文件权限，一个八进制数，r（读）04，w（写）02，x（执行）01</li></ul><h3 id="通过openfile打开文件写入" tabindex="-1"><a class="header-anchor" href="#通过openfile打开文件写入" aria-hidden="true">#</a> 通过OpenFile打开文件写入</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 打开文件</span>
file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE <span class="token operator">|</span> os<span class="token punctuation">.</span>O_RDWR <span class="token operator">|</span> os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
str <span class="token operator">:=</span> <span class="token string">&quot;啦啦啦 \\r\\n&quot;</span>
file<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过bufio写入" tabindex="-1"><a class="header-anchor" href="#通过bufio写入" aria-hidden="true">#</a> 通过bufio写入</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 打开文件</span>
file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE <span class="token operator">|</span> os<span class="token punctuation">.</span>O_RDWR <span class="token operator">|</span> os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">)</span>
<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
str <span class="token operator">:=</span> <span class="token string">&quot;啦啦啦 \\r\\n&quot;</span>
file<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

<span class="token comment">// 通过bufio写入</span>
writer <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
<span class="token comment">// 先将数据写入缓存</span>
writer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;你好，我是通过writer写入的 \\r\\n&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 将缓存中的内容写入文件</span>
writer<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过ioutil写入" tabindex="-1"><a class="header-anchor" href="#通过ioutil写入" aria-hidden="true">#</a> 通过ioutil写入</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 第三种方式，通过ioutil</span>
str2 <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件复制" tabindex="-1"><a class="header-anchor" href="#文件复制" aria-hidden="true">#</a> 文件复制</h2><p>通过ioutil读取和复制文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 读取文件</span>
byteStr<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test.txt&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;读取文件出错&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token comment">// 写入指定的文件</span>
ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token string">&quot;./main/test2.txt&quot;</span><span class="token punctuation">,</span> byteStr<span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>os<span class="token punctuation">.</span><span class="token function">Mkdir</span><span class="token punctuation">(</span><span class="token string">&quot;./abc&quot;</span><span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 删除文件</span>
os<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token string">&quot;aaa.txt&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 删除目录</span>
os<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token string">&quot;./aaa&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 删除多个文件和目录</span>
os<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span><span class="token string">&quot;./aaa&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重命名" tabindex="-1"><a class="header-anchor" href="#重命名" aria-hidden="true">#</a> 重命名</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>os<span class="token punctuation">.</span><span class="token function">Rename</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","17_Go中的文件和目录操作.html.vue"]]);export{d as default};
