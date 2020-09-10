class SV{
    constructor(mssv, name, mail){
        this.mssv = mssv;
        this.name = name;
        this.mail = mail;
    }
}

var list = [];
var delList = [];

function show(){
    for(i = 0; i< list.length; i++){
        document.getElementById("show").innerHTML += "<input type='checkbox' name = 'delete' >"+ list[i].mssv + " " +list[i].name + " " + list[i].mail + "<button id = 'btnEdit" + i + "'>Sua</button>" +"<br/>";
    }
}

function capnhat(){
    document.getElementById("show").innerHTML ="";
    show();
}

window.onload = function(){
    //s1 = new SV(1, "rtz", "hohohaha");
    //list.push(s1);
    //s2 = new SV(2, "rts", "hahahoho");
    //list.push(s2);
    var save = document.getElementById("save-btn");
    
    save.onclick = function(e){
        var mssv = document.getElementById("mssv").value;
        var name = document.getElementById("name").value;
        var mail = document.getElementById("mail").value; 
        s = new SV(mssv, name, mail)
        list.push(s);
        document.getElementById("sinh-vien-form").reset();
        document.getElementById("show").innerHTML += "<input type='checkbox' name = 'delete' >"+ s.mssv + " " +s.name + " " + s.mail + "<button id = 'btnEdit" + (list.length - 1) + "'>Sua</button>" + "<br/>";
        var delbtn = document.getElementById("delete-btn");
    
        delbtn.onclick = function(){
            delList = document.getElementsByName("delete");
            for(i = 0; i < delList.length; i++){
                if(delList[i].checked == true){
                    list.splice(i,1);
                }
            }
            capnhat();
        }
        e.preventDefault();
    }
    show();
    

   
}
console.log(list);
