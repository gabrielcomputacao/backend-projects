
export function notFoundHandling(req,res,next){
    res.status(404).json({message: "Página não encontrada."})
}