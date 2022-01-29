<template>
    <div class="uk-flex uk-flex-column">
        <h2 class="uk-text-center">Blade->vue</h2>
        <div class="uk-flex uk-flex-middle">
            <button class="uk-button uk-button-primary uk-width-1-4" @click="getData">Сделать запрос на сервер</button>
            <div v-if="spinner" uk-spinner class="uk-width-1-4 uk-margin-medium-left"></div>
        </div>
        <table class="uk-table uk-table-striped" v-if="is_ready">
            <thead>
            <tr>
                <th>Данные из контроллера</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in res" :key="item.id">
                <td>{{ item }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Blade",
        data: function() {
            return {
                res: null,
                is_ready: false,
                spinner: false,
            }
        },
        methods: {
            getData: function() {
                this.spinner = true;

                this.axios
                    .get('/api/get')
                    .then(response => (this.res = response.data));
                this.is_ready = true;

                setTimeout(()=> { this.spinner = false }, 1000);
            }
        }
    }
</script>

<style scoped>
</style>