<template>
	<div>
		<Poptip v-if="needConfirm" :title="prompt" :placement="placement" confirm @on-ok="click">
			<Button :loading="loading" :type="type" :style="btnStyle">
				<slot />
			</Button>
		</Poptip>
		<Button v-if="!needConfirm" :loading="loading" :type="type" @click="click">
			<slot />
		</Button>
	</div>
</template>
<script>
	import _ from 'underscore';
	export default {
		props: {
			load: {
				type: Function,
				default: () => {
					''
				}
			},
			type: {
				type: String,
				default: 'primary'
			},
			placement: {
				type: String,
				default: ''
			},
			prompt: {
				type: String,
				default: '您确认进行该操作吗？'
			},
			className: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				loading: false,
			};
		},
		computed: {
			needConfirm() {
				return ['warning', 'error'].includes(this.type);
			},
			btnStyle() {
				if (!_.isUndefined(this.className) && this.className === 'aTag') {
					return {
						border: 'none',
						color: '#2d8cf0',
						background: 'none'
					};
				}
			}
		},
		methods: {
			click() {
				this.load();
			}
		}
	};
</script>
