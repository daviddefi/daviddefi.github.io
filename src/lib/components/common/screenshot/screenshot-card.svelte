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
		<Card class="flex aspect-square flex-col justify-end overflow-hidden">
			<div class="relative flex-1">
				<img
					src={item.src}
					alt={item.label}
					class="absolute inset-0 h-full w-full object-cover"
				/>
			</div>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
				{item.label}
			</CardFooter>
		</Card>
	</DialogTrigger>
	<DialogContent class="flex min-h-[70%] min-w-[70%] flex-col">
		<DialogTitle>{item.label}</DialogTitle>
		<div class="flex-1 overflow-hidden">
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
