<script lang="ts">
	import TourForm from "$lib/components/inquiry/TourForm.svelte";
    export let data;
</script>

<section>
    <TourForm {data}></TourForm>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 4em;
    }
</style>