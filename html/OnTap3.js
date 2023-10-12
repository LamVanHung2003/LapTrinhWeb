$(document).ready(function () {
    
    function ktraten() {
        let ten=$("#txtten").val();
        let t=/^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/
        if(!(t.test(ten))||(ten=="")){
            $('#er1').html('Ten khong dung ');
            return false;
        }
        else{
          
            $("#er1").html('(*)');
            return true;
        }
    }
    $('#txtten').blur(function (e) { 
        ktraten();
        
    });
   
    
    stt=1;
    $('#btn').click(function (e) { 
        let ten=$('#txtten').val();
        let lop=$("#txtlop option:selected").text();
        let monhoc=$("#txtmonhoc option:selected").text();
        let sotinchi=$("#txtmonhoc option:selected").val();
        let ngay=$('#txtngay').val();
        let loai=$("input[name='loai']:checked").val();
        let ht=[];
        $.each($("input[name='hinhthuc']:checked"), function () { 
             ht.push($(this).val());
        });
       if(ktraten()){
        let tnew="<tr><td>"+stt+"</td><td>"+ten+"</td><td>"+lop+"</td><td>"+monhoc+"</td><td>"+sotinchi+"</td><td>"+ngay+"</td><td>"+loai+"</td><td>"+ht+"</td></tr>"
        $('#xuat').append(tnew);
        stt++;
       }
        
    });
    $('#txtmonhoc').change(function (e) { 
       let sotinchi=$("#txtmonhoc option:selected").val();
        $('#stc').val(sotinchi);
    });
});