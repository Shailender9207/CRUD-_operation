showData();
function showData(){
    var tab=document.getElementById("table_body").innerHTML="";
let oldItems=JSON.parse(localStorage.getItem('itemArray'));
    word=''
    for(let k of oldItems){
           for(let i in k){
                word+=`<td>${k[i]}</td> `
           }
           document.getElementById("table_body").innerHTML+=`<tr>${word}<td><a href="#" onclick="updateData(${oldItems.indexOf(k)})">Update</a></td><td><a href="#" onclick="deleteData(${oldItems.indexOf(k)})">Delete</a></td></tr>`;
           word=''
        }
}

function onSubmitForm() {
    flag=0
    var tab=document.getElementById("table_body").innerHTML="";
    
    emp_id=document.getElementById("emp_id").value;
    emp_name=document.getElementById("emp_full").value;
    e=document.getElementById("gender_list")
    gender=e.options[e.selectedIndex].text;
    mobile=document.getElementById("mobile").value;
    d=document.getElementById("department_list");
    department=d.options[d.selectedIndex].text;
    salary=document.getElementById("salary").value;
    pass=document.getElementById("password").value;
    if(emp_id==""){
        flag=1
        alert("Please enter employee id");
    }   
    else if(emp_name==""){
        flag=1
        alert("Please enter employee name");
    }
    
    else if(e.selectedIndex==0){
        flag=1
        alert("Please enter gender");
    }
    
   else  if(mobile==""){
        flag=1
        alert("Please enter mobile")
    }
    
    else if(department.selectedIndex==0){
        flag=1
        alert("Please enter department");
    }
    
    else if(salary==""){
        flag=1
        alert("Please enter salary");
    }
    
    else if(pass==""){
        flag=1
        alert("Please enter password");
    }
   // console.log(emp_id,emp_name,gender,mobile,salary,department,pass);
    if(flag==0){
        var oldItems=JSON.parse(localStorage.getItem("itemArray"));
    var newItem={
        "Employe_ID" : `${emp_id}`,
        "Employe_Name":`${emp_name}`,
        "Gender":`${gender}`,
        "Mobile":`${mobile}`,
        "Department":`${department}`,
        "Salary":`${salary}`,
        "Password":`${pass}`
    }
    oldItems.push(newItem);
    localStorage.setItem('itemArray',JSON.stringify(oldItems));   
    alert("Employee added successfully");
    // let arr=JSON.parse(localStorage.getItem('itemArray'));
    
        document.getElementById("emp_id").value="";
        document.getElementById("emp_full").value="";
    
        document.getElementById("gender_list").selectedIndex='0';
        document.getElementById("mobile").value="";
        document.getElementById("department_list").selectedIndex='0';
        document.getElementById("salary").value="";
        document.getElementById("password").value="";

    }
    else{
        alert("Please Fill all the fields carefully")
    }
    showData();
        
       // document.getElementById("table").innerHTML=html;
    }
    function deleteData(rid){
        console.log(rid);
        let oldItems=JSON.parse(localStorage.getItem('itemArray'))
        oldItems.splice(rid,1);
        console.log(oldItems);
        localStorage.setItem('itemArray',JSON.stringify(oldItems));
        showData()

    }
    




    function updateData(rid){
        let oldItems=JSON.parse(localStorage.getItem('itemArray'))
            document.getElementById("emp_id").value=oldItems[rid].Employe_ID;
            document.getElementById("emp_full").value=oldItems[rid].Employe_Name;
        
            document.getElementById("gender_list").selectedIndex='0';
            document.getElementById("mobile").value=oldItems[rid].Mobile;
            document.getElementById("department_list").selectedIndex='0';
            document.getElementById("salary").value=oldItems[rid].Salary;
            document.getElementById("password").value=oldItems[rid].Password;
            deleteData(rid);
    
    }