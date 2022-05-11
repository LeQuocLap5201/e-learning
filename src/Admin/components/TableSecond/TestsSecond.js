import { Card, Table, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const columns = [
  {
    align: "center",

    dataIndex: ["exam_info", "exam_id"],
    key: "exam_id",
    title: "ID",
    width: 100,
  },
  { dataIndex: ["exam_info", "name"], key: "name", title: "Tên bài kiểm tra" },
  {
    key: "subject_info",
    title: "Tên chuyên đề / chương",
    render: (test) => {
      let title = test?.exam_info?.subject_info?.title;
      let testId = test?.exam_info?.subject_info?.parent_info?.subject_id;
      return <Link to={`/admin/studies/${testId}`}>{title}</Link>;
    },
  },
  {
    align: "center",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      if (status === -2) {
        return <Tag color="#696969">Không đậu</Tag>;
      }
      if (status === 2) {
        return <Tag color="#2ea219">Đã qua bài thi</Tag>;
      }
    },
    title: "Trạng thái",
  },
  {
    align: "center",
    dataIndex: "type",
    key: "type",
    title: "Loại bài kiểm tra",
    render: (type) => {
      if (type === 1) {
        return <Tag color="#2b75b5">Bài kiểm tra chuyên đề</Tag>;
      }
      if (type === 2) {
        return <Tag color="#1f8f9ae0">Bài kiểm tra chương</Tag>;
      }
    },
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => {
      return moment(date).format("DD-MM-YYYY HH:mm");
    },
    title: "Ngày giờ làm bài",
    width: 200,
  },
];

