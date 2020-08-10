const animals = ['crab', 'dog', 'frog']
const arrLength = document.querySelector('.out-2-length')
const array = document.querySelector('.out-1-source')
const addElemBtn = document.querySelector('.add-to-arr')
const selectElem = document.querySelector('.array-element')
const imageIndex = document.querySelector('.arr-index')





function showArr(arr, elem) {

  arrLength.innerHTML = "Длина массива: " + animals.length
  array.innerHTML = 'const animals=[' + animals + ']'

  let out = ''

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== undefined) {
      out += `
      <div>
        <img src="images\\${arr[i]}.png">
        <span>${i}</span>
      </div>`
    }
  }
  document.querySelector(elem).innerHTML = out
}


function addToArray() {

  let index = parseInt(imageIndex.value, 10)


  if (index < 30) {

    if (index < 0) {
      alert('Индекс не может быть отрицательным')
      return false
    }


    animals[index] = selectElem.value
    showArr(animals, '.out-2-source-img')
    imageIndex.value++

  } else if (index > 30){
    alert('Слишком большой разброс между индексами массива')
    return false
  }

}



addElemBtn.addEventListener('click', addToArray)

showArr(animals, '.out-2-source-img')