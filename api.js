$("#btn_savedata").click(function () {

  var uname = document.getElementById('nm').value;
  var email = document.getElementById('em').value;
  var phone = document.getElementById('ph').value;
  var gender = document.getElementById('gender').value;
  var address = document.getElementById('addr').value;
  var password = document.getElementById('pswd').value;
  //alert(uname);
  var nmpattern = /^[a-zA-Z ]+$/;
  var phpattern = /^[6-9]{1}[0-9]{9}$/;
  var empattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  var pswdpattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,8}$/;

  if (!nmpattern.test(uname)) {
    alert("Invalid Name");
    return false;
  }
  if (!phpattern.test(phone)) {
    alert("Invalid phone");
    return false;
  }
  if (!empattern.test(email)) {
    alert("Invalid email id");
    return false;
  }
  if (!pswdpattern.test(password)) {
    alert("Enter correct password");
    return false;
  }

  $.ajax({
    type: 'GET',
    url: "/regdata",
    contentType: "application/json;charset=UTF-8",
    data: {
      'stname': uname,
      'email': email,
      'phone': phone,
      'gender': gender,
      'addr1': address,
      'pswd': password
    },
    dataType: 'json',
    success: function (resp) {
      alert(resp);
      window.location = "register";
    },
    failure: function (resp) {
      alert('Data Saved Failed');
    },
  });


});


$("#btn_logindata").click(function () {

  var email = document.getElementById('em').value;
  var pswd = document.getElementById('pswd').value;



  $.ajax({
    type: 'GET',
    url: "/logdata",
    contentType: "application/json;charset=UTF-8",
    data: {
      'email': email,
      'pswd': pswd
    },
    dataType: 'json',
    success: function (resp) {
      if (resp == 'success') {
        window.location = "dashboard";
      }
      if (resp == 'failure') {
        alert('Credentials not found');
        window.location = "register";
      }
    },
    failure: function (resp) {
      alert('Data Saved Failed');
    },
  });


});


$("#btn_reset_log").click(function () {

  window.location = 'login';

});


$("#btn_reset_reg").click(function () {

  window.location = 'register';

});



$("#btn_loaddata").click(function () {
  var form_data = new FormData($("#dataloadform")[0]);


  $.ajax({
    type: 'POST',
    url: "/dataparser",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (resp) {
      alert(resp);
    },
    failure: function (resp) {
      alert('Data Save Failed');
    },
  });

});


$("#btn_cleardata").click(function () {

  $.ajax({
    type: 'GET',
    url: "/datadelete",
    contentType: false,
    cache: false,
    processData: false,
    success: function (resp) {
      alert(resp);
      window.location = 'dataloader';
    },
    failure: function (resp) {
      alert('Data deletion Failed');
    },
  });

});


$("#btn_contactdata").click(function () {
  debugger
  var uname = document.getElementById('name').value;
  var email = document.getElementById('em').value;
  var phone = document.getElementById('phone').value;
  var msg = document.getElementById('msg').value;
  //alert(uname);
  var nmpattern = /^[a-zA-Z ]+$/;
  var empattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  var phpattern = /^[6-9]{1}[0-9]{9}$/;

  if (!nmpattern.test(uname)) {
    alert("Invalid Name");
    return false;
  }
  if (!empattern.test(email)) {
    alert("Invalid Email");
    return false;
  }
  if (!phpattern.test(phone)) {
    alert("Invalid phone");
    return false;
  }

  $.ajax({
    type: 'GET',
    url: "/contactdata",
    contentType: "application/json;charset=UTF-8",
    data: {
      'stname': uname,
      'email': email,
      'phone': phone,
      'msg': msg,
    },
    dataType: 'json',
    success: function (resp) {
      alert(resp);
      window.location = "contact";
    },
    failure: function (resp) {
      alert('Data Saved Failed');
    },
  });


});

