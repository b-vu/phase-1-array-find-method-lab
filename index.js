// code your solution here
const superbowlWin = array => {
    const result = array.find(item => item.result === "W");

    if(!result){
        return result;
    }
    
    return result.year;
}