import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_ddpm0r9',
    'template_iywsswo',
    e.target,
    'MilrnFaf8601J-Vgq'
  ).then((result) => {
      console.log(result.text);
      alert("Message sent!");
  }, (error) => {
      console.log(error.text);
      alert("Failed to send message.");
  });

  setFormData({ name: "", email: "", message: "" });
};