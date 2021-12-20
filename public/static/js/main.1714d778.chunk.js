(this["webpackJsonponline-store-front"]=this["webpackJsonponline-store-front"]||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(23),n=a.n(r),i=(a(32),a(6)),o=a(7),l=a.n(o),d=a(5),u=a(14),j=a(24),m=a(25),b=a(27),h=a(26),x=(a(34),a(8)),O=a.n(x),p=a(12),f=a(2),v=s.a.createContext({}),g=a(0),N=function(e){return function(t){return Object(g.jsx)(v.Consumer,{children:function(a){return Object(g.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{context:a}))}})}},C=function(e){var t=e.cartItem,a=e.cartKey,c=t.product,s=t.amount;return Object(g.jsx)("div",{className:" column is-half",children:Object(g.jsx)("div",{className:"box",children:Object(g.jsxs)("div",{className:"media",children:[Object(g.jsx)("div",{className:"media-left",children:Object(g.jsx)("figure",{className:"image is-64x64",children:Object(g.jsx)("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:c.shortDesc})})}),Object(g.jsxs)("div",{className:"media-content",children:[Object(g.jsxs)("b",{style:{textTransform:"capitalize"},children:[c.name," ",Object(g.jsxs)("span",{className:"tag is-primary",children:["$",c.price]})]}),Object(g.jsx)("div",{children:c.shortDesc}),Object(g.jsx)("small",{children:"".concat(s," in cart")})]}),Object(g.jsx)("div",{className:"media-right",onClick:function(){return e.removeFromCart(a)},children:Object(g.jsx)("span",{className:"delete is-large"})})]})})})},S=function(e){var t=e.message;return null===t?null:Object(g.jsx)("div",{className:"error",children:t})},k=N((function(e){var t=e.context.cart,a=Object.keys(t||{});return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"hero is-primary",children:Object(g.jsx)("div",{className:"hero-body container",children:Object(g.jsx)("h4",{className:"title",children:"My Cart"})})}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(S,{message:e.context.notify}),a.length?Object(g.jsxs)("div",{className:"column columns is-multiline",children:[a.map((function(a){return Object(g.jsx)(C,{cartKey:a,cartItem:t[a],removeFromCart:e.context.removeFromCart},a)})),Object(g.jsxs)("div",{className:"column is-12 is-clearfix",children:[Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"is-pulled-right",children:[Object(g.jsx)("button",{onClick:e.context.clearCart,className:"button is-warning ",children:"Clear cart"})," ",Object(g.jsx)("button",{className:"button is-success",onClick:e.context.checkout,children:"Checkout"})]})]})]}):Object(g.jsx)("div",{className:"column"})]}),Object(g.jsxs)("div",{className:"title has-text-grey-light",children:[Object(g.jsx)(S,{message:e.context.notification})," "]})]})})),y=function(e){var t=e.product;return Object(g.jsx)("div",{className:" column is-half",children:Object(g.jsx)("div",{className:"box",children:Object(g.jsxs)("div",{className:"media",children:[Object(g.jsx)("div",{className:"media-left",children:Object(g.jsx)("figure",{className:"image is-64x64",children:Object(g.jsx)("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:t.shortDesc})})}),Object(g.jsxs)("div",{className:"media-content",children:[Object(g.jsxs)("b",{style:{textTransform:"capitalize"},children:[t.name," ",Object(g.jsxs)("span",{className:"tag is-black",children:["$",t.price]})]}),Object(g.jsx)("div",{}),t.stock>0?Object(g.jsx)("small",{children:t.stock+" Available"}):Object(g.jsx)("small",{className:"has-text-danger",children:"Out Of Stock"}),Object(g.jsx)("div",{className:"is-clearfix",children:t.stock>0?Object(g.jsx)("button",{className:"button is-small is-outlined is-primary   is-pulled-right",onClick:function(){return e.addToCart({id:t.name,product:t,amount:1})},children:"Add to Cart"}):""})]})]})})})},T=N((function(e){var t=e.context.products;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"hero is-danger",children:Object(g.jsx)("div",{className:"hero-body container",children:Object(g.jsx)("h4",{className:"title",children:"Our Products"})})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"column columns is-multiline",children:t&&t.length?t.map((function(t,a){return Object(g.jsx)(y,{product:t,addToCart:e.context.addToCart},a)})):Object(g.jsx)("div",{className:"column",children:Object(g.jsx)("span",{className:"title has-text-grey-light",children:"No products found!"})})})})]})})),w=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(j.a)(this,a),(c=t.call(this,e)).addToCart=function(e){var t=c.state.cart;t[e.id]?t[e.id].amount+=e.amount:t[e.id]=e,t[e.id].amount>t[e.id].product.stock&&(t[e.id].amount=t[e.id].product.stock),localStorage.setItem("cart",JSON.stringify(t)),c.setState({cart:t})},c.removeFromCart=function(e){var t=c.state.cart;delete t[e],localStorage.setItem("cart",JSON.stringify(t)),c.setState({cart:t})},c.clearCart=function(){localStorage.removeItem("cart"),c.setState({cart:{}})},c.checkout=Object(u.a)(l.a.mark((function e(){var t,a,s,r,n,i,o,u,j,m,b,h,x,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.state.cart,a=[],s=0,r=Object.entries(t);s<r.length;s++)n=Object(d.a)(r[s],2),n[0],i=n[1],o=i.product.id,u=i.product.name,j=i.product.price,m=i.amount,a.push({id:o,name:u,amount:m,price:j});return b={products:a},e.prev=4,e.next=7,O.a.post("/api/orders",b);case 7:if(h=e.sent,console.log("post response data from or orderservise to front",h.data),"OK"!==h.data.status){e.next=21;break}return console.log("POST status OK getting products from inventory.."),e.prev=11,e.next=14,O.a.get("/api/products").then((function(e){console.log("response data, producst from invenrory after order",e.data),c.setState({products:e.data}),console.log("state after ordering products",c.state.products),c.clearCart(),c.setState({notification:"Thank you for your order,  Order sent succefully"}),setTimeout((function(){c.setState({notification:null})}),5e3)}));case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(11),console.log("something went wrong with getting products state after failed order"),c.setState({notification:"Something went wrong, please refresh the page"}),setTimeout((function(){c.setState({notification:null})}),5e3);case 21:if("NOT_OK"!==h.data.status){e.next=36;break}return x=h.data.products.filter((function(e){return"NOT_OK"===e.status})),p=x.map((function(e){return e.name})),c.setState({notification:"OUT OF STOCK:  ".concat(p,"   Please replace the order!!!!")}),setTimeout((function(){c.setState({notification:null})}),15e3),e.prev=26,e.next=29,O.a.get("/api/products").then((function(e){c.setState({products:e.data}),c.clearCart()}));case 29:return e.abrupt("return",h.data);case 32:e.prev=32,e.t1=e.catch(26),c.setState({notification:"Something went wrong, please refresh the page"}),setTimeout((function(){c.setState({notification:null})}),5e3);case 36:return console.log("reeeeee",h.data),e.abrupt("return",h.data);case 40:e.prev=40,e.t2=e.catch(4),c.setState({notification:"Something went wrong. Please replace the order!."}),setTimeout((function(){c.setState({notification:null})}),5e3);case 44:case"end":return e.stop()}}),e,null,[[4,40],[11,16],[26,32]])}))),c.state={cart:{},products:[],notification:""},c}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("cart"),e.next=3,O.a.get("/api/products").then((function(e){var c=e.data;t=t?JSON.parse(t):{},a.setState({products:c,cart:t})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsx)(v.Provider,{value:Object(i.a)(Object(i.a)({},this.state),{},{removeFromCart:this.removeFromCart,addToCart:this.addToCart,clearCart:this.clearCart,checkout:this.checkout,notifify:this.state.notification}),children:Object(g.jsx)(p.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("nav",{className:"navbar container",role:"navigation","aria-label":"main navigation",children:[Object(g.jsxs)("div",{className:"navbar-brand",children:[Object(g.jsx)("b",{className:"navbar-item is-size-4",children:"Online store"}),Object(g.jsxs)("label",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(t){t.preventDefault(),e.setState({showMenu:!e.state.showMenu})},children:[Object(g.jsx)("span",{"aria-hidden":"true"}),Object(g.jsx)("span",{"aria-hidden":"true"}),Object(g.jsx)("span",{"aria-hidden":"true"})]})]}),Object(g.jsxs)("div",{className:"navbar-menu",children:[Object(g.jsx)(p.b,{to:"/",className:"navbar-item",children:"Products"}),Object(g.jsxs)(p.b,{to:"/cart",className:"navbar-item",children:["Cart",Object(g.jsx)("span",{className:"tag is-primary",style:{marginLeft:"5px"},children:Object.keys(this.state.cart).length})]})]})]}),Object(g.jsxs)(f.c,{children:[Object(g.jsx)(f.a,{exact:!0,path:"/",element:Object(g.jsx)(T,{})}),Object(g.jsx)(f.a,{exact:!0,path:"/cart",element:Object(g.jsx)(k,{})})]})]})})})}}]),a}(c.Component);a(54);n.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.1714d778.chunk.js.map