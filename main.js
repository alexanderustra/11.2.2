document.addEventListener('DOMContentLoaded',()=>{

    document.getElementById('enviar').addEventListener('click',()=>{
        let inputs = Array.from(document.getElementsByTagName('input'))
        let arrayInputs = []
        inputs.forEach(input =>{
            arrayInputs.push(input.value)
        })

        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify(arrayInputs), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("Success:", response));
    })
})
