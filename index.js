const tabs = document.querySelectorAll(".deals__tabs .btn");
const contents = document.querySelectorAll(".tab__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Xóa 'active' khỏi các tab và nội dung cũ
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Thêm 'active' vào tab và nội dung mới
    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-id"))
      .classList.add("active");
  });
});
