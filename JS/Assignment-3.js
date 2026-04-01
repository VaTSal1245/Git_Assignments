//1. Employee Salary Processor
const Employee=[
    {name: "Vatsal", salary: 50000},
    {name: "Krish", salary: 30000},
    {name: "Yash", salary: 75000}
]

const filterEmp=Employee 
    .filter((sal)=>sal.salary>40000)
    
console.log(filterEmp)
const increaseSal=filterEmp.map((inc)=> {
    const newsalary=inc.salary*1.10

    if(newsalary>=70000){
        return {...inc,salary: newsalary,level: "senior"}
    }
    else{
        return {...inc,salary: newsalary,level: "mid"}
    }
})    
console.log(increaseSal)
console.log(Employee)

//2. Order Management System
const orders=[
    {orderid: 1, Amount: 2000, quantity: 4},
    {orderid: 2, Amount: 3000, quantity: 3},
    {orderid: 3, Amount: 4000, quantity: 33}
]

const totalBill=orders.reduce((total,amt)=>total+amt.Amount,0)
console.log(totalBill)

const totalItems=orders.reduce((totalQ,item)=>{
    const items=totalQ+item.quantity
    return items    
},0
)

const updateOrders={...orders,totalBill,totalItems}
console.log(updateOrders)

const empUl=document.createElement("ul")
const orderUl=document.createElement("ul")
const Bill=document.querySelector("#Bill")
const totalItem=document.querySelector("#Items")

const empDiv = document.querySelector("#empList");
const orderDiv = document.querySelector("#orderList");

increaseSal.forEach(emp => {
  const li = document.createElement("li");
  li.textContent = `Employee: ${emp.name} - Salary: ${emp.salary.toFixed(0)} - Level: ${emp.level}`;
  empUl.appendChild(li);
});
empDiv.appendChild(empUl);

orders.forEach(order => {
  const li = document.createElement("li");
  li.textContent = `Order ${order.orderid} → Amount: ${order.Amount}, Items: ${order.quantity}`;
  orderUl.appendChild(li);
});
orderDiv.appendChild(orderUl);
Bill.innerText=`Total Bill: ${totalBill}`
totalItem.innerText=`Total Orders: ${totalItems}`