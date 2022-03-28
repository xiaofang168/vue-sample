<template>
	<div>
		<AutoTable ref="table" v-bind="table" :stripe="true" />
	</div>
</template>

<script>
	export default {
		name: 'SettingList',
		data() {
			return {
				table: {
					uri: '',
					columns: [{
						title: '日期',
						align: 'center',
						key: 'date'
					}, {
						title: '穿山甲',
						key: 'tt_posted'
					}, {
						title: '广点通',
						key: 'gdt_posted'
					}],
					data: [{
							date: '2021-10-10',
							tt_posted: 60,
							gdt_posted: 100
						}
					]
				}
			};
		}
	};
</script>
