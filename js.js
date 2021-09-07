var path;

function showhide(){
    var div = document.getElementById("imgdiv");
    if (div.className === "") {
        div.className = "active";
    } else {
        div.className = "";
    }
    console.log(div);
}


function chng_attr(){
var x = document.getElementById("font_select");
var y = document.getElementById("greeting_text");
var z = document.getElementById("font_color");
x.style="font-family:"+x.value+"; color:"+z.value;
y.style="font-family:"+x.value+"; text-align: center;";
z.style="font-family:"+x.value+"; color:"+z.value;

}

function chng_occa() {
document.getElementById("imgdiv").className="";
document.getElementById("imgdiv").innerHTML = "";
var m = document.getElementById("occa_select");
path = m.options[m.selectedIndex].text;
var j = document.getElementById("occa_select").value;
for (i = 1; i <= j; i++) {
document.getElementById("imgdiv").innerHTML += "<div class='col-sm-4'><div class='container2'><img src='pics/"+path+"/thumb/"+i+".jpg' width='100%' class='image2'><div class='overlay2'><div class='text2'><button class='btn btn-success' onclick='validation("+i+")'>Choose Me</button></div></div></div></div>"
  }
}

function validation(selImgVal){
// var isFont = document.getElementById("font_select");
// var isGreet = document.getElementById("greeting_text");

// if (isFont.value == "Select Font" || isGreet.value == "") {
//   alert("Please fill the required fields");
//   }
//   else{
//     window.location.href = "edit.html?x=pics/"+path+"/"+selImgVal+".jpg";
// }
window.location.href = "edit.html?x=pics/"+path+"/"+selImgVal+".jpg";

}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


//   function drawFunction(x,y,z) {
//   var c = document.getElementById("myCanvas");
//   var img = document.getElementById("scream");
//   c.width= img.width;
//   c.height=img.height;
//   var ctx = c.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   ctx.font = z+"pt "+y;
// ctx.fillText(x, img.width/2, img.height*3/4);

// }

function drawFunction2(x,y,z,m){
  var canvas2 = document.getElementById('myCanvas');
var img = document.getElementById("scream");
canvas2.width= window.innerHeight*img.width/img.height;
  canvas2.height=window.innerHeight;
  console.log(canvas2.height);
var c = canvas2.getContext('2d');
  c.drawImage(img, 0, 0,window.innerHeight*img.width/img.height,window.innerHeight);
 c.fillStyle = m; 
c.font = z+"pt "+y;
c.textAlign="center";
    console.log(c);
var f_height=z*1+10;
console.log(f_height);
var lineheight = (f_height/2)+40;
console.log(lineheight);
var lines = x.split('\n');

for (var i = 0; i<lines.length; i++){
    c.fillText(lines[i], canvas2.width/2, f_height + (i*lineheight));
}

}
function download() {
  var isFontSelect = document.getElementById("font_select");
  var isFontSize = document.getElementById("font_size");
  var isFontColor = document.getElementById("font_color");
  var isGreet = document.getElementById("greeting_text");

if (isFontSelect.value == "Select Font" || isGreet.value == "" || isFontSize.value == "Select Font Size" || isFontColor.value == "Select Font Color") {
  alert("Please fill the required fields");
  }
  else{
  var download = document.getElementById("download");
  var image = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
//download.setAttribute("download","archive.png");
}
}


function link(imgPath){

var FontSelect = document.getElementById("font_select").value;
var FontSize = document.getElementById("font_size").value;
var FontColor = document.getElementById("font_color").value;
var Greet = document.getElementById("greeting_text").value;
if (FontSelect == "Select Font" || Greet == "" || FontSize == "Select Font Size" || FontColor == "Select Font Color") {
  alert("Please fill the required fields");
  }
  else{
    showhide();
var Greet2="";

var liness = Greet.split('\n');
for (var i = 0; i<liness.length; i++){
    Greet2+="\\n"+liness[i];
}
//var b64 = btoa("link.html?x="+imgPath+"&fsel="+FontSelect+"&fsize="+FontSize+"&fcol="+FontColor+"&greet="+Greet2);
var b64 = btoa(imgPath+"&"+FontSelect+"&"+FontSize+"&"+FontColor+"&"+Greet2);
//console.log(b64);
b642=atob(b64)
console.log(b642);
console.log("link.html?x="+b64);
document.getElementById("linkVal").value="link.html?x="+b64;
document.getElementById("linkVal").style="display:block ";
}
}
function drawFunction3(x,y,z,m){
  var canvas2 = document.getElementById('myCanvas');
var img = document.getElementById("scream");
canvas2.width= window.innerHeight*img.width/img.height;
  canvas2.height=window.innerHeight;
  console.log(canvas2.height);
var c = canvas2.getContext('2d');
  c.drawImage(img, 0, 0,window.innerHeight*img.width/img.height,window.innerHeight);
 c.fillStyle = m; 
c.font = z+"pt "+y;
c.textAlign="center";
    console.log(c);
var f_height=z*1+15;
console.log(f_height);
var lineheight = (f_height/2)+40;
console.log(lineheight);
var liness = x.split('\\n');

for (var i = 1; i<liness.length; i++){
    c.fillText(liness[i], canvas2.width/2, f_height + ((i-1)*lineheight));
    console.log(liness[i]);
}

}
function download2() {
  var download = document.getElementById("download");
  var image = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
//download.setAttribute("download","archive.png");
}



function copy() {
  var copyText = document.getElementById("linkVal");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  console.log(copyText.value);
  alert("Please check if the link is working properly before sharing");
}