$(() => {
    console.log("Hello World")

    function square(val) {
        const sq = document.createElement("div")
        sq.className = "square"
        sq.innerText = val 
        //const value = document.createElement("div")
        //const div = document.createElement("div")

        $("#tape").append(sq)
    }

    for(let i = 0; i < 45; i++) 
        square( Math.round(Math.random()) )
    

})