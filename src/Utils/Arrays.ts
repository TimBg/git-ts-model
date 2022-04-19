export const removeElementFromArray = <T,> (array: T[], el: T): void => {
    const indexOfEl: number = array.indexOf(el);
    
    if (indexOfEl > -1) {
        array.splice(indexOfEl, 1); 
    }
}
