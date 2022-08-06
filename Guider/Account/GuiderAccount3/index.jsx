import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderAccount3(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 3. Thông Báo**</p>
            <span>----</span>
            <p>* Gần góc bên phải sẽ có hình quả chuông thông báo.</p>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628882334/Web%20report%20Project/Guider/notification_me6fwk.png"
                    alt="Notification"
                />
                <p > Thông báo của ứng dụng </p>
            </div>
            <br />
            <p >* Các thông báo hiện có báo gồm: </p>
            <ul>
                <li>Lễ tân cầu chỉnh sửa báo cáo</li>
                <li>Quản lý chỉnh sửa báo cáo</li>
            </ul>

            <p>* Ngoài ra trong thời gian tới sẽ có nhiều tính năng tại đây</p>
            <p>Ví dụ: Thông báo khách Debit Cancel nhưng chưa thanh tán, hệ thống sẽ gửi thông báo nhắc nhở</p>
        </div >
    );
}

export default GuiderAccount3;