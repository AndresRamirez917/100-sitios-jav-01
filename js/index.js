const main = document.querySelector('#photography')
const stories = document.querySelector('#stories')
const montains = "the montains"

async function getData(){
const res = await fetch('https://jsonplaceholder.typicode.com/photos/')
    const photos = await res.json()
    // const dataphotos = photos.results.map(dataPoke => dataPoke.url)
    // console.log(dataphotos)
     photos.forEach ( p => {
        if (p.id <= 3) {
 //código para crear las imágenes en el grid
         const card = document.createElement('div')
         card.className = "grid-box-img"
         const img = document.createElement('img')
         img.className = "imagen1"
         img.src = p.url;
         card.append(img)
         main.append(card) 
        }
        else if(p.id = 5 && p.id <= 7) {
         //código para crear las imágenes en el flex
         const card2 = document.createElement('div')
         card2.className = "stories.box"
         const img2 = document.createElement('img')
         img2.className = "imagen2"
         img2.src = p.url;    
         const card22 = document.createElement('div')
         card22.className = "card22"
         const title2 = document.createElement('h3')
         title2.textContent = p.title
         const hacher = document.createElement('hr')
         hacher.className = "hacher"
         const arrow = document.createElement('a')
         arrow.className = "arrow"
         const paragraph = document.createElement('p')
         arrow.textContent = "__________________________________________"
         paragraph.textContent = "by John Bryan"
         card2.append(img2, card22)
         card22.append(title2, arrow, paragraph)
         stories.append(card2)
      }
       
     });
}

getData()