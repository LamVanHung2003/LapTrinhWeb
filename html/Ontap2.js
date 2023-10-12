$(document).ready(function () {
    function ktraten(){
        let ten=$('#txtten').val();
        let t=/^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/
        if(!(t.test(ten))||ten==""){
            $('#er1').html('Ten sai va ten khong duoc de trong!!');
            return false;
        }
        else{
            $('#er1').html('(*)');  
            return true;
        }
    }
    $('#txtten').blur(function (e) { 
        ktraten();
    });

    function ktrasdt(){
        let sdt=$('#txtsdt').val();
        let so=/^0{1}\d{9}$/
        if(!(so.test(sdt))||sdt=="")
        {
            $('#er2').html('SDT khong de trong va sodt phai du 10');
            return false;
        }
        else{
            $('#er2').html('(*)');
            return true;
        }
    }
    $('#txtsdt').blur(function (e) { 
        ktrasdt() ;       
    });
    function ktradc(){
        let dc=$('#txtdc').val();
        if(dc==""){
            $('#er3').html('dia chi khong duoc de trong');
            return false;
        }else{
            $('#er3').html('(*)');
            return true;
        }
    }
    $('#txtdc').blur(function (e) { 
        ktradc();        
    });
    function ktranc(){
        let nc=$('#txtnam').val();
        if(nc==""){
            $('#er4').html(' khong duoc de trong');
            return false;
        }else{
            $('#er4').html('(*)');
            return true;
        }
    }
    $('#txtnam').blur(function (e) { 
        ktranc();        
    });


    let stt=1;
    $('#btn').click(function (e) { 
        if(ktraten()&&ktrasdt()&&ktradc()&&ktranc())
       {
        let ten=$('#txtten').val();
        let sdt=$('#txtsdt').val();
        let dc=$('#txtdc').val();
        let nc=$('#txtnam').val();
        let  noichon=$("input[name='noihoc']:checked").val();  
         let tnew="<tr><td>"+stt+"</td><td>"+ten+"</td><td>"+sdt+"</td><td>"+dc+"</td><td>"+nc+"</td><td>"+noichon+"</td></tr>"
        $('#xuat').append(tnew);
        stt++;}
    });
});