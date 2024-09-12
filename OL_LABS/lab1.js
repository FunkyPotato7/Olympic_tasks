const numbers = []

// генерування 8-ми цифрових чисел
for (let i = 0; i < 100; i++) {
  numbers.push(Math.floor(Math.random() * 90000000 + 10000000))
}

const findDivisors = (num) => {
  const divisors = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i)
    }
  }
  return divisors
}

const primeFactors = (num) => {
  const factors = []
  let r = 2
  let c = num

  while (c !== 1) {
    if (c % r === 0) {
      factors.push(r)
      c = c / r
    } else {
      r++
    }
  }
  return factors
}

const euclid = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const commonDenominator = (m) => {
  let executionTime = 0
  let start = Date.now()
  numbers.forEach((number, i) => {
    switch (m) {
      case 1:
        if (typeof number[i + 1] !== 'undefined') {
          const d1 = findDivisors(number)
          const d2 = findDivisors(numbers[i + 1])

          const common = d1.filter(value => d2.includes(value))

          const max = Math.max(...common)

          console.log(`Максимальний дільник чисел ${number} і ${numbers[i + 1]}: ${max}`)
        }
        return
      case 2:
        if (typeof numbers[i + 1] !== 'undefined') {
          const arr1 = primeFactors(number)
          const arr2 = primeFactors(numbers[i + 1])

          const commonFactors = []
          const copyArr2 = [...arr2]

          arr1.forEach(factor => {
            const index = copyArr2.indexOf(factor)
            if (index !== -1) {
              commonFactors.push(factor)
              copyArr2.splice(index, 1)
            }
          })

          console.log(`Максимальний дільник чисел ${number} і ${numbers[i + 1]} : ${commonFactors.reduce((product, factor) => product * factor, 1)}`)
        }
        return
      case 3:
        if (typeof numbers[i + 1] !== 'undefined') {
          const gcd = euclid(number, [numbers[i + 1]])
          console.log(`Максимальний дільник чисел ${number} і ${numbers[i + 1]} за методом Евкліда: ${gcd}`)
        }
        return
    }
  })
  executionTime = (Date.now() - start) / 1000
  console.log(`Час виконання (${m}): `, executionTime)
}

commonDenominator(1)
commonDenominator(2)
commonDenominator(3)
