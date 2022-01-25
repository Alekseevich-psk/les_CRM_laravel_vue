<template>
    <div>
        <h2 @click="foo">TestComponent</h2>
    </div>
</template>

<script>

export default({
    methods: {
        foo: () => {
            console.log('test');
        }
    }
})

</script>
