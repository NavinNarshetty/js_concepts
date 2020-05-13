/**
 * 
 * @param {string} long //long string of sentance 
 * @param {string} short // find a occurance of given in str in long str sentance
 */

 // TIME COMPLEXITY o(N*M)

function stringSearch(long , short){
    let count =0;
    for(let i=0;i<long.length;i++){
        for(let j=0;j<short.length;j++){
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length -1){
                count++
            }
        }
    }
    return count;

}


stringSearch('abcdef ghighabcdghi' , 'ghi')