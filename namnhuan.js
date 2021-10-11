let namnhuan = false;
let year=parseInt(prompt('Hay nhap nam!'))

let chiahetcho4 = year % 4 ==0;
    if(chiahetcho4){
        let chiahetcho100 = year % 100 ==0;
            if (chiahetcho100){
                let chiahetcho400 = year % 400 ==0;
                    if (chiahetcho400){
                        namnhuan=true;
                    }
            }else{namnhuan=true;}
    }
if (namnhuan){
    alert(namnhuan+ " la nam nhuan")
} else {
    alert(namnhuan + " khong phai la nam nhuan")
}