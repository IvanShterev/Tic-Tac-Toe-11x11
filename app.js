
const playerForm = document.querySelector('.player-form')
const playerToInputName = document.querySelector('.player-form p')
const nameInput = document.getElementById('name-input')
const submitButton = document.querySelector('.player-form button')
let player1 = ''
let player2 = ''
const container = document.querySelector('.container')
const gridElement = document.querySelector('.grid')
const playerTurn = document.querySelector('.container p')
const restartButton = document.getElementById('restart')

let flag = 0
let firstIndex = -99
let secondIndex = -99
let grid = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

function findCell(firstIndex, secondIndex){
    const allCells = document.querySelectorAll('.grid .cell')
    let cellId = `${firstIndex}-${secondIndex}`
    let neededCell = Array.from(allCells).find(cell => cell.id == cellId)
    return neededCell
}

function checkWinner(){
    let ifWinner = false
    let winner = ''
    //vertical up
    if(firstIndex - 4 >= 0){
        if(grid[firstIndex][secondIndex] == grid[firstIndex - 1][secondIndex] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 2][secondIndex] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 3][secondIndex] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 4][secondIndex]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex - 1, secondIndex)
                let thirdNeededCell = findCell(firstIndex - 2, secondIndex)
                let fourthNeededCell = findCell(firstIndex - 3, secondIndex)
                let fifthNeededCell = findCell(firstIndex - 4, secondIndex)
                firstNeededCell.classList.add('vertical-up')
                secondNeededCell.classList.add('vertical-up')
                thirdNeededCell.classList.add('vertical-up')
                fourthNeededCell.classList.add('vertical-up')
                fifthNeededCell.classList.add('vertical-up')
            }
    }
    //vertical down
    if(firstIndex + 4 <= 10){
        if(grid[firstIndex][secondIndex] == grid[firstIndex + 1][secondIndex] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 2][secondIndex] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 3][secondIndex] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 4][secondIndex]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex + 1, secondIndex)
                let thirdNeededCell = findCell(firstIndex + 2, secondIndex)
                let fourthNeededCell = findCell(firstIndex + 3, secondIndex)
                let fifthNeededCell = findCell(firstIndex + 4, secondIndex)
                firstNeededCell.classList.add('vertical-down')
                secondNeededCell.classList.add('vertical-down')
                thirdNeededCell.classList.add('vertical-down')
                fourthNeededCell.classList.add('vertical-down')
                fifthNeededCell.classList.add('vertical-down')
            }
    }
    //horizontal left
    if(secondIndex - 4 >= 0){
        if(grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex - 1] &&
            grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex - 2] &&
            grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex - 3] &&
            grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex - 4]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex, secondIndex - 1)
                let thirdNeededCell = findCell(firstIndex, secondIndex - 2)
                let fourthNeededCell = findCell(firstIndex, secondIndex - 3)
                let fifthNeededCell = findCell(firstIndex, secondIndex - 4)
                firstNeededCell.classList.add('horizontal-left')
                secondNeededCell.classList.add('horizontal-left')
                thirdNeededCell.classList.add('horizontal-left')
                fourthNeededCell.classList.add('horizontal-left')
                fifthNeededCell.classList.add('horizontal-left')
            }
    }
    //horizontal right
    if(secondIndex + 4 <= 10){
        if(grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex + 1] &&
            grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex + 2] &&
            grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex + 3] &&
            grid[firstIndex][secondIndex] == grid[firstIndex][secondIndex + 4]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex, secondIndex + 1)
                let thirdNeededCell = findCell(firstIndex, secondIndex + 2)
                let fourthNeededCell = findCell(firstIndex, secondIndex + 3)
                let fifthNeededCell = findCell(firstIndex, secondIndex + 4)
                firstNeededCell.classList.add('horizontal-right')
                secondNeededCell.classList.add('horizontal-right')
                thirdNeededCell.classList.add('horizontal-right')
                fourthNeededCell.classList.add('horizontal-right')
                fifthNeededCell.classList.add('horizontal-right')
            }
    }
    //diagonal left up
    if(firstIndex - 4 >= 0 && secondIndex - 4 >= 0){
        if(grid[firstIndex][secondIndex] == grid[firstIndex - 1][secondIndex - 1] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 2][secondIndex - 2] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 3][secondIndex - 3] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 4][secondIndex - 4]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex - 1, secondIndex - 1)
                let thirdNeededCell = findCell(firstIndex - 2, secondIndex - 2)
                let fourthNeededCell = findCell(firstIndex - 3, secondIndex - 3)
                let fifthNeededCell = findCell(firstIndex - 4, secondIndex - 4)
                firstNeededCell.classList.add('diagonal-left-up')
                secondNeededCell.classList.add('diagonal-left-up')
                thirdNeededCell.classList.add('diagonal-left-up')
                fourthNeededCell.classList.add('diagonal-left-up')
                fifthNeededCell.classList.add('diagonal-left-up')
            }
    }
    //diagonal left down
    if(firstIndex + 4 <= 10 && secondIndex + 4 <= 10){
        if(grid[firstIndex][secondIndex] == grid[firstIndex + 1][secondIndex + 1] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 2][secondIndex + 2] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 3][secondIndex + 3] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 4][secondIndex + 4]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex + 1, secondIndex + 1)
                let thirdNeededCell = findCell(firstIndex + 2, secondIndex + 2)
                let fourthNeededCell = findCell(firstIndex + 3, secondIndex + 3)
                let fifthNeededCell = findCell(firstIndex + 4, secondIndex + 4)
                firstNeededCell.classList.add('diagonal-left-down')
                secondNeededCell.classList.add('diagonal-left-down')
                thirdNeededCell.classList.add('diagonal-left-down')
                fourthNeededCell.classList.add('diagonal-left-down')
                fifthNeededCell.classList.add('diagonal-left-down')
            }
    }
    //diagonal right up
    if(firstIndex - 4 >= 0 && secondIndex + 4 <= 10){
        if(grid[firstIndex][secondIndex] == grid[firstIndex - 1][secondIndex + 1] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 2][secondIndex + 2] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 3][secondIndex + 3] &&
            grid[firstIndex][secondIndex] == grid[firstIndex - 4][secondIndex + 4]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex - 1, secondIndex + 1)
                let thirdNeededCell = findCell(firstIndex - 2, secondIndex + 2)
                let fourthNeededCell = findCell(firstIndex - 3, secondIndex + 3)
                let fifthNeededCell = findCell(firstIndex - 4, secondIndex + 4)
                firstNeededCell.classList.add('diagonal-right-up')
                secondNeededCell.classList.add('diagonal-right-up')
                thirdNeededCell.classList.add('diagonal-right-up')
                fourthNeededCell.classList.add('diagonal-right-up')
                fifthNeededCell.classList.add('diagonal-right-up')
            }
    }
    //diagonal right down
    if(firstIndex + 4 <= 10 && secondIndex - 4 >= 0){
        if(grid[firstIndex][secondIndex] == grid[firstIndex + 1][secondIndex - 1] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 2][secondIndex - 2] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 3][secondIndex - 3] &&
            grid[firstIndex][secondIndex] == grid[firstIndex + 4][secondIndex - 4]){
                ifWinner = true
                let firstNeededCell = findCell(firstIndex, secondIndex)
                let secondNeededCell = findCell(firstIndex + 1, secondIndex - 1)
                let thirdNeededCell = findCell(firstIndex + 2, secondIndex - 2)
                let fourthNeededCell = findCell(firstIndex + 3, secondIndex - 3)
                let fifthNeededCell = findCell(firstIndex + 4, secondIndex - 4)
                firstNeededCell.classList.add('diagonal-right-down')
                secondNeededCell.classList.add('diagonal-right-down')
                thirdNeededCell.classList.add('diagonal-right-down')
                fourthNeededCell.classList.add('diagonal-right-down')
                fifthNeededCell.classList.add('diagonal-right-down')
            }
            }
    
    if(ifWinner){
        if(grid[firstIndex][secondIndex] == 'X'){
            winner = `${player1}(X)`
        }
        else{
            winner = `${player2}(O)`
        }
        const gridCells = document.querySelectorAll('.grid .cell')
        gridCells.forEach(child => {
            child.style.pointerEvents = 'none'
        })
        playerTurn.textContent = `${winner} is the winner!`
        restartButton.style.display = 'block'
    }

    let isDraw = true
    for(let i = 0; i < 11; i ++){
        for(let j = 0; j < 11; j++){
            if(grid[i][j] == '-'){
                isDraw = false
                break
            }
        }
    }
    if(isDraw){
        playerTurn.textContent = "It's a draw!"
        restartButton.style.display = 'block'
    }
}

