<template>
    <div>
        <p>Электронная форма выдачи наряда</p>
        <orderBook :orderBookData="workers"/>
    </div>
</template>

<script>
import orderBook from '@/components/order_book'
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
    components: {
        orderBook
    }
}
</script>

<style scoped>

</style>
