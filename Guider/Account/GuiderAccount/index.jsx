import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderAccount(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 1. Đăng Nhập **</p>
            <span>----</span>
            <p>Link web(test)</p>
            <a href="https://reportazumaya.herokuapp.com/">Link web</a>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628851668/Web%20report%20Project/Guider/login_usbm3k.png"
                    alt="login"
                />
                <p > Giao diện login</p>
            </div>
            <br />
            <p>Các tài khoản và mật khẩu sẽ được cung cấp bởi Hải và dựa theo mail @azumaya để làm tên đăng nhập.
                Ví dụ chi nhánh Kim Mã 2 sẽ có các tài khoản như:
            </p>
            <ul>
                <li>Lễ tân: reservationhanoi3@azumayavietnam.com</li>
                <li>Supervisor: supervisorhanoi3@ azumayavietnam.com</li>
                <li>Manager: managerhanoi3@azumayavietnam.com</li>
            </ul>
            <br />
            <p>Các thông tin về tài khoản đã được thiết lập sẵn. </p>
            <p>Các thay đồi cần liên hệ Hải để thay đổi. ( sẽ nói về mục này sau)</p>
            <br />
            <h1>* Trong trường hợp người dung quê mật khẩu:</h1>
            <i class="far fa-hand-point-right arrow-hand"></i>
            <p>  Ấn vào dòng "Forgot Password?"</p>
            <br />
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628851668/Web%20report%20Project/Guider/login_usbm3k.png" alt="forgot password" />
            </div>
            <br />
            <p>
                <i class="fas fa-long-arrow-alt-right arrow-hand"></i>
                <i class="far fa-hand-point-right arrow-hand"></i>
                Khi ấn vào 1 giao diện mới sẽ hiện ra, chúng ta sẽ nhập mail để request đổi lại mật khẩu.
            </p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628852351/Web%20report%20Project/Guider/add_mail_ho35em.png" alt="add email" />
            </div>
            <br />
            <p>+ Sau khi nhập email có trong list Azumaya để gửi mail về Reset.</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628857276/Web%20report%20Project/Guider/add_mail_forgot_fmzzxs.png" alt="add email forgot" />
            </div >
            <br />
            <p>+ Trong trường hợp mail không thuộc Azumaya thì sẽ báo lỗi.	</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628868978/Web%20report%20Project/Guider/erorr_mail_address_xmxhnw.png"
                    alt="error_mail_address" />
            </div >
            <br />
            <p>+ Sau đó kiểm tra hòm thư và  tìm đến mail </p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628869233/Web%20report%20Project/Guider/mail_content_change_pass_waegcg.png"
                    alt="mail content change pass" />
            </div >
            <p>Ấn và nút RESET PASSWORD để quay về giao diện thay đổi mật khẩu.</p>
            <p><i class="far fa-hand-point-right arrow-hand"></i>	Chú ý lần đầu có thể thư sẽ bị vào mục Spam.</p>
            <p><i class="far fa-hand-point-right arrow-hand"></i>  Thay đổi mật khẩu mới nhận ít nhất 6 ký tự và xác nhận mật khẩu đúng theo đó.</p>
            <br />
            <p>Xác nhận đã thay đổi mật khẩu.</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628877836/Web%20report%20Project/Guider/success_change_pass_imjbhz.png"
                    alt="success change pass" />
            </div >
        </div >
    );
}

export default GuiderAccount;