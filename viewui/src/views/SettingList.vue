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
	import AutoTable from '../components/AutoTable.vue'
	import SettingEdit from './SettingEdit.vue';
	import {
		showModal
	} from '../components/modals';
	export default {
		name: 'SettingList',
		components: {
			AutoTable
		},
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
		},
		methods: {
			async handleEdit(row) {
				const current_page = row ? this.$refs.table.current : 1;
				let r = await showModal(SettingEdit, {
					row_data: row,
					is_edit: row ? true : false
				}, {
					title: row ? `修改配置` : `新增配置`
				});
				if (r) this.$refs.table.reload(current_page);
			}
		}
	};
</script>
