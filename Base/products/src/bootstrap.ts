import { fakerPT_BR } from '@faker-js/faker'


const mount = (el?: Element) => {
  let products = ''
  
  for(let i = 0; i < 10; i++) {
    const name = fakerPT_BR.commerce.productName()
    products += `<div>${name}</div>`
  }

  if(el) el.innerHTML = products
}

/* Situação 1 - Development de forma isolada
  Contexto
    Utiliza index.html local
    index.html possui com certeza o elemento com o ID "dev-products"

  Ações
    Renderizar de forma imediata o elemento no app
*/
if(process.env.NODE_ENV === 'development') { 
  const element = document.querySelector("#dev-products")
  if(element) mount(element)
}


/* Situação 2 - Development/Production por app terceiro
  Contexto
    Elemento com ID "dev-products" pode não existir

  Ações
    Não renderizar de forma imediata
*/
export { mount }