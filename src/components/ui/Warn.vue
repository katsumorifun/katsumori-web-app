<template>

<section class="warning">
    <p class="warning__text">
        <slot>

        </slot>
    </p>
</section>

</template>


<style scoped>

.warning {
    padding: 10px 0 10px 0;
    border-radius: 4px;
}

.warning--danger {
    background-color: var(--c-status-danger);
} 

.warning__text {
    text-align: center;
}

</style>