import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1eIsNv6jgME94d8ptQT45JxCk2HswuyY",
  authDomain: "project-109e2.firebaseapp.com",
  databaseURL: "https://project-109e2.firebaseio.com",
  projectId: "project-109e2",
  storageBucket: "project-109e2.appspot.com",
  messagingSenderId: "994321863318",
  appId: "1:994321863318:web:10d3b180f8ff995d9ba8b7",
  measurementId: "G-Y83PD3D9Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import{getDatabase, ref, set, get, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

const db= getDatabase();

function item(){
    window.location="product.html"
}
 function sear(){
  var searchitem=document.getElementById("div2").value
  const myURL= new URL(window.location.protocol+"//"+window.location.host+"/search.html")
  myURL.searchParams.append("search",searchitem)
  window.location=myURL
}

var x;
var arr, key, value, lenth
function sett(n){
 
  x= Math.floor(Math.random()*lenth)+0
   key= Object.keys(arr)[x]
   value=arr[key]
   var view=document.createElement("div")
   view.classList.add("items_view")
   view.setAttribute('id', n)
   var image=document.createElement("img")
   image.classList.add("items_image")
   image.src=value["url0"]
   view.appendChild(image)
  var name=document.createElement("p")
  name.classList.add("item_name")
  name.innerHTML=value["name"]
  view.appendChild(name)
  var price=document.createElement("p")
  price.classList.add("item_price")
  price.innerHTML="₦"+value["price"]
  price.setAttribute('style', 'color:#FF9800')
  view.appendChild(price)
  var body=document.getElementById("body")
  
  sect.append(view)
  body.append(sect)
  load(n, value["code"])
}
var sect;
document.getElementById("div2").addEventListener('search', sear);
window.onload=function(){
  document.getElementById("title").innerHTML=window.location.host
  var i=0;
  const dbref=ref(db);
  get(child(dbref,"upload/")).then((snapshot)=>{
    if(snapshot.exists()){
      document.getElementById("loader").setAttribute("style", "display:none")
       arr = snapshot.val()
     lenth=Object.keys(arr).length
    lenth--
    
    do{
      var p=i
      i++
      if(i%3==1){
        sect=document.createElement("section")
      }
      sett(i)
    }while(i<=lenth+1) 
  }
  })
  document.getElementById("cart").onclick=function(){
    window.location="cart.html"
  }
 }
 function load(view, code){
  document.getElementById(view).onclick=function() {
    const myURL= new URL(window.location.protocol+"//"+window.location.host+"/product.html")
    myURL.searchParams.append("product",code)
    window.location=myURL;
  }
}