(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{243:function(t,s,a){"use strict";a.r(s);var r={name:"NewsList.vue",props:{location:String},computed:{articles(){return this.$site.pages.filter(t=>t.path.startsWith("/noticias/")&&!t.frontmatter.blog_index).sort((t,s)=>new Date(s.frontmatter.date)-new Date(t.frontmatter.date))}},methods:{formatDate(t){return console.log(this.location),new Date(t).toLocaleDateString("es-mx",{year:"numeric",month:"long",day:"numeric"})}}},i=a(14),e=Object(i.a)(r,(function(){var t=this,s=t._self._c;return s("div",[s("h1",{staticClass:"text-2xl font-bold pb-4"},[t._v("\n    Noticias actuales\n  ")]),t._v(" "),s("div",{staticClass:"grid sm:grid-rows-3 grid-cols-1 w-full"},[s("div",{staticClass:"grid pb-4 sm:grid-cols-2 sm:row-span-1"},[s("div",{staticClass:"pl-4"},[s("span",{staticClass:"text-xl font-bold"},[s("a",{attrs:{href:t.articles[0].path}},[t._v("\n          "+t._s(t.articles[0].frontmatter.title)+"\n          ")])]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"italic text-xs"},[t._v("\n          "+t._s(t.formatDate(t.articles[0].frontmatter.date))+"\n        ")]),t._v(" "),s("p",{staticClass:"pt-3 invisible sm:visible"},[t._v("\n          "+t._s(t.articles[0].frontmatter.description)+"\n          "),s("br"),t._v(" "),s("router-link",{attrs:{to:t.articles[0].path}},[t._v("Read more")])],1)]),t._v(" "),s("div",{staticClass:"sm:order-first"},[s("a",{attrs:{href:t.articles[0].path}},[s("img",{attrs:{alt:t.articles[0].frontmatter.title,src:t.location+t.articles[0].frontmatter.imageUrl}})])])]),t._v(" "),s("div",{staticClass:"grid sm:grid-cols-3 sm:row-span-2"},t._l(3,(function(a){return s("div",{staticClass:"px-4"},[s("span",{staticClass:"text-xl font-bold"},[s("a",{attrs:{href:t.articles[a].path}},[t._v("\n            "+t._s(t.articles[a].frontmatter.title)+"\n          ")])]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"italic text-xs"},[t._v("\n          "+t._s(t.formatDate(t.articles[a].frontmatter.date))+"\n        ")]),t._v(" "),s("div",{staticClass:"pt-3"},[s("a",{attrs:{href:t.articles[a].path}},[s("img",{attrs:{alt:t.articles[a].frontmatter.title,src:t.location+t.articles[a].frontmatter.imageUrl}})])]),t._v(" "),s("div",{staticClass:"invisible sm:visible"},[t._v("\n          "+t._s(t.articles[a].frontmatter.description)+"\n          "),s("br"),t._v(" "),s("router-link",{attrs:{to:t.articles[a].path}},[t._v("Read more")])],1)])})),0)])])}),[],!1,null,null,null);s.default=e.exports}}]);