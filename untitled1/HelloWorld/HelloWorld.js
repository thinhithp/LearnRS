// // TODO: Trả về 1 mảng
var input = document.getElementById('input');
//
//
//
// console.log(input[0].value)
//
// // TODO: Trả về 1 mảng
// var input = document.getElementsByClassName('input');
//
//
// // TODO: Trả về 1 giá trị
// var input = document.getElementById('input');


function getLog() {
    // TODO : Cho dữ liêu đầu vào là input.value


    var input2 = input.value.substring(0, 1);
    var input3 = input.value.substring(1, input.value.length);
    input2 = input2.toUpperCase()
    input.value = input2 + input3;
    console.log(input.value)
}


// TODO: Mảng

const arra = ["q", "b", "c", "d"];
// TODO: cho 1 mảng có sẵn, nhập lấy vào từ input thì sẽ insert vào bản


// TODO: QuerrySelector

let p = document.querySelector("#ppp");

function inputArr() {
    arra.push(input.value);
    chia();
    input.value = "";
}

var i = 0;
var btnupdate = document.getElementById('btn-update')
var ip_hidder = document.getElementById('input-hidder')
btnupdate.onclick = inputArr2

function inputArr2() {
    var id = ip_hidder.getAttribute("value")
    arra[id] = input.value
    chia()

}


function chia() {
    var html = "";
    for (let i = 0; i < arra.length; i++) {
        html += `<li >${arra[i]} <button onClick="deleteItem(${i})">Xoa</button>
<button onClick="editItem(${i})">Sửa</button></li> 

`
    }
    document.getElementById('list').innerHTML = html;
};
chia();


function deleteItem(data) {

    arra.splice(data, 1);
    chia();
}

function editItem(data) {
    input.value = arra[data];
    ip_hidder.setAttribute("value",data)
}

input.getAttribute('id')

input.setAttribute("data-id","text");






