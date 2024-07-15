import { fakerPT_BR } from '@faker-js/faker'

const mount = (el?: Element) => {  
  if(el) el.innerHTML = `You have ${fakerPT_BR.number.int({max: 100})} items!`
}

/* Situação 1 - Development de forma isolada
  Contexto
    Utiliza index.html local
    index.html possui com certeza o elemento com o ID "dev-products"

  Ações
    Renderizar de forma imediata o elemento no app
*/
if(process.env.NODE_ENV === 'development') { 
  const element = document.querySelector("#dev-cart")
  if(element) mount(element)
}


/* Situação 2 - Development/Production por app terceiro
  Contexto
    Elemento com ID "dev-products" pode não existir

  Ações
    Não renderizar de forma imediata
*/
export { mount }