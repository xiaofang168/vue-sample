<template>
	<div>
		<Row :gutter="16">
			<i-col span="24" style="text-align: right">
				<Button class="button-right" type="primary" @click="handleEdit()">新增配置</Button>
			</i-col>
		</Row>
		<Divider />
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
						title: '名称',
						align: 'center',
						key: 'name'
					}, {
						title: '来源',
						key: 'source'
					}, {
						title: '创建时间',
						key: 'create_time'
					}],
					data: [{
						name: "催收任务数据采集",
						source: "支付模块",
						create_time: '2021-10-10'
					}]
				}
			};
		}
	};
</script>
