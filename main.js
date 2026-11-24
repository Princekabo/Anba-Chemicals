var P=[
["Sodium hypochlorite","Disinfection and bleaching",["Water treatment","Cleaning"],"20 L, 210 L, 1000 L"],
["Aluminium sulphate","Water clarification",["Water treatment"],"25 kg bag, bulk"],
["Caustic soda","pH control and processing",["Mining","Cleaning","Water treatment"],"25 kg bag, bulk"],
["Sulphuric acid","Leaching and pH adjustment",["Mining"],"Bulk, IBC"],
["Urea and NPK blends","Crop nutrition",["Agriculture"],"50 kg bag, bulk"],
["Hydrated lime","Soil conditioning and water softening",["Agriculture","Water treatment"],"25 kg bag, bulk"],
["Industrial detergents","Floors, kitchens and equipment",["Cleaning"],"5 L, 25 L, 200 L"]
];
var I=["All","Water treatment","Mining","Agriculture","Cleaning"],cur="All";
var chips=document.getElementById("chips");
if(chips){
  var draw=function(){
    chips.innerHTML=I.map(function(x){return '<button type="button" aria-pressed="'+(x===cur)+'" data-i="'+x+'">'+x+'</button>'}).join("");
    document.getElementById("rows").innerHTML=P.filter(function(p){return cur==="All"||p[2].indexOf(cur)>-1}).map(function(p){
      return '<tr><td><strong>'+p[0]+'</strong></td><td>'+p[1]+'</td><td>'+p[3]+'</td></tr>'}).join("");
  };
  chips.addEventListener("click",function(e){var b=e.target.closest("button");if(b){cur=b.dataset.i;draw();}});
  draw();
}
var qf=document.getElementById("qf");
if(qf){qf.addEventListener("submit",function(e){e.preventDefault();document.getElementById("ok").textContent="Thanks. This is a demo form, so nothing was sent.";});}
