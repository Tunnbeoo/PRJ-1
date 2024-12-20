<?php

function taogiohang($tensp, $img, $dongia, $soluong, $thanhtien, $idbill)
{
    $conn = ketnoidb();
    $sql = "INSERT INTO cart (tensp, img, dongia, soluong, thanhtien, idbill)
        VALUES (:tensp, :img, :dongia, :soluong, :thanhtien, :idbill)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':tensp' => $tensp,
        ':img' => $img,
        ':dongia' => $dongia,
        ':soluong' => $soluong,
        ':thanhtien' => $thanhtien,
        ':idbill' => $idbill
    ]);
    $conn = null;
}

function taodonhang($name, $address, $tel, $email, $total, $pttt)
{
    $conn = ketnoidb();
    $sql = "INSERT INTO bill (name, address, tel, email, total, pttt)
        VALUES (:name, :address, :tel, :email, :total, :pttt)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':address' => $address,
        ':tel' => $tel,
        ':email' => $email,
        ':total' => $total,
        ':pttt' => $pttt
    ]);
    $last_id = $conn->lastInsertId();
    $conn = null;
    return $last_id;
}

function ketnoidb()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tunnbeoo";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}

function tongdonhang()
{
    $tong = 0;
    if (isset($_SESSION['giohang']) && (is_array($_SESSION['giohang']))) {
        if (sizeof($_SESSION['giohang']) > 0) {
            for ($i = 0; $i < sizeof($_SESSION['giohang']); $i++) {
                $tt = intval($_SESSION['giohang'][$i][2]) * intval($_SESSION['giohang'][$i][3]);
                $tong += $tt;
            }
        }
    }
    return $tong;
}

function showgiohang()
{
    $ttgh = "";
    if (isset($_SESSION['giohang']) && (is_array($_SESSION['giohang']))) {
        if (sizeof($_SESSION['giohang']) > 0) {
            $tong = 0;
            for ($i = 0; $i < sizeof($_SESSION['giohang']); $i++) {
                $tt = intval($_SESSION['giohang'][$i][2]) * intval($_SESSION['giohang'][$i][3]);
                $tong += $tt;
                $ttgh .= '<tr>
                    <td>' . ($i + 1) . '</td>
                    <td><img src="upload/' . htmlspecialchars($_SESSION['giohang'][$i][0]) . '" alt="' . htmlspecialchars($_SESSION['giohang'][$i][1]) . '" class="cart__table-img"></td>
                    <td>' . htmlspecialchars($_SESSION['giohang'][$i][1]) . '</td> 
                    <td>' . htmlspecialchars($_SESSION['giohang'][$i][2]) . '</td>
                    <td>' . htmlspecialchars($_SESSION['giohang'][$i][3]) . '</td>
                    <td>' . number_format($tt, 0, ',', '.') . ' VNĐ</td>
                    <td>
                        <a href="cart.php?delid=' . $i . '">Xóa</a>
                    </td>
                </tr>';
            }
            $ttgh .= '
                <tr class="cart__table-money">
                    <th class="cart__table-money-text" colspan="5">
                        Tổng đơn hàng 
                    </th>
                    <th colspan="2">
                        ' . number_format($tong, 0, ',', '.') . ' VNĐ
                    </th>
                </tr>';
        } else {
            $ttgh .= '<tr><td colspan="7">Giỏ hàng trống</td></tr>';
        }
    } else {
        $ttgh .= '<tr><td colspan="7">Giỏ hàng trống</td></tr>';
    }
    return $ttgh;
}

function getIdUserByUsername($username)
{
    $conn = ketnoidb();
    $sql = "SELECT id FROM taikhoan WHERE tendangnhap = :username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $conn = null;
    return $result['id'];
}

function getOrdersByUser($user)
{
    $id_user = getIdUserByUsername($user);
    $conn = ketnoidb();
    $sql = "SELECT * FROM bill WHERE `name` = :id_user";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id_user', $id_user, PDO::PARAM_STR);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $conn = null;
    return $result;
}

function getOrderDetails($orderId)
{
    $conn = ketnoidb();
    $sql = "SELECT * FROM cart WHERE idbill = :orderId";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':orderId', $orderId, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $conn = null;
    return $result;
}

function huyDonHang($orderId)
{
    $conn = ketnoidb();
    $sqlDeleteCart = "DELETE FROM cart WHERE idbill = :orderId";
    $stmtDeleteCart = $conn->prepare($sqlDeleteCart);
    $stmtDeleteCart->bindParam(':orderId', $orderId, PDO::PARAM_INT);
    $stmtDeleteCart->execute();

    $sqlDeleteBill = "DELETE FROM bill WHERE id = :orderId";
    $stmtDeleteBill = $conn->prepare($sqlDeleteBill);
    $stmtDeleteBill->bindParam(':orderId', $orderId, PDO::PARAM_INT);
    $stmtDeleteBill->execute();

    $_SESSION['order_cancel_success'] = true;
    $conn = null;
}

function searchProducts($searchQuery)
{
    $conn = ketnoidb();
    $sql = "SELECT * FROM sanpham WHERE tensp LIKE :searchQuery";
    $stmt = $conn->prepare($sql);
    $searchTerm = '%' . $searchQuery . '%';
    $stmt->bindParam(':searchQuery', $searchTerm, PDO::PARAM_STR);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $conn = null;
    return $result;
}
