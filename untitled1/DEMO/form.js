const arr = [
    {id: 1, name: 'Thịnh', age: 25, className: '51'},
    {id: 2, name: 'thành', age: 22, className: '51'},
    {id: 3, name: 'hưng', age: 23, className: '51'},
];
let tbody = document.querySelector('table tbody')

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
                <button type="button" class="btn btn-warning" onClick="edit(${item.id})">Edit</button>
              </td>
            </tr>`;
    }
    tbody.innerHTML = html
}

querryData(arr);

let btn_add = document.getElementById('add');

let ip = document.querySelectorAll('input')
btn_add.onclick = function addItem() {
    console.log('===>', 'test AddItem')
    const newOb = {
        id: arr.length + 1,
        name: ip[1].value,
        age: ip[2].value,
        className: ip[3].value
    };
    arr.push(newOb)

    querryData(arr)
}

function deleteItem(data) {
    // TODO: findIndex là tìm kiếm theo hành vi người sử dụng và trả về đứng thứ tự index trong mảng
    let item = arr.findIndex((item) => {
        return item.id === ip;
    });
    arr.splice(item, 1)
    querryData(arr)
}

// TODO : tạo 1 form edit
let input = document.querySelectorAll('input');

function edit(data) {
    var index = arr.findIndex(x => x.id === data);
    arr[index];
    document.getElementById("id").value = arr[index].id
    document.getElementById("name").value = arr[index].name
    document.getElementById("inputAge").value = arr[index].age
    document.getElementById("inputClass").value = arr[index].className

}

// TODO: tạo nút edit
// TODO: Ánh vạ với nút Button = id
let btn_edit = document.getElementById('edit');

btn_edit.onclick = function editButton() {
    var id = document.getElementById('id').value;
    if (id == null || id == "") {
        addItem()
    } else {
        updateData()
    }
}

// TODO: Hàm cập nhật

function updateData() {

    // TODO: gán lại dữ liệu tìm kiếm
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("inputAge").value;
    var className = document.getElementById("inputClass").value;
    // TODO: ở đây khi find ra ID sẽ gặp 1 trường hợp error index = -1
    // TODO: Lỗi ở đây là so sánh === thì sẽ sai với trường hợp này

    // TODO: lấy ra id để update
    var index = arr.findIndex(x => x.id == id);
    // TODO: Update arr với arr thứ index để update dữ liệu

    arr[index].name = name;
    arr[index].age = age;
    arr[index].className = className;
    querryData(arr)
}

// TODO: hàm tìm kiếm

let btn_search = document.getElementById('searchItem');

 function search() {

    // TODO: Đặt điều kiện tìm kiếm bằng nút
    let search = document.getElementById('searchItemInput').value;

    // TODO: filter là hàm thay thế cho vòng for và

    var kq = arr.filter(value => {
        return value.name.toUpperCase().includes(search.toUpperCase())
    });
    // TODO: Kiểm tra điều kiện
     querryData(kq)
}
