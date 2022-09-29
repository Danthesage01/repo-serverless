require("dotenv").config
const Airtable = require("airtable-node")

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
 .base('appx6Lk6DZLw2cx5t')
.table("survey")

exports.handler = async (event, context) =>{
const method = event.httpMethod;
if(method === "GET"){
 try {
  const { records } = await airtable.list()
  const survey = records.map(record => {
   const { id } = record
   const { room, votes } = record.fields
   return { id, room, votes }
  })
  return {
   statusCode: 200,
   body: JSON.stringify(survey)
  }
 } catch (error) {
  return {
   statusCode: 500,
   body: `Server error`
  }
 }
}
if(method === "PUT"){
try {
 const { id, votes} = JSON.parse(event.body)
  if(!id || !votes){
   return{
    statusCode: 400,
    body: "Please provide id and votes values"
   }
  } 
 const fields = {votes: Number(votes) + 1}
 const item = await airtable.update(id, {fields})
 console.log(item);
 if(item.error){
  return{
   statusCode: 400,
   body: JSON.stringify(item)
  }
 }
 return {
  statusCode: 200,
  body: JSON.stringify(item)
 }
} catch (error) {
 return {
  statusCode: 400,
  body: "Please provide id and votes values"
 }
}
}
// Default Response
return{
 statusCode: 405,
 body: "Only Get and PUT are allowed"
}
}