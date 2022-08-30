var i = 0
function next(){
    var name_member=["Koushik Rout","Debasmita Rout","Aryan Rout","Alethia Rout"];
    var img_member=["father.jpg","mother.jpg","son.jpg","sister.jpg"];
    document.getElementById("img").src=img_member[i];
    document.getElementById("name").innerHTML=name_member[i];
    i++;
}