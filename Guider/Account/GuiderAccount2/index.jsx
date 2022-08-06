import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderAccount2(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 2. Tài Khoản**</p>
            <span>----</span>
            <p>* Vào góc trên bên phải màn hình sau đó ấn vào User Profile</p>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628881194/Web%20report%20Project/Guider/account_profile_ez0gqe.png"
                    alt="account profile"
                />
                <p > Thông tin của tài khoản </p>
            </div>
            <br />
            <p>Tại đây chúng ta có thể xem được thông tin tài khoản: </p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628881384/Web%20report%20Project/Guider/account_profile_main_ina9bu.png" alt="forgot password" />
            </div>
            <br />
            <p>Dòng dưới cùng có dòng CHANGE PASSWORD nơi mà mọi người có thể thay đổi nhanh mật khẩu của tài khoản đang có.</p>
            <p class="op-redcolor">* note: Các thông tin khác cần thay đổi xin liên hệ với Hải.</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628881568/Web%20report%20Project/Guider/account_change_pw_sh0xos.png" alt="forgot password" />
            </div>
        </div >
    );
}

export default GuiderAccount2;