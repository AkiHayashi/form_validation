function emailValidation() {
  const form = document.getElementById('form');
  const input_area = document.getElementById('email_confirm');
  const table = input_area.parentElement.parentElement.parentElement
  input_area.addEventListener('input', e => {
    if(form.email.value !== form.email_confirm.value) {
      if (document.getElementsByClassName('alert_message').length == 0){
        input_area.classList.add("background_red");
        const element = document.createElement('p')
        const message = document.createTextNode("Eメールが一致しません")
        element.appendChild(message);
        element.classList.add("alert_message");

        content_area = document.getElementsByTagName('tr')[3]
        table.insertBefore(element, content_area);
      }
    } else {
      input_area.classList.remove("background_red");
      const element = document.getElementsByClassName('alert_message')[0]
      element.remove();
    }
  });
};

window.onload = emailValidation;