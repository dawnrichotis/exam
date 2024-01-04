function showPage(pageId) {
  // Ẩn tất cả các trang
  const pages = document.querySelectorAll(".tab-content");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // Hiển thị trang được chọn
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}
