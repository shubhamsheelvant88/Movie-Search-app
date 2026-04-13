let url = "http://www.omdbapi.com/?s=";

let btn = document.querySelector("button");

btn.addEventListener("click" , ()=> {
    let inp = document.querySelector("input").value;
    movieSearch(inp);
});

async function movieSearch(movie) {
    try{
    let res = await fetch(url + movie + "&apikey=38f9676c");
    let data = await res.json();
    console.log(data)

        let card1T = document.querySelector(".card1-title");
        let card1P = document.querySelector(".card1-text");
        card1T.innerText =  data.Search[0].Title;
        card1P.innerHTML = `Year :  ${ data.Search[0].Year}`;
        let r1 = document.querySelector("#ratings1");
        r1.innerHTML = `<b>Ratings : ⭐⭐⭐⭐</b>`

        let card2T = document.querySelector(".card2-title");
        let card2P = document.querySelector(".card2-text");
        card2T.innerText =  data.Search[1].Title;
        card2P.innerHTML = `Year :  ${ data.Search[1].Year}`;
        let r2 = document.querySelector("#ratings2");
        r2.innerHTML = `<b>Ratings : ⭐⭐⭐⭐</b>`

        let card3T = document.querySelector(".card3-title");
        let card3P = document.querySelector(".card3-text");
        card3T.innerText =  data.Search[2].Title;
        card3P.innerHTML = `Year :  ${ data.Search[2].Year}`;
        let r3 = document.querySelector("#ratings3");
        r3.innerHTML = `<b>Ratings : ⭐⭐⭐</b>`

        let card4T = document.querySelector(".card4-title");
        let card4P = document.querySelector(".card4-text");
        card4T.innerText =  data.Search[3].Title;
        card4P.innerHTML = `Year :  ${ data.Search[3].Year}`;
        let r4 = document.querySelector("#ratings4");
        r4.innerHTML = `<b>Ratings : ⭐⭐⭐⭐</b>`

        let card5T = document.querySelector(".card5-title");
        let card5P = document.querySelector(".card5-text");
        card5T.innerText =  data.Search[4].Title;
        card5P.innerHTML = `Year :  ${ data.Search[4].Year}`;
        let r5 = document.querySelector("#ratings5");
        r5.innerHTML = `<b>Ratings : ⭐⭐⭐</b>`

        let card6T = document.querySelector(".card6-title");
        let card6P = document.querySelector(".card6-text");
        card6T.innerText =  data.Search[5].Title;
        card6P.innerHTML = `Year :  ${ data.Search[5].Year}`;
        let r6 = document.querySelector("#ratings6");
        r6.innerHTML = `<b>Ratings : ⭐⭐⭐⭐</b>`

        let card7T = document.querySelector(".card7-title");
        let card7P = document.querySelector(".card7-text");
        card6T.innerText =  data.Search[6].Title;
        card6P.innerHTML = `Year :  ${ data.Search[6].Year}`;
        let r7 = document.querySelector("#ratings7");
        r7.innerHTML = `<b>Ratings : ⭐⭐⭐</b>`

        let card8T = document.querySelector(".card6-title");
        let card8P = document.querySelector(".card6-text");
        card6T.innerText =  data.Search[7].Title;
        card6P.innerHTML = `Year :  ${ data.Search[7].Year}`;
        let r8 = document.querySelector("#ratings8");
        r8.innerHTML = `<b>Ratings : ⭐⭐⭐⭐</b>`

        // let card7T = document.querySelector(".card7-title");
        // let card7P = document.querySelector(".card7-text");
        // card7T.innerText =  data.Search[1].Title;
        // card7P.innerHTML = `Year :  ${ data.Search[1].Year}`;


        
}
catch(err) {
        console.log("error occured");
    }  
}