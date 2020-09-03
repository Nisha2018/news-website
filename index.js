console.log("This is my index.js file");
// f69549e3ab274b6d9480e7e387f79058

const xhr = new XMLHttpRequest();
const url = "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f69549e3ab274b6d9480e7e387f79058";

xhr.open("GET",url, true);
xhr.onload = function() {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let articles = obj.articles;
        let str = "";
        articles.forEach(function(elem,index){
            str += `<div class="card my-3 mx-3" style="width: 20rem;">
                <img src="${elem.urlToImage}" class="card-img-top" alt="news-images">
                <div class="card-body">
                    <h5 class="card-title">${elem.title}</h5>
                    <p class="card-text">${elem.description}</p>
                    <a href="${elem.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>`;
        });

        document.getElementById("newsAccordion").innerHTML = str;
        console.log("Done. News is fetched!");

    } else {
        console.log("Some error occurred");
    }
}

xhr.send();


// Project3 solution by Harry

// console.log("This is my index js file");

// // Initialize the news api parameters
// let source = 'bbc-news';
// let apiKey = 'f69549e3ab274b6d9480e7e387f79058';

// // Grab the news container
// let newsAccordion = document.getElementById('newsAccordion');

// // Create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index) {
//             // console.log(element, index)
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                     aria-expanded="false" aria-controls="collapse${index}">
//                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                                 </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()


