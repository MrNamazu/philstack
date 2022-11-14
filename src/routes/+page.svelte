<script>
	import bgft from '$lib/assets/img/background_ft.svg';
	import bghead from '$lib/assets/img/bghead.png';
	import Fulllogo from '$lib/components/fulllogo.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
</script>

<svelte:head>
	<title>Svelte-fullpage</title>
</svelte:head>

<Fullpage>
 	<FullpageSection title="Svelte Fullpage">

		<div class="container text-center">
			<div class="row">
				<div class="col">
          <Button link="/">Kontakt</Button>
					<h1>Philstack</h1>
					<p>Portfolio</p>
				</div>
			</div>
		</div>
	</FullpageSection>

	<FullpageSection>

		<div class="flex flex-col relative w-full h-full mb-32">			
			<div class="flex w-full">
				<h1>Get in Touch</h1>
			</div>
			<footer class="absolute bottom-0 w-full flex flex-col items-center">
				<div class="flex items-center justify-between w-[80%] sm:flex-col sm:w-[90%]">
					<div><Fulllogo /></div>
					<div class="flex gap-10 items-center sm:gap-3">
						<a href="/" class="font-bold">Home</a>
						<i class="fa-solid fa-minus"></i>
						<a href="/" class="font-bold">Blog</a>
						<i class="fa-solid fa-minus"></i>
						<a href="/" class="font-bold">Portfolio</a>
					</div>
				</div>

				<div class="w-[80%] h-[1px] bg-white bg-opacity-50 my-8 sm:w-[90%]" />

				<div class="flex items-center justify-between w-[80%] sm:flex-col sm:gap-5 sm:w-[90%]">
					<div>
						<div class="sm:text-center">
							<i class="fa-brands fa-linkedin text-3xl mr-2"></i>
							<i class="fa-brands fa-square-github text-3xl mr-2"></i>
							<i class="fa-brands fa-square-twitter text-3xl"></i>
						</div>
						<div class="text-gray-300 text-sm mt-4 sm:text-center">© All rights reserved. Philstack.de 2021 - 2022</div>
					</div>
					<div class="sm:text-center">
						<div class="font-bold uppercase mb-3">Adresse:</div>
						<div>
							<p class="text-gray-300 text-sm">Neu-Ulmer Str. 19</p>
							<p class="text-gray-300 text-sm">98617 Meiningen</p>
						</div>
					</div>
					<div class="sm:text-center">
						<div class="font-bold uppercase mb-3">Kontakt:</div>
						<div>
							<p class="text-gray-300 text-sm">01590/6302212</p>
							<p class="text-gray-300 text-sm">Stehle@Mailbox.org</p>
						</div>
					</div>
					<div class="mr-36 sm:text-center sm:mr-0">
						<div class="font-bold uppercase mb-3">Links:</div>
						<div><a href="/" class="text-gray-300 text-sm">Home</a></div>
						<div><a href="/" class="text-gray-300 text-sm">Blog</a></div>
					</div>
				</div>
			</footer>
		</div>
	</FullpageSection>
</Fullpage>

<style>
	:global(body) {
		height: 100vh;
	}
</style>
