import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderReception4(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 4. Chỉnh sửa báo cáo Sum **</p>
            <span>----</span>
            <h1>* Để chỉnh sửa lễ tân load lại ngày cần chỉnh sửa và chọn về REQUEST EDIT.</h1>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628922210/Web%20report%20Project/Guider/sum_sum_edit_show_bfc3wt.png"
                    alt="click request edit"
                />
                <p > Click vào phần Request Edit </p>
            </div>
            <br />
            <h1>* Điền lý do chỉnh sửa và ấn xác nhận</h1>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629015383/Web%20report%20Project/Guider/sum_edit_reason_zcerfx.png"
                    alt="request edit"
                />
                <p > Cửa sổ điền lý do và xác nhận chỉnh sửa </p>
            </div>
            <h1>Hoàn thành quá trình yêu cầu chỉnh sửa.</h1>
            <p>Chú ý 1</p>
            <ul>
                <li>Có 1 đoạn thông báo nhỏ màu xanh báo đã gửi thông báo cho Sup / Quản lý về việc thay đổi này</li>
                <li>Phần phía dưới chúng ta có thể thấy đã có thể Save và Sent Report như thông thường</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629015494/Web%20report%20Project/Guider/sum_edit_noti_edit_k5n8bn.png"
                    alt="notification and can edit button"
                />
                <p > Thông báo và thay đổi khả năng chỉnh sửa </p>
            </div>
            <p>Chú ý 2</p>
            <ul>
                <li>Chú ý số nhỏ cạnh tên báo cáo là version của báo cáo đó.</li>
                <li>Sau khi gửi thông báo chỉnh sửa thì version sẽ lên thành +1</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629016033/Web%20report%20Project/Guider/sum_edit_version_vr2qtu.png"
                    alt="sum version"
                />
                <p > Version Sum</p>
            </div>

            <p>Còn lại thao tác làm báo cáo và gửi vẫn như bình thường</p>
        </div >
    );
}

export default GuiderReception4;