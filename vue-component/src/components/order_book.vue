<template>
    <div class="form">
        <h2>{{ title }}</h2>
        <ul v-for="(item, index) in workers" :key="index" v-if="item.merc">
            <li @dblclick="deleteWorker(key)">
                <p class="role">
                    <span class="role-span">
                        {{item.add_role_title}}
                    </span>
                </p>
                <p class="fio">
                    <span class="fio-span">
                        {{item.fio}}
                    </span>
                </p>
            </li>
        </ul>
        <button class="primary" @click="addWorker">+ Добавить сотрудника</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Фамилия горного мастера, бригадира, члена ВГК',
            workers: [{
                id: 0,
                fio: 'Веселов С.Т.',
                sign: false,
                role_id: 0,
                role_title: 'Горный мастер',
                add_role_id: 1,
                add_role_title: 'Горный мастер',
                uid: '00001',
                specialty: 'I',
                order_work: '-',
                comment: '',
                merc: true
            },
            {
                id: 1,
                fio: 'Петров И.И.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ зв.',
                add_role_id: 1,
                add_role_title: 'ВГК',
                uid: '25631',
                specialty: 'V',
                order_work: '1,2',
                comment: '',
                merc: true
            },
            {
                id: 2,
                fio: 'Федоров С.В.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                uid: '25412',
                specialty: 'IV',
                order_work: '1,2',
                comment: '',
                merc: false
            },
            {
                id: 3,
                fio: 'Феофанов Р.Н.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                add_role_id: 1,
                add_role_title: 'ВГК',
                uid: '25668',
                specialty: 'IV',
                order_work: '1,2',
                comment: '',
                merc: true
            },
            {
                id: 4,
                fio: 'Верник Т.С.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                uid: '25741',
                specialty: 'III',
                order_work: '1,2',
                comment: '',
                merc: false
            },
            {
                id: 5,
                fio: 'Трещеткин К.Н.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                add_role_id: 1,
                add_role_title: 'ВГК',
                uid: '25891',
                specialty: 'IV',
                order_work: '1,2',
                comment: '',
                merc: false
            },
            {
                id: 6,
                fio: 'Резников П.Р.',
                sign: false,
                role_id: 1,
                role_title: 'МГВМ',
                uid: '25666',
                specialty: 'V',
                order_work: '3,4',
                comment: '',
                merc: false
            }
            ,{
                id: 7,
                fio: 'Приморьев М.К.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                uid: '23657',
                specialty: 'III',
                order_work: '1,2',
                comment: '',
                merc: false
            },{
                id: 8,
                fio: 'Пятничный В.С.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                uid: '25112',
                specialty: 'III',
                order_work: '1,2',
                comment: '',
                merc: false
            },{
                id: 9,
                fio: 'Треугольников А.Л.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                uid: '25117',
                specialty: 'III',
                order_work: '1,2',
                comment: '',
                merc: false
            },{
                id: 10,
                fio: 'Махно Б.Б.',
                sign: false,
                role_id: 0,
                role_title: 'ГРОЗ',
                uid: '25899',
                specialty: 'III',
                order_work: '1,2',
                comment: '',
                merc: false
            },{
                id: 11,
                fio: 'Трещеткин М.К.',
                sign: false,
                role_id: 2,
                role_title: 'ЭСП',
                uid: '25448',
                specialty: 'II',
                order_work: '4',
                comment: '',
                merc: false
            },{
                id: 12,
                fio: 'Резников П.К.',
                sign: false,
                role_id: 3,
                role_title: 'ГРП',
                uid: '25478',
                specialty: 'III',
                order_work: '5',
                comment: '',
                merc: false
            },{
                id: 13,
                fio: 'Свитков Л.Ю.',
                sign: false,
                role_id: 3,
                role_title: 'ГРП',
                uid: '25364',
                specialty: 'II',
                order_work: '5',
                comment: '',
                merc: false
            }]
        }
    },
    methods: {
    addWorker() {
      this.workers.push({
        fio: 'Фамилия И.О.',
        id: 30,
        merc: true,
        order_work: '1',
        role_id: 0,
        role_title: 'VGD',
        add_role_id: 1,
        add_role_title: 'ВГК',
        sign: false,
        specialty: 'I',
        uid: '25000'
      });
    },
    deleteWorker(index) {
      this.worker.splice(index, 1);
    }
  }
}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

.form {
    font-size: 14px;
    width: 250px;
    max-width: 250px;
    height: 30%;
    max-height: 250px;
    overflow: auto;
    overflow-x: hidden;
    background-color: #fff;
}

h2 {
    width: 250px;
    height: 50px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding-top: 19px;
    padding-bottom: 0;
    background-color: #566a8d;
}

li {
    display: flex;
    list-style-type: none;
    margin: 1px 0;
    position: relative;
}

.form li:nth-of-type(2n+1) .fio {
    background-color: #e6e6e6;
}

.form ul > li > p {
    line-height: 1;
}

.role {
  height: 35px;
  width: 60px;
  color: #fff;
  text-align: center;
  background-color: #8E96AD;

}
.fio {
  height: 35px;
  width: 190px;
  text-align: center;
  background-color: #fff;
}

.fio-span {
  position: relative;
  top: 30%;
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

.primary {
  width: 100%;
  height: 50px;
  padding: 1px 0;
  color: #fff;
  background-color: #566A8D;
}


</style>
