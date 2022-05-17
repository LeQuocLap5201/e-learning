import {
  CrownOutlined,
  EditOutlined,
  FileDoneOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import React from "react";
import FooterStudent from "../components/FooterStudent";

export default function IntroduceStudent() {
  return (
    <>
      <div className="introduce-student main-student">
        <div style={{ marginBottom: 30 }}>
          <h3>Giới thiệu</h3>
          <p>
            Trong bối cảnh tình hình dịch bệnh COVID-19 diễn biến phức tạp và
            nguy cơ xuất hiện các bệnh truyền nhiễm mới nổi hiện nay thì nhu cầu
            đào tạo trực tuyến thực sự cần thiết cho nhân viên y tế tất cả các
            tuyến trên cả nước. Bên cạnh đó là sự phát triển của công nghệ thông
            tin, ứng dựng số hóa vào đào tạo là xu hướng của các nước phát triển
            hiện nay và cũng phù hợp với chủ trương của chính phủ Việt Nam.
          </p>
          <p>
            Chính vì vậy, khoa Kiểm soát nhiễm khuẩn đã chủ động xây dựng phần
            mềm “HỌC VÀ THI TRỰC TUYẾN” về lĩnh vực kiểm soát nhiễm khuẩn nhằm
            cung cấp những kiến thức mới và kịp thời trong lĩnh vực kiểm soát
            nhiễm khuẩn tới toàn thể nhân viên y tế của bệnh viện Chợ Rẫy và
            nhân viên y tế trên cả nước có quan tâm tới lĩnh vực kiểm soát nhiễm
            khuẩn. Chương trình học chia ra làm nhiều chuyên đề về kiểm soát
            nhiễm khuẩn và mỗi chuyên đề chia ra làm nhiều chương, người học có
            thể chọn các chuyên đề mình thích để học. Trong chương trình học
            cũng tích hợp phần thi hết chương và cung cấp chứng chỉ đào tạo trực
            tuyến cho học viên tham gia học.
          </p>
          <p>
            Sự ra đời của chương trình học và thi trực tuyến này sẽ hữu ích cho
            tất cả nhân viên y tế, đặc biệt cho người bận rộn không có thời gian
            học tập trung và vẫn đảm bảo được chương trình đào tạo liên tục cập
            nhật kiến thức hàng năm cho bản thân. Chúng tôi rất mong chương
            trình đào tạo học và thi trực tuyến sẽ đem lại cho các bạn một trải
            nghiệm đào tạo mới, hiệu quả và kịp thời trong thời đại hiện nay.
          </p>
        </div>
        <div>
          <h3>Hướng dẫn học trực tuyến</h3>
          <h4>WEBSITE HỌC {"&"} THI TRỰC TUYẾN</h4>
          <h5>Đăng ký</h5>
          <p>• Nhấn “Đăng ký” trên trang đăng nhập để đăng ký thành viên.</p>
          <p>
            • Điền các trường thông tin bắt buộc và nhấn “Hoàn thành” để tạo tài
            khoản mới → Hệ thống sẽ hiện pop up “Bạn đã đăng ký thành công”.
          </p>
          <div className="content-img space">
            <img src="/img/1.png" style={{ width: "30%" }} alt="" />
            <img src="/img/arrow.png" style={{ width: "10%" }} alt="" />
            <img src="/img/2.png" style={{ width: "60%" }} alt="" />
          </div>
        </div>
        <p>• Nhấn “Đồng ý” để đổi mật khẩu.</p>
        <p>
          • Nhập mật khẩu mới và nhấn “Đổi mật khẩu” {"->"} Tài khoản được đăng
          nhập và chuyển sang trang chủ Web học.
        </p>
        <div className="content-img space">
          <img src="/img/3.png" style={{ width: "50%" }} alt="" />
          <img src="/img/4.png" style={{ width: "45%" }} alt="" />
        </div>
        <h5>Đăng nhập</h5>
        <p>
          • Nhập số điện thoại đã đăng ký và mật khẩu để đăng nhập vào web học.
        </p>
        <div className="content-img center">
          <img src="/img/5.png" style={{ width: "25%" }} alt="" />
        </div>
        <h5>Mục đích</h5>
        <p>
          • Cho phép thành viên tham gia vào Chương trình Học {"&"} Thi trực
          tuyến để:
        </p>
        <ul>
          <li>Học trực tuyến.</li>
          <li>Thi trực tuyến.</li>
          <li>
            Nhận Certificate chứng nhận theo Chương học {"&"} Chuyên đề học.
          </li>
        </ul>
        <h5>Giao diện tính năng E-learning bao gồm 2 Mục thông tin chính:</h5>
        <p>
          • Tiến độ học của bạn : Cho phép thành viên xem được tiến độ học của
          bản thân.
        </p>
        <p>
          • Chuyên đề khác : Cho phép thành viên tham khảo nhiều Chuyên đề liên
          quan.
        </p>
        <p>
          Ngoài ra, thành viên có thể nhấn nút <b>“Xem thêm”</b>.... để xem
          nhiều Bài học hơn.
        </p>
        <div className="content-img center">
          <img src="/img/6.png" style={{ width: "80%" }} alt="" />
        </div>
        <h5>Giới thiệu</h5>
        <p>• Giới thiệu: Thông tin chung về bệnh viện Chợ Rẫy.</p>
        <p>
          • Hướng dẫn học trực tuyến: Thành viên có thể tham khảo cách học và
          thi trực tuyến tại đây.
        </p>
        <div className="content-img center">
          <img src="/img/7.png" style={{ width: "80%" }} alt="" />
        </div>
        <h5>Tiến độ học của bạn</h5>
        <p>
          • Mục đích : Cho phép thành viên xem được những bài học đã học trước
          đó. Thành viên scroll để xem nhiều hơn.
        </p>
        <div className="content-img center">
          <img src="/img/8.png" style={{ width: "80%" }} alt="" />
        </div>
        <p>• Icon hiển thị ở các chương và chuyên đề</p>
        <ul style={{ listStyle: "none" }}>
          <li style={{ marginBottom: 5 }}>
            <FileDoneOutlined style={{ fontSize: 20 }} />{" "}
            <EditOutlined style={{ fontSize: 20 }} />
            Chưa học {"-"} Chưa thi.
          </li>
          <li style={{ marginBottom: 5 }}>
            <FileSearchOutlined style={{ fontSize: 20, color: "#007EFF" }} />{" "}
            <EditOutlined style={{ fontSize: 20 }} /> Đang học {"-"} Chưa thi.
          </li>
          <li style={{ marginBottom: 5 }}>
            <FileDoneOutlined style={{ fontSize: 20, color: "#00D300" }} />{" "}
            <EditOutlined style={{ fontSize: 20 }} /> Học xong {"-"} Chưa thi.
          </li>
          <li style={{ marginBottom: 5 }}>
            <FileDoneOutlined style={{ fontSize: 20, color: "#00D300" }} />{" "}
            <CrownOutlined style={{ fontSize: 20 }} /> Học xong {"-"} Thi fail.
          </li>
          <li style={{ marginBottom: 5 }}>
            <FileDoneOutlined style={{ fontSize: 20, color: "#00D300" }} />{" "}
            <CrownOutlined style={{ fontSize: 20, color: "#00D300" }} /> Học
            xong {"-"} Thi pass.
          </li>
        </ul>
        <div className="content-img space">
          <img src="/img/9.png" style={{ width: "30%" }} alt="" />
          <img src="/img/10.png" style={{ width: "30%" }} alt="" />
          <img src="/img/11.png" style={{ width: "30%" }} alt="" />
        </div>
        <p>Tại trang Chi tiết bài học, thành viên xem thông tin bao gồm:</p>
        <ul>
          <li>Giới thiệu giáo trình.</li>
          <li>Nội dung chuyên đề: Các Chương học có trong Chuyên đề.</li>
        </ul>
        <h5>Lưu ý:</h5>
        <ul>
          <li>
            Thành viên tiến hành học bài theo giáo trình và được phép Học lại.
          </li>
          <li>
            Sau khi Hoàn thành bài học, thành viên tiến hành làm bài thi ngay
            sau đó.
          </li>
          <li>
            Sau khi hoàn tất bài thi và kết quả thi pass, thành viên sẽ được
            nhận một Certificate tương đương với Bài thi đó.
          </li>
        </ul>
        <div className="content-img center">
          <img src="/img/12.png" style={{ width: "80%" }} alt="" />
        </div>
        <p>
          • Sau khi nhấn vào Chương học, thành viên nhấn nút “Bắt đầu học” để
          tiến hành học bài.
        </p>
        <p>
          • Nội dung bài học được hiển thị dưới dạng PDF cho phép thành viên
          Zoom in/out theo thanh công cụ.
        </p>
        <div className="content-img center">
          <img src="/img/13.png" style={{ width: "80%" }} alt="" />
        </div>
        <p>
          • Sau khi học xong, thành viên nhấn vào nút Hoàn thành Chương để kết
          thúc bài học.
        </p>
        <p>• Sau khi Hoàn thành bài học {"=>"} Thành viên nhấn nút:</p>
        <ul>
          <li>
            <b>“Làm bài thi”</b> để tiến hành Thi trực tuyến.
          </li>
          <li>
            <b>“Trang chủ”</b> để trở về trang chủ Học {"&"} Thi.
          </li>
        </ul>
        <div className="content-img center">
          <img src="/img/14.png" style={{ width: "80%" }} alt="" />
        </div>
        <p>
          • Sau khi nhấn nút “Làm bài thi”, hệ thống hiển thị Thông tin bài kiểm
          tra bao gồm:
        </p>
        <ul>
          <li>Số câu hỏi: Số câu hỏi thành viên cần hoàn thành</li>
          <li>Thời gian thi</li>
        </ul>
        <p>
          • Thành viên nhấn nút “Bắt đầu thi” để tiến hành làm bài kiểm tra.
        </p>
        <p>
          • Bài kiểm tra bao gồm ít nhất 5 câu hỏi, thành viên tiến hành làm bài
          theo hình thức trắc nghiệm.
        </p>
        <p>
          • Sau khi hoàn thành bài kiểm tra {"=>"} thành viên nhấn nút{" "}
          <b>“Gửi kết quả”</b>={">"} Hệ thống Pop-up thông báo thành viên Pass
          và Fail Bài kiểm tra ngay sau đó
        </p>
        <p>
          • Nếu đã hết thời gian làm bài mà thành viên vẫn chưa nhấn nút{" "}
          <b>“Gửi kết quả”</b>, hệ thống sẽ tự động kết thúc bài thi và gửi kết
          quả.
        </p>
        <div className="content-img center">
          <img src="/img/15.png" style={{ width: "80%" }} alt="" />
        </div>
        <ol>
          <li>
            <p>
              Trường hợp Pass , hệ thống thông báo: {"=>"} Chúc mừng bạn đã vượt
              qua bài thi. → Thành viên nhấn nút:
            </p>
            <ul>
              <li>
                <b>“Học tiếp”:</b> Thành viên học bài học của chương tiếp theo.
              </li>
              <li>
                <b>Trang chủ”:</b> Thành viên trở về trang chủ.
              </li>
            </ul>
          </li>
          <li>
            <p>
              Trường hợp Fail (lần thứ 1/lần thứ 2), hệ thống báo: ⇒ Rất tiếc!
              Bạn chưa vượt qua bài thi. → Thành viên nhấn nút:
            </p>
            <ul>
              <li>
                <b>“Thi lại”:</b> Làm lại bài thi.
              </li>
              <li>
                <b>“Học lại”:</b> Thành viên học lại bài học vừa mới học trước
                đó.
              </li>
              <li>
                <b>“Trang chủ”:</b> Thành viên trở về trang chủ.
              </li>
            </ul>
            <div className="content-img center">
              <img src="/img/16.png" style={{ width: "80%" }} alt="" />
            </div>
          </li>
          <li>
            <p>
              Trường hợp Fail (lần thứ 3), hệ thống báo: ⇒ Rất tiếc! Bạn chưa
              vượt qua bài thi. → Thành viên nhấn nút:
              <ul>
                <li>
                  <b>“Thi lại”:</b> •Hệ thống sẽ thông báo “Bạn không vượt qua
                  bài thi 3 lần liên tục. Vui lòng chờ đến{" "}
                  <span style={{ color: "red" }}>16:48 01/12/2021</span> để thi
                  lại” (Sau 24h kể từ lần thi thứ 3 thành viên mới có thể thi
                  lại).
                </li>
                <li>
                  <b>“Học lại”:</b> •Thành viên học lại bài học vừa mới học
                  trước đó.
                </li>
                <li>
                  <b>“Trang chủ”:</b> Thành viên trở về trang chủ.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Trường hợp đã hết thời gian làm bài nhưng người học chưa nhấn gửi
              kết quả, hệ thống báo: ⇒ Hết thời gian làm bài thi và hiển thị kết
              quả làm bài thi (Pass/Fail)
            </p>
            <div className="content-img center">
              <img src="/img/17.png" style={{ width: "80%" }} alt="" />
            </div>
          </li>
        </ol>
        <p>
          • Sau khi Pass bài kiểm tra chương, thành viên mới có thể tiếp tục học
          chương kế tiếp.
        </p>
        <p>
          • Sau khi đã Pass hết bài kiểm tra của tất cả các chương trong chuyên
          đề, thành viên sẽ phải làm bài kiểm tra chuyên đề.
        </p>
        <p>
          • Khi Pass bài kiểm tra của chương cuối, hệ thống sẽ thông báo: ={">"}
          “Chúc mừng bạn đã vượt qua bài thi. Bài có thể làm bài thi chuyên đề”
          → Thành viên nhấn nút:
        </p>
        <ul>
          <li>
            <b>“Thi chuyên đề”:</b> Thành viên sẽ làm bài Thi chuyên đề
          </li>
          <li>
            <b>“Trang chủ”:</b> Thành viên trở về trang chủ.
          </li>
        </ul>
        <p>
          • Người học có thể cùng lúc học được nhiều chuyên đề (không phải pass
          chuyên đề này rồi mới được chuyển sang Chuyên đề khác)
        </p>
        <p>• Cách làm bài Thi chuyên đề tương tự như làm bài thi chương.</p>
        <div className="content-img center">
          <img src="/img/18.png" style={{ width: "80%" }} alt="" />
        </div>
        <h5>Kết quả</h5>
        <p>
          • Sau khi Hoàn thành bài kiểm tra {"=>"} thành viên đạt được
          Certificate tương đương (Certificate cho chương và chuyên đề).
        </p>
        <p>
          • Thành viên vào mục “Kết quả” trên thanh công cụ để xem kết quả học
          tập cá nhân và thành tích.
        </p>
        <ol>
          <li>
            <p>
              Kết quả: Hiển thị list chuyên đề đã pass hết tất cả các chương
              (bao gồm chuyên đề đã pass bài Thi chuyên đề và fail).
            </p>
            <p>
              Nhấn vào chuyên đề để xem kết quả thi chi tiết của các chương.
            </p>
            <p>
              Chọn <b>“Xem kết quả”</b> của chương muốn biết, hệ thống sẽ cho
              thành viên biết được số lần thi, thời gian thi và kết quả của từng
              lần thi.
            </p>
            <div className="content-img center">
              <img src="/img/19.png" style={{ width: "80%" }} alt="" />
            </div>
          </li>
          <li>
            <p>Thành tích:</p>
            <p>
              • Thành tích chuyên đề: Số lượng Certificate theo Chuyên đề thành
              viên nhận được.
            </p>
            <p>
              • Thành tích Chương: Số lượng Certificate theo Chương thành viên
              nhận được.
            </p>
            <p>
              • Danh sách chuyên đề có thành tích: Các chuyên đề có bài kiểm tra
              chương đã pass (thành viên chưa học hết chuyên đề nhưng pass ít
              nhất 1 chương cũng được liệt kê vào danh sách này).
            </p>
            <div className="content-img center">
              <img src="/img/20.png" style={{ width: "80%" }} alt="" />
            </div>
          </li>
        </ol>
        <p>
          ▪ Chuyên đề đã hoàn thành thì hệ thống sẽ hiển thị mục{" "}
          <b>“Xem kết quả”</b> {"-"} nhấn vào nút này, thành viên sẽ xem được
          certificate chuyên đề.
        </p>
        <p>
          ▪ Nhấn vào chuyên đề, thành viên có thể xem được certificate chương
          (khi nhấn vào <b>“Xem thành tích”</b>) và certificate chuyên đề (khi
          nhấn vào <b>“Xem kết quả”</b>)
        </p>
        <div className="content-img center">
          <img src="/img/21.png" style={{ width: "80%" }} alt="" />
        </div>
        <h5>Thông tin cá nhân</h5>
        <p>
          Tại trang Thông tin cá nhân, thành viên xem thông tin cá nhân của mình
          bao gồm :
        </p>
        <ul>
          <li>Họ và tên.</li>
          <li>Tên đăng nhập.</li>
          <li>Email.</li>
          <li>Số điện thoại.</li>
          <li>Đơn vị công tác.</li>
          <li>Đối tượng.</li>
          <li>Khoa/Phòng/Đơn vị.</li>
          <li>Học vị.</li>
          <li>Chức vụ.</li>
          <li>Ngày kích hoạt.</li>
        </ul>
        <div className="content-img center">
          <img src="/img/22.png" style={{ width: "80%" }} alt="" />
        </div>
        <h5>Tìm kiếm {"-"} Tìm kiếm theo Tên chuyên đề</h5>
        <p>
          Mục đích: Cho phép thành viên tìm kiếm nhanh Tên chuyên đề muốn học.
          Thành viên nhấn vào Biểu tượng tìm kiếm trên thanh header và nhập Tên
          chuyên đề mình muốn tìm kiếm. {"=>"} Hệ thống hiển thị danh sách
          Chuyên đề liên quan.
        </p>
        <div className="content-img center">
          <img src="/img/23.png" style={{ width: "80%" }} alt="" />
        </div>
      </div>
      <FooterStudent />
    </>
  );
}
