const {
    breadthFirstArray
} = require(`./breadth_first_array`);

function treeSum(root) {
    if(!root){
        return 0;
    }
    let arr = breadthFirstArray(root);
    //console.log(arr)
    let sum = arr.reduce((a,b) =>{
        return a + b;
    })
    return sum;
}


module.exports = {
    treeSum
};
