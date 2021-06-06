function sendMail(params) {
  var tempParams = {
    from_name:document.getElementById("from_name").value,
    to_name:document.getElementById("to_name").value,
  }
  emailjs.send('service_mwyz4dw', 'template_6lyts3i', tempParams)
}
