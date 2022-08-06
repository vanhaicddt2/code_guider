import React from 'react';
import '../style.css'

function GuiderReception2(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 2. Tạo Báo Cáo Sum **</p>
            <span>----</span>
            <h1>2.1 Cách hoạt động :</h1>
            <ul>
                <li>Hệ thông RC Make Sum được kết nối với data của Moja và Azumaya.</li>
                <li>Khi lễ tân chọn ngày làm báo cáo: hệ thống sẽ kiếm tra xem trên Data của Azumaya có báo cáo đó chưa, nếu có sẽ trả về Data ( Không truy cập Moja Data nữa) .</li>
                <li>Nếu không có Data tại Azumaya hệ thống sẽ điều hướng dang Moja data.</li>
                <li>Ngoài ra thì sẽ có các tính năng lấy dữ liêu từ Debit sẽ được nhắc đến sau.</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628885756/Web%20report%20Project/Guider/sum_moja_connect_ittpyv.png"
                    alt="Data Map"
                />
                <p > Sơ đồ hoạt động. </p>
            </div>
            <br />
            <h1>2.2 Giao diện :</h1>
            <p>Click vào mục [RC SUM]</p>
            <p>Xem hình ảnh để hiểu qua về giao diện </p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628886079/Web%20report%20Project/Guider/sum_rc_sum_zvouag.png"
                    alt="Data Map"
                />
                <p > Giao diện RC SUM. </p>
            </div>
            <p>Các chú ý:</p>
            <ul>
                <li>Mặc định hệ thống sẽ chọn ngày hiện tại (today).</li>
                <li>Khi đã load dữ liêu sẽ không được chọn lại ngày nữa, muốn chọn lại cần reset hoặc ấn F5.</li>
                <li>Có thể lưu báo cáo Sum và gửi sau đó.</li>
            </ul>
            <h1>2.3 Tạo báo cáo Sum :</h1>
            <p>* Hướng dẫn tạo mới báo cáo Sum lễ tân *</p>
            <p>* Nếu ngày báo cáo đã có dữ liêu thì sẽ load lại dữ liệu cũ *</p>
            <br />
            <p>Bược 1: Chọn ngày tháng làm Sum.</p>
            <p>* Nếu làm vào hôm hiện tại thì bỏ qua bước chọn ngày</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628886448/Web%20report%20Project/Guider/sum_select_day_c5zvi4.png"
                    alt="Select Date Sum"
                />
                <p > Lựa chọn ngày báo cáo. </p>
            </div>
            <br />
            <p>Bược 2: Check lại thông tin.</p>
            <ul>
                <li>Check lại các HI đã được tự động thêm vào.</li>
                <li>Hiện thống sẽ tự động điền :
                    <ul>
                        <li>Nếu HI đó là Company Pay: tự động note là Debit Company.</li>
                        <li>Nếu là HI tự trả :tự động điền ở cột Cash / Card thì lễ tân sẽ xóa ô còn lại nếu cần</li>
                    </ul>
                </li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628886761/Web%20report%20Project/Guider/sum_step2_odqfju.png"
                    alt="Auto input data"
                />
                <p > Khả năng tự điền thông tin. </p>
            </div>
            <p>* Lễ tân có thể chỉnh sửa lại nội dung và thêm dòng bằng cách ấn “Add New Tab”.</p>
            <p>Thường sẽ thêm các Service Invoice bằng [Add New Tab]</p>
            <br />
            <p>Bước 3: Lưu và nộp Sum</p>
            <p>Ấn vào nút [Save Report] để lưu lại thao tác đã thay đổi</p>
            <p>Sẽ có cửa sổ hiện lên thông báo</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628886761/Web%20report%20Project/Guider/sum_step2_odqfju.png"
                    alt="Save Sum"
                />
                <p > Cửa sổ kiểm tra lại thao tác lưu </p>
            </div>
            <p>Khi muốn gửi báo cáo đi, lễ tân cần ấn vào nút [Sent Report]</p>
            <p>Sẽ có cửa sổ hiện lên thông báo</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628887297/Web%20report%20Project/Guider/sum_sum_sent_f66eq8.png"
                    alt="Sent Sum"
                />
                <p > Cửa sổ kiểm tra lại thao tác gửi </p>
            </div>
            <p>* Sau khi hoàn tất gửi báo cáo thì lễ tân sẽ không thể chỉnh sửa được báo cáo này nữa. *</p>
            <p>Nếu báo cáo nào không chỉnh sửa thì sẽ không còn nút [Sent Report] thay vào đó chỉ có nút [Request Edit]</p>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628887462/Web%20report%20Project/Guider/sum_sum_edit_only_jgmvq5.png"
                    alt="Show Only Request Edit"
                />
                <p > Chỉ còn nút Request Edit </p>
            </div>
        </div >
    );
}

export default GuiderReception2;