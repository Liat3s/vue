<template>
    <div>
        <h1>Сводные отчеты</h1>
        <div >
            <h2>FIRST</h2>
            <orderBook :class="compnent">first</orderBook>
        </div>
        
        
        <div class="secondOf">
            <h2>SECOND</h2>
        <orderBook :style="'background-color: #hhh'">Second</orderBook> 
        </div>
    </div>
    
</template>

<script>
import orderBook from './order_book.vue'
export default {
    data() {
        return {
            name: 'Documents'
        }
    },
    components: {
        orderBook
    }
}
</script>

<style >
.compnent {
    width: 400px;
    height: 200px;
    overflow: auto;
    overflow-x: hidden;
    background-color: rgb(170, 232, 170);
}
.secondOf {
    margin: 0 auto;
    width: 700px;
    height: 400px;
    background-color: chocolate
}
</style>
