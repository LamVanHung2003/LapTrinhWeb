$(document).ready(function () {
    function ktma() {
        let ma = $('#txtma').val();
        let mass = /^(BN-)(\d{5})$/;
        if (mass.test(ma)) {
            $("#erma").html("*");
            $("#txtma").removeClass("errborder");
            return true;
        }
        else {
            $('#erma').html("Mã sai");
            $("#txtma").addClass("errborder");
            return false;
        }
    }

    $('#txtma').blur(function (e) {
        ktma();
    });

    function ktmk() {
        let mk = $('#txtmk').val();
        let mkss = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (mkss.test(mk)) {
            $("#ermk").html("*");
            $("#txtmk").removeClass("errborder");
            return true;
        }
        else {
            $('#ermk').html("Mật khẩu không hợp lệ");
            $("#txtmk").addClass("errborder");
            return false;
        }
    }

    $('#txtmk').blur(function (e) {
        ktmk();
    });

    function khtrangay() {
        let ngay = $('#txtdate').val();
        let ngayss = new Date().getTime();
        let ngayNhap = new Date(ngay).getTime();
        if (ngayss <= ngayNhap) {
            $('#erdate').html('Ngày đúng');
            return true;
        }
        else {
            $('#erdate').html('Ngày sai');
            return false;
        }
    }
    $('#txtdate').blur(function (e) {
        khtrangay();
    });
    let stt = 1;
    $('#btn').click(function (e) {
        let ma = $("#txtma").val();
        let mk = $("#txtmk").val();
        let ngay = $("#txtdate").val();
        let loai = [];
            {
            $.each($("input[name='loai']:checked"), function () {
                loai.push($(this).val());
            });
              }
           
        let chuyenkhoa = $("#list option:selected").val();
        if (ktma() && ktmk()) {
            let tnew = "<tr><td>" + stt + "</td><td>" + ma + "</td><td>" + mk + "</td><td>" + ngay + "</td><td>" + loai + "</td><td>" + chuyenkhoa + "</td></tr>"
            $('#xuat').append(tnew);
            stt++;
        }
    });
});