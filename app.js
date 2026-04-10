let url = "http://www.omdbapi.com/?s=";

let btn = document.querySelector("button");

btn.addEventListener("click" , ()=> {
    let inp = document.querySelector("input").value;
    movieSearch(inp);
})

async function movieSearch(movie) {
    try{
    let res = await fetch(url + movie + "&apikey=38f9676c");
    let data = await res.json();
    console.log(data)

    // let tl = document.querySelector("#title");

    let lt = document.querySelector(".list");

    data.Search.forEach(movie => {
        let li = document.createElement("li");
        li.innerText = movie.Title;

        lt.appendChild(li);
    });

   



    }catch(err) {
        console.log("error occured")
    }  
}