class SV{
    constructor(mssv, name, mail){
        this.mssv = mssv;
        this.name = name;
        this.mail = mail;
    }
}

var list = [];
var checkList = [];
var delList = [];

function show(){
    for(var i = 0; i< list.length; i++){
        document.getElementById("show").innerHTML += "<input type='checkbox' name = 'delete' >"+ list[i].mssv + " " +list[i].name + " " + list[i].mail + "</br>";
    }
}

function capnhat(){
    document.getElementById("show").innerHTML ="";
    show();
}

window.onload = function(){
    var save = document.getElementById("save-btn");
    
    save.onclick = function(e){
        var mssv = document.getElementById("mssv").value;
        var name = document.getElementById("name").value;
        var mail = document.getElementById("mail").value; 
        s = new SV(mssv, name, mail)
        list.push(s);
        document.getElementById("sinh-vien-form").reset();
        document.getElementById("show").innerHTML += "<input type='checkbox' name = 'delete' >"+ s.mssv + " " +s.name + " " + s.mail +  "</br>" ;
        var delbtn = document.getElementById("delete-btn");

        delbtn.onclick = function(){
            var j = 0;
            checkList = document.getElementsByName("delete");
            for(var i = 0; i < checkList.length; i++){
                if(checkList[i].checked == true){
                    delList[j] = i - j;
                    j++;
                }
                
            }
            for(var i = 0; i<delList.length; i++){
                list.splice(delList[i],1);
            }
            capnhat();
        }
        e.preventDefault();
    }
    show();
    

   
}
console.log(list);
