window.onload=async function(){
    console.log("Page is loaded in Warden-show");
    console.log("Hello");
    const payload = new FormData();
    payload.append("key",localStorage.getItem("key"));
    payload.append("user_name",localStorage.getItem("user_name"));
    var values = [...payload.values()]
    console.log(values)
    //console.log(a,b)
    var res=await fetch("http://192.168.81.134:5000/singleRequest",
        {
            "headers":{"Authorization":localStorage.getItem("token"),
            },
            "method":"POST",
            body:payload,       
        }
        )
        var ret=await res.json();
        console.log(ret);
        var path="http://192.168.81.134:5000/static"+ret.request_details.proof.split("static")[1];
        var table2=document.getElementById("card2")
            var temp=`
            <div class="card">
            <h5 class="card-header">Student Details</h5>
            <div class="card-body">
              <p class="card-text" style="font-size:20px">ID:${ret.student_details.user_name} &nbsp&nbsp&nbsp NAME:${ret.student_details.name} &nbsp&nbsp&nbsp BRANCH: ${ret.student_details.Branch}  &nbsp&nbsp&nbsp STUDENT NO: ${ret.student_details.ph_no}</p>
              <p class="card-text" style="font-size:20px">ADDRESS: ${ret.student_details.address} &nbsp&nbsp&nbsp PARENT CONTACT:${ret.student_details.parent_ph_no} &nbsp&nbsp&nbsp BRANCH: ${ret.student_details.Branch}  &nbsp&nbsp&nbsp YEAR: ${ret.student_details.year-2}</p>
              <p class="card-text" style="color:red">para</p>
              <img style="width:150px;height:150px;" src='${path}'/><br/>
            </div>
          </div>`
          table2.innerHTML += temp
       
    const f = document.getElementById('Approve');
    f.addEventListener('click',async function(e){
        console.log("in button approve")
        e.preventDefault();
        const payload = new FormData();
        payload.append("status","approve");
        payload.append("key",localStorage.getItem("key"));
        var response = await fetch('http://192.168.81.134:5000/updateStatus', {
            "headers":{"Authorization":localStorage.getItem("token"),},
            "method":"POST",
            body:payload,  
        })
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            console.log("http in warden-show ok")
            let json = await response.json();
            console.log(json['status']);
            if(json['status']=="success"){
                console.log("if success in warden-show1 js");
                window.location.replace("Warden.html");
            }
            else{
                console.log("if Fail")
                alert("Wrong Username or Password");
            }
        } else {
            console.log("http f")
            alert("failed to get article by title");
        }

    })
    const f2 = document.getElementById('Reject');
    f2.addEventListener('click',async function(e){
        console.log("in button approve")
        e.preventDefault();
        const payload = new FormData();
        payload.append("status","approve");
        payload.append("key",localStorage.getItem("key"));
        var response = await fetch('http://192.168.81.134:5000/updateStatus', {
            "headers":{"Authorization":localStorage.getItem("token"),},
            "method":"POST",
            body:payload,  
        })
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            console.log("http in warden-show ok")
            let json = await response.json();
            console.log(json['status']);
            if(json['status']=="success"){
                console.log("if success in warden-show1 js");
                window.location.replace("Warden.html");
            }
            else{
                console.log("if Fail")
                alert("Wrong Username or Password");
            }
        } else {
            console.log("http f")
            alert("failed to get article by title");
        }

    })
}
/*
request_details: {_id: 'outpass/79649', _key: '79649', _rev: '_eq9RD_O---', applied_date: 1661344093164.389, city: 'Nellore', …}
status: "success"
student_details: {Branch: 'CSE', _id: 'students/1204556', _key: '1204556', _rev: '_emFdds----', address: '00,Kadapa,Andhra Pradesh-512909', …}
[[Prototype]]: Object
*/