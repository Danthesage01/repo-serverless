// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
return{
statusCode: 200,
body: "Hello World",
}
}

// exports.handler =  (event, context, callback) => {
// callback(null,{
// statusCode: 200,
// body: "Hello World",
// })
// }