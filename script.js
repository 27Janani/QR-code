//global
const UserData = document.getElementById("qrText");

function Info() {
  const inputFromUser = UserData.value;
  ConditionChecker(inputFromUser);
}// getting user data

function GenerateQR(text) {
  const imgBox = document.getElementById("imgBox");
  imgBox.innerHTML = "";
  if (text) {
    const QRData = new QRCode(imgBox, {
      text: text,
      width: 128,
      height: 128,
    });
      
      console.log("qr", QRData._o.text)
  }
}

function ConditionChecker(text) {
  if (!text) {
    alert("please enter url or name ");
  } else {
    const Url = GetDomain(text);
    if (Url) {
      GenerateQR(text);
    }
  }
}

function GetDomain(text) {
  try {
      const url = new URL(text);
      
    return url.hostname;
  } catch (error) {
    alert("Invalid URL");
    return null;
  }
}
