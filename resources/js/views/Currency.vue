<template>
    <div>
        <h3>Test</h3>
        {{ data }}
    </div>
</template>

<script>
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
            this.axios
                .get(
                    // "http://www.cbr.ru/scripts/XML_daily.asp"
                    // "https://api.coindesk.com/v1/bpi/currentprice.json"
                )
                .then((response) => {
                    parseString(response.data, (err, result) => {
                        if (err) {
                            //Do something
                        } else {
                            this.data = result;
                        }
                    });
                });
        },
    },
};
</script>

<style></style>
