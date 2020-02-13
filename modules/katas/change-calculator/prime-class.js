export class Prime {

  calculate(number) {
    const arr = []
     for (let i=2; i <= number; i++){
         if(i == 2)
           arr.push(i)
         else if(number % i === 0 && i != number)
            arr.push(i)
     }
    return arr
  }

}
