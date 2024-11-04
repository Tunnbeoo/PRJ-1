<?php
    function dtb(){
        $diem = func_get_args();
        $count = count($diem);
        $tong = 0;
        foreach ($diem as $diem) {
            $tong += $diem;
        }
        $dtb = $tong/$count;
        return $dtb;
    }

    function xeploai($dtb){
        if ($dtb >= 9) {
            $xl = "XUẤT SẮC";
        }elseif (($dtb>=8)&&($dtb<9)) {
            $xl = "GIỎI"; 
        }elseif (($dtb >=6.5)&&($dtb<8)) {
            $xl = "KHÁ";
        }elseif (($dtb >=5)&&($dtb<6.5)) {
            $xl = "TRUNG BÌNH";
        }else {
            $xl = "YẾU";
        }
        return $xl;
    }

    function showkq(){
        $ds = func_get_args();
        $kq = "
                <table border = '1' cellpadding='5' style='border-collapse: collapse'>
                    <tr>
                        <td>MSSV</td>
                        <td>:</td>
                        <td>".$ds[0]."</td>
                    </tr>
                    <tr>
                        <td>Giai đoạn 1</td>
                        <td>:</td>
                        <td>".$ds[1]."</td>
                    </tr>
                    <tr>
                        <td>Giai đoạn 2</td>
                        <td>:</td>
                        <td>".$ds[2]."</td>
                    </tr>
                    <tr>
                        <td> Điểm Final</td>
                        <td>:</td>
                        <td>".$ds[3]."</td>
                    </tr>
                    <tr>
                        <td> Điểm Tổng</td>
                        <td>:</td>
                        <td>".$ds[4]."</td>
                    </tr>
                    <tr>
                        <td>ĐIỂM TRUNG BÌNH</td>
                        <td>:</td>
                        <td>".$ds[5]."</td>
                    </tr>
                    <tr>
                        <td>XẾP LOẠI</td>
                        <td>:</td>
                        <td>".$ds[6]."</td>
                    </tr>
                </table>
            ";
            return $kq;
    }
?>