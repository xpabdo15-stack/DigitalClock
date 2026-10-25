
    function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridiem = "AM"; // الافتراضي هو الصباح

  // تحويل الساعات إلى تنسيق 12 ساعة
  if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }

  // إضافة صفر إلى الأمام إذا كانت القيمة أقل من 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // عرض الوقت بالتنسيق المطلوب
  var clockDiv = document.getElementById("clock");
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

// تحديث الوقت كل ثانية
setInterval(updateTime, 1000);

// تشغيل الدالة مرة عندما يتم تحميل الصفحة لعرض الوقت مباشرة
window.onload = function() {
  updateTime();
};

