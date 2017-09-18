module.exports = function zeros(expression) {
  let arr = expression.split('*')
  let re = /!/g
  let tmp = []
  let prod = 1
  let count = 0

  function multiply(first, second) {
    let a = first.split("").reverse()
    let b = second.split("").reverse()
    let arr = []
  
    for(let i=0; i<a.length; i++) {
      let tmp = []
      for(let k=0; k<i; k++) {
        tmp.push(0)
      }
      for(let j=0; j<b.length; j++) {
        tmp.push(a[i]*b[j])
      }
      arr.push(tmp)
    }
  
    arr.reverse()
  
    for(let i=1; i<arr.length; i++) {
      for(let j=0; j<arr[i].length; j++) {
        arr[0][j] += arr[i][j]
      }
    }
  
    arr = arr[0]
  
    for(let i=0; i<arr.length; i++) {
      let tmp = arr[i]
      if(tmp > 9) {
        if(i == arr.length-1) {
          arr[i] = tmp % 10
          arr.push((tmp - tmp % 10) / 10)
        }
        else {
          arr[i] = tmp % 10
          arr[i+1] += (tmp - tmp % 10) / 10
        }
      }
    }
  
    return arr.reverse().join('')
  }

  function factorial(n) {
    return (n != 1) ? multiply(String(n), String(factorial(n - 1))) : String(1)
  }
  function double_factorial(n) {
    if(n % 2) {
      return (n != 1) ? multiply(String(n), String(double_factorial(n - 2))) : String(1)
    }
    else {
      return (n != 2) ? multiply(String(n), String(double_factorial(n - 2))) : String(2)
    }
  }

  for(let i=0; i<arr.length; i++) {
    if(arr[i].match(re).length == 1) {
      tmp.push(factorial(parseInt(arr[i])))
    }
    if(arr[i].match(re).length == 2) {
      tmp.push(double_factorial(parseInt(arr[i])))
    }
  }

  for(let i=0; i<tmp.length; i++) {
    prod = multiply(String(prod), String(tmp[i]))
  }

  prod = prod.split('').reverse()

  for(let i=0; i<prod.length; i++) {
    if(prod[i] == '0') {
      count++
    }
    else {
      break;
    }
  }

  return count
}
