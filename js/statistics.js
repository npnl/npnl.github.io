function calculateStatistics(){
	var text1 = document.getElementById("text1");
	var text2 = document.getElementById("text2");


	var age = document.getElementById('input_age').value;
	var education = document.getElementById('input_education').value;
	var tmt_a = document.getElementById('input_tmt_a').value;
	var tmt_b = document.getElementById('input_tmt_b').value;

	console.log(age, education, tmt_a, tmt_b);

	text1.innerHTML = "TMT A is " + 12.0 + " SD below the mean.";
	text2.innerHTML = "TMT B is " + -1.0 + " SD below the mean.";
	$("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");
};

function resetForm(){
	var text1 = document.getElementById("text1");
	var text2 = document.getElementById("text2");
	text1.innerHTML = '';
	text2.innerHTML = '';
}

$("#user_info_form").submit(function(e) {
    e.preventDefault();
    calculateStatistics();
});