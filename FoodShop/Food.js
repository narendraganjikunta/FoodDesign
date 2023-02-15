const hour = document.getElementById("hour")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")

const date = new Date()
const H = date.getHours()
const M = date.getMinutes()
const S = date.getSeconds()


hour.innerHTML=H;
min.innerHTML=M;
sec.innerHTML=S;


const getCovidData = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users/");
    const res = await request.json();
    console.log(res);
 
const demo= document.getElementById("more");
res.map((y)=>{
   demo.innerHTML +=`<div class="row">
 <div class="col-10 text-center  bg-dark text-white text-center g-2 bg-dark text-white direction-column">  <div class="card-title">${y.name}</div>
 <div>${y.username}</div>
 <div>${y.email}</div>
 </div>
   </div>` 
})
  };



  const btn= document.querySelector("#data");
  btn.addEventListener("click",function(){
     getCovidData();
  })





















   //  data.map((x)=>{
   //    document.getElementById("more").innerHTML=
   //    `<div class="row">
   //    <div class="container card col-6">
   // <img src=${x.url}>
   //    <div class="card-title mt-3">${x.title}</div>
   //    <div>${x.id}</div>
   //    </div></div>`
   //  })
