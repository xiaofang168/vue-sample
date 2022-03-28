<template>
    <Modal v-model="visible" v-bind="modalProps" :loading="loading" :width="width" :closable="false" :mask-closable="false" @on-ok="onOk" @on-cancel="onCancel">
        <div>
            <div v-if="visible" ref="comp" :is="component" v-bind="compProps" />
        </div>
        <div slot="footer">
            <Button size="large" @click="onCancel">取消</Button>
            <Button :loading="loading" :disabled="modalProps.readonly" type="primary" size="large" @click="onOk">{{ modalProps.okText || '确定' }}</Button>
            <Button v-if="modalProps.showAnotherBtn" :loading="anotherLoading" type="ghost" size="large" @click="onAnotherBtnOk">{{ modalProps.anotherBtnText }}</Button>
        </div>
    </Modal>
</template>

<script>
    import * as utils from '../libs/utils';
    export default {
        data() {
            return {
                visible: false,
                loading: false,
                anotherLoading: false,
                component: 'div',
                compProps: {},
                modalProps: {},
                defer: {},
                width: null
            };
        },
        methods: {
            show(Component, compProps, modalProps, width) {
                this.component = Component;
                this.compProps = compProps;
                this.modalProps = modalProps;
                this.visible = true;
                this.width = width;
                return new Promise((resolve, reject) => {
                    this.defer = { resolve, reject };
                });
            },
            onCancel() {
                if (!this.$refs.comp.onCancel) {
                    this.visible = false;
                    this.defer.resolve(false);
                    return;
                }
                let close = res => {
                    this.visible = false;
                    this.defer.resolve(res);
                };
                let doing = this.$refs.comp.onCancel(close);
                utils.updateLoading(doing, loading => { this.loading = loading });
            },
            onOk() {
                if (!this.$refs.comp.onOk) {
                    this.visible = false;
                    this.defer.resolve(true);
                    return;
                }
                let close = res => {
                    this.visible = false;
                    this.defer.resolve(res);
                };
                let doing = this.$refs.comp.onOk(close);
                utils.updateLoading(doing, loading => { this.loading = loading });
            },
            onAnotherBtnOk() {
                if (!this.$refs.comp.onAnotherBtnOk) {
                    this.visible = false;
                    this.defer.resolve(true);
                    return;
                }

                let close = res => {
                    this.visible = false;
                    this.defer.resolve(res);
                };
                let doing = this.$refs.comp.onAnotherBtnOk(close);
                utils.updateLoading(doing, loading => { this.anotherLoading = loading });
            }
        }
    };
</script>
