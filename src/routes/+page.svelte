<script>
	import Fulllogo from '$lib/components/fulllogo.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
</script>

<svelte:head>
	<title>Svelte-fullpage</title>
</svelte:head>

<Fullpage>
	<!-- 	<FullpageSection title="Svelte Fullpage">
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

	<FullpageSection title="Features" class="bg-info">
		<FullpageSlide title="slides">
			<div class="container text-center">
				<div class="row">
					<div class="col">
						<h1>Slides</h1>
						<p>Slide 1</p>
					</div>
				</div>
			</div>
		</FullpageSlide>
		<FullpageSlide title="arrows" class="bg-danger">
			<div class="container text-center">
				<div class="row">
					<div class="col">
						<h1>Slides</h1>
						<p>Slide2</p>
					</div>
				</div>
			</div>
		</FullpageSlide>
		<FullpageSlide title="drag" class="bg-success">
			<div class="container text-center">
				<div class="row">
					<div class="col">
						<h1>Slides</h1>
						<p>Slide 3</p>
					</div>
				</div>
			</div>
		</FullpageSlide>
	</FullpageSection> -->

	<FullpageSection>
		<div class="flex flex-col relative w-full h-full mb-32">
			<footer class="absolute bottom-0 w-full flex flex-col items-center">
				<div class="flex items-center justify-between w-[80%]">
					<div><Fulllogo /></div>
					<div class="flex gap-10 items-center">
						<a href="/" class="font-bold">Home</a>
						<i class="fa-solid fa-minus"></i>
						<a href="/" class="font-bold">Blog</a>
						<i class="fa-solid fa-minus"></i>
						<a href="/" class="font-bold">Portfolio</a>
					</div>
				</div>

				<div class="w-[80%] h-[1px] bg-white bg-opacity-50 my-8" />

				<div class="flex items-center justify-between w-[80%]">
					<div>
						<div>
							<i class="fa-brands fa-linkedin text-3xl mr-2"></i>
							<i class="fa-brands fa-square-github text-3xl mr-2"></i>
							<i class="fa-brands fa-square-twitter text-3xl"></i>
						</div>
						<div class="text-gray-400 text-sm mt-4">© All rights reserved. Philstack.de 2022</div>
					</div>
					<div>
						<div class="font-bold uppercase mb-3">Adresse:</div>
						<div>
							<p class="text-gray-400 text-sm">Neu-Ulmer Str. 19</p>
							<p class="text-gray-400 text-sm">98617 Meiningen</p>
						</div>
					</div>
					<div>
						<div class="font-bold uppercase mb-3">Kontakt:</div>
						<div>
							<p class="text-gray-400 text-sm">01590/6302212</p>
							<p class="text-gray-400 text-sm">Stehle@Mailbox.org</p>
						</div>
					</div>
					<div>
						<div class="font-bold uppercase mb-3">Links:</div>
						<div><a href="/" class="text-gray-400 text-sm">Home</a></div>
						<div><a href="/" class="text-gray-400 text-sm">Blog</a></div>
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
