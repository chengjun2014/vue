<script>
    export default {
        props: ['session', 'talkingUser'],
        data () {
            return {
                text: ''
            };
        },
        methods: {
            inputing (e) {
                let obj = {
                    text: this.text,
                    date: new Date()
                };
                if(this.talkingUser.id != this.session.userId) {
                    obj.self = true;
                }
                if (e.keyCode === 13 && this.text.length > 1) {
                    this.session.messages.push(obj);
                    this.text = '';
                }
            }
        }
    };
</script>

<template>
    <div class="m-text">
        <textarea placeholder="按 Enter 发送" v-model="text" @keyup="inputing"></textarea>
    </div>
</template>

<style lang="less">
    .m-text {
        height: 122px;
        
        textarea {
            padding: 10px;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            resize: none;
        }
    }
</style>