<template>
    <span class="tag">
        <slot></slot>
    </span>
</template>

<style>
.tag {
    border-radius: 4px;
    background: var(--с-focus);
    margin-right: 6px;
    padding: 6px;
    flex: 1 auto;
}
</style>