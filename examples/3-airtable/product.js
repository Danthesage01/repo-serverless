const result =  document.querySelector(".result")



const fetchSingle = async () =>{
 result.innerHTML = `<h2>Loading...</h2>`
 try {
  const paramID = window.location.search
  const param = new URLSearchParams(paramID)
  const id = param.get("id")

  const {data} = await axios(`/api/3-product?id=${id}`)
  const product = data.fields
  const {name, desc, price, image} = product

  result.innerHTML = ` 
  <h1 class="title">Single Product</h1>
      <article class="product">
        <img class="product-img"
          src=${image[0].url}
          alt=${name} />
        <div class="product-info">
          <h5 class="title">${name}</h5>
          <h5 class="price">$${price}</h5>
          <p class="desc">${desc}</p>
        </div>
      </article>
  
  `
 } catch (error) {
  result.innerHTML = `
  <h2>${error.response.data}</h2>
  `
 }
}

fetchSingle()