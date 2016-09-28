<script>
    export default {
        data () {
            return {
                showFlag: false
            };
        },
        props: ['user', 'sessionIndex', 'userList', 'talkingUser'],
        methods: {
            dropdown: function() {
                this.showFlag = !this.showFlag;
            },
            switchUser: function(item) {
                this.dropdown();
                this.talkingUser = item;
            }
        },
        filters: {
            filterUser (list) {
                return list.filter(item => item.id == this.sessionIndex + 2 );
            }
        }
    };
</script>

<template>
    <div class="switch-list">
        <div class="selectedUser" @click="dropdown()">
            <img class="avatar" width="30" height="30" :alt="talkingUser.name" :src="talkingUser.img">
            <p class="name">{{talkingUser.name}} 说：</p>
        </div>
        <ul v-show="showFlag">
            <li :class="{ active: this.user.id !== this.talkingUser.id }" v-for="item in userList | filterUser" @click="switchUser(item)">
                <img class="avatar" width="30" height="30" :alt="item.name" :src="item.img">
                <p class="name">{{item.name}}</p>
            </li>
            <li :class="{ active: this.user.id === this.talkingUser.id }" @click="switchUser(user)">
                <img class="avatar" width="30" height="30" :alt="user.name" :src="user.img">
                <p class="name">{{user.name}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    .switch-list {
        position: relative;
        z-index: 1;
        .selectedUser{
            padding: 5px 10px;
            cursor: pointer;
            margin-bottom: 10px;
            background-color: #2e3238;
            color: #fff;
            border-left: 5px solid #41b883;
            &:hover {
                box-shadow: 0 0 8px #333;
                transition: box-shadow 0.3s;
            }
        }
        li {
            padding: 5px 15px;
            background-color: #eee;
            border-bottom: 1px solid #41b782;
            cursor: pointer;
            transition: background-color .1s;
            
            &:hover {
                color: #f30;
            }
            &.active {
                background-color: #aaa;
                color: #fff;
            }
        }
        .avatar, .name {
            vertical-align: middle;
        }
        .avatar {
            border-radius: 2px;
        }
        .name {
            display: inline-block;
            margin: 0 0 0 15px;
        }
    }
</style>