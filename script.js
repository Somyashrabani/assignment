function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const Review= document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    if (!gender) {
      alert('Please mention your Review.');
      return;
    }
  
    const popupContent = `
      <strong>First Name:</strong> ${firstName}<br>
      <strong>Last Name:</strong> ${lastName}<br>
      <strong>Date of Birth:</strong> ${dob}<br>
      <strong>Country:</strong> ${country}<br>
      <strong>Review:</strong> ${review.value}<br>
      <strong>Profession:</strong> ${profession}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Mobile Number:</strong> ${mobile}
    `;
  
    const popup = document.getElementById('popupContent');
    popup.innerHTML = popupContent;
  
    const popupDiv = document.getElementById('popup');
    popupDiv.style.display = 'block';
  }
  
  function closePopup() {
    const popupDiv = document.getElementById('popup');
    popupDiv.style.display = 'none';
  }
  
  function resetForm() {
    document.getElementById('surveyForm').reset();
  }
  