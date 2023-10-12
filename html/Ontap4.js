$(document).ready(function () {
    function ktrama(){
        let ma=$('#txtma').val();
        let masp=/^(SP-)[0-9]{4}$/
        if(!(masp.test(ma))||ma==""){
           $('#er1').html('Ma Sai');
           $('#txtma').addClass('er'); 
           return false;
        }
        else{
            $('#er1').html('(*)');
            $('#txtma').removeClass('er');
            return true;
        }
    }
    $('#txtma').blur(function (e) { 
        ktrama();
    });

    function ktraten(){
        let ten=$('#txtten').val();
        let tensp=/^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/
        if(!(tensp.test(ten))||ten==""){
           $('#er2').html('Ten Sai');
           $('#txtten').addClass('er'); 
           return false;
        }
        else{
            $('#er2').html('(*)');
            $('#txtten').removeClass('er');
            return true;
        }
    }
    $('#txtten').blur(function (e) { 
        ktraten();
    });
    function ktransx(){
        let ngaysx=$('#txtnsx').val();
        let ngayss=new Date().getTime();
        let ngay=new Date(ngaysx).getTime();
        if((ngay>ngayss)||ngaysx==""){
            $('#er3').html('Ngay sản xuất phải nhỏ hơn ngày hiện tại');
            return false;
        }
        else{
            $('#er3').html('(*)');
            return true;
        }
    }
    $('#txtnsx').blur(function (e) { 
        ktransx();
    });

    function ktrahsd(){
        let hansd=$('#txthsd').val();
        let ngayss=new Date().getTime();
        let ngay=new Date(hansd).getTime();
        if(ngay<=ngayss||hansd==""){
            $('#er4').html('HSD sai');
            return false;
        }
        else{
            $('#er4').html('(*)');
            return true;
        }
    }
    $('#txthsd').blur(function (e) { 
        ktrahsd();        
    });
   STT=1
    $("#btn").click(function (e) { 
        let ma=$('#txtma').val();
        let ten=$('#txtten').val();        
        let ngaysx=$('#txtnsx').val();
        let hansd=$('#txthsd').val();
        let loaisp=$('#loaisp option:selected').text();
        let hinhanh=$('#txtfile').val();
        let thue=$('#loaisp option:selected').val();
        let noicap=$("input[name='noicap']:checked").val();
        let thanhtoan=$("input[name='thanhtoan']:checked").val();
        let loai=[];{
            $.each($("input[name='loai']:checked"), function () { 
                 loai.push($(this).val());
            });
        }
        if (ktrama() && ktraten() && ktransx() && ktrahsd()) {
            let trnew= "<tr><td>"+STT+"</td><td>"+ma+"</td><td>"+ten+"</td><td>"
            +ngaysx+"</td><td>"+hansd+"</td><td>"+loaisp+"</td><td>"+hinhanh+ 
            "</td><td>"+thue+"</td><td>"+noicap+"</td><td>"+thanhtoan+"</td><td>"+loai+"</td> </tr>"
           $('#xuat').append(trnew);
            STT++;
       }

    });
    $("#loaisp").change(function (e) { 
        let thue=$("#loaisp option:selected").val();
        $("#txtthue").val(thue);        
    });
});