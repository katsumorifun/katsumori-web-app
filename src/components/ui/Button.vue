<template>
    <button class="btn">
        <slot>

        </slot>
    </button>
</template>


<style>

.btn {
  border: 0;
  border-radius: 4px;
  color: #FFFF;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: .5rem 2rem;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  background: none;
}
.btn slot:hover {
  background-color: black;
}
.btn--focus {
  background: var(--с-focus);
}
.btn-text-center{
  text-align: center;
}
.btn-danger {
    background-color: var(--c-status-danger);
}

</style>