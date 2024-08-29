<script async lang="ts">
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-RTQJXGSR9H', {
				page_title: document.title,
				page_path: $page.url.href
			});
			gtag('config', 'AW-11364348341', {
				page_title: document.title,
				page_path: $page.url.href
			});
		}
	}
</script>

<svelte:head>
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-KZQPWFVV');
	</script>

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RTQJXGSR9H">
	</script>
	<script async>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-RTQJXGSR9H');
		gtag('config', 'AW-11364348341');
	</script>

	<script type="text/javascript">
		var uqNum = Math.random() * 10000000000000;
		var p_url = encodeURIComponent(window.location.href);
		var px =
			'https://px.adentifi.com/Pixels?a_id=20054;uq=' +
			uqNum +
			';cv_1=[ENTER_LOCATION_MACRO_HERE];p_url=' +
			p_url;
		var x = document.createElement('IMG');
		x.setAttribute('src', px);
		x.setAttribute('width', '1');
		x.setAttribute('height', '1');
		x.setAttribute('style', 'display:none');
		document.body.appendChild(x);
	</script>
  
	<script type="text/javascript">
		var a_id = 20051;
		var p_url = encodeURIComponent(window.location.href);
		var uqNum = Math.random() * 10000000000000;
		var i = document.createElement('img');
		var px = 'https://px.adentifi.com/Pixels?a_id=' + a_id + ';p_url=' + p_url + ';uq=' + uqNum;
		i.setAttribute('src', px);
		i.setAttribute('height', '1');
		i.setAttribute('width', '1');
		i.setAttribute('style', 'display:none');
		document.body.appendChild(i);
	</script>"
</svelte:head>
