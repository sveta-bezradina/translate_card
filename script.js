const windCard = document.createElement("button");
const step = document.createElement("span");
const input = document.createElement("input");
const text = document.createElement("span");
const points = document.createElement("div");
const simple = document.getElementById("Choice1");
const average = document.getElementById("Choice2");
const high = document.getElementById("Choice3");


$("body").append(windCard);
$("body").append(step);
$("body").append(input);
$("body").append(text);
$("body").append(points);

$("body").css({width:"auto",
	height:"90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
	flexDirection:"column",
    backgroundImage: "url(image/fon.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition:"center center",
    fontSize: "25pt"});
$(windCard).css({ border:"0px",
    width:"450px",
    height:"350px",
    backgroundColor:"rgba(255, 255, 255, 0.757)",
    boxShadow:"5px 5px 15px black",
    borderRadius:"25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
	flexDirection:"column",
    marginTop:"15px",
    fontSize:"25pt" });
$(step).css({
    width:"auto",
    height:"40px",
    backgroundColor:"rgba(255, 255, 255, 0)",
    marginTop:"15px"});
$(input).css({width:"250px", 
    height:"30px",
    border:"0px",
    boxShadow:"inset 0px 1px 5px black",
    borderRadius:"25px",
    fontSize:"15pt",
    paddingLeft:"15px",
    marginTop:"15px"});
$(points).css({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection:"row",
    width:"250px",
    height:"100px",
    marginTop:"15px" });

const arrayWords = ["butterfly", "wings", "fog", "shy", "speak",
                    "book", "grass", "give", "flower", "boiling water", "seal"];
const answerWords = ["метелик", "крила", "туман", "сором'язливий", "говорити",
                    "книга", "трава", "давати", "квітка", "окріп", "тюлень"];

const arrayWords2 = ["To abhor", "To yield", "To barogate", "To sustain", "To strengthen",
                    "To recapitulate", "To contemplate", "To flourish", "To congregate", "To narrate", "To alter"];
const answerWords2 = ["ненавидіти", "поступитися", "скасувати", "підтримати", "посилити",
                    "переказати", "споглядати", "процвітати", "збиратися ", "розповідати", "змінювати"];           
                    
const arrayWords3 = ["abate", "blandishment", "halcyon", "encomium", "culpability",
                    "dearth", "froward", "inveigle", "minatory", "untoward", "prudent"];
const answerWords3 = ["зменшувати", "умовляння", "безтурботний", "вихваляння", "винність",
                    "дефіцит", "свавільний", "заманювати", "загрозливий ", "впертий", "розсудливий"];           

$(text).html("<span>statistics</span>");
$(step).text("0/11");
let right = 0;
let wrong = 0;
let index;
let item;
let translateItem;
let i=0;


simple.addEventListener('change', function(){
    NewIndex();
    right=0;
    wrong=0;
    i=1;
    $(step).text(`${i}/11`);
    $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${wrong}</span>`);
    $(windCard).unbind();
    $(document).off('keydown');
    $(windCard).bind("click", Check);
    $(document).keydown(function(event) {
        if (event.which === 13) {
            Check();
        }
    });

});

average.addEventListener('change', function(){
    NewIndex2();
    right=0;
    wrong=0;
    i=1;
    $(step).text(`${i}/11`);
    $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${wrong}</span>`);
    $(windCard).unbind();
    $(document).off('keydown');
    $(windCard).bind("click", Check2);
    $(document).keydown(function(event) {
        if (event.which === 13) {
            Check2();
        }
    });
});

high.addEventListener('change', function(){
    NewIndex3();
    right=0;
    wrong=0;
    i=1;
    $(step).text(`${i}/11`);
    $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${wrong}</span>`);
    $(windCard).unbind();
    $(document).off('keydown');
    $(windCard).bind("click", Check3);
    $(document).keydown(function(event) {
        if (event.which === 13) {
            Check3();
        }
    });
});

function Check(){
    $(step).text(`${++i}/11`);
    const answer = $(input).val().trim().toLowerCase();
    if(i<=11){
    if(answer == translateItem){
        $(points).html(`<span style="color:rgb(41, 119, 15)">${++right}</span><span style="color:red">${wrong}</span>`);
    }else{
        $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${++wrong}</span>`);
    }
    NewIndex();
   
    }else{ 
    location.reload();
    alert(`You have ${right} right answers and ${wrong} wrong answers`);}
}
function Check2(){
    $(step).text(`${++i}/11`);
    const answer = $(input).val().trim().toLowerCase();
    if(i<=11){
    if(answer == translateItem){
        $(points).html(`<span style="color:rgb(41, 119, 15)">${++right}</span><span style="color:red">${wrong}</span>`);
    }else{
        $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${++wrong}</span>`);
    }
    NewIndex2();
   
    }else{ 
    location.reload();
    alert(`You have ${right} right answers and ${wrong} wrong answers`);}
}
function Check3(){
    $(step).text(`${++i}/11`);
    const answer = $(input).val().trim().toLowerCase();
    if(i<=11){
    if(answer == translateItem){
        $(points).html(`<span style="color:rgb(41, 119, 15)">${++right}</span><span style="color:red">${wrong}</span>`);
    }else{
        $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${++wrong}</span>`);
    }
    NewIndex3();
   
    }else{ 
    location.reload();
    alert(`You have ${right} right answers and ${wrong} wrong answers`);}
}

function NewIndex(){
    index = Math.floor(Math.random()*arrayWords.length);
    item = arrayWords.splice(index , 1)[0];
    $(windCard).text(item);
    translateItem = answerWords.splice(index,1)[0];
    $(input).val(" ");
}
function NewIndex2(){
    index = Math.floor(Math.random()*arrayWords2.length);
    item = arrayWords2.splice(index , 1)[0];
    $(windCard).text(item);
    translateItem = answerWords2.splice(index,1)[0];
    $(input).val(" ");
}
function NewIndex3(){
    index = Math.floor(Math.random()*arrayWords3.length);
    item = arrayWords3.splice(index , 1)[0];
    $(windCard).text(item);
    translateItem = answerWords3.splice(index,1)[0];
    $(input).val(" ");
}