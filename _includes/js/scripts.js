function toggleBibtex(id) {

	let bibtex = document.getElementById(id);

	if (bibtex.style.display === 'none') {
		bibtex.style.display = 'inline-block';
	} else {
		bibtex.style.display = 'none';
	}
	
}
