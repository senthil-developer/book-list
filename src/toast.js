export class Toast {
  constructor(container) {
    this.container = container;
  }

  danger(message, time) {
    this.#showAlert(message, "danger", time);
  }

  success(message, time) {
    this.#showAlert(message, "success", time);
  }

  info(message, time) {
    this.#showAlert(message, "info", time);
  }

  #showAlert(message, type, time = 3) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} fade show`;
    alert.role = "alert";
    alert.appendChild(document.createTextNode(message));

    this.container.insertBefore(alert, this.container.firstChild);

    setTimeout(() => {
      alert.classList.remove("show");
      alert.addEventListener("transitionend", () => alert.remove());
    }, time * 1000);
  }
}
