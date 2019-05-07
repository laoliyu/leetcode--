// 用来判断数组，并且帮它扁平化
function flatten(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    // 递归 将多层数组的点评化分为多个一维数组跟旁边的数字concat 小问题，退出条件没有数组了
    const flattenArr = arr.reduce((prev, cur) => {
       return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
    return flattenArr;
}
const arr = [1,2,3,[2,4]];
console.log(flatten(arr));