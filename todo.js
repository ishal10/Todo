function getData(){
    console.log("todojs")
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange= function(){
    var data = JSON.parse(this.responseText)
    console.log(data);
    var output = `<thread>
    <tr>
      <th>No</th> 
      <th>Todo item</th> 
      <th>status</th> 
      <th>Action</th>  
        </tr>
        </thread>`

        for(i=0;i<data.length;i++){
             var checkbox
             if(data[i].completed==true){
                console.log('i');
                checkbox = 'check disabled'
             }else{
                checkbox=''
             }
             output += `<tr>
                <th scope = "row">${data[i].id}</th>
                <td>${data[i].title}</td>
                <td>${data[i].completed}</td>
                <td>
                    <input type = "checkbox" class = "todo-checkbox" onclick = "handlecheck()"${checkbox}>
                <tr/>`
        }
        document.getElementById('tr').innerHTML=output;

}
xhttp.open("get","http://jsonplaceholder.typicode.com/todos",true)
xhttp.send();
}
var checked = 0
function changecheckcount(){
    return new Promise((resolve)=>{
        checked++
        if(checked==5)
        resolve()
    })
    }

    function handlecheck(){
        changecheckcount().then(()=>alert("congratulations! you have completed five tasks."));

    }
        
 
