const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "JavaScript",
				weight: 15
			}, {
				text: "CSS",
				weight: 8
			}, {
				text: "MERN",
				weight: 14
			}, {
				text: "C++",
				weight: 13
			}, {
				text: "Cricket",
				weight: 12
			}, {
				text: "python",
				weight: 10
			}, {
				text: "SQL",
				weight: 9
			}, {
				text: "HTML",
				weight: 10
			}, {
				text: "React",
				weight: 9
			}, {
				text: "Node",
				weight: 9
			}, {
				text: "Express",
				weight: 9
			}, {
				text: "MongoDB",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "like to interact with people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
