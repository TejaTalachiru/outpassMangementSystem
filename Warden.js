
async function myView(a,b){
    localStorage.setItem("key",b);
    localStorage.setItem("user_name",a);
    window.location.replace("Warden-show1.html");
}
window.onload=async function(){
    console.log("Page is loaded");
    console.log("Hello");

        var response = await fetch('http://192.168.81.134:5000/allRequests', {
                    method: 'GET',
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    },
                })
                if (response.ok){

                    console.log("http in ok")
                    let json= await response.json();
                    console.log(json['status'])
                    //console.log(json['requests'])
                    data=json['requests']
                    console.log(data)
                    var table = document.getElementById('myTable')
                    for (var i = 0; i < data.length; i++){
                        var row = `<tr data-href="">
                                        <td>${data[i].user_name}</td>
                                        <td>${data[i].city}<br>${data[i].mode}</td>
                                        <td>
                                        <input type="button" class="view" onclick="myView('${data[i].user_name}',${data[i]._key})" value="View"></td>
                                        </td>
                                  </tr>
                                  `
                        table.innerHTML += row
                    }
                    
                    //window.location.replace("Student.html");

                }
                else{
                    console.log("http f1")
                    alert("Data Fetch Error");
                }
    document.addEventListener("DOMContentLoaded",()=>{
        const rows= document.querySelectorAll("tr");
        rows.forEach( row=>{
            row.addEventListener("click",()=>{
                window.location.replace("Warden-show1.html")
            })
        })
    })
        
    /*f.addEventListener('submit',async function(e){
        e.preventDefault();
        var u =document.getElementById('name1').value;
        var p =document.getElementById('pass').value;
        const payload = new FormData();
        payload.append("user_name",u);
        payload.append("password",p);
        var response = await fetch('http://192.168.108.134:5000/wardenLogin', {
            method: 'POST',
            body: payload,

        })
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            console.log("http s")
            let json = await response.json();
            console.log(json['status']);
            if(json['status']=="success"){
                console.log("if success");
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


    })*/
}