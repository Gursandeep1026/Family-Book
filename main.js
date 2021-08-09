var image=[
    "boy.png",
    "father.png",
    "mother.png",
    "sister.png",
    "grandfather.png",
    "grandmother.png",
];
var fm_name=[
    "Me",
    "Father",
    "Mother",
    "Sister",
    "grandfather",
    "grandmother",

]
var i=0;
var j=0;
function next(){
    i=i+1;
 if (i==6)
   {i=0;}
    j=j+1;
    if (j==6)
      {j=0;
};
  document.getElementById("image_1").src=image[i];
  document.getElementById("name").innerHTML=fm_name[i];
 
}