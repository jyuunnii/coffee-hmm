export const letterValidation = (data: string) => {
    let Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
 
    if(!Korean.test(data)){
        return false;
    }
    return true;
}