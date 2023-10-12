$(document).ready(function () {
    // ktra ma BN
    function ktrama() {
        let ma = $('#txtma').val();
        let m = /^(BN-)([0-9]{5})$/
        if (!(m.test(ma)) || ma == "") {
            $('#er1').html('(*)BN-YYYYY');
            $('#txtma').addClass('er');
            return false;
        }
        else {
            $('#er1').html('(*)');
            $('#txtma').removeClass('er');
            return true;
        }
    }
    $('#txtma').blur(function (e) {
        ktrama();
    });
    //Ktra mat khau
    function ktramk() {
       let mk=$('#txtmk').val();
       let pass=/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*_-])(?=.{6,})/
       if(!pass.test(mk)){
        $('#er2').html('Mat khau khong hop le');
        $('#txtmk').addClass('er');
        return false;
       }
       else{
        $('#er2').html('*');
        $('#txtmk').removeClass('er');
        return true;
       }
       
    }
    $('#txtmk').blur(function (e) {
        ktramk();
    });

    function khtrangay() {
        let ngay = $('#txtngay').val();
        if (ngay == "") {
            $('#er3').html('Ngay khong duoc trong');
            return false;
        }
        else {
            $('#er3').html('(*)');
            return true;
        }
    }
    $('#txtngay').blur(function (e) {
        khtrangay();
    });
    stt = 1;
    $('#btn').click(function (e) {
        let ma = $('#txtma').val();
        let mk = $('#txtmk').val();
        let ngay = $('#txtngay').val();
        let chuyenkhoa = $("#chuyen option:selected").val();
        let phuthu = [];
        {
            $.each($("input[name='loai']:checked"), function () {
                phuthu.push($(this).val());
            });
        }
        if (ktrama() && ktramk() && khtrangay()) {
            let tnew = "<tr><td>" + stt + "</td><td>" + ma + "</td><td>" + mk + "</td><td>" + ngay + "</td><td>" + phuthu + "</td><td>" + chuyenkhoa + "</td></tr>"
            $('#xuat').append(tnew);
            stt++;
        }
    });
});