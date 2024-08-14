export class AlertManager {
  constructor(container) {
    this.container = container;
  }

  danger(message, time) {
    this.#showAlert(message, "danger", time);
  }
  success(message, time) {
    this.#showAlert(message, "success", time);
  }

  #showAlert(message, type, time = 3) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} fade show toast`;
    alert.role = "alert";
    alert.appendChild(document.createTextNode(message));

    this.container.appendChild(alert);

    setTimeout(() => {
      alert.classList.remove("show");
      alert.addEventListener("transitionend", () => alert.remove());
    }, time * 1000);
  }
}
