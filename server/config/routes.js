module.exports = app =>{
    console.log("this line 2", this);
    app.get("/", (request, response)=> {
        response.render("index");
    });
}