# All Machine V4 — cấu trúc theo model

- index.html: trang chọn máy, không chứa dữ liệu F3.
- catalog.js: danh mục model được hiển thị.
- app/: giao diện và bộ hiển thị dùng chung.
- machines/F3/: gói F3 độc lập, gồm manifest.json, data.js, search-index.js, images.js, connections.js, index.html và PDF gốc.

## Thêm model
1. Chuẩn bị tài liệu của model, xác định bộ điều khiển và phiên bản bản vẽ.
2. Tạo thư mục machines/<ID>/ với ID chỉ dùng chữ, số, gạch dưới hoặc gạch nối.
3. Tạo dữ liệu khối/hệ thống, chỉ mục tìm kiếm, ảnh và kết nối từ tài liệu của model đó. Không sao chép kết nối F3 sang model mới rồi đổi tên.
4. Thêm bản ghi vào mảng window.MACHINE_CATALOG trong catalog.js (theo manifest của model). Trường entry là machines/<ID>/index.html. manifest là mô tả gói; việc xuất hiện trên danh mục được quyết định bởi catalog.js.
5. Kiểm tra tìm kiếm, kết nối, nguồn và ảnh rồi triển khai thư viện đã cập nhật.

## Cập nhật F3
Chỉ sửa/thay gói machines/F3 và cập nhật thông tin phiên bản trong catalog.js nếu cần. Không phải sửa dữ liệu các model khác hoặc mã trang danh mục.
connections.js hiện chứa xử lý và ánh xạ riêng F3; model mới cần bộ kết nối của chính nó.

## Mở và đăng web
Mở index.html bằng trình duyệt để dùng cục bộ. Giữ nguyên cấu trúc thư mục.
Cloudflare: giải nén gói Web, New deployment, tải toàn bộ nội dung thư mục All_Machine_V4 (index.html nằm ở gốc).
Gói F3 riêng dùng để cập nhật thư mục trong bộ nguồn. Không tải riêng gói F3 để thay thế toàn bộ deployment: thao tác tải thủ công có thể bỏ các tệp còn lại. Gói Web chứa đầy đủ thư viện là bản để đăng.
Chưa có chức năng tự phân tích một PDF mới thành model, cũng chưa có nút tải model lên trong giao diện.
