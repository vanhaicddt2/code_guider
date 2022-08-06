import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderReception3(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 3. Các quy tắc và hướng dẫn  **</p>
            <span>----</span>
            <p>* Phần này sẽ về chi tiết các thao tác thực hiện và các quy tắc trong quá trình làm SUM</p>
            <p>Một vài lưu ý nhỏ</p>
            <hl>
                <li>Sau khi load được dữ liệu lễ tân có thể toàn quyền thay đổi thông tin</li>
                <li>Dữ liệu thay đổi không ảnh hướng đến dữ liệu tại Database Moja</li>
            </hl>
            <br />
            <h1>3.1: Thêm dòng mới cho Sum:</h1>
            <p class="op-fontweight600">* Khi nào chúng ta cần thêm dòng ?</p>
            <hl>
                <li>Khi cần thêm Service Invoice ( ví dụ Massage, Breakfast, Roten ....)</li>
                <li>Các bill phiếu không thuộc hệ thống Moja khác.</li>
                <li>Cần thêm 1 Hotel Invoice trong ngày mà dữ liệu từ Moja không tự trả kế quả về.</li>
            </hl>
            <br />
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629019904/Web%20report%20Project/Guider/sum_detail_add_nwadjh.png"
                    alt="Data Map"
                />
                <p > Thêm dòng mới cho Sum </p>
            </div>
            <h1>3.2: Xóa Dòng:</h1>
            <p>* Cạnh bên phải của báo có sẽ có 1 ô để tick</p>
            <p>Chọn những dòng cần xóa và ấn vào biểu tượng thùng rác (trash) để xóa</p>
            <p>Sẽ có cửa sổ hiện lên xác nhận việc xóa này</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629021141/Web%20report%20Project/Guider/sum_detail_delete_m9zhcb.png"
                    alt="select and delete"
                />
                <p > Chọn và xóa </p>
            </div>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629020321/Web%20report%20Project/Guider/sum_detail_confim_del_gkovm5.png"
                    alt="confirm delete"
                />
                <p > Cửa sổ nhỏ xác nhận việc xóa </p>
            </div>
            <p>Ngoài ra chúng ta có thể chọn tất ở ô phía trên</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629021266/Web%20report%20Project/Guider/sum_detail_multi_delete_rphmrh.png"
                    alt="multi delete"
                />
                <p > Chọn tất cả các ô </p>
            </div>
            <br />
            <h1>3.3: Tìm kiếm</h1>
            <p class="op-fontweight600">* Ở ô tìm kiếm chúng ta có thêm tìm được tất cả thông tin của SUM</p>
            <p>Có thể nhận vào các số đầu của HI , SI, tên khách, số tiền ...</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629021542/Web%20report%20Project/Guider/sum_detail_search_dpxnfn.png"
                    alt="search input"
                />
                <p > Ô tìm kiếm </p>
            </div>
            <p>Trong hình dưới có thử với tìm kiếm số HI / tên khách</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629021722/Web%20report%20Project/Guider/sum_detail_search_test_lctqv2.png"
                    alt="search input test"
                />
                <p > Check search</p>
            </div>
            <br />
            <h1>3.4: Thêm Server Invoice trong Hotel Invoice</h1>
            <p>* Để thêm thì tại mỗi tên khách có dấu (+)</p>
            <ul>
                <li>Tối đa có thể thêm 5 service</li>
                <li>Muốn thêm thì ấn thêm vào đấu (+) tại mỗi Service nhỏ</li>
                <li>Xóa Service thì ấn trừ</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629043465/Web%20report%20Project/Guider/sum_detail_add_service_ev9bwm.png"
                    alt="search input test"
                />
                <p > Thêm và xóa Service trong Hotel Invoice</p>
            </div>
            <p>Tại mỗi service sẽ có 1 ô nhỏ cho phép thêm [sample]</p>
            <p>Nó kiểu như 1 dạng list có sẵn các tình huống</p>
            <p>Lễ tân có thể chọn và chỉnh sửa lại tùy ý</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629043336/Web%20report%20Project/Guider/sum_detail_add_more_service_ytmzku.png"
                    alt="search input test"
                />
                <p >Chọn mẫu có sẵn và có thể chỉnh sửa</p>
            </div>
            <br />
            <h1>3.5: Phần Action</h1>
            <p>* Phần này khác mới với một vài chi nhánh</p>
            <ul>
                <li>Là phần thêm hành động của hóa đơn đó.</li>
                <li>Có thể chỉnh sửa lại sau khi đã chọn Action</li>
                <li>Chúng ta có thể để Debit / Paid with / Paid at để hệ thống xác định được chức năng tương tứng của hóa đơn đó.</li>
                <li>Nếu thêm Debit thì nó sẽ được thêm cả vào phần [RC DEBIT] sau khi lễ tân gửi báo cáo.</li>
                <li>Nếu thêm Debit thì các khoảng tiền card / cash sẽ bị vô hiệu hóa không được tính vào TOTAL Table(phần bảng cuối có chữ ký)</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629044300/Web%20report%20Project/Guider/sum_detail_add_action_tduvkz.png"
                    alt="add action"
                />
                <p >Chọn mẫu có sẵn và có thể chỉnh sửa</p>
            </div>
            <p>Phần PAID AT: kiểu hóa đơn này đã được thanh toán tại 1 hóa đơn khác</p>
            <p>Nếu chọn phần này  thì vô hiệu hóa các ô nhập tiền (card / cash)</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629044300/Web%20report%20Project/Guider/sum_detail_action_paid_at_gru15m.png"
                    alt="add action pay at"
                />
                <p >Chọn mẫu có sẵn và có thể chỉnh sửa</p>
            </div>
            <p>Phần PAID WITH: kiểu hóa đơn này thanh toán cùng với hóa đơn khác</p>
            <p>Ngoài ra quá trình nhập giá tiền cũng như các hóa đơn bình thường</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629044299/Web%20report%20Project/Guider/sum_detail_action_paid_with_yrr311.png"
                    alt="add action pay with"
                />
                <p >Chọn mẫu có sẵn và có thể chỉnh sửa</p>
            </div>
            <h1 class="op-redcolor">* Về các phần DEBIT xin xem ở mục [DEBIT] riêng *</h1>
            <br/>
            <h1>3.6: Phần Expence</h1>
            <p>Phần này hỗ trợ thêm tính năng có thể nhập được tiền USD/ Yen</p>
            <p>Mặc định không điền sẽ làm VND</p>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629045497/Web%20report%20Project/Guider/sum_detail_expence_vxu1pk.png"
                    alt="expence"
                />
                <p >Chọn mẫu có sẵn và có thể chỉnh sửa</p>
            </div>
        </div >
    );
}

export default GuiderReception3;