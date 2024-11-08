document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtiene los valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validación del formulario
        if (name === '' || email === '') {
            showError('Todos los campos son obligatorios.');
            return;
        }

        if (!validateEmail(email)) {
            showError('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Simulación del envío del formulario (puedes reemplazar esto con una solicitud real)
        console.log(`Nombre: ${name}, Correo: ${email}`);
        
        // Mostrar mensaje de éxito
        alert(`Gracias por contactarnos, ${name}. Pronto nos pondremos en contacto contigo.`);

        // Limpia el formulario
        contactForm.reset();
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Función para mostrar mensajes de error
    function showError(message) {
        alert(message);
    }

    // Manejo del formulario de comentarios
    const commentForm = document.getElementById('commentForm');
    const questionInput = document.getElementById('question');
    const commentsDisplay = document.querySelector('.comments-display');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener el texto de la pregunta del formulario
        const questionText = questionInput.value.trim();

        // Verificar que el campo no esté vacío
        if (questionText) {
            // Crear un nuevo elemento de comentario
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `
                <p><strong>Pregunta:</strong> ${questionText}</p>
                <p><em>Respuesta del Experto:</em> Gracias por tu pregunta. Un experto responderá pronto.</p>
            `;

            // Agregar el nuevo comentario a la sección de comentarios
            commentsDisplay.appendChild(newComment);

            // Limpiar el campo de entrada del formulario
            questionInput.value = '';
        }
    });
});
