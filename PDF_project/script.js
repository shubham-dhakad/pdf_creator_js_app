document.getElementById("generatePDF").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;

  if (!jsPDF) {
    console.error("JSPDF is not working/loading...");
    return;
  }

  const doc = new jsPDF();

  // Taking the user entered data

  const userName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  doc.text(`User Name: ${userName}`, 10, 10);
  doc.text(`Email ID: ${email}`, 10, 20);
  doc.text(`User Message: ${message}`, 10, 30);

  // Saving the PDf
  doc.save(`${userName}.pdf`);

  // Reloading the website after the PDf Generation
  setTimeout(() => {
    location.reload();
  }, 500);
});
