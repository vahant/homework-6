//Առաջին խնդիր

function iseven(n){
    if(n>10){
        if((n % 10) % 2 == 0){
            return false
        }
        else{
            return iseven(Math.floor(n/10))
        }
    }
    else{
        return true
    }
}

// Երկրորդ խնդիր
function positive(arr){
    const newarr = []
    for(i=0; i < arr.length; i ++){
        if(arr[i]>0){
            newarr.push(arr[i])
        }
    }
    return newarr
}

function minimalvalue(x){
    if(x.length == 0){
        return -1
    }
    if (x.length == 1){
        return x[0]
    }
    return Math.min(x[0], minimalvalue(x.slice(1))) 
}

//console.log(minimalvalue(positive([ -1, -2, -4])))
//Երրորդ խնդիր
function finderror(arr){
    for(i=1; i<arr.length; i++){
        if(arr[i-1]>arr[i]){
            return i
        }
    }
    return -1
}

//console.log(finderror([-9, -4, 3, 4, 12,  5]))
//Չորրորդ խնդիր
function removefirst(arr){
    if(arr.length == 1){
        return []
    }
    return arr.slice(1)
}

//console.log(removefirst([6, 78, 'n', 0, 1]))

//Հինգերորդ խնդիր
function nest(arr){
    const newarr = []
    for(i = 0; i <arr.length; i++){
        if(Array.isArray(arr[i])){
            newarr.push(...nest(arr[i]))
        }
        else{
            newarr.push(arr[i])
        }
    }
    return newarr
}

//console.log(nest([1, 2, [4, 5, [3, 5]]]))
//Վեցերրորդ խնդիր
function rotate(arr, n){
    if(n == 0){
        return arr
    }else{
        const newarr = arr.slice(1)
        rotate(newarr.push(arr[0]),(n-1))
    }
}


//console.log(rotate([1, 2, 3, 4, 5, 6], 2))
//Յոթերորդ խնդիր
function numsum(num){
    if(Math.floor(num / 10) == 0){
        return num
    }
    return numsum(num%10 + numsum(Math.floor(num/10)))
}

// console.log(numsum(193))
//Վերջին երեք խնդիրները ինտերնետից եմ նայել
const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject 
    }
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
}

function debounce(func, time){
    let timeout;
   return function(){
    const fn = () =>{func.apply(this, arguments)}
    clearTimeout(timeout)
    timeout = setTimeout(fn, time)
   }
}

function throttle(func, time){
    let x;
    return function(){
        if(x == "true")
        func.apply(this, arguments)
        setTimeout(()=> x = "false", time)
    }
}