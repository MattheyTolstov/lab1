function addition() {
    let n1 = Number(first_num_add.value)
    let n2 = Number(second_num_add.value)
    let result = n1 + n2
    output_add.textContent = result
}

function subtraction() {
    let n1 = Number(first_num_sub.value)
    let n2 = Number(second_num_sub.value)
    let result = n1 - n2
    output_sub.textContent = result
}

function multiplication() {
    let n1 = Number(first_num_mul.value)
    let n2 = Number(second_num_mul.value)
    let result = n1 * n2
    output_mul.textContent = result
}

function division() {
    let n1 = Number(first_num_div.value)
    let n2 = Number(second_num_div.value)
    let result = n1 / n2
    output_div.textContent = result

}

function remains() {
    let n1 = Number(first_num_rem.value)
    let n2 = Number(second_num_rem.value)
    let result = n1 % n2
    output_rem.textContent = result

}


const button_addition = document.getElementById("button_addition")
const button_subtraction = document.getElementById("button_subtraction")
const button_multiplication = document.getElementById("button_multiplication")
const button_division = document.getElementById("button_division")
const button_remains = document.getElementById("button_remains")

const first_num_add = document.getElementById("first_add")
const second_num_add = document.getElementById("second_add")
const first_num_sub = document.getElementById("first_sub")
const second_num_sub = document.getElementById("second_sub")
const first_num_mul = document.getElementById("first_mul")
const second_num_mul = document.getElementById("second_mul")
const first_num_div = document.getElementById("first_div")
const second_num_div = document.getElementById("second_div")
const first_num_rem = document.getElementById("first_rem")
const second_num_rem = document.getElementById("second_rem")

const output_add = document.getElementById("output_add")
const output_sub = document.getElementById("output_sub")
const output_mul = document.getElementById("output_mul")
const output_div = document.getElementById("output_div")
const output_rem = document.getElementById("output_rem")

button_addition.addEventListener("click", addition)
button_subtraction.addEventListener("click", subtraction)
button_multiplication.addEventListener("click", multiplication)
button_division.addEventListener("click", division)
button_remains.addEventListener("click", remains)



const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
};