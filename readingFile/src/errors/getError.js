
export function catchErrors(erro){
    if(erro.code === 'ENOENT'){
        throw new Error('Não encontrou o arquivo')
    }else{
       throw new Error('Error')
    }
}