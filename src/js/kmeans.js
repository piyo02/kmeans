$.getJSON('../../data/csvjson.json', function(datas) {

    const nilai_c1 = 1;
    const nilai_c2 = 0;
    const label_c1 = "Punya Tugas";
    const label_c2 = "Tidak Punya Tugas";

    let dataBody = "";
    let iterasi = 1;

    datas.forEach(data => {

        // hitung nilai cluster
        const c1 = Math.sqrt(Math.pow((nilai_c1-data.nilai_link),2));
        const c2 = Math.sqrt(Math.pow((nilai_c2-data.nilai_link),2));

        data.label = c1 == 0 ? label_c1 : label_c2;

        dataBody += `<tr>
                        <td>${iterasi++}</td>
                        <td>${data.waktu}</td>
                        <td width="100px">${data.email}</td>
                        <td>${data.nim}</td>
                        <td>${data.nama}</td>
                        <td>${data.mata_kuliah}</td>
                        <td>${data.minggu}</td>
                        <td width="300px">${data.link}</td>
                        <td>${data.label}</td>
                    </tr>`;
        $("#body-table").html(dataBody);
    });
    
    

});