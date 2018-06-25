<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}-{{count}}</h3>
        <p>
            <button @click="$store.commit('add',3)">加</button>
            <button @click="reduce">减</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>
<script>
import store from '../../vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            msg:'hello vuex'
        }
    },
    computed:{
        ...mapState(['count']),
        // ...mapGetters(['count'])
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    },
    store
}
</script>
