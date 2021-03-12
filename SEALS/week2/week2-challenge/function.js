//set displayed text
document.getElementById('txt').value = "First name Last name";
document.getElementById('txt2').value = "Pasword";

        // get and display value
        function getAnddisplayVal() {
            var txt = document.getElementById('txt').value;
            var pswrd = document.getElementById('txt2').value;
            alert("name: \n" + txt + "\n"+ "___________\n"+ "\n" +"Pasword: \n" + pswrd );
          }
