$(document).ready(function () {
    function ktr(){
        let ma=$('#txtmsp').val();
        let masp=/^(SP)\d{4}((XK)|(NK))$/;
        if(masp.test(ma)){
            $('#er1').html('*');
            return true;
        }
        else{
            $('#er1').html('Ma san pham khong hop le');
            return false;
            
        }
    }
    function ktraten(){
        let t=$('#txtten').val();
        let ten=/^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/
        if(ten.test(t)){
            $('#er2').html('*');
            return true;
        }
        else{
            $('#er2').html('Ten khong hop le');
            return false;
        }
    }
    $('#txtmsp').blur(function (e) { 
        ktr();
    });
    $('#txtten').blur(function (e) { 
        ktraten();
        
    });

    $('#btn').click(function (e) { 
        let ma=$('#txtmsp').val();
        let ten=$('#txtten').val();
           //Lấy một giá trị của radio
        let hinhthuc=$("input[name='thanhtoan']:checked").val();
        //Lấy nhiều giá trị của checkbox
        let loai=[];
        $.each($("input[name='loai']:checked"), function () { 
             loai.push($(this).val())
        });
        // duyệt select lấy text hoặc value
        let loaisp=$('#lstloai option:selected').text();
        let thue=$('#lstloai option:selected').val();
       if(ktraten()&&ktr()){
        let trnew="<tr><td>"+ma+"</td><td>"+ten+"</td><td>"+loaisp+"</td><td>"+thue+"</td><td>"+hinhthuc+"</td><td>"+loai+"</td></tr>"
        $('#tbmsp').append(trnew);
       }
    });
     $("#lstloai").change(function (e) { 
                let thue=$('#lstloai option:selected').val();
                $('#txtthue').val(thue);
                // console.log(thue);
            });

});