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

	function handleImageError(e: Event) {
		const img = e.target as HTMLImageElement;
		console.error('Image failed to load:', img.src);
		img.style.display = 'none';
	}
</script>

<Dialog>
	<DialogTrigger>
		<Card class="flex aspect-square flex-col justify-end overflow-hidden">
			<div class="relative flex-1 bg-muted">
				<img
					src={item.src}
					alt={item.label}
					class="absolute inset-0 h-full w-full object-cover"
					on:error={handleImageError}
				/>
			</div>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
				{item.label}
			</CardFooter>
		</Card>
	</DialogTrigger>
	<DialogContent class="max-w-4xl p-0">
		<div class="p-4 bg-background">
			<DialogTitle>{item.label}</DialogTitle>
		</div>
		<div class="relative w-full bg-muted" style="height: calc(100vh - 200px);">
			<img
				src={item.src}
				alt={item.label}
				class="w-full h-full object-contain"
				on:error={handleImageError}
			/>
		</div>
		<div class="p-4 bg-background">
			<DialogFooter>
				<DialogClose>
					<Button>Close</Button>
				</DialogClose>
			</DialogFooter>
		</div>
	</DialogContent>
</Dialog>

<style>
	img {
		max-width: 100%;
		height: auto;
	}
</style>
