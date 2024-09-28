function dijkstraMatrix(matrix, startVertex) {
    const distances = Array(matrix.length).fill(Infinity)
    const visited = new Set()
    const priorityQueue = []

    distances[startVertex] = 0
    priorityQueue.push({ vertex: startVertex, distance: 0 })

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a.distance - b.distance)
        const { vertex: currentVertex, distance: currentDistance } = priorityQueue.shift()

        if (visited.has(currentVertex)) continue
        visited.add(currentVertex)

        for (let neighbor = 0; neighbor < matrix.length; neighbor++) {
            const edgeWeight = matrix[currentVertex][neighbor]
            if (edgeWeight > 0) {
                const newDistance = currentDistance + edgeWeight
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance
                    priorityQueue.push({ vertex: neighbor, distance: newDistance })
                }
            }
        }
    }

    return distances
}

const matrix = [
    [0, 10, 3, 0, 0, 1],
    [10, 0, 0, 8, 0, 6],
    [3, 0, 0, 0, 5, 4],
    [0, 8, 0, 0, 5, 2],
    [0, 0, 5, 5, 0, 6],
    [1, 11, 4, 2, 6, 0],
]

const startVertex = 2
const distances = dijkstraMatrix(matrix, startVertex)

distances.forEach((value, index) => console.log(`Відстань від вершини 3 до ${index + 1} = ${value}`))