function addEListener(cell){
    cell.addEventListener('click', () => {
        let indices = cell.id.split('-')
        firstIndex = Number(indices[0])
        secondIndex = Number(indices[1])
        if(flag % 2 == 0){
            cell.textContent = 'X'
            playerTurn.textContent = `${player2} (O)'s turn`
            grid[firstIndex][secondIndex] = 'X'
        } else {
            cell.textContent = 'O'
            playerTurn.textContent = `${player1} (X)'s turn`
            grid[firstIndex][secondIndex] = 'O'
        }
        flag++
        cell.style.pointerEvents = 'none'
        checkWinner()
    })
}

function createGrid(cont){
    for(let i = 0; i < 11; i ++){
        for(let j = 0; j < 11; j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.id = `${i}-${j}`
            addEListener(cell)
            cont.appendChild(cell)
        }
    }
}

submitButton.addEventListener('click', () => {
    if(nameInput.value != '' && player1 == ''){
        playerToInputName.textContent = 'Player 2(O)'
        player1 = nameInput.value
        nameInput.value = ''
    } 
    else if(nameInput.value != '' && player1 != ''){
        player2 = nameInput.value
        playerForm.style.display = 'none'
        container.style.display = 'block'
        createGrid(gridElement)
        playerTurn.textContent = `${player1} (X)'s turn`
    } 
})

restartButton.addEventListener('click', () => {
    location.reload()
})