window.dom = {
    create(string) {
        const container = document.createElement('template'); //template可以容纳几乎任何标签
        container.innerHTML = string.trim();
        return container.content.children[0];
    },
    after(newNode,node){
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    before(newNode,node){
        node.parentNode.insertBefore(newNode, node)
    },
    append(node,parent){
        parent.appendChild(node)
    },
    wrap(newParent,node){
        dom.before(newParent,node);
        dom.append(node,newParent);
    },
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node){
        const {childNodes} = node;
        const array = [];
        for(let i=0; i<childNodes.length; i+=0){
            array.push(dom.remove(childNodes[i]))
        }
        return array;
    },
    attr(node,name,value){
        if(arguments.length === 3){
        node.setAttribute(name, value);
        }
        else if(arguments.length === 2){
        return node.getAttribute(name);
        }
    },
    text(node,string){
        if(arguments.length === 2){
            if(`innerText` in node){
                node.innerText = string; //ie
            }
            else{
                node.textContent = string;
            } 
        }
        else if(arguments.length === 1){
            if(`innerText` in node){
                return node.innerText; //ie
            }
            else{
                return node.textContent;
            } 
        }
    },
    html(node,string){
        if(arguments.length === 2){
            node.innerHTML = string;
        }
        else if(arguments.length === 1){
            return node.innerHTML
        }
    },
    style(node, name, value){
        if(arguments.length === 3){
            node.style[name] = value;
        }
        else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }
            else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
    },
    class: {
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    children(node){
        return node.children
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    next(node){
        let x = node.nextSibling
        while(x.nodeType === 3){
            x = x.nextSibling;
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x.nodeType === 3){
            x = x.previousSibling;
        }
        return x
    },
    each(nodeList,fn){
        for(let i = 0; i<nodeList.length; i++){
            fn(nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        for(let i = 0; i<list.length; i++){
            if(list[i]===node){
                return i;
            }
        }
    }
}