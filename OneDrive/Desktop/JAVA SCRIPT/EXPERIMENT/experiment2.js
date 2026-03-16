let employee=[];

function addemployee(){
    let name=
    document.getElementById("name").value;
    let empid=
    document.getElementById("empid").value;
    let slary=
    parseFloat(document.getElementById("salary").value);
    let dept=
    document.getElementById("dept").value;
    if (name ==="" || empid ==="" || isNaN(slary) || dept ===""){
        alert("please fill all the fields correctly");
        return;
    }
    let employee = {
        name:name,
        id:empid,
        salary:slary,
        department:dept
    };
    employee.push(employee);
    alert("employee added successfully");
    document.getElementById("name").value="";
    document.getElementById("empid").value="";
    document.getElementById("salary").value="";
    document.getElementById("dept").value="";
    displayemployee();
}
function displayemployee(){
    let output="<h3>all employees</h3>";
    employee.forEach((emp) => {
        output += `name:${emp.name} | id:${emp.id} | salary:${emp.salary} | department:${emp.department}<br>`;
    });
    document.getElementById("output").innerHTML = output;
}
function filtersalary(){
    let filter = employee.filter(emp => emp.salary > 50000);
    let output="<h3>employees with salary greater than 50000</h3>";
    filter.forEach((emp) => {
        output += `name:${emp.name} | id:${emp.id} | salary:${emp.salary} | department:${emp.department}<br>`;
    });
    document.getElementById("output").innerHTML = output;
}
function totalsalary(){
    let total = employee.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `<h3>total salary payout: ${total}</h3>`;
}
