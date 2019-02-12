		$(document).ready(function() {
			
			$("a#example1_1").fancybox({
				'titlePosition'	: 'inside'
			});
			$("#example1_2").fancybox({
				'width'				: 720,
				'height'			: 550,
				'autoScale'			: false,
				'type'				: 'swf'
			});
			$("a#example2_1").fancybox({
				'titlePosition'	: 'inside'
			});
			$("#example2_2").fancybox({
				'width'				: 250,
				'height'			: 250,
				'autoScale'			: false,
				'type'				: 'swf'
			});
			$("a#example3_1").fancybox({
				'titlePosition'	: 'inside'
			});
			$("#example3_2").fancybox({
				'width'				: '85%',
				'height'			: '85%',
				'autoScale'			: false,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});
		});