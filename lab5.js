// 1
let str = 'champion'
str = str.split('').sort((a, b) => a.localeCompare(b)).join('')
console.log('Task 1: ')
console.log('Start string:', str)
console.log('Result:', str[0].toUpperCase() + str.slice(1))

// 2
const str2 = 'so2lkyns11saleup8totendoll0ars'
const check = 'slonyk'

const checkWord = (str, word) => {
    return word.split('').reduce((object, char) => {
        object[char] = str?.split('').reduce((acc, charStr) => {
            if(charStr.toLowerCase() === char.toLowerCase()) acc += 1;
                return acc
        }, 0);
        return object
    }, {})
}

console.log('\nTask 2: ')
console.log(`Words '${check}' in '${str2}':`, Object.values(checkWord(str2, check)).sort()[0]);