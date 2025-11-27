function validateForm() {
        var password = document.getElementById("password").value;
        var phone = document.getElementById("phone").value;
        

        var passRegex = /^[A-Za-z]{4,}$/;
        

        var phoneRegex = /^[0-9]{8}$/;


        if (!passRegex.test(password)) {
          alert("La contraseña no es válida.\nRequisitos: Mínimo 4 caracteres y SOLO letras (mayúsculas o minúsculas).");
          return false;
        }
        
        if (!phoneRegex.test(phone)) {
           alert("Por favor, introduce un número de celular válido de 8 dígitos.");
           return false;
        }

        alert("¡Registro exitoso! Datos validados.");
      }

      function togglePassword() {
        var passwordField = document.getElementById("password");
        var toggleBtn = document.getElementById("toggleBtn");
        
        if (passwordField.type === "password") {
          passwordField.type = "text";
          toggleBtn.textContent = "ocultar";
        } else {
          passwordField.type = "password";
          toggleBtn.textContent = "mostrar"; 
        }
      }