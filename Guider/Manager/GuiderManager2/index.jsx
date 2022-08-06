import React from 'react';
import '../style.css'

function GuiderReception2(props) {
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 2. Chức năng MAN EXPECTED **</p>
            <span>----</span>
            <h1>2.1 Cách hoạt động:</h1>
            <ul>
                <li>Hệ thống sẽ lấy dữ liệu từ SUM của lễ tân đề tự động điền vào Expected.</li>
                <li>Manager cần làm Expected sau khi lễ tân gửi Sum để tránh trùm dữ liệu.</li>
            </ul>
            <p>Ví dụ: lễ tân KM2 có làm Sum ngày 1/8 có HI của khách R202 có lịch trình check in 1/8 ~ 2/8.</p>
            <p>Thì sau khi lễ tân gửi SUM thì hệ thống sẽ tự động điền vào ô R202 ngày 1/8 của Expected </p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629082664/Web%20report%20Project/Guider/expected_home_gwhyfl.png"
                    alt="man module view"
                />
                <p > Giao diện Expected. </p>
            </div>

            <p>Ngoài ra thì quản lý cũng có thể dễ dàng chỉnh sửa lại báo cáo này.</p>
            <p>Có thể thêm note nếu cần.</p>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629082134/Web%20report%20Project/Guider/expected_edit1_cazakv.png"
                    alt="man module view"
                />
            </div>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629082134/Web%20report%20Project/Guider/expected_edit2_kjtku2.png"
                    alt="man module view"
                />
                <p >Chỉnh sửa Expected . </p>
            </div>

            <p class="op-redcolor">* Riêng ở phần expected này áp dụng cơ chế tự lưu thao tác lên. </p>
            <p>Mỗi thay đổi sẽ tự động được cập nhận lên server. </p>
        </div >
    );
}

export default GuiderReception2;