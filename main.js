var dataJurusan = [
    "RPL",
    "TKJ",
    "TIF"
];

function showJurusan()
{
    var listJurusan = document.getElementById('tabel');
    
    listJurusan.innerHTML="<tr><th>Jurusan</th><th>Action</th></tr>";

    for(let i = 0; i < dataJurusan.length; i++){
        var btnEdit = "<button type='button' onclick='editJurusan("+i+")'>Edit</button>";
        var btnHapus = "<button type='button' onclick='hapusJurusan("+i+")'>Hapus</button>";

        listJurusan.innerHTML += "<td>" + dataJurusan[i] + "<td>"+ btnEdit + btnHapus +"</td>"+ "</td>";
    }
}

function addJurusan()
{
    var input = document.querySelector("input[name=jurusan]");
    dataJurusan.push(input.value);
    showJurusan();
}

function editJurusan(id)
{
    var dataBaru = prompt("Jurusan Baru", dataJurusan[id]);
    dataJurusan[id] = dataBaru;
    showJurusan();
}

function hapusJurusan(id)
{
    dataJurusan.splice(id,1);
    showJurusan();
}

showJurusan(); 