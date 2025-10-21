// mở Popup
let currentAction = "";

function openPopup(actionName) {
  currentAction = actionName;
  document.getElementById("popup-title").textContent = actionName;
  document.getElementById("popup-content").value = "";
  document.getElementById("popup-date").value = "";
  document.getElementById("popup-file").value = "";

  const fileGroup = document.getElementById("file-input-group");
  const textGroup = document.getElementById("text-input-group");

  if (actionName === "Đăng tài liệu") {
    fileGroup.classList.remove("d-none");
    textGroup.classList.add("d-none");
  } else {
    fileGroup.classList.add("d-none");
    textGroup.classList.remove("d-none");
  }

  document.getElementById("popup-overlay").style.display = "inline-block";
}
// đóng Popup
function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
}
// Xử lý submit form
function submitForm(event) {
  event.preventDefault();

  const content = document.getElementById("popup-content").value;
  const date = document.getElementById("popup-date").value;
  const fileInput = document.getElementById("popup-file");
  const file = fileInput.files[0];

  if (currentAction === "Đăng tài liệu") {
    if (!file) {
      alert(" Vui lòng chọn tệp để đăng.");
      return;
    }
    alert(`Tệp "${file.name}" đã được đăng thành công!\nNgày thêm: ${date}`);
  }

  alert(`${currentAction} đã được lưu!\n\n Tên: ${content}\nNgày nộp: ${date}`);

  closePopup();
}
