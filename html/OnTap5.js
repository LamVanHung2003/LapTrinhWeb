$(document).ready(function () {
    function ktraserial(){
        let ma=$('#txtma').val();
        let so=/^(\w{5,})$/
        if(!so.test(ma)){
            $('#er1').html('So serial sai');
            $('#txtma').addClass('er');
            return false;
        }
        else{
            $('#er1').html('*');
            $('#txtma').removeClass('er');
            return true;
        }
    }
    $('#txtma').blur(function (e) { 
        ktraserial();        
    });

    function ktramota(){
        let mota=$('#txtmota').val();
        if(mota==""){
            $('#er2').html('Khong de trong');
            $('#txtmota').addClass('er');
            return false;
        }
        else{
            $('#er2').html('*');
            $('#txtmota').removeClass('er');
            return true;
        }
    }
    $('#txtmota').blur(function (e) { 
        ktramota();        
    });

    function ktratrongluong(){
        let tl=$('#txttl').val();
        if(tl<=0){
            $('#er3').html('trongluong>0');
            $('#txttl').addClass('er');
            return false;
        }
        else{
            $('#er3').html('*');
            $('#txttl').removeClass('er');
            return true;
        }
    }
    $('#txttl').blur(function (e) { 
        ktratrongluong();        
    });

   $('#txttl').change(function (e) { 
        let tl=$('#txttl').val();
        if(tl<20)
            var chiphi=tl*35000;
        else if(tl<50)
            var chiphi=tl*30000;
        else 
            var chiphi=tl*15000;
        $('#chiphi').val(chiphi);
   });
   stt=1;
   $('#btn').click(function (e) { 
        let ma=$('#txtma').val();
        let mota=$('#txtmota').val();
        let hinhanh=$('#hinhanh').val();
        let tl=$('#txttl').val();
        let cp=$('#chiphi').val();
       if(ktraserial()&&ktramota()&&ktratrongluong()){
        tnew="<tr><td>"+stt+"</td><td>"+ma+"</td><td>"+mota+"</td><td>"+hinhanh+"</td><td>"+tl+"</td><td>"+cp+"</td></tr>"
        $('#xuat').append(tnew);
        stt++;
       }
   });
});