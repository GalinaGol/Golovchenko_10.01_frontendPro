function tableCreate(row, col){
    const body = document.body;
    const tbl  = document.createElement('table');
    tbl.style.width  = '400px';
    tbl.style.border = '1px solid black';
    let k = 1;
    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                const td = tr.insertCell();
                td.appendChild(document.createTextNode(k++));
                td.style.border = '1px solid black';
            }     
    }
    body.appendChild(tbl);
}

tableCreate(10,10)