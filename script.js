let count = 0;
clickCount.textContent = count;

clickerButton.addEventListener("click", function() {
	count += 1;
	clickCount.textContent = count;
});

resetButton.addEventListener("click", function() {
	count = 0;
	clickCount.textContent = count;
});