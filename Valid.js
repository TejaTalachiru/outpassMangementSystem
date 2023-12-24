window.onload=function(){
    console.log("Page is loaded");
    console.log("Hello");
    console.log("In First Page")
    const f = document.getElementById('loginform');
    f.addEventListener('submit',async function(e){
        e.preventDefault();
        var u =document.getElementById('name1').value;
        var p =document.getElementById('pass').value;
        const payload = new FormData();
        payload.append("user_name",u);
        payload.append("password",p);
        var response = await fetch('http://192.168.81.134:5000/studentLogin', {
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
                localStorage.setItem("user_name",u);
                localStorage.setItem("token",json['token']);
                window.location.replace("Student.html");
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
    /*var flag=0;
    var paswd=document.getElementById("pass").value;
    var nam=document.getElementById("name1").value;
    //let regx=new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]*[^A-Z a-z 0-9]*[A-Z a-z 0-9]*)$');
    let regx2=new RegExp('^[A-Z]{1}[0-9]{6}$');
    /*if(regx.test(paswd))
    {
        console.log(paswd);
        document.getElementById('pass').style.border="2px solid green";
        document.getElementById('pssl').innerHTML="";
    }
    else
    {
        document.getElementById('pass').style.border="2px solid red";
        document.getElementById('pssl').innerHTML="Invalid password";
        flag=1;
    }
    if(regx2.test(nam))
    {
        console.log(nam);
        document.getElementById('name1').style.border="2px solid green";
        document.getElementById('nml').innerHTML="";
    }
    else
    {
        document.getElementById('name1').style.border="2px solid red";
        document.getElementById('nml').innerHTML="Invalid Username";
        flag=1;
    }
    if(flag==0)
    {
        //alert(flag);
        return true;
    }
    else
    {
        //alert(flag);
        return false;
    }*/
}
function eye()
{
    var passeye=document.getElementById("pass").type;
    if(passeye=="password")
    {
        document.getElementById("pass").type="text";
        console.log("Hi 123");
    }
    else
    {
        document.getElementById("pass").type="password";
    }
}