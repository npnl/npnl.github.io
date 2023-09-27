/*
AGE			EDUCATION	TRAILS_A_MEAN		TRAILS_A_SD		TRAILS_B_MEAN		TRAILS_B_SD
18-24			N/A			22.93				6.87			48.97				12.69
25-34			N/A			24.4				8.71			50.68				12.36
35-44			N/A			28.54				10.09			58.46				16.41
45-54			N/A			31.78				9.93			63.76				14.42
55-59			0-12		35.1				10.94			78.84				19.09
				>12			31.72				10.14			68.74				21.02
60-64			0-12		33.22				9.1				74.55				19.55
				>12			31.32				6.96			64.58				18.59
65-69			0-12		39.14				11.84			91.32				28.89
				>12			33.84				6.69			67.12				9.31
70-74			0-12		42.47				15.15			109.95				35.15
				>12			40.13				14.48			86.27				24.07
75-79			0-12		50.81				17.44			130.61				45.74
				>12			41.74				15.32			100.68				44.16
80-84			0-12		58.19				23.31			152.74				65.68
				>12			55.32				21.28			132.15				42.95
85-89			0-12		57.56				21.54			167.69				78.5
				>12			63.46				29.22			140.54				75.38
*/

function getCategoryValues(age, education){
	var a_mean = 0, a_sd = 0, b_mean = 0, b_sd = 0;
	if(age >= 18 && age <= 24){
		a_mean = 22.93, a_sd = 6.87, b_mean = 48.97, b_sd = 12.69;
		if(education > 12)
		{
			// Only one value for this age group range
		}
	}
	else if(age >= 25 && age <= 34){
		a_mean = 24.4, a_sd = 8.71, b_mean = 50.68, b_sd = 12.36;
		if(education > 12)
		{
			// Only one value for this age group range
		}
	}
	else if(age >= 35 && age <= 44){
		a_mean = 28.54, a_sd = 10.09, b_mean = 58.46, b_sd = 16.41;
		if(education > 12)
		{
			// Only one value for this age group range
		}
	}

	else if(age >= 45 && age <= 54){
		a_mean = 31.78, a_sd = 9.93, b_mean = 63.76, b_sd = 14.42;
		if(education > 12)
		{
			// Only one value for this age group range
		}
	}

	else if(age >= 55 && age <= 59){
		a_mean = 35.1, a_sd = 10.94, b_mean = 78.84, b_sd = 19.09;
		if(education > 12)
		{
			a_mean = 31.72;
			a_sd = 10.14;
			b_mean = 68.74;
			b_sd = 21.02;
		}
	}
	else if(age >= 60 && age <= 64){
		if(education > 12)
		{
			a_mean = 31.32;
			a_sd = 6.96;
			b_mean = 64.58;
			b_sd = 18.59;
		}
	}
	else if(age >= 65 && age <= 69){
		a_mean = 39.14, a_sd = 11.84, b_mean = 91.32, b_sd = 28.89;
		if(education > 12)
		{
			a_mean = 33.84;
			a_sd = 6.69;
			b_mean = 67.12;
			b_sd = 9.31;
		}
	}
	else if(age >= 70 && age <= 74){
		a_mean = 42.47, a_sd = 15.15, b_mean = 109.95, b_sd = 35.15;
		if(education > 12)
		{
			a_mean = 40.13;
			a_sd = 14.48;
			b_mean = 86.27;
			b_sd = 24.07;
		}
	}
	else if(age >= 75 && age <= 79){
		a_mean = 50.81, a_sd = 17.44, b_mean = 130.61, b_sd = 45.74;
		if(education > 12)
		{
			a_mean = 41.74;
			a_sd = 15.32;
			b_mean = 100.68;
			b_sd = 44.16;
		}
	}
	else if(age >= 80 && age <= 84){
		a_mean = 58.19, a_sd = 23.31, b_mean = 152.74, b_sd = 65.68;
		if(education > 12)
		{
			a_mean = 55.32;
			a_sd = 21.28;
			b_mean = 132.15;
			b_sd = 42.95;
		}
	}
	else if(age >= 85 && age <= 89){
		a_mean = 57.56, a_sd = 21.54, b_mean = 167.69, b_sd = 78.5;
		if(education > 12)
		{
			a_mean = 63.46;
			a_sd = 29.22;
			b_mean = 140.54;
			b_sd = 75.38;
		}
	}

	return {a_mean: a_mean, a_sd: a_sd, b_mean: b_mean, b_sd: b_sd}
};

function calculateStatistics(){
	var text1 = document.getElementById("text1");
	var text2 = document.getElementById("text2");


	var age = document.getElementById('input_age').value;
	var education = document.getElementById('input_education').value;
	var tmt_a = document.getElementById('input_tmt_a').value;
	var tmt_b = document.getElementById('input_tmt_b').value;

	category_values = getCategoryValues(age, education);

	cal_1 = ((category_values.a_mean - tmt_a)/category_values.a_sd).toFixed(1);
	cal_2 = ((category_values.b_mean - tmt_b)/category_values.b_sd).toFixed(1);

	var position;
	if(cal_1 < 0){
		position = "below";
	}
	else {
		position = "above";
	}

	cal_1 = Math.abs(cal_1);
	text1.innerHTML = "Performance on TMT A is " + cal_1 + " SD "+ position +" the mean.";

	if(cal_2 < 0){
		position = "below";
	}
	else {
		position = "above";
	}
	cal_2 = Math.abs(cal_2);
	text2.innerHTML = "Performance on TMT B is " + cal_2 + " SD "+ position +" the mean.";
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