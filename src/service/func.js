const crescente = (object) =>{
    object.sort((a, b) => a.dataEnvio - b.dataEnvio) 
}

const descresente = (object)=> {
    object.sort((a, b) => b.dataEnvio - a.dataEnvio) 

}
const sugestao = (object, sugestao)=> {
    //só ha dois tipos de sugestões => Novo produto, Melhorias
    const object2 = object
    .map((e, index) => ({ name: e.name, index })) // Mapear para incluir o nome e o índice original
    .filter(({ tipoSugestao }) => tipoSugestao.includes('sugestao')) // Filtrar os objetos que contêm "banana" no nome
    .map(({ index }) => index);

}

module.exports ={

    crescente,
    descresente,
    sugestao


}