$("#btn_reset_predict").click(function () {

  window.location = 'predict';

});


$("#btn_predictdata").click(function () {
  debugger
  var age = document.getElementById('age').value;
  var sex = document.getElementById('sex').value;
  var cp = document.getElementById('cp').value;
  var trtbps = document.getElementById('trtbps').value;
  var chol = document.getElementById('chol').value;
  var fbs = document.getElementById('fbs').value;
  var restecg = document.getElementById('restecg').value;
  var thalachh = document.getElementById('thalachh').value;
  var exng = document.getElementById('exng').value;
  var oldpeak = document.getElementById('oldpeak').value;
  var slp = document.getElementById('slp').value;
  var caa = document.getElementById('caa').value;
  var thall = document.getElementById('thall').value;

  var ageNo = parseInt(age);
  if (!(ageNo >= 1 && ageNo <= 100)) {
    alert("The age must be a number between 1 and 100");
    return false;
  }

  if (sex == '') { alert('Please select a gender'); return }

  if (cp == '') { alert('Please select a Chest Pain'); return }

  var trtbpsNo = parseInt(trtbps);
  if (!(trtbpsNo >= 94 && trtbpsNo <= 200)) {
    alert("The Resting Blood Pressure must be a number between 94 and 200");
    return false;
  }

  var cholNo = parseInt(chol);
  if (!(cholNo >= 126 && cholNo <= 564)) {
    alert("The Cholestrol must be a number between 126 and 564");
    return false;
  }

  if (fbs == '') { alert('Please select a Fasting Blood Sugar'); return }

  if (restecg == '') { alert('Please select a Resting electrocardiographic results'); return }

  var thalachhNo = parseInt(thalachh);
  if (!(thalachhNo >= 60 && thalachhNo <= 202)) {
    alert("The Maximum heart rate achieved must be a number between 60 and 202");
    return false;
  }

  if (exng == '') { alert('Please select a Exercise induced angina'); return }

  var oldpeakNo = parseFloat(oldpeak);
  if (!(oldpeakNo >= 0 && oldpeakNo <= 6.2)) {
    alert("The Oldpeak must be a number between 0 and 6.2");
    return false;
  }

  if (slp == '') { alert('Please select a Slope of the peak exercise'); return }
  
  if (caa == '') { alert('Please select a Number of major vessels'); return }

  if (thall == '') { alert('Please select a thall'); return }

  $.ajax({
    type: 'GET',
    url: "/predictdata",
    contentType: "application/json;charset=UTF-8",
    data: {
      'age': age,
      'sex': sex,
      'cp': cp,
      'trtbps': trtbps,
      'chol': chol,
      'fbs': fbs,
      'restecg': restecg,
      'thalachh': thalachh,
      'exng': exng,
      'oldpeak': oldpeak,
      'slp': slp,
      'caa': caa,
      'thall': thall,
    },
    dataType: 'json',
    success: function (resp) {
      //alert(resp);
      if (resp == 0)
        alert("Patient is normal")
      else
        alert("Patient is prone to heart attack")
    },
    failure: function (resp) {
      alert('Data prediction Failed');
    },
  });

});


window.deleteRow = function(row0,row1,row2,row3,row4,row5,row6,row7,row8,row9,row10,row11,row12,row13) {
  $.ajax({
    type: 'GET',
    url: "/deletedata",
    contentType: "application/json;charset=UTF-8",
    data: {
      'age': row0,
      'sex': row1,
      'cp': row2,
      'trtbps': row3,
      'chol': row4,
      'fbs': row5,
      'restecg': row6,
      'thalachh': row7,
      'exng': row8,
      'oldpeak': row9,
      'slp': row10,
      'caa': row11,
      'thall': row12,
      'output':row13,
    },
    dataType: 'json',
    success: function (resp) {
      alert(resp);
      window.location = "planning";
    },
    failure: function (resp) {
      alert('Data Deletion Failed');
    },
  });
}