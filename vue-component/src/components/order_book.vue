<template>
    <div>
        {{name}}
        <p>{{title}}</p>
        <ul>
            <li v-for="(item, index) in worker" :key="index">{{item}}</li>
        </ul>
        <button class="btn btn-primary addMercBtn" @click="addMerc"></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Нарядная система',
            title: 'Компонент списка членов ВГК и горного мастера',
            worker: []
        }
    },
    methods: {
    addMerc() {
      this.worker.push({
        fio: 'Фамилия И.О.',
        id: 30,
        merc: true,
        order_work: '1',
        role_id: 0,
        role_title: 'VGD',
        add_role_id: 1,
        add_role_title: 'ВГК',
        sign: false,
        specialty: "I",
        uid: "25000"
      });
    },
    deleteMerc(index) {
      this.worker.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.btn-primary {
    width: 100px;
    height: 50px;
}

li {
    list-style-type: none;
}
</style>
