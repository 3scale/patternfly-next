webpackJsonp([0xc7d3211e8cd2],{1045:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="upgrading-to-patternfly-4"><a href="#upgrading-to-patternfly-4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Upgrading to PatternFly 4</h1>\n<p>Use the following steps to upgrade from PatternFly 3 to PatternFly 4.</p>\n<p><strong>Before you begin</strong></p>\n<ul>\n<li>\n<p><strong>Does you application require IE11 support?</strong></p>\n<ul>\n<li>If the answer is yes, you can\'t upgrade to PatternFly 4. We\'re sorry!</li>\n</ul>\n</li>\n<li>\n<p><strong>Do you know what your build process is?</strong></p>\n<ul>\n<li>Steps and requirements differ for basic HTML, Gulp, and Webpack, so be prepared with that information going in.</li>\n</ul>\n</li>\n<li>\n<p><strong>Do you need to run PatternFly 3 and PatternFly 4 together?</strong></p>\n<ul>\n<li>If the answer is yes, use the following steps to update your configuration in the <code>src/patternfly/utilities/variables.scss</code> file to state <code>false</code>:</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss"><span class="token property"><span class="token variable">$pf-global--enable-reset</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="installing-patternfly-4"><a href="#installing-patternfly-4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing PatternFly 4</h2>\n<p>Run the following commands to install:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-bash"><code class="prism-language-bash"><span class="token function">npm</span> <span class="token function">install</span> @patternfly/patternfly-next\n</code></pre>\n      </div>\n<hr>\n<h2 id="configure-your-project"><a href="#configure-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configure your project</h2>\n<ol>\n<li>Navigate to the patternfly-next package you just installed and find the PatternFly 4 CSS stylesheet, <code>patternfly.css</code>. This file contains all of the updated PatternFly 4 styles.</li>\n<li>Copy <code>patternfly.css</code> to your project\'s CSS directory.</li>\n<li>In your HTML file, add the following line to the bottom of your list of CSS files to link to your new stylesheet:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/patternfly.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This will make it so that PatternFly 4 styles take precedence over anything that currently resides in your application.</p>\n<h2 id="building-patternfly-4"><a href="#building-patternfly-4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building PatternFly 4</h2>\n<p>PatternFly 4 is distributed as separated modules:</p>\n<ul>\n<li><strong>Layouts</strong> allow you to structure and organize the content on your pages</li>\n<li><strong>Components</strong>, like buttons and alerts, can be assembled together to build applications</li>\n</ul>\n<p>Each module delivers a sass file (<code>scss</code>) and CSS file so you can either include them in your build environment or consume the CSS from your page header.</p>\n<ul>\n<li><em>If you need to overwrite any elements, we recommend extending the variables found in the <code>.scss</code> files, rather than manually overwriting the CSS.</em></li>\n</ul>\n<p>All of PatternFly 4\'s components are kept under <code>@patternfly/patternfly-next/components/</code>.</p>\n<p>All of PatternFly 4\'s layouts are kept under <code>@patternfly/patternfly-next/layouts/</code>.</p>\n<h3 id="build-examples"><a href="#build-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build Examples</h3>\n<h4 id="gulp"><a href="#gulp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gulp</h4>\n<p><em>This example uses the following configuration:</em></p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-json"><code class="prism-language-json">  <span class="token property">"gulp"</span><span class="token operator">:</span> <span class="token string">"^3.9.1"</span><span class="token punctuation">,</span>\n  <span class="token property">"gulp-insert"</span><span class="token operator">:</span> <span class="token string">"^0.5.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"gulp-sass"</span><span class="token operator">:</span> <span class="token string">"^3.1.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"gulp-sass-glob"</span><span class="token operator">:</span> <span class="token string">"^1.0.8"</span>\n</code></pre>\n      </div>\n<p><em>Code Snippet</em></p>\n<ul>\n<li>Import all modules</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-js"><code class="prism-language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'compile-scss\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  gulp\n    <span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'./@node_modules/@patternfly/patternfly-next/**/*.scss\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>insert<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/components/**/*.scss";\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>insert<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/layouts/**/*.scss";\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">sassGlob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/patternfly-utilities";\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'./css\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>Import all specific modules</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-js"><code class="prism-language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'compile-scss\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  gulp\n    <span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'./@node_modules/@patternfly/patternfly-next/**/*.scss\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>insert<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/layouts/Page/*.scss";\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>insert<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/layouts/Grid/*.scss";\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>insert<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/components/Content/*.scss";\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>insert<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/components/Content/*.scss";\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">sassGlob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'@import "./@node_modules/@patternfly/patternfly-next/patternfly-utilities";\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'./css\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4 id="webpack"><a href="#webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack</h4>\n<p><em>This example uses the following configuration:</em></p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-json"><code class="prism-language-json">webpack<span class="token operator">:</span> <span class="token string">"3.8.1"</span><span class="token punctuation">,</span>\nsass-loader<span class="token operator">:</span> <span class="token string">"7.0.0"</span><span class="token punctuation">,</span>\ncss-loader<span class="token operator">:</span> <span class="token string">"^0.28.11"</span><span class="token punctuation">,</span>\nstyle-loader<span class="token operator">:</span> <span class="token string">"^0.21.0"</span><span class="token punctuation">,</span>\nnode-sass<span class="token operator">:</span> <span class="token string">"^4.9.0"</span>\n</code></pre>\n      </div>\n<p><em>Code Snippets</em></p>\n<ul>\n<li>Import All <code>.scss</code> files</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-js"><code class="prism-language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">"style-loader"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">"css-loader"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">"sass-loader"</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          includePaths<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"../node_modules/@patternfly/patternfly-next/"</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>Import select modules</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-js"><code class="prism-language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">"style-loader"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">"css-loader"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">"sass-loader"</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          includePaths<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"../node_modules/@patternfly/patternfly-next/layouts/Page/"</span><span class="token punctuation">,</span>\n            <span class="token string">"../node_modules/@patternfly/patternfly-next/layouts/Grid"</span><span class="token punctuation">,</span>\n            <span class="token string">"../node_modules/@patternfly/patternfly-next/components/Content"</span><span class="token punctuation">,</span>\n            <span class="token string">"../node_modules/@patternfly/patternfly-next/components/SecondaryNav"</span><span class="token punctuation">,</span>\n            <span class="token string">"../node_modules/@patternfly/patternfly-next/components/Button"</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h2 id="typography"><a href="#typography" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Typography</h2>\n<p>With PatternFly 4, we are switching from the Open Sans font family to Overpass. Additionally, we are updating the base font size from <code>12px</code> to <code>16px</code>, in order to increase readability and accessibility.</p>\n<p>Overpass can be utilized in two different ways:</p>\n<ol>\n<li>\n<p>Built into PatternFly 4</p>\n<ul>\n<li>By default, we include Overpass as part of the PatternFly 4 distributed CSS file. You do not need to do anything with your configuration to use this new font family.</li>\n</ul>\n</li>\n<li>\n<p>Used as a CDN</p>\n<ul>\n<li>If you wish to use the CDN for Overpass rather than the default approach, you will need to update the <code>utilities/variables.scss</code> file and build PatternFly 4 as part of your build process.</li>\n<li>To use the CDN vs the standard build, update the <code>utilities/variables.scss</code> file as follows:</li>\n</ul>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss">  <span class="token property"><span class="token variable">$pf-global--enable-font-overpass-cdn</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="icons"><a href="#icons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Icons</h2>\n<h3 id="patternfly-icons"><a href="#patternfly-icons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PatternFly Icons</h3>\n<p>TBD</p>\n<h3 id="font-awesome-5"><a href="#font-awesome-5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Font Awesome 5</h3>\n<p>Font Awesome 5 is now part of PatternFly 4, and we give you options for utilizing this icon library.</p>\n<h4 id="font-awesome-5-packaged-vs-cdn"><a href="#font-awesome-5-packaged-vs-cdn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Font Awesome 5 packaged vs CDN</h4>\n<p>As part of PatternFly 4, we give users the option to either use Font Awesome 5 as an included set (prebuilt into the CSS), or as a CDN reference.</p>\n<p>If you wish to use the CDN, you will need to build PatternFly 4 from source (<code>node_modules/@patternfly/patternfly-next/</code>) and update the <code>utilities/variables.scss</code> file as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss"><span class="token property"><span class="token variable">$pf-global--enable-fontawesome-cdn</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4 id="font-awesome-4--5"><a href="#font-awesome-4--5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Font Awesome 4 &#x26; 5</h4>\n<p>If you are currently using Font Awesome 4 and just want to use Font Awesome 5 immediately, you will need to add the Font Awesome scripts:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://use.fontawesome.com/releases/[VERSION]/js/all.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://use.fontawesome.com/releases/[VERSION]/js/v4-shims.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This replaces the bundled Font Awesome 5 files in PatternFly 4, so your configuration file (<code>utilities/variables.scss</code>) will need to be updated to remove Font Awesome 5.</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss"><span class="token property"><span class="token variable">$pf-global--disable-fontawesome</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4 id="font-awesome-5-tree-shaking"><a href="#font-awesome-5-tree-shaking" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Font Awesome 5 Tree Shaking</h4>\n<p>Additionally, Font Awesome 5 now provides the option for <a href="https://fontawesome.com/how-to-use/use-with-node-js#tree-shaking">tree shaking</a>. In order to utilize this option, you will need to build PatternFly 4 from source (<code>node_modules/@patternfly/patternfly-next/</code>), and update the <code>utilities/variables.scss</code> file accordingly.</p>\n<p>The updated <code>variables.scss</code> file should look as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss"><span class="token property"><span class="token variable">$pf-global--disable-fontawesome</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',fields:{path:"/upgrade-guide",type:"page",contentType:"page"}}},pathContext:{pagePath:"/upgrade-guide",type:"page",contentType:"page"}}}});
//# sourceMappingURL=path---upgrade-guide-dae10a7e06a204e11dc7.js.map