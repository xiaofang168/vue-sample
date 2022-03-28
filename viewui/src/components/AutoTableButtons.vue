<template>
	<div>
		<AutoButton v-for="(button,i) in buttons2" v-if="button.showbtn" :key="button.title"
			:prompt="`确认要${button.title}吗？`" v-bind="button" :load="() => buttons2[i].click(row)"> {{ button.title }}
		</AutoButton>
	</div>
</template>

<script>
	import AutoButton from './AutoButton.vue';
	export default {
		components: {
			AutoButton
		},
		props: {
			buttons: {
				type: Array,
				default: () => {
					return []
				}
			},
			row: {
				type: Object,
				default: () => {
					return new Map()
				}
			}
		},
		data() {
			return {
				buttons2: this.buttons.map((b, i) => ({
					...b,
					size: 'small',
					loading: false,
					showbtn: !this.buttons[i].showbtn ? true : this.buttons[i].showbtn
				}))
			};
		},
	};
</script>
