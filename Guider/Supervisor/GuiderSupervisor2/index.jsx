import React from 'react';
import '../style.css'

function GuiderSupervisor2() {
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 2. Báo Cáo Survey **</p>
            <span>----</span>
            <h1>2.1 Cách hoạt động :</h1>
            <ul>
                <li>Hệ thông sẽ lấY dữ liệu từ Tablet.</li>
                <li>Hệ thống sẽ tự động tính toán và tạo ra các báo các.</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647247179/Web%20report%20Project/Guider/Sup_take_data_szypbp.png"
                    alt="Data Map"
                />
                <p > Sơ đồ hoạt động. </p>
            </div>
            <br />
            <h1>2.2 Giao diện :</h1>
            <ul>
                <li>Click vào mục [SURVEY]</li>
                <li>Xem hình ảnh để hiểu qua về giao diện:</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647248460/Web%20report%20Project/Guider/Sup_chi_tiet1_aewyfg.png"
                    alt="Detail 1"
                />
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647248459/Web%20report%20Project/Guider/Sup_chi_tiet2_lyqqoy.png"
                    alt="Detail 2"
                />
                <p > Giao diện. </p>
            </div>
            <br />
            <h1>2.3 Gửi báo cáo Survey :</h1>
            <ul>
                <li>Supervisor chọn tháng cần thực hiện gửi Survey.</li>
                <li>Kiểm tra lại xem có survey nào cần điểu chỉnh lại.</li>
                <li>Nếu đã ổn với dữ liệu survey hiện thị thì chon gửi báo cáo đi.</li>
                <li>Hệ thống hỗ trợ báo cáo Tuần và Tháng ( báo cáo Năm sẽ được cập nhật sau).</li>
                <li style="color:red">Chỉ gửi được báo cáo trong 2 tháng gần nhất.</li>
            </ul>

            <ul>
                <li style="fontWeight:600">Bước 1: Chọn tháng cần gửi báo cáo</li>
                <li>* Nếu làm vào tháng hiện tại thì bỏ qua bước chọn ngày</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647249398/Web%20report%20Project/Guider/Sup_make_report1_flvzc7.png"
                    alt="Select Date"
                />
                <p > Chọn tháng cần báo cáo. </p>
            </div>
            <ul>
                <li style="fontWeight:600">Bước 2: Check lại thông tin.</li>
                <li>* Chủ yếu là xem có Survey nào cần ấn / xoá đi hay không.</li>
                <li>* Thường là các Survey Test.</li>
                <li>* Hoặc có tình huống là khách chọn nhầm điểm → đã báo cáo đề xuất.</li>
                <li style="color:red">* Các vấn đề về ẩn / xoá Survey cần liên hệ Hải để được thực hiện.</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647252147/Web%20report%20Project/Guider/Sup_make_report2_lwpucp.png"
                    alt="Check Again Survey Result"
                />
                <p > Hệ thống hiển thị thông tin của tất cả các Survey. </p>
            </div>
            <ul>
                <li>* Kiểm tra phần nhận xét của khách xin có cần phản hồi lại không..</li>
                <li style="color:red">* Chỉ chỉnh sửa được mục này trong vòng 2 tháng gần nhất.</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647942716/Web%20report%20Project/Guider/Sup_make_guest_fb_mr9fqc.png"
                    alt="Check Again Guest Feedback/Onpinion"
                />
                <p > Bảng hiện thị ý kiếm khách hàng và Sup có thể note lại thông tin. </p>
            </div>

            <ul>
                <li style="fontWeight:600">Bước 3: Gửi Mail báo cáo.</li>
                <li>* Sau khi đã kiểm tra các survey không có vấn đề gì.</li>
                <li>* Supervisor có thể ấn vào nút [Send Mail] để thực hiện gửi báo cáo.</li>
                <li>* Có một bảng thông tin cho phép lựa chọn báo cáo theo Week/ Month tên của người thực hiên, và tuỳ chọn một dòng note kèm theo mail.</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647253829/Web%20report%20Project/Guider/Sup_make_report3png_f7jbvm.png"
                    alt="Check Again Survey Result"
                />
                <p > Bảng điền thông tin gửi báo cáo. </p>
            </div>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647254034/Web%20report%20Project/Guider/Sup_make_report4_jxcujl.png"
                    alt="Check Again Survey Result"
                />
                <p > Mail báo cáo được gửi về. </p>
            </div>
        </div >
    );
}

export default GuiderSupervisor2;