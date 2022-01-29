<template>
    <div>
        <chart-component :chart-data="data" :height="100"
                         :options="{responsive:true, maintainAspectRatio:true}"></chart-component>
        <div class="uk-margin">
            <input class="uk-input uk-form-width-medium" type="number" placeholder="Введите значение">
            <button class="uk-button uk-button-primary">Добавить</button>
        </div>
    </div>
</template>

<script>
    import ChartComponent from '../components/ChartComponent.js'

    export default {
        components: {
            ChartComponent
        },
        data: function () {
            return {
                data: [],
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData: function () {
                console.log('test')
                this.axios
                    .get('/api/chart')
                    .then(response => (this.data = response.data));
            }
        }

    }
</script>

<style>
</style>