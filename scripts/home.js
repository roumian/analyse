var password = "luar";

document.querySelector("#main-button").addEventListener("click", function (event) {
	event.preventDefault();

	if (document.querySelector("#password").value == password) {
		Load();
	} else {
		alert("My name's not " + document.querySelector("#password").value + " you retard");
	}
});

document.querySelector("#say-my-name").addEventListener("click", function () {
	document.querySelector("#password").value = password;
});

function Load() {
	math.config({
		number: "BigNumber",
		precision: 500,
		epsilon: 1e-200
	});

	document.querySelector("#body").innerHTML = `<section class="grid">
	<form title="Convert from a floating point representation to a decimal. Input the number in binary and get the output in decimal." id="FPR-Decimal" class="container">
		<h2>FPR to Decimal</h2>
		<div class="vertical-container">
			<div class="horizontal-container">
				<div class="input-container">
					<label>Exponent</label>
					<input class="exponent" type="number" name="power" value="11" />
				</div>
				<div class="input-container">
					<label>Mantissa</label>
					<input class="mantissa" type="number" name="mantissa" value="52" />
				</div>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Binary</label>
					<textarea class="input" name="input" rows="3" cols="1"></textarea>
				</div>
			</div>
			<div class="horizontal-container">
				<button class="left-button" type="button" value="left">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
				</button>
				<button class="right-button" type="button" value="right">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
				</button>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Decimal</label>
					<input class="output" readonly name="number" value="0" />
				</div>
			</div>
		</div>
	</form>
	<form title="Convert from decimal to a floating point representation. Input the number in decimal and get the output in binary." id="Decimal-FPR" class="container">
		<h2>Decimal to FPR</h2>
		<div class="vertical-container">
			<div class="horizontal-container">
				<div class="input-container">
					<label>Exponent</label>
					<input class="exponent" type="number" name="power" value="11" />
				</div>
				<div class="input-container">
					<label>Mantissa</label>
					<input class="mantissa" type="number" name="mantissa" value="52" />
				</div>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Decimal</label>
					<input class="input" type="number" name="number" value="0" />
				</div>
			</div>
			<div class="horizontal-container">
				<button class="left-button" type="button" value="left">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
				</button>
				<button class="right-button" type="button" value="right">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
				</button>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Binary</label>
					<textarea class="output" name="output" rows="3" cols="1" readonly></textarea>
				</div>
			</div>
		</div>
	</form>
	<form title="Input the function with an interval [x,y] and the number of iterations required. The output is the iterations for finding the root using the bisection method." id="Bisection" class="container">
		<h2>Bisection method</h2>
		<div class="vertical-container">
			<div class="horizontal-container">
				<div class="input-container">
					<label>Function</label>
					<input class="function" type="text" name="function" placeholder="2e^(-(8/x)-5)+cos(pi*x)-asin(0.5)-ln(x)" />
				</div>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>[x,</label>
					<input class="left-margin" type="number" name="number" />
				</div>
				<div class="input-container">
					<label>y]</label>
					<input class="right-margin" type="number" name="number" />
				</div>
				<div class="input-container">
					<label>Iterations</label>
					<input class="iterations" type="number" name="number" />
				</div>
			</div>
			<div class="horizontal-container">
				<button class="button" type="submit">Solve</button>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Output</label>
					<textarea class="output" name="output" rows="10" cols="1" readonly></textarea>
				</div>
			</div>
		</div>
	</form>
	<form title="Input the function with an intial value and the number of iterations required. The output is the iterations for finding the root using Newton's method." id="Newton" class="container">
		<h2>Newton's method</h2>
		<div class="vertical-container">
			<div class="horizontal-container">
				<div class="input-container">
					<label>Function</label>
					<input class="function" type="text" rows="2" name="function" placeholder="2e^(-8/x)+cos(pi*x)-asin(0.5)-ln(x)" />
				</div>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Initial value</label>
					<input class="initial" type="number" name="number" />
				</div>
				<div class="input-container">
					<label>Iterations</label>
					<input class="iterations" type="number" name="number" />
				</div>
			</div>
			<div class="horizontal-container">
				<button class="button" type="submit">Solve</button>
			</div>
			<div class="horizontal-container">
				<div class="input-container">
					<label>Output</label>
					<textarea class="output" name="output" rows="10" cols="1" readonly></textarea>
				</div>
			</div>
		</div>
	</form>
</section>
<footer>
			<div class="container">
				<p class="footer-text">Nothing is flaweless. Use at your own risk.</p>
			</div>
		</footer>`;

	function toIEEE754(v, ebits, fbits) {
		math.config({
			number: "BigNumber",
			precision: 100
		});

		v = math.evaluate(v);

		var bias = (1 << (ebits - 1)) - 1;

		var s, e, f;
		if (isNaN(v)) {
			e = (1 << bias) - 1;
			f = 1;
			s = 0;
		} else if (v === math.Infinity || v === -math.Infinity) {
			e = (1 << bias) - 1;
			f = 0;
			s = v < 0 ? 1 : 0;
		} else if (v === 0) {
			e = 0;
			f = 0;
			s = 1 / v === -Infinity ? 1 : 0;
		} else {
			s = v < 0;
			v = math.abs(v);

			if (v >= math.pow(2, 1 - bias)) {
				var ln = math.min(math.floor(math.log(v) / math.LN2), bias);
				e = ln + bias;
				f = v * math.pow(2, fbits - ln) - math.pow(2, fbits);
			} else {
				e = 0;
				f = v / math.pow(2, 1 - bias - fbits);
			}
		}

		var i,
			bits = [];
		for (i = fbits; i; i -= 1) {
			bits.push(f % 2 ? 1 : 0);
			f = Math.floor(f / 2);
		}
		for (i = ebits; i; i -= 1) {
			bits.push(e % 2 ? 1 : 0);
			e = Math.floor(e / 2);
		}
		bits.push(s ? 1 : 0);
		bits.reverse();
		var str = bits.join("");

		var bytes = [];
		while (str.length) {
			bytes.push(parseInt(str.substring(0, 8), 2));
			str = str.substring(8);
		}
		return bytes;
	}

	function fromIEEE754(bits, ebits, fbits) {
		if (bits.length != ebits + fbits + 1) {
			return "Error: Invalid number of bits.";
		}

		bits.replaceAll(" ", "").replaceAll(/[^01]/g, "");

		var isZero = true;
		for (var i = 1; i < bits.length; i++) {
			if (parseInt(bits[i]) == 1) {
				isZero = false;
				break;
			}
		}

		if (isZero) return 0;

		math.config({
			number: "BigNumber",
			precision: 500,
			epsilon: 1e-200
		});

		var e = bits.slice(1, ebits + 1);
		e = parseInt(e, 2);

		var f = math.bignumber(0);
		for (var i = ebits + 1; i < ebits + fbits + 1; i++) {
			var bit = parseInt(bits[i]);
			f = math.bignumber(math.add(math.bignumber(f), math.bignumber(math.multiply(math.bignumber(bit), math.bignumber(math.pow(2, -(i - ebits)))))));
		}

		var s = bits[0] == 0 ? 1 : -1;

		var k = math.pow(2, ebits - 1) - 1;

		return math.bignumber(math.multiply(math.bignumber(math.multiply(math.bignumber(s), math.bignumber(math.add(1, math.bignumber(f))))), math.bignumber(math.pow(2, e - k))));
	}

	function fromIEEE754Double(b) {
		return fromIEEE754(b, 11, 52);
	}
	function toIEEE754Double(v) {
		return toIEEE754(v, 11, 52);
	}
	function fromIEEE754Single(b) {
		return fromIEEE754(b, 8, 23);
	}
	function toIEEE754Single(v) {
		return toIEEE754(v, 8, 23);
	}

	function toIEEE754DoubleString(v) {
		return toIEEE754Double(v)
			.map(function (n) {
				for (n = n.toString(2); n.length < 8; n = "0" + n);
				return n;
			})
			.join("")
			.replace(/(.)(.{11})(.{52})/, "$1 $2 $3");
	}

	function getCaretPosition(txt) {
		var startPos = txt.selectionStart;
		caretPos = txt.selectionEnd;
		return caretPos;
	}

	function setCaretPosition(txt) {
		if (txt.createTextRange) {
			var range = txt.createTextRange();
			range.collapse(true);
			range.moveEnd("character", caretPos);
			range.moveStart("character", caretPos);
			range.select();
			return;
		}

		if (txt.selectionStart) {
			txt.focus();
			txt.setSelectionRange(caretPos, caretPos);
		}
	}

	function addBinary(a, b) {
		var result = (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
		var max = Math.max(a.length, b.length);

		return result.replace(/^0+/, "").padStart(max, "0");
	}

	function subBinary(a, b) {
		while (a.length < b.length) {
			a = "0" + a;
		}
		while (b.length < a.length) {
			b = "0" + b;
		}

		let result = "";
		let carry = 0;
		for (let i = a.length - 1; i >= 0; i--) {
			let bitA = parseInt(a[i]);
			let bitB = parseInt(b[i]);

			let diff = bitA - bitB - carry;
			if (diff < 0) {
				diff += 2;
				carry = 1;
			} else {
				carry = 0;
			}

			result = diff.toString() + result;
		}

		var max = Math.max(a.length, b.length);

		return result.replace(/^0+/, "").padStart(max, "0");
	}

	var decimalToFpr = document.querySelector("#Decimal-FPR");
	var fprToDecimal = document.querySelector("#FPR-Decimal");

	var m_decimalToFpr = decimalToFpr.querySelector(".mantissa");
	var m_fprToDecimal = fprToDecimal.querySelector(".mantissa");

	var e_decimalToFpr = decimalToFpr.querySelector(".exponent");
	var e_fprToDecimal = fprToDecimal.querySelector(".exponent");

	var i_decimalToFpr = decimalToFpr.querySelector(".input");
	var i_fprToDecimal = fprToDecimal.querySelector(".input");

	var o_decimalToFpr = decimalToFpr.querySelector(".output");
	var o_fprToDecimal = fprToDecimal.querySelector(".output");

	var l_decimalToFpr = decimalToFpr.querySelector(".left-button");
	var l_fprToDecimal = fprToDecimal.querySelector(".left-button");

	var r_decimalToFpr = decimalToFpr.querySelector(".right-button");
	var r_fprToDecimal = fprToDecimal.querySelector(".right-button");

	var caretPos = 0;
	var lastLength = 0;

	DecimalToFpr();
	FprToDecimal();

	function DecimalToFpr() {
		if (i_decimalToFpr.value == "") {
			o_decimalToFpr.innerHTML = "";
			return;
		}

		var mantissa = parseInt(m_decimalToFpr.value);
		var exponent = parseInt(e_decimalToFpr.value);

		var value = toIEEE754(i_decimalToFpr.value, e_decimalToFpr.value, m_decimalToFpr.value)
			.map(function (n) {
				for (n = n.toString(2); n.length < 8; n = "0" + n);
				return n;
			})
			.join("");

		o_decimalToFpr.innerHTML = value.slice(0, 1) + " " + value.slice(1, exponent + 1) + " " + value.slice(exponent + 1, exponent + 1 + mantissa);
	}

	i_decimalToFpr.addEventListener("input", function () {
		DecimalToFpr();
	});

	m_decimalToFpr.addEventListener("change", function () {
		DecimalToFpr();
	});

	e_decimalToFpr.addEventListener("change", function () {
		DecimalToFpr();
	});

	function FprToDecimal() {
		var mantissa = parseInt(m_fprToDecimal.value);
		var exponent = parseInt(e_fprToDecimal.value);

		getCaretPosition(i_fprToDecimal);

		i_fprToDecimal.value = i_fprToDecimal.value.replaceAll(" ", "").replaceAll(/[^01]/g, "");

		if (i_fprToDecimal.value.length == 0) return;
		else if (i_fprToDecimal.value.length > exponent + mantissa + 1) i_fprToDecimal.value = i_fprToDecimal.value.slice(0, exponent + mantissa + 1);

		o_fprToDecimal.value = fromIEEE754(i_fprToDecimal.value.replaceAll(" ", "").replaceAll(/[^01]/g, "").toString(), exponent, mantissa);
	}

	i_fprToDecimal.addEventListener("input", function (event) {
		FprToDecimal();
	});

	m_fprToDecimal.addEventListener("change", function () {
		FprToDecimal();
	});

	e_fprToDecimal.addEventListener("change", function () {
		FprToDecimal();
	});

	l_decimalToFpr.addEventListener("click", function () {
		var mantissa = parseInt(m_decimalToFpr.value);
		var exponent = parseInt(e_decimalToFpr.value);

		var nextLower = "";
		var b = o_decimalToFpr.value.replaceAll(" ", "").replaceAll(/[^01]/g, "");
		if (b[0] == "0" && b.replaceAll("0", "") != "") {
			nextLower = subBinary(b, "1");
		} else if (b.replaceAll("0", "") == "") {
			b = b.replace("0", "1");
			nextLower = addBinary(b, "1");
		} else if (b[0] == 1) {
			nextLower = addBinary(b, "1");
		}

		i_decimalToFpr.value = fromIEEE754(nextLower, parseInt(e_decimalToFpr.value), parseInt(m_decimalToFpr.value));

		o_decimalToFpr.innerHTML = nextLower.slice(0, 1) + " " + nextLower.slice(1, exponent + 1) + " " + nextLower.slice(exponent + 1, exponent + 1 + mantissa);
	});

	r_decimalToFpr.addEventListener("click", function () {
		var mantissa = parseInt(m_decimalToFpr.value);
		var exponent = parseInt(e_decimalToFpr.value);

		var nextHigher = "";
		var b = o_decimalToFpr.value.replaceAll(" ", "").replaceAll(/[^01]/g, "");

		if (b[0] == "0") {
			nextHigher = addBinary(b, "1");
		} else if (b[0] == "1" && b.replaceAll("0", "") == "1") {
			b = b.replace("1", "0");
			nextHigher = addBinary(b, "1");
		} else if (b[0] == "1") {
			nextHigher = subBinary(b, "1");
		}

		i_decimalToFpr.value = fromIEEE754(nextHigher, parseInt(e_decimalToFpr.value), parseInt(m_decimalToFpr.value));

		o_decimalToFpr.innerHTML = nextHigher.slice(0, 1) + " " + nextHigher.slice(1, exponent + 1) + " " + nextHigher.slice(exponent + 1, exponent + 1 + mantissa);
	});

	l_fprToDecimal.addEventListener("click", function () {
		var nextLower = "";
		var b = i_fprToDecimal.value.replaceAll(" ", "").replaceAll(/[^01]/g, "");

		if (b[0] == "0" && b.replaceAll("0", "") != "") {
			nextLower = subBinary(b, "1");
		} else if (b.replaceAll("0", "") == "") {
			b = b.replace("0", "1");
			nextLower = addBinary(b, "1");
		} else if (b[0] == 1) {
			nextLower = addBinary(b, "1");
		}

		i_fprToDecimal.value = nextLower;
		FprToDecimal();
	});

	r_fprToDecimal.addEventListener("click", function () {
		var nextHigher = "";
		var b = i_fprToDecimal.value.replaceAll(" ", "").replaceAll(/[^01]/g, "");

		if (b[0] == "0") {
			nextHigher = addBinary(b, "1");
		} else if (b[0] == "1" && b.replaceAll("0", "") == "1") {
			b = b.replace("1", "0");
			nextHigher = addBinary(b, "1");
		} else if (b[0] == "1") {
			nextHigher = subBinary(b, "1");
		}

		i_fprToDecimal.value = nextHigher;
		FprToDecimal();
	});

	function EvaluateFunction(func, x) {
		math.config({
			number: "number",
			precision: 100
		});

		return math.evaluate(func.replaceAll("log", "(1/log(10))*log").replaceAll("ln", "log"), { x: x });
	}

	var bisection = document.querySelector("#Bisection");
	var i_bisection = bisection.querySelector(".function");
	var o_bisection = bisection.querySelector(".output");
	var l_bisection = bisection.querySelector(".left-margin");
	var r_bisection = bisection.querySelector(".right-margin");
	var m_bisection = bisection.querySelector(".iterations");
	var b_bisection = bisection.querySelector(".button");

	function Bisection(func, left, right, iterations) {
		if (func.toString() == "" || left.toString() == "" || right.toString() == "" || iterations.toString() == "") {
			o_bisection.value = "";
			return;
		}

		math.config({
			number: "number",
			precision: 100
		});

		if (Math.sign(EvaluateFunction(func, left)) * Math.sign(EvaluateFunction(func, right)) > 0) {
			o_bisection.value = "There is an even number or no identifiable roots in this interval.";
			return;
		}
		o_bisection.value = "";

		if (EvaluateFunction(func, left) == 0) {
			o_bisection.value = "Root found at " + left;
			return;
		}
		if (EvaluateFunction(func, right) == 0) {
			o_bisection.value = "Root found at " + right;
			return;
		}

		var mid = 0;
		for (var i = 0; i < iterations; i++) {
			mid = (left + right) / 2;

			if (EvaluateFunction(func, mid) == 0) {
				o_bisection.value += i + 1 + ": [Root found] " + mid + "\n";
				return;
			}

			if (Math.sign(EvaluateFunction(func, left)) * Math.sign(EvaluateFunction(func, mid)) < 0) right = mid;
			else left = mid;

			o_bisection.value += i + 1 + " - [" + left + ", " + right + "]: " + mid + "\n";
		}
	}

	b_bisection.addEventListener("click", function (event) {
		event.preventDefault();
		Bisection(i_bisection.value, parseFloat(l_bisection.value), parseFloat(r_bisection.value), parseInt(m_bisection.value));
	});

	var newton = document.querySelector("#Newton");
	var i_newton = newton.querySelector(".function");
	var o_newton = newton.querySelector(".output");
	var x_newton = newton.querySelector(".initial");
	var m_newton = newton.querySelector(".iterations");
	var b_newton = newton.querySelector(".button");

	function Newton(func, x, iterations) {
		if (func.toString() == "" || x.toString() == "NaN" || iterations.toString() == "") {
			o_newton.value = "";
			return;
		}

		math.config({
			number: "number",
			precision: 100
		});

		func = func.replaceAll("log", "(1/log(10))*log").replaceAll("ln", "log");
		var derivative = math.derivative(func, "x").toString().replaceAll("log", "(1/log(10))*log").replaceAll("ln", "log").replaceAll(" ", "");

		if (EvaluateFunction(func, x) == 0) {
			o_newton.value = "Root found at " + x;
			return;
		}

		o_newton.value = "";
		for (var i = 0; i < iterations; i++) {
			if (EvaluateFunction(derivative, x) == 0) {
				o_newton.value = i + 1 + ": Derivative is 0 at this point.";
				return;
			}
			x = x - EvaluateFunction(func, x) / EvaluateFunction(derivative, x);
			o_newton.value += i + 1 + ": " + x + "\n";
		}
	}

	b_newton.addEventListener("click", function (event) {
		event.preventDefault();
		Newton(i_newton.value, parseFloat(x_newton.value), parseInt(m_newton.value));
	});
}
