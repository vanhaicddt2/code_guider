import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderReception3(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 3. Chức năng tạo báo cáo MAN MAKE SUM**</p>
            <span>----</span>
            <h1>* 3.1 Cách hoạt động</h1>
            <p>Tính năng này sẽ lấy dữ liệu từ :</p>
            <ul>
                <li>Sum của lễ tân : về các dòng kiểu massage, pickup, breakfast ( lễ tân phải note đúng theo mẫu )</li>
                <li>Sum expected : Dữ liệu từ phần MAN EXPECTED.</li>
                <li>Các dữ liệu khác từ server : Total profit, Room total, …</li>
            </ul>

            <br />
            <h1>3.2 Thao tác làm báo cáo:</h1>
            <h2>Bước 1: Chọn ngày cần cần thực hiện.</h2>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629085746/Web%20report%20Project/Guider/sum_report_day_psv2it.png"
                    alt="date seleted"
                />
                <p > Chọn ngày cần làm báo cáo </p>
            </div>
            <h2>Bước 2: Thực hiện hoàn thành báo cáo SUM.</h2>
            <p>Hiện tại hệ thống đang cố gắng để đẩy dữ liệu tự động nhiều nhất có thể.</p>
            <p>Nếu các mục vẫn bị thiếu thì Manager thực hiện tự điền vào.</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629085745/Web%20report%20Project/Guider/sum_report_interview_bg3gul.png"
                    alt="sum report interview"
                />
                <p > Giao diện báo cáo SUM </p>
            </div>

            <p>Quản lý có thể lưu lại báo cáo, để thực hiện chỉnh sửa lại, chú ý đây chỉ là lưu lại báo cáo chứ chưa phải thực hiên gửi báo cáo đi.</p>
            <p>** Cách hoạt động giống với lưu/ gửi Sum của lễ tân.</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629085745/Web%20report%20Project/Guider/sum_report_savepng_njqhbv.png"
                    alt="save sum manager"
                />
                <p > Lưu lại thao tác khi cần </p>
            </div>
            <h2>Bước 3: Gửi Sum</h2>
            <p>Ấn vào nút [Sent Report] để thực hiện gửi báo cáo đi.</p>
            <p>Sau khi gửi thì báo cáo sẽ không còn chỉnh sửa được nữa</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629097596/Web%20report%20Project/Guider/sum_report_sent_notifi_xwkp1h.png"
                    alt="sent and confirm sent"
                />
                <p > Gửi báo cáo và xác nhận gửi</p>
            </div>

            <p>* Chú ý các nút (button) để xem report đó có chỉnh sửa được hay không</p>
            <img
                class="img-link"
                src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629096738/Web%20report%20Project/Guider/sum_report_status_kksbxa.png"
                alt="status"
            />
            <p > Sau khi gửi sẽ không chỉnh sửa được nữa </p>
            <br />
            <h1>3.3 Chỉnh sửa báo cáo:</h1>
            <p>Muốn chỉnh sửa lại báo cáo thì cần chọn ngày cần chỉnh sửa và ấn REQUEST EDIT:</p>
            <p>Khi ấn vào sẽ cần điều lý do cần chỉnh sửa, sẽ có thông báo đến A.M và không cần chờ A.M quyết định việc có được chỉnh sửa hay không ( giống với lễ tân)</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629098600/Web%20report%20Project/Guider/sum_report_edit_notifi_p3xmtl.png"
                    alt="edit and notification"
                />
                <p > Chỉnh sửa và gửi thông báo </p>
            </div>
            <p class="op-redcodor">Chú ý là số phiên bản version báo cáo sẽ tăng lên +1:</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629098600/Web%20report%20Project/Guider/sum_report_version_zfvjwh.png"
                    alt="version sum"
                />
                <p > Version Sum </p>
            </div>
        </div >
    );
}

export default GuiderReception3;