<template>
    <div>
        <chart-component
            :chart-data="data"
            :height="100"
            :options="{ responsive: true, maintainAspectRatio: true }"
        ></chart-component>
        <div class="uk-margin">
            <form>
                <input
                    class="uk-input uk-form-width-medium"
                    type="number"
                    placeholder="Введите значение"
                    v-model.number="message"
                />
                <button
                    type="button"
                    class="uk-button uk-button-primary"
                    @click="addData"
                >
                    Добавить
                </button>
            </form>
            <br />
        </div>
    </div>
</template>

<script>
import ChartComponent from "../components/ChartComponent.js";

export default {
    components: {
        ChartComponent,
    },
    data: function () {
        return {
            data: [],
            message: "",
            labels: [1, 2, 3, 4],
            chData: [15000, 5000, 10000, 30000],
        };
    },
    watch: {
        message: function () {
            console.log(this.message);
        },
    },
    mounted() {
        this.sendDefData();
    },
    methods: {
        q: function () {
            return {
                message: Number(this.message),
                labels: this.labels,
                chData: this.chData,
            };
        },
        sendDefData: function () {
            this.axios
                .post("/api/chart-line", this.q())
                .then((response) => (this.data = response.data));
        },
        addData: function () {
            this.axios.post("/api/chart-line", this.q()).then((response) => {
                this.labels = response.data.labels;
                this.chData = response.data.shData;
                this.data = response.data;
            });
        },
    },
};
</script>

<style></style>
