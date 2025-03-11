<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardFooter } from '$lib/components/ui/card';

	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Screenshot } from '$lib/data/types';

	const { item }: { item: Screenshot } = $props();
</script>

<Dialog>
	<DialogTrigger>
		<Card class="group relative aspect-square overflow-hidden">
			<img
				src={item.src}
				alt={item.label}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
			<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
				<p class="text-sm text-white">{item.label}</p>
			</div>
		</Card>
	</DialogTrigger>
	<DialogContent class="max-w-4xl">
		<DialogTitle>{item.label}</DialogTitle>
		<div class="relative aspect-video w-full overflow-hidden rounded-lg">
			<img
				src={item.src}
				alt={item.label}
				class="h-full w-full object-contain"
			/>
		</div>
		<DialogFooter>
			<DialogClose>
				<Button>Close</Button>
			</DialogClose>
		</DialogFooter>
	</DialogContent>
</Dialog>

<style>
	img {
		max-width: 100%;
		height: auto;
	}
</style>
