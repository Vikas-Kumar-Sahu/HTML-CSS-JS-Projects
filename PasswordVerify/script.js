const msg = document.getElementById("msg");
const sendOTP = document.getElementById("otp");
const dispaly = document.getElementById("pass");

// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to initiate OTP generation and store it
// call the genrateOTP Function
function initiateOTP() {
  const generatedOTP = generateOTP();
  // store the genrateOTP in localStorage for use in future 
  localStorage.setItem("generatedOTP", generatedOTP);
//   alert(`Generated OTP: ${generatedOTP}`);
  dispaly.innerText = `${generatedOTP}`;
}

// Function to verify user-input OTP against the stored OTP
function verifyOTP() {
  const enteredOTP = document.getElementById("otp-input").value;
  const storedOTP = localStorage.getItem("generatedOTP");

  if (enteredOTP === storedOTP) {
    msg.innerText = "OTP verification successful!";
  } else {
    msg.innerText = "OTP verification failed. Please try again.";
    alert("OTP verification failed. Please try again.");
  }
}

// Initiate OTP generation when the page loads
// window.onload = initiateOTP;

// display the otp
// dispaly.innerText = initiateOTP;
