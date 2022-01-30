<template>
    <div>
        <h2>{{data}}</h2>
    </div>
</template>

<script>
// import ChartCbComponent from "../components/chart/ChartCbComponent.js";

export default {
    data: function () {
        return {
            data: [],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData: function () {
            this.axios.get("/api/chart-cb").then((response) => {
                this.data = response.data;
            });
        },
    },
};
</script>

<style></style>
