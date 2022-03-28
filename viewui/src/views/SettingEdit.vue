<template>
	<Form :model="formItem" :label-width="80">
		<FormItem label="Input">
			<Input v-model="formItem.input" placeholder="Enter something..."/>
		</FormItem>
		<FormItem label="Text">
			<Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 50,maxRows: 60}"
				placeholder="Enter something..."/>
		</FormItem>
	</Form>
</template>
<script>
	export default {
		data() {
			return {
				formItem: {
					input: '',
					select: '',
					radio: 'male',
					checkbox: [],
					switch: true,
					date: '',
					time: '',
					slider: [20, 50],
					textarea: ''
				}
			}
		}
	}
</script>
<style>
</style>
