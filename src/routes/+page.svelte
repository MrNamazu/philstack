<script>
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
	</FullpageSection>

	<FullpageSection title="Future" class="bg-warning">
		<div class="container text-center">
			<div class="row">
				<div class="col">
					<h1>Future of this component</h1>
					<p>
						This component is in development and is far from being ideal, as you noticed (maybe),
						there is problem with slide animation. Currently I'm the only contributor of this
						project, feel free to fork it and make pull request.
					</p>
				</div>
			</div>
		</div>
	</FullpageSection>
</Fullpage>

<style>
	:global(body) {
		height: 100vh;
	}
</style>
