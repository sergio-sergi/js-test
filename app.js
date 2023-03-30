const head = document.getElementById('hello')
const head2 = document.querySelector('h2')
const head3 = head2.nextElementSibling.querySelector('a')
function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.textAlign = 'center'
    node.style.color = color
    node.style.padding = '2rem'
    node.style.backgroundColor = 'black'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize)
        node.style.fontSize = fontSize
}

setTimeout(()=>{
    addStylesTo(head, 'Привет')
}, 1500)

setTimeout(()=>{
    addStylesTo(head2, 'дорогой', 'green')
}, 2500)
setTimeout(()=>{
    addStylesTo(head3, 'друг', 'blue', '2rem')
}, 3500)

function recurcsiveApplicationToChildsOf(node) {
    for (let childNode of node.childNodes) {
        childNode.textContent = ''
        // childNode.style.padding = '0rem'
        // childNode.style.backgroundColor = 'white'
        if(childNode.hasChildNodes()){
            recurcsiveApplicationToChildsOf(childNode)
        }
    }
}
// setTimeout(()=>{
//    recurcsiveApplicationToChildsOf(document.body)
// }, 5000)

head.onclick = ()=>{
    if(head.style.backgroundColor === 'black'){
        head.style.color = 'black'
        head.style.backgroundColor = 'white'
    }
    else {
        head.style.color = 'red'
        head.style.backgroundColor = 'black'
    }
}