<template>
    <div class="backdrop" v-if="display_">
        <div class="modal">
            <div class="modal-header">
               <slot name="title"></slot>
                <button class="close" @click="$emit('close')">&times;</button>
            </div>

            <div class="modal-body">
                <slot name="body"></slot>
            </div>

            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'common-modal',
        data(){
            return {
                display_: false
            }
        },
        model: {
            prop: 'display',
            event: 'change'
        },
        props: {
            display: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            display: {
                immediate: true,
                handler(displayPropValue) {
                    this.display_ = displayPropValue;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

$border-color: rgb(201, 201, 201);

.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #0000004a;
    top: 50;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.modal {
    width: 50%;
    background-color: whitesmoke;
    border: 1px solid $border-color;
    box-shadow: 2px 4px 8px 0px #959595;
    border-radius: 5px;

    .modal-header {
        padding: 15px;
        border-bottom: 1px solid $border-color;
    }

    .modal-body {
        padding: 15px;
        min-height: 100px;
    }

    .modal-footer {
        border-top: 1px solid $border-color;
    
    }

    .close {
        float: right;
        font-size: 20px;
        cursor: pointer;
    }
}
</style>