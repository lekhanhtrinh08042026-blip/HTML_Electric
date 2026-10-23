# All Machine: chuẩn giao diện dùng chung

F3 là mẫu chuẩn. F3, PS65 và PS105 cùng dùng `HTML_Electric_Cloudflare/public/app/standard-ui.js` và `app/style.css`.

## Bắt buộc cho Model mới

- Tải `../../app/standard-ui.js` trước bộ điều khiển Model.
- Khởi tạo `MACHINE_UI.create({groups, blocks, front, label, ioLink})`.
- Dùng các hàm `homeMap`, `blockGraph`, `signalGraph`, `mobileHome`, `mobileTile`, `ico`, `legend`, `flow` của bộ chuẩn. Không tạo lại bộ biểu tượng hoặc bố cục biểu đồ riêng.
- Giữ bốn lớp kết nối: nguồn/động lực (cam), lệnh điều khiển (xanh dương), phản hồi/trạng thái (xanh lục), tham chiếu/PE (xám đứt).
- Sơ đồ I/O lấy khối chức năng làm trung tâm: Y/DO từ PMC đi vào mạch, X/DI từ mạch về PMC đi ra khỏi mạch. Phản hồi encoder về amplifier nằm ở INPUT của amplifier. Không suy ra chiều vật lý chỉ từ tham chiếu trang.
- Thẻ hệ thống và thẻ khối dùng cùng bộ icon, kích thước, kiểu chữ, đường viền và màu nền F3. Bản điện thoại dùng cùng mobile-grid và nút hiện/ẩn sơ đồ.
- Dữ liệu, ảnh máy, địa chỉ I/O, đầu nối và PDF phải đúng Model/phiên bản tài liệu. Không đổi tên dữ liệu F3 để tạo Model khác.
- Chỉ thêm bản ghi catalog sau khi Model đã có đủ dữ liệu và kiểm tra được các đường dẫn.

## Dữ liệu theo Model

`groups`: id, title, icon hoặc slot, danh sách blocks. `blocks`: id, vi, title, page, group, opt, refs, io, image, text. Tham chiếu có thể là id hoặc `{id, cell}`.

`signalGraph` nhận mô hình nodes/edges cùng trạng thái focus, edge, layers; chỉ bộ ánh xạ riêng Model được quyền quyết định nút và hướng tín hiệu. Bộ vẽ chung không tự tạo quan hệ điện.

PS65/PS105 dùng V210I-C1E-XG, Edition G, 167 trang/120 khối. Hình máy PS lấy từ V210I-I1E-XC, PDF 65, hình tổng quan 1.1. F3 giữ bộ V2631I-C1E-YB và ánh xạ kết nối hiện có.

## Kiểm tra trước triển khai

Kiểm tra sơ đồ tổng thể, thẻ khối, đủ bốn bộ lọc I/O, truy vết nút/đường, tìm kiếm và phóng lớn ảnh, điều hướng trở lại danh mục, tải lại link chi tiết, màn hình rộng/hẹp và các Model cũ.
