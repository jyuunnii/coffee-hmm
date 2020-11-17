export const letterValidation = (data: string) => {
    let Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
 
    if(!Korean.test(data)){
        return false;
    }
    return true;
}

export const onImageLoad = (setReady:(type: boolean) => void) => {
    setReady(true);
};

export const slidePosition = (index: number, currentIndex: number, currentPos: number, topPos: number, bottomPos: number) => {
    const CURRENT = currentPos;
    const TOP = topPos;
    const BOTTOM = bottomPos;
    const MOST_TOP = TOP*2;
    const MOST_BOTTOM = BOTTOM*2;
    const currentCafeIndex = currentIndex;

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

export const moveUpOrLeft = (current: number, setIndex:(index: number)=>void) => {
    if(current > 0){
        setIndex(current - 1);
    }
}

export const moveDownOrRight = (current: number, setIndex:(index: number)=>void, totalLength: number) => {
    if(current < totalLength){
        setIndex(current + 1);
    }
}

export const slideImageSize = (index: number, current: number) => {
    if(index === current){
        return true;
    }else{
        return false;
    }
}