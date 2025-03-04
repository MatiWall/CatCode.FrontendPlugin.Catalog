import { useEntity } from "../../contexts";


function isKind(kind: string){

    const entity = useEntity();

    if (kind === entity.kind){
        return true
    }

    return false
}


export {
    isKind    
}