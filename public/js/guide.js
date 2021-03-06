console.log("here");

$("#submit_att_btn").on("click", (event) => {
    let formData = $("input[name='mushAttributes']:checked");

    let query = [];

    formData.each((check) => {
        if($(formData[check]).data("id"))
            query.push(parseInt($(formData[check]).data("id")));
    });

    console.log(query);
    
    $.ajax({
        method: "POST",
        url: "/guide",
        data: { attributes: query}
    }).then((response) => {
        console.log(response);

        let guideResults = $("#guide_results").clone();
        $("#guide_container").empty();

        response.forEach((match) => {

            newResult = guideResults.clone();

            newResult.attr("id", match.mushroom.identity);
            newResult.find("a").attr("href", "/mushroom/" + match.mushroom.identity);
            newResult.find("a").attr("id", match.mushroom.identity + "_btn");

            newResult.find("#photo").attr("src", match.mushroom.mushroom_photo);
            newResult.find("#commonName").text(match.mushroom.commonName);
            newResult.find("#mushroom_page_btn").attr("href", "/mushroom/" + 
                           match.mushroom.identity);

            $("#guide_container").append(newResult);
        });

        $("#guide_container").attr("hidden", false);
    });
});