const data = [
  {
    id: "bb760910-9ce6-419f-9428-f7155579c8df",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "89b8be67-029c-4c95-b019-ac45e4082454",
    startTime: "2022-01-14T03:43:30.282Z",
    endTime: "2022-01-14T03:46:17.860Z",
    time: 15,
    answers: [
      {
        id: "c0dbde42-80bb-4b09-843c-e9fc83a891b9",
        name: "Chỉ định đặt thông tiểu trong phẫu thuật: (QĐ 3916-BYT Hướng dẫn phòng ngừa NKTN)",
        choose_answers: [4],
      },
      {
        id: "df254b27-2195-4848-8d76-e3a0c6926db9",
        name: "Theo tác giả Jevis William, đường xâm nhập của tác nhân gây bệnh trên hệ thống thông tiểu: (QĐ 3916-BYT Hướng dẫn phòng ngừa NKTN)",
        choose_answers: [3],
      },
      {
        id: "295f8990-81e8-4d46-87fa-3b8c0a830245",
        name: "Việc xả túi nước tiểu: (Tài liệu QT Thực Hành KSNK- Chương X-tr.178)",
        choose_answers: [3],
      },
      {
        id: "4ce5a538-6531-4f07-9097-f13e2b6a47d5",
        name: "Xác định giai đoạn cửa sổ trong giám sát nhiễm khuẩn niệu: (QĐ 3916-BYT phần 3 tiêu chuẩn chẩn đoán NKTN)",
        choose_answers: [1],
      },
      {
        id: "2525a937-f6ab-48fa-ba3d-f0c1fb8a885c",
        name: "Mẫu cấy nước tiểu thỏa định nghĩa giám sát type A: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)",
        choose_answers: [3],
      },
      {
        id: "59cf985c-fbdc-4a3e-a300-3bfae03168bf",
        name: " Chăm sóc người bệnh có đặt thông tiểu: ",
        choose_answers: [4],
      },
      {
        id: "f8f0bde9-d2e9-46be-81c1-6bd24fb7e3fe",
        name: "Khi thực hiện kỹ thuật đặt thông tiểu thất bại: (Tài liệu QT Thực Hành KSNK- Chương X-tr.176)\n",
        choose_answers: [4],
      },
      {
        id: "074c8be8-f979-4d85-9053-39ba6858b912",
        name: "Nhiễm khuẩn niệu liên quan thông tiểu: (Tài liệu QT Thực Hành KSNK- Chương II-tr.22)\n",
        choose_answers: [4],
      },
      {
        id: "6c8f886c-6a84-4664-ae10-7a90e4bd2fbe",
        name: "Triệu chứng sốt trong nhiễm khuẩn niệu: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)",
        choose_answers: [3],
      },
      {
        id: "dd00fee0-2861-400e-82b0-eeb5358943e0",
        name: "Điểm khác biệt quan trọng nhất giữa nhiễm khuẩn tiết niệu nhóm B với  nhiễm khuẩn tiết niệu nhóm A là: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)",
        choose_answers: [1],
      },
    ],
    status: -2,
    no_retries: 2,
    result: {
      status: -1,
      final_score: 70,
      total_question: 10,
      total_wrong_answers: 3,
      total_correct_answers: 7,
    },
    type: 2,
    meta: { time_exam: 3 },
    createdAt: "2022-01-14T03:43:30.288Z",
    updatedAt: "2022-01-14T03:46:17.860Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    exam_info: {
      id: "89b8be67-029c-4c95-b019-ac45e4082454",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
      exam_id: 13,
      subject_id: "467093d9-3f66-47fa-af3b-dd358151a858",
      subject_info: {
        key: "467093d9-3f66-47fa-af3b-dd358151a858",
        label:
          "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
        id: "467093d9-3f66-47fa-af3b-dd358151a858",
        subject_id: 11,
        code: "CR-59-GGTDQ-4",
        title:
          "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
        parent_info: {
          key: "da462367-9552-4b48-82a8-6ea45cbda692",
          label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
          id: "da462367-9552-4b48-82a8-6ea45cbda692",
          subject_id: 20,
          code: "CR-59-GGTDQ",
          title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        },
      },
    },
    certificate_info: null,
  },
  {
    id: "58e419c5-fea3-411d-9e8a-8b9949bef012",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "89b8be67-029c-4c95-b019-ac45e4082454",
    startTime: "2022-01-14T03:41:38.908Z",
    endTime: "2022-01-14T03:43:15.154Z",
    time: 15,
    answers: [
      {
        id: "47490cea-7791-42b6-8300-3b9ef5cd28da",
        name: "Kỹ thuật lấy mẫu nước tiểu ở người bệnh có thông tiểu lưu: (Tài liệu QT Thực Hành KSNK- Chương X-tr.177)",
        choose_answers: [4],
      },
      {
        id: "6ac4f473-b864-4f57-b852-1296e565e8ce",
        name: "Chọn câu đúng: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)",
        choose_answers: [4],
      },
      {
        id: "509dc9f7-573f-4423-b2db-afdf2db6bdbd",
        name: "Để tránh trào ngược nước tiểu từ hệ thống thông tiểu vào bàng quang, ngoại trừ: (Tài liệu QT Thực Hành KSNK- Chương X-tr.178)",
        choose_answers: [2],
      },
      {
        id: "4ce5a538-6531-4f07-9097-f13e2b6a47d5",
        name: "Xác định giai đoạn cửa sổ trong giám sát nhiễm khuẩn niệu: (QĐ 3916-BYT phần 3 tiêu chuẩn chẩn đoán NKTN)",
        choose_answers: [2],
      },
      {
        id: "95078e54-01d7-4f56-8719-54e506f6f04f",
        name: "Yếu tố quan trọng nhất làm tăng nguy cơ nhiễm khuẩn niệu ở người bệnh đặt thông tiểu là: (QĐ 3916-BYT Hướng dẫn phòng ngừa NKTN)",
        choose_answers: [1],
      },
      {
        id: "074c8be8-f979-4d85-9053-39ba6858b912",
        name: "Nhiễm khuẩn niệu liên quan thông tiểu: (Tài liệu QT Thực Hành KSNK- Chương II-tr.22)\n",
        choose_answers: [4],
      },
      {
        id: "64dc3860-b1f6-495f-a727-b4327907b73d",
        name: "Trừ trường hợp phải theo dõi lượng nước tiểu sau mổ, ống thông tiểu trong giai đoạn hậu phẫu lý tưởng nên được rút trong vòng: (QĐ 3916-BYT Hướng dẫn phòng ngừa NKTN)",
        choose_answers: [3],
      },
      {
        id: "59cf985c-fbdc-4a3e-a300-3bfae03168bf",
        name: " Chăm sóc người bệnh có đặt thông tiểu: ",
        choose_answers: [4],
      },
      {
        id: "12d6d3dd-f14f-4ef9-8fe0-a478bd45e001",
        name: "Nhiễm khuẩn niệu nhóm B: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)\n",
        choose_answers: [3],
      },
      {
        id: "dd00fee0-2861-400e-82b0-eeb5358943e0",
        name: "Điểm khác biệt quan trọng nhất giữa nhiễm khuẩn tiết niệu nhóm B với  nhiễm khuẩn tiết niệu nhóm A là: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)",
        choose_answers: [1],
      },
    ],
    status: -2,
    no_retries: 1,
    result: {
      status: -1,
      final_score: 80,
      total_question: 10,
      total_wrong_answers: 2,
      total_correct_answers: 8,
    },
    type: 2,
    meta: { time_exam: 2 },
    createdAt: "2022-01-14T03:41:38.915Z",
    updatedAt: "2022-01-14T03:43:15.154Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    exam_info: {
      id: "89b8be67-029c-4c95-b019-ac45e4082454",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
      exam_id: 13,
      subject_id: "467093d9-3f66-47fa-af3b-dd358151a858",
      subject_info: {
        key: "467093d9-3f66-47fa-af3b-dd358151a858",
        label:
          "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
        id: "467093d9-3f66-47fa-af3b-dd358151a858",
        subject_id: 11,
        code: "CR-59-GGTDQ-4",
        title:
          "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
        parent_info: {
          key: "da462367-9552-4b48-82a8-6ea45cbda692",
          label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
          id: "da462367-9552-4b48-82a8-6ea45cbda692",
          subject_id: 20,
          code: "CR-59-GGTDQ",
          title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        },
      },
    },
    certificate_info: null,
  },
  {
    id: "ab0cf004-1efe-4a45-a02f-a710f5c4c682",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "89b8be67-029c-4c95-b019-ac45e4082454",
    startTime: "2022-01-14T03:40:23.139Z",
    endTime: "2022-01-14T03:41:30.858Z",
    time: 15,
    answers: [
      {
        id: "25961e34-07fc-4fe0-896e-354d3327e2b9",
        name: "Một đơn vị được giám sát nhiễm khuẩn niệu có kết quả: tỷ lệ CAUTI cao, DUR thông tiểu thấp, can thiệp nên nhắm tới là: ",
        choose_answers: [1],
      },
      {
        id: "95078e54-01d7-4f56-8719-54e506f6f04f",
        name: "Yếu tố quan trọng nhất làm tăng nguy cơ nhiễm khuẩn niệu ở người bệnh đặt thông tiểu là: (QĐ 3916-BYT Hướng dẫn phòng ngừa NKTN)",
        choose_answers: [1],
      },
      {
        id: "338c5937-8dc1-4abc-8feb-d8a01ecd24cb",
        name: "Một đơn vị được giám sát nhiễm khuẩn niệu có kết quả: tỷ lệ CAUTI thấp, DUR thông tiểu thấp, can thiệp nên nhắm tới là: ",
        choose_answers: [3],
      },
      {
        id: "59cf985c-fbdc-4a3e-a300-3bfae03168bf",
        name: " Chăm sóc người bệnh có đặt thông tiểu: ",
        choose_answers: [4],
      },
      {
        id: "12d6d3dd-f14f-4ef9-8fe0-a478bd45e001",
        name: "Nhiễm khuẩn niệu nhóm B: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)\n",
        choose_answers: [3],
      },
      {
        id: "4ebefa02-fb2a-4ded-8e46-4267d85371cd",
        name: "Một mẫu nước tiểu được lấy từ người bệnh ở ICU vào ngày 5/10, với kết quả cấy E. coli (500,000 CFU/ml) và C. freundii (100,000 CFU/ml). Người bệnh có nhiệt độ 38.6°C ngày 2/10, nhưng không có các cơn sốt khác. Người bệnh đang thở máy và không thể giao tiếp với điều dưỡng. Ngày biến cố là ngày nào?\n",
        choose_answers: [3],
      },
      {
        id: "af9b6e41-6068-4a83-b969-005ded97b790",
        name: "Một đơn vị được giám sát nhiễm khuẩn niệu có kết quả: tỷ lệ CAUTI thấp, DUR thông tiểu cao, can thiệp nên nhắm tới là: ",
        choose_answers: [1],
      },
      {
        id: "a78d2c91-aad0-474e-ae2d-f64b77858dd0",
        name: "Ngày biến cố của nhiễm khuẩn niệu: (Tài liệu hướng dẫn chẩn đoán NKBV- CDC 2018- phần NKTN)",
        choose_answers: [2],
      },
      {
        id: "6c8f886c-6a84-4664-ae10-7a90e4bd2fbe",
        name: "Triệu chứng sốt trong nhiễm khuẩn niệu: (Tài liệu QT Thực Hành KSNK- Chương II-tr.21)",
        choose_answers: [2],
      },
      {
        id: "295f8990-81e8-4d46-87fa-3b8c0a830245",
        name: "Việc xả túi nước tiểu: (Tài liệu QT Thực Hành KSNK- Chương X-tr.178)",
        choose_answers: [3],
      },
    ],
    status: -2,
    no_retries: 0,
    result: {
      status: -1,
      final_score: 60,
      total_question: 10,
      total_wrong_answers: 4,
      total_correct_answers: 6,
    },
    type: 2,
    meta: { time_exam: 1 },
    createdAt: "2022-01-14T03:40:23.152Z",
    updatedAt: "2022-01-14T03:41:30.858Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    exam_info: {
      id: "89b8be67-029c-4c95-b019-ac45e4082454",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
      exam_id: 13,
      subject_id: "467093d9-3f66-47fa-af3b-dd358151a858",
      subject_info: {
        key: "467093d9-3f66-47fa-af3b-dd358151a858",
        label:
          "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
        id: "467093d9-3f66-47fa-af3b-dd358151a858",
        subject_id: 11,
        code: "CR-59-GGTDQ-4",
        title:
          "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
        parent_info: {
          key: "da462367-9552-4b48-82a8-6ea45cbda692",
          label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
          id: "da462367-9552-4b48-82a8-6ea45cbda692",
          subject_id: 20,
          code: "CR-59-GGTDQ",
          title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        },
      },
    },
    certificate_info: null,
  },
  {
    id: "ce70477f-a2c9-4fab-85c4-8ca30f5a63d1",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
    startTime: "2022-01-14T03:38:38.843Z",
    endTime: "2022-01-14T03:39:58.142Z",
    time: 15,
    answers: [
      {
        id: "60fd3ca0-ead6-48b4-82cb-d98af8172598",
        name: "Biện pháp nào không nằm trong phòng ngừa nhiễm khuẩn huyết trên những người bệnh có đặt catheter mạch máu trung tâm: (Tài liệu:QĐ 3671/QĐ-BYT ngày 27/9/2012. Phòng ngừa nhiễm khuẩn huyết trên người bệnh đặt Catheter trong lòng, mục 3.4)\n",
        choose_answers: [4],
      },
      {
        id: "52e943de-8605-4392-ad99-9778a611a92f",
        name: "Biện pháp nào không nằm trong phòng ngừa nhiễm khuẩn máu trên những người bệnh có đặt catheter mạch máu trung tâm: (Tài liệu QT Thực Hành KSNK- Chương IX-tr.171)\n",
        choose_answers: [4],
      },
      {
        id: "8e35c402-c565-4d49-bcc6-f7b184b51056",
        name: "V",
        choose_answers: [2],
      },
      {
        id: "9b869b82-2f16-4fb0-a4b7-55553e8e9b32",
        name: "Catheter mạch máu nào sau đây không nằm trong đặt catheter trung tâm: (Tài liệu QT Thực Hành KSNK- Chương II -tr.15)\n",
        choose_answers: [1],
      },
      {
        id: "f6d6790e-4d7d-420b-ab40-d432204f1ee3",
        name: "Vị trí tiêm truyền tĩnh mạch trung tâm để ngăn ngừa nhiễm khuẩn máu tốt nhất là : (Tài liệu QT Thực Hành KSNK- Chương IX-tr.170)\n",
        choose_answers: [2],
      },
      {
        id: "82f1c341-7b32-45af-a239-e49b12a8ec0a",
        name: "Vị trí tiêm truyền tĩnh mạch trung tâm để ngăn ngừa nhiễm khuẩn máu tốt nhất là : (Tài liệu:QĐ 3671/QĐ-BYT ngày 27/9/2012. Phòng ngừa nhiễm khuẩn huyết trên người bệnh đặt Catheter trong lòng, mục 3.2)\n",
        choose_answers: [5],
      },
      {
        id: "2bef263f-3a91-4eb5-8334-6f359451dd97",
        name: "Các dấu hiệu và triệu chứng được sử dụng trong định nghĩa ca bệnh nhiễm khuẩn huyết đối với bệnh nhân người lớn là: (Tài liệu QT Thực Hành KSNK- Chương II-tr.13-14)",
        choose_answers: [2],
      },
      {
        id: "763506f4-757b-441a-a079-f4ce52a14767",
        name: "Vệ sinh da người bệnh khi đặt đường truyền trung tâm: (Tài liệu QT Thực Hành KSNK- Chương IX-tr.174)\n",
        choose_answers: [2],
      },
      {
        id: "1d63491d-a8f4-4869-82a2-8264a6385e70",
        name: " Sát khuẩn cửa bơm thuốc \n",
        choose_answers: [3],
      },
      {
        id: "4bbf2aff-eb1d-4e35-891d-8f684119d825",
        name: " Ngăn ngừa lây nhiễm khi pha chế dịch truyền qua đường mạch máu trung tâm: (Tài liệu QT Thực Hành KSNK- Chương IX-tr.169)\n",
        choose_answers: [1],
      },
    ],
    status: 2,
    no_retries: 2,
    result: {
      status: 1,
      final_score: 90,
      total_question: 10,
      total_wrong_answers: 1,
      total_correct_answers: 9,
    },
    type: 2,
    meta: { time_exam: 3 },
    createdAt: "2022-01-14T03:38:38.849Z",
    updatedAt: "2022-01-14T03:39:58.142Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    exam_info: {
      id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      exam_id: 14,
      subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
      subject_info: {
        key: "741236e1-02bc-4932-8f50-40383b2ec804",
        label:
          "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
        id: "741236e1-02bc-4932-8f50-40383b2ec804",
        subject_id: 10,
        code: "CR-59-GGTDQ-3",
        title:
          "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
        parent_info: {
          key: "da462367-9552-4b48-82a8-6ea45cbda692",
          label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
          id: "da462367-9552-4b48-82a8-6ea45cbda692",
          subject_id: 20,
          code: "CR-59-GGTDQ",
          title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        },
      },
    },
    certificate_info: {
      id: "50c5ffd9-77b9-4955-9a2a-cc3dfcecbd81",
      certificate_id: 2226,
      member_exam_id: "ce70477f-a2c9-4fab-85c4-8ca30f5a63d1",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
      code: "CR-2022-CXKHXZN",
      type: 2,
      status: 1,
      meta: {},
      createdAt: "2022-01-14T03:39:58.155Z",
      updatedAt: "2022-01-14T03:39:58.155Z",
    },
  },
  {
    id: "b4a20317-8639-46d7-b576-62146b8f3b5c",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
    startTime: "2022-01-14T03:37:53.974Z",
    endTime: "2022-01-14T03:38:27.996Z",
    time: 15,
    answers: [
      {
        id: "f6d6790e-4d7d-420b-ab40-d432204f1ee3",
        name: "Vị trí tiêm truyền tĩnh mạch trung tâm để ngăn ngừa nhiễm khuẩn máu tốt nhất là : (Tài liệu QT Thực Hành KSNK- Chương IX-tr.170)\n",
        choose_answers: [1],
      },
      {
        id: "1d63491d-a8f4-4869-82a2-8264a6385e70",
        name: " Sát khuẩn cửa bơm thuốc \n",
        choose_answers: [3],
      },
      {
        id: "ed6ef7e9-cde9-47b0-829c-a141514b2fa6",
        name: "Khi đặt catheter tĩnh mạch trung tâm, nhằm phòng ngừa nhiễm khuẩn huyết, cần mang: (Tài liệu:QĐ 3671/QĐ-BYT ngày 27/9/2012. Phòng ngừa nhiễm khuẩn huyết trên người bệnh đặt Catheter trong lòng, mục 3.4)\n",
        choose_answers: [3],
      },
      {
        id: "52e943de-8605-4392-ad99-9778a611a92f",
        name: "Biện pháp nào không nằm trong phòng ngừa nhiễm khuẩn máu trên những người bệnh có đặt catheter mạch máu trung tâm: (Tài liệu QT Thực Hành KSNK- Chương IX-tr.171)\n",
        choose_answers: [3],
      },
      {
        id: "2543e2d4-0deb-4de2-b680-d56fce425b5c",
        name: "Thời gian lưu catheter ngoại biên ở người lớn: (Tài liệu:QĐ 3671/QĐ-BYT ngày 27/9/2012. Phòng ngừa nhiễm khuẩn huyết trên người bệnh đặt Catheter trong lòng, mục 3.2)\n",
        choose_answers: [5],
      },
      {
        id: "2bef263f-3a91-4eb5-8334-6f359451dd97",
        name: "Các dấu hiệu và triệu chứng được sử dụng trong định nghĩa ca bệnh nhiễm khuẩn huyết đối với bệnh nhân người lớn là: (Tài liệu QT Thực Hành KSNK- Chương II-tr.13-14)",
        choose_answers: [2],
      },
      {
        id: "8e35c402-c565-4d49-bcc6-f7b184b51056",
        name: "V",
        choose_answers: [2],
      },
      {
        id: "ec91180a-f2bd-40e5-98c6-243f642f02ba",
        name: "Thay gạc che phủ vị trí đặt đường truyền mạch máu nào sau đây, ngoại trừ: (Tài liệu QT Thực Hành KSNK- Chương IX-tr.172)\n",
        choose_answers: [4],
      },
      {
        id: "7c5991c9-6e23-4240-a2f5-7a369f1de9b1",
        name: "Các tác nhân vi sinh thường gây nhiễm khuẩn máu trên những người bệnh có đặt catheter có thể là: (Tài liệu:QĐ 3671/QĐ-BYT ngày 27/9/2012. Phòng ngừa nhiễm khuẩn huyết trên người bệnh đặt Catheter trong lòng, mục 2.2)\n",
        choose_answers: [5],
      },
      {
        id: "f9857066-bf8e-4555-9280-ca36ee3c83b0",
        name: "Vị trí tiêm truyền ưu tiên ở vùng ngoại biên để ngăn ngừa nhiễm khuẩn máu tốt nhất là : (Tài liệu:QĐ 3671/QĐ-BYT ngày 27/9/2012. Phòng ngừa nhiễm khuẩn huyết trên người bệnh đặt Catheter trong lòng, mục 3.2)\n",
        choose_answers: [5],
      },
    ],
    status: -2,
    no_retries: 1,
    result: {
      status: -1,
      final_score: 70,
      total_question: 10,
      total_wrong_answers: 3,
      total_correct_answers: 7,
    },
    type: 2,
    meta: { time_exam: 2 },
    createdAt: "2022-01-14T03:37:53.980Z",
    updatedAt: "2022-01-14T03:38:27.997Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    exam_info: {
      id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      exam_id: 14,
      subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
      subject_info: {
        key: "741236e1-02bc-4932-8f50-40383b2ec804",
        label:
          "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
        id: "741236e1-02bc-4932-8f50-40383b2ec804",
        subject_id: 10,
        code: "CR-59-GGTDQ-3",
        title:
          "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
        parent_info: {
          key: "da462367-9552-4b48-82a8-6ea45cbda692",
          label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
          id: "da462367-9552-4b48-82a8-6ea45cbda692",
          subject_id: 20,
          code: "CR-59-GGTDQ",
          title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        },
      },
    },
    certificate_info: null,
  },
];

export default function TestsSecond() {
  return (
    <div className="studies-second table-second">
      <Card title="Danh sách bài kiểm tra">
        <Table
          pagination={{
            showTotal: (total, range) =>
              `${total} bài kiểm tra | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          rowKey={(record) => record?.id}
        />
      </Card>
    </div>
  );
}
