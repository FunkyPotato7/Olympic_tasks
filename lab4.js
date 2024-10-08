function bubbleSort(arr) {
    let executionTime = 0
    let start = Date.now()
    let n = arr.length
    let swapped

    do {
        swapped = false
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
        n--
    } while (swapped)
    executionTime = (Date.now() - start) / 1000
    console.log(`Час виконання: `, executionTime)
    return arr
}

function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

function insert(root, data) {
    if (root === null) {
        return new Node(data)
    }

    if (data < root.data) {
        root.left = insert(root.left, data)
    } else {
        root.right = insert(root.right, data)
    }

    return root
}

function inOrderTraversal(root, result = []) {
    if (!root) return result;
    inOrderTraversal(root.left, result)
    result.push(root.data)
    inOrderTraversal(root.right, result)
    return result
}

function treeSort(arr) {
    let executionTime = 0
    let start = Date.now()
    if (arr.length === 0) return arr

    let root = null

    for (let i = 0; i < arr.length; i++) {
        root = insert(root, arr[i])
    }

    executionTime = (Date.now() - start) / 1000
    console.log(`Час виконання: `, executionTime)
    return inOrderTraversal(root)
}

function heapify(arr, length, i) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, length, largest);
    }
}

function heapSort(arr) {
    let executionTime = 0
    let start = Date.now()
    let length = arr.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    for (let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }

    executionTime = (Date.now() - start) / 1000
    console.log(`Час виконання: `, executionTime)
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = []

for (let i = 0; i < 1000; i++) {
    arr.push(Math.floor(Math.random() * 90000000 + 10000000))
}
console.log("Невідсортований масив: ", arr)

const bubbleSortArr = bubbleSort(arr)
console.log("Відсортований масив бульбашкою: ", bubbleSortArr)

const treeSortArr = treeSort(arr)
console.log("Відсортований масив деревом: ", treeSortArr)

const piramidSortedArr = heapSort(arr)
console.log("Відсортований масив пірамідою: ", piramidSortedArr)

const quickSortArr = quickSort(arr)
console.log("Відсортований масив швидким сортуванням: ", quickSortArr)