(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{250:function(t,a,s){"use strict";s.r(a);var e=s(222),n=(s(248),{props:["page","index"],methods:{resovlePostDate:function(t){return t.substr(0,10)}}}),i=s(3),r=Object(i.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("article",{staticClass:"post-158 post type-post status-publish format-quote hentry category-creativity post_format-post-format-quote dwtl normal show",class:{"dwtl-left":t.index%2==0,"dwtl-right":t.index%2==1},attrs:{"data-year":"2017","data-month":"January","data-page":"1"}},[s("div",{staticClass:"entry-inner"},[t.page.frontmatter.tag?s("div",{staticClass:"entry-format"},t._l(t.page.frontmatter.tag,(function(a){return s("span",[t._v(t._s(a)+"  ")])})),0):t._e(),t._v(" "),s("header",[s("h2",{staticClass:"entry-title"},[s("NavLink",{attrs:{link:t.page.path}},[t._v(t._s(t.page.title))])],1),t._v(" "),s("div",{staticClass:"entry-meta"},[s("span",{staticClass:"entry-author"},[s("span",{staticClass:"byline author vcard"},[t._v("\n                        "+t._s(t.page.frontmatter.author)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"sep"},[t._v("•")]),t._v(" "),s("span",{staticClass:"entry-author"},[s("span",{staticClass:"byline author vcard"},[t._v("\n                        "+t._s(t.page.frontmatter.location)+"\n                    ")])]),t._v(" "),s("span",{staticClass:"sep"},[t._v("•")]),t._v(" "),s("span",{staticClass:"entry-date"},[t._v(t._s(t.resovlePostDate(t.page.frontmatter.date)))])])]),t._v(" "),s("div",{staticClass:"entry-content"},[s("p",[t._v("\n                "+t._s(t.page.frontmatter.summary||t.page.summary)),s("br"),t._v(" "),s("span",{staticClass:"more-link"},[s("NavLink",{attrs:{link:t.page.path}},[t._v("更多")])],1)])])])])}),[],!1,null,null,null).exports,o={},l=Object(i.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"banner cover",attrs:{role:"banner"}},[a("div",{staticClass:"header-inner"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"page-title"},[this._v("\n                四季如歌\n            ")]),this._v(" "),a("h2",{staticClass:"page-description"},[this._v("春风之柔和，夏花之绚烂，秋叶之静美，冬雪之纯净。轮回之中，微笑在四季中甜甜绽放。")])])])])}],!1,null,null,null).exports,c=s(220),p={components:{NavigationIcon:e.b,ClockIcon:e.a,Article:r,Banner:l},data:function(){return{paginationComponent:null,isLoading:!1,pages:[],curPage:0,isEnd:!1}},mounted:function(){this.loadMore()},computed:{},methods:{loadMore:function(){var t=this;this.isLoading||this.isEnd||(this.isLoading=!0,this.$pagination._currentPage=this.$pagination._paginationPages[this.curPage++],Object(c.setTimeout)((function(){t.isLoading=!1,t.pages=t.pages.concat(t.$pagination.pages),console.log(t.$pagination._paginationPages,t.curPage),t.$pagination._paginationPages.length<=t.curPage&&(t.isEnd=!0)}),1e3))},resovlePostDate:function(t){return t}}},d=Object(i.a)(p,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Banner"),t._v(" "),s("div",{staticClass:"wrap",staticStyle:{"min-height":"341px"}},[s("div",{staticClass:"container",attrs:{role:"document"}},[s("div",{staticClass:"content row"},[s("main",{staticClass:"main col-sm-12",attrs:{role:"main"}},[s("div",{staticClass:"timeline two-col"},[t._m(0),t._v(" "),s("div",{staticClass:"timeline-pale dwtl full remove-time-anchor show",attrs:{"data-page":"1"}}),t._v(" "),t._l(t.pages,(function(t,a){return s("Article",{attrs:{page:t,index:a}})})),t._v(" "),s("div",{attrs:{id:"infscr-loading"}},[s("div",{staticClass:"show-more",on:{click:function(a){return t.loadMore()}}},[t.isLoading?t._e():s("span",[t.isEnd?t._e():s("span",[t._v("More")]),t._v(" "),t.isEnd?s("span",[t._v("End")]):t._e()]),t._v(" "),t.isLoading?s("img",{attrs:{alt:"Loading...",src:"http://demo.designwall.com/dw-timeline-pro/wp-content/themes/dw-timeline-pro-new/assets/img/loading-flat.gif"}}):t._e()])]),t._v(" "),t._m(1)],2)])])]),t._v(" "),s("div",{staticClass:"dw_timeline_footer_space"})])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"timeline-pale line-year year-point dwtl full show",attrs:{"data-year":"2017"}},[a("span",{staticClass:"bubble"},[this._v("2019")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"post-nav"},[a("ul",{staticClass:"pager"},[a("li",{staticClass:"previous"},[a("a",{attrs:{href:"http://demo.designwall.com/dw-timeline-pro/page/2/"}},[this._v("← Older posts")])]),this._v(" "),a("li",{staticClass:"next"})])])}],!1,null,null,null);a.default=d.exports}}]);