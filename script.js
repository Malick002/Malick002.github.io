<script>
	// Sélectionnez toutes les compétences
	const skills = document.querySelectorAll('.skill');

	// Ajoutez un écouteur d'événements à chaque compétence
	skills.forEach(skill => {
		skill.addEventListener('click', event => {
			// Toggle active class on clicked skill
			skill.classList.toggle('active');

			// Remove active class from all other skills except the clicked one
			skills.forEach(otherSkill => {
				if (otherSkill !== skill) {
					otherSkill.classList.remove('active');
				}
			});
		});
	});
</script>