const main = document.querySelector('main')

async function getData(){
const res = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const photos = await res.json()
    // const dataphotos = photos.results.map(dataPoke => dataPoke.url)
    // console.log(dataphotos)
     photos.forEach ( p => {
        if (p.id <= 4) {
 //código para crear la imagen
         const card = document.createElement('div')
         const title = document.createElement('h3')
         card.className = "grid-box-img"
         const img = document.createElement('img')
         img.src = p.url;
         title.textContent = p.title
         card.append(img)
         main.append(card)
        }
       
     });
}

getData()