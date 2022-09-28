const result = document.querySelector('.result')


const fetchData =  async () =>{
try {
 const { data } = await axios(` `)
 console.log(data);

} catch (error) {
 
}

}

fetchData()