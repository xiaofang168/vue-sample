<template>
	<div class="table-box">
		<Table ref="table" :highlight-row="highlight_row" :columns="columns2" :data="rows" :loading="loading"
			:stripe="stripe" @on-current-change="handleCurrentChange" />
		<Row v-if="count" type="flex" justify="end">
			<Page :current="current" :total="count" :page-size-opts="page_size_opts" :page-size="size" show-total
				show-sizer @on-change="pageChanged" @on-page-size-change="pageSizeChanged" />
		</Row>
	</div>
</template>

<script>
	import http from '../libs/http';
	import _ from 'underscore';
	import qs from 'qs';

	export default {
		// 父类传递的值
		props: {
			uri: {
				type: String,
				default: ''
			},
			params: {
				type: Object,
				default: () => {
					return {}
				}
			},
			columns: {
				type: Array,
				default: () => {
					return []
				}
			},
			data: {
				type: Array,
				default: () => {
					return []
				}
			},
			defaultWidth: {
				type: Number,
				default: 0
			},
			stripe: {
				type: Boolean,
				default: true
			},
			highlight_row: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				rows: [],
				count: 0,
				current: 1,
				size: this.params.size || 10,
				loading: true,
				page_size_opts: [this.params.size || 10, 30, 50, 100]
			};
		},
		computed: {
			columns2() {
				return this.columns.map((c, i) => _.extend({
					align: 'center'
				}, c, {
					render: c.mapper && ((h, ctx) => h('span', c.mapper[ctx.row[c.key]] || ctx.row[c.key])) ||
						c.renderButtons && ((h, ctx) => h(AutoTableButtons, {
							props: {
								buttons: c.renderButtons(ctx.row),
								row: ctx.row
							}
						})) ||
						c.render,
					width: c.width || this.defaultWidth,
					minWidth: c.minWidth || 80,
					className: c.className || ''
				}));

			}
		},
		async mounted() {
			await this.reset();
		},
		methods: {
			async reset() {
				this.loading = true;
				this.current = 1;
				await this.$nextTick();
				await this.reload();
			},
			pageChanged: function(page) {
				this.current = page;
				this.reload(1);
			},
			pageSizeChanged: function(page) {
				this.size = page;
				this.reload(1);
			},
			handleCurrentChange(currentRow) {
				this.$emit('getNewChildren', currentRow);
			},
			getSelection() {
				return this.$refs.table.getSelection();
			},
			async reload(page) {
				if (!this.uri) {
					// uri为空用造的数据替换
					this.rows = this.data;
					this.loading = false;
					return {
						status: 1000,
						data: {
							page: 1,
							size: this.size,
							rows: []
						}
					};
				}
				this.loading = true;
				this.current = page ? this.current : 1;
				let pager = {
					page: this.current,
					size: this.size
				};
				let params = _.extend({}, this.params, pager);
				params = qs.stringify(params, {
					arrayFormat: 'comma'
				});
				const url = '';
				let p = http.get(url);
				return p.then(r => {
					const {
						data
					} = r;
					let rows = data;
					if (data && data.page_index) {
						rows = data.content || [];
						this.size = data.page_size;
					}
					if (this.highlight_row) {
						const [first] = rows;
						if (first) {
							first._highlight = true;
							this.$emit('getNewChildren', first);
						}
					}
					this.rows = rows;
					this.count = data ? data.total : 0;
					this.$nextTick(() => {
						let mergeColumn = document.getElementsByClassName('table-merge-column');
						Array.prototype.slice.call(mergeColumn, 0).forEach((item, index) => {
							if (rows[index - 1] && !rows[index - 1].row_span) {
								item.style.display = 'none';
								return;
							}
							item.style.display = 'table-cell';
							item.setAttribute('rowspan', rows[index - 1] ? rows[index - 1]
								.row_span : 1);
						});
					});
					this.$emit('get-rows', this.rows);
					this.loading = false;
					return r;
				});
			}
		},
	};
</script>
<style scoped>
	.table-box {
		margin-top: 20px;
	}
</style>
