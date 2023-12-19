const {body} : {body: HTMLElement} = document;

function handleData({nome, preco}: {nome:string; preco?: number}){
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "Notebook",
})

function handleClick({currentTarget, pageX}: {currentTarget: EventTarget | null; pageX: number}) {
  console.log(currentTarget, pageX)
}

document.documentElement.addEventListener("click", handleClick);