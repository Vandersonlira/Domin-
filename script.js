function generateNumber() {
    const min = Math.ceil(document.querySelector("#min").value)
    const max = Math.floor(document.querySelector("#max").value)

    if (min >= max) {
        alert("O valor mínimo tem que ser menor que o valor máximo")
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    }


    // Outro jeito de fazer

    // if (max > min) {
    //     const result = Math.floor(Math.random() * (max - min + 1)) + min
    //     alert(result)
    // }
    // else {
    //     alert("O valor mínimo tem que ser menor que o valor máximo")
    // }
}


