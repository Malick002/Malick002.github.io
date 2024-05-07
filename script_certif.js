<script>
	document.addEventListener('DOMContentLoaded', function() {
		// Sélectionnez l'élément de l'image de la certification Pix
		const certificationPix = document.querySelector('.certif-img');

		// Ajoutez un écouteur d'événement pour détecter les clics sur l'image
		certificationPix.addEventListener('click', function() {
			// Agrandissez l'image de la certification Pix
			certificationPix.style.transform = 'scale(1.5)'; // Par exemple, agrandissement de 1.5 fois la taille originale
		});
	});
</script>