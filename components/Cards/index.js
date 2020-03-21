// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // console.log(response);
    let data = response.data.articles

      for(let key in data){
        data[key].forEach(x =>{
          let cards = document.querySelector('.cards-container')
          cards.appendChild(articleCard(x))
        });
      }
  })

  .catch(err => {
    console.log('Somethings Wrong', err)
  })


function articleCard(data){
  let card = document.createElement('div')
  let headline = document.createElement('div')
    headline.textContent = data.headline
  let author = document.createElement('div')
  let imgcont = document.createElement('div')
  let image = document.createElement ('img')
    image.src = data.authorPhoto
  let authorname = document.createElement('span')
    authorname.textContent = data.authorName

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgcont.classList.add('img-container')

  card.append(headline, author);
  author.append(imgcont, authorname)
  imgcont.appendChild(image)

  return card;

}
