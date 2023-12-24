window.onload=function(){
    console.log("Page is loaded");
    console.log("Hello");
    const r = document.getElementById('rform');
    r.addEventListener ('submit', async function (e) {
        e.preventDefault();
        var fd=document.getElementById("fd").value;
        var td=document.getElementById("td").value;
        var st=document.getElementById("st").value;
        var ct=document.getElementById("ct").value;
        var rs=document.getElementById("rs").value;
        var pf = document.getElementById("pf").files[0];
        console.log(pf)
        var md =document.querySelector('.check:checked').value;
        const payload = new FormData();
        payload.append("from_date", fd);
        payload.append("to_date", td);
        payload.append("state", st);
        console.log(md)
        payload.append("city", ct);
        payload.append("reason", rs);
        payload.append("mode", md);
        payload.append("proof",pf)
        payload.append("id_no",localStorage.getItem("user_name"))
        var values = [...payload.values()]
        console.log(values)
        var response = await fetch('http://192.168.81.134:5000/addOutpassRequest', {
                method: 'POST',
                headers:{
                    "Authorization":localStorage.getItem("token")
                },
                body:payload,

            })
            if (response.ok){

                console.log("http s1")
                let json=await response.json();
                console.log(json['status'])
                console.log(json['requests'][0])
                alert("Sucessfully submited")
                window.location.replace("Student.html");

            }
            else{
                console.log("http f1")
                alert("No Outpass got");
            }
    })
    
}