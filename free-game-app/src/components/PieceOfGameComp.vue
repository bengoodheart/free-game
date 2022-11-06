<template lang="">
    <b-row>
        <b-col cols="2"> Game # </b-col>
        <b-col cols="8">
            <b-card border-variant="success" text-variant="dark">
                <b-card-text>
                    Game goes here
                </b-card-text>
            </b-card>
        </b-col>
    </b-row>
</template>
<script>
import { ref } from "vue"
export default {
    name: 'PieceOfGameComp',
    setup(){
        var str = "Use 2 tsps of detergant"
        const advice = ref(str)

        return {
            advice,
        }
    }
}
</script>
<style lang="">
    
</style>