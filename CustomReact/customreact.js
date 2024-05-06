function customRender(reactElement,container)
{
//     const domEelement=document.createElement(reactElement.type)

//     domEelement.innerHTML=reactElement.children
//     domEelement.setAttribute('href',reactElement.props.href)
//     domEelement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domEelement)


const domEelement=document.createElement(reactElement.type);
domEelement.innerHTML=reactElement.children
for(const prop in reactElement.props)
    {
        if(prop==='children')continue;

        domEelement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domEelement)

}

const reactElement={
    type:'a',
    props:{

        href:'https://google.com',
        target:'_blank'


    },
    children:'click me to visit google'
}


const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)