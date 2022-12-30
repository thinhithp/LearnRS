const arr = [
    {id: 1, name: 'Thịnh', age: 25, className: '51'},
    {id: 2, name: 'Thịnh2', age: 25, className: '51'},
    {id: 3, name: 'Thịnh3', age: 25, className: '51'},
];
let tbody = document.querySelector('table tbody')
console.log(tbody)
function querryData(data) {
    var html = "";
    for (const item of data) {
        html += `

<tr>
              <th scope="row">${item.id}</th>
              <td>${item.name}</td>
              <td>${item.age}</td>
              <td>${item.className}</td>
              <td>
                <button type="button" class="btn btn-danger" onClick="deleteItem(${item.id})">Delete</button>
                <button type="button" class="btn btn-warning">Edit</button>
              </td>
            </tr>`;
    }
    tbody.innerHTML = html
}
querryData(arr);

let btn_add = document.getElementById('add');

let ip = document.querySelectorAll('input')
btn_add.onclick = function (){
    const newOb = {
        id : arr.length +1,
        name:ip[1].value,
        age: ip[2].value,
        className: ip[3].value
    };
    arr.push(newOb)

    querryData(arr)
}

function deleteItem(data){
   // TODO: findIndex là tìm kiếm theo hành vi người sử dụng và trả về đứng thứ tự index trong mảng
    let item = arr.findIndex((item) =>{
        return item.id === id;
    });
    arr.splice(item,1)
    querryData(arr)
}