window.onload= function(){
    console.log("the javascript is loading");
    var source = $("#template-row").html();
    var template = Handlebars.compile(source);  
    var data = { 
        vaccinations: [
            {
                name: "FLU234",
                occurrence:["0", "1", "0", "1", "0"]
            },
            {
                name: "FLU234",
                occurrence:["0", "1", "0", "1", "0"]
            }
        ]
    };
    $("#vaccination-rows").html(template(data));
};