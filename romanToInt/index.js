var romanToInt = function (s) {
	let roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	var num = 0;

	for (i = 0; i <= s.length - 1; i++) {
		if (s[i] == "I" && s[i + 1] == "V") {
			num += 4;
			i++;
		} else if (s[i] == "I" && s[i + 1] == "X") {
			num += 9;
			i++;
		} else if (s[i] == "I" && s[i + 1] == "L") {
			num += 49;
			i++;
		} else if (s[i] == "I" && s[i + 1] == "C") {
			num += 99;
			i++;
		} else if (s[i] == "I" && s[i + 1] == "D") {
			num += 499;
			i++;
		} else if (s[i] == "I" && s[i + 1] == "D") {
			num += 499;
			i++;
		} else if (s[i] == "X" && s[i + 1] == "L") {
			num += 40;
			i++;
		} else if (s[i] == "X" && s[i + 1] == "C") {
			num += 90;
			i++;
		} else if (s[i] == "X" && s[i + 1] == "D") {
			num += 490;
			i++;
		} else if (s[i] == "X" && s[i + 1] == "M") {
			num += 990;
			i++;
		} else if (s[i] == "L" && s[i + 1] == "C") {
			num += 50;
			i++;
		} else if (s[i] == "L" && s[i + 1] == "D") {
			num += 450;
			i++;
		} else if (s[i] == "L" && s[i + 1] == "M") {
			num += 950;
			i++;
		} else if (s[i] == "C" && s[i + 1] == "D") {
			num += 400;
			i++;
		} else if (s[i] === "C" && s[i + 1] === "M") {
			num += 900;
			i++;
		} else if (s[i] == "D" && s[i + 1] == "M") {
			num += 500;
			i++;
		} else {
			num += roman[s[i]];
		}
	}
	return num;
};
