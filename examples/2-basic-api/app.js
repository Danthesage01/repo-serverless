const result = document.querySelector('.result')

const fetchData = async () => {

 try {
  const { data } = await axios(`/api/2-basicapi`)
  const newItem = data.map(item => {
  return `
     <article class="product">
      <img
        src="${item.image.url}"
        alt="${item.name}"
      />
      <div class="info">
        <h5>${item.name}</h5>
        <h5 class="price">$${item.price}</h5>
      </div>
     </article>
 `
  }).join("")
  result.innerHTML = `${newItem}`
 } catch (error) {
  result.innerHTML = `<h4>There was an error</h4>`
 }

}

fetchData()
