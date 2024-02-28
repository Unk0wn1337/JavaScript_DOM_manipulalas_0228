export function lista(lista){
        for (let index = 0; index < lista.length; index++) {
            console.log(lista[index].tipus, lista[index].ar);
            
        }
}

export function felsorolasOsszeallit(lista){
    let txt ="<ul>";
    for (let index = 0; index < lista.length; index++) {
        txt+= (`<li>Tipus:${lista[index].tipus}, ${lista[index].ar}</li>`);
        
    }
    txt += "</ul>";
    return txt;
}

export function divesHarom(lista){
    let txt = document.getElementById("dives");
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="termekek" >`
        txt += (`<h3>Tipus: ${lista[index].tipus}</h3><p> Szin: ${lista[index].szin}</p><p> ar: ${lista[index].ar}</p>`)
        txt += `</div>`
    }
    return txt;   
}

export function tablazat(lista){
    let txt = document.getElementById("tablazat");
    txt += `<table>
                <tr>
                    <th>tipus</th>
                    <th>szin</th>
                    <th>ar</th>
                </tr>
            </table>`
    for (let index = 0; index < lista.length; index++) {
        txt += `<tr>
                    <td>${lista[index].tipus}<td>
                    <td>${lista[index].szin}<td>
                    <td>${lista[index].ar}<td>
                </tr>`
    }
    return txt
}

export function osszegzes(lista){
    let txt = document.getElementById("osszegzes");
    let osszeg = 0;
    for (let index = 0; index < lista.length; index++) {
        osszeg += lista[index].ar;
    }
    txt += `<p>Összege: ${osszeg}</p>`
    
    return osszeg;    
}

export function legdragabbTermekNeve(lista){
    let txt = document.getElementById("osszegzes");
    let legdragabb = 0
    let legdragabbNeve= "";
    
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].ar > legdragabb){
            legdragabbNeve = lista[index].tipus;
        }
    }
    txt += `<p>legdrágább termék neve: ${legdragabbNeve}</p>`    

    return txt;
}

export function hanyKoromCipo(lista){
    let txt = document.getElementById("osszegzes");
    let db = 0;
    for (let index = 0; index < lista.length; index++) {
        if(lista[index].tipus == "körömcipő"){
            db += 1;
        }
    }
    return db;   
}