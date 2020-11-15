const div = dom.create('<div>new</div>');
console.log(div)
const div1 = dom.create(`<div>2</div>`)
const div2 = dom.create(`<div>新爹</div>`)
dom.append(div1,div)
dom.wrap(div2,div1)
dom.attr(test,'title','Hi')
const title = dom.attr(test,`title`)
console.log(title)
let b = dom.text(test)
console.log(b)
dom.style(test,{color:`lightpink`,border: `1px solid red`})
let c = dom.style(test,`color`)
dom.style(test,'font-size','30px')
dom.class.add(test,`red`)
dom.class.remove(test,'red')
console.log(dom.class.has(test,'red'))

const fn = ()=>{
    console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)
const findDiv = dom.find('#test')[0]
const find2 = dom.find('.test2')[0]
const findp = dom.find('p',find2)[0]

console.log(dom.siblings(e1))
console.log(dom.next(e2))
console.log(dom.previous(e2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n) =>{dom.style(n,'color','red')})
let tt = dom.find('.t3')[0]
console.log(dom.index(tt))