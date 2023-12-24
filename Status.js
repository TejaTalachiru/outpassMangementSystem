window.onload=async function(){
    console.log("Page is loaded in Status");
    console.log("Hello");
    //console.log(a,b)
    var res=await fetch("http://192.168.81.134:5000/studentStatus",
        {
            "headers":{"Authorization":localStorage.getItem("token"),
            },
            "method":"POST",      
        })
    var ret=await res.json();
    console.log(ret.requests[0].city);
    console.log(ret);
    //let ele= document.getElementById("city_label").innerHTML=JSON.stringify(ret.requests[0].city);
    //console.log(ele);
    var table2=document.getElementById("card")
    ret.requests.map(data=>{
        console.log(data.city);
        var temp=`
        <div class="card">
        <h5 class="card-header">${Date(parseInt(data.applied_date))}</h5>
        <div class="card-body">
          <h4 class="card-title"><b>Reason:</b>${data.reason}</h4>
          <p class="card-text" style="color:red"><b>CITY:</b>${data.city}  </p>
          <p class="card-text" style="color:red"><b>STATE:</b>${data.state} </p>
          <p class="card-text" style="color:red"><b>MODE:</b>${data.mode} </p>
          <a href="#" class="btn btn-primary">Accepted</a>
        </div>
      </div>
        `
      table2.innerHTML += temp
    });
   
}