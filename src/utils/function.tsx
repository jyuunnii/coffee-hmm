export const letterValidation = (data: string) => {
    let Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
 
    if(!Korean.test(data)){
        return false;
    }
    return true;
}

export const slidePosition = (index: number, current: number) => {
    const CURRENT = 40;
    const TOP = -260;
    const BOTTOM = 400;
    const MOST_TOP = TOP*2;
    const MOST_BOTTOM = BOTTOM*2;
    const currentCafeIndex = current;

    if(currentCafeIndex > 0){
        if(index === currentCafeIndex){
            return `${CURRENT}px`;
        }else if(index === currentCafeIndex - 1){
            return `${TOP}px`;
        }else if(index === currentCafeIndex + 1){
            return `${BOTTOM}px`;
        }else { // out of current displayed 3
            if(index < currentCafeIndex){
                return `${MOST_TOP}px`;
            }else{
                return `${MOST_BOTTOM}px`;
            }
        }
    }else{
        if(index === 0){
            return `${CURRENT}px`;
        }
        else if(index === 1){
            return `${BOTTOM}px`;
        }
        return `${MOST_BOTTOM}px`; // out of initail displayed 2
    }        
}
