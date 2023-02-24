<template>
    <div class="activity">
        <div class="container">
            <div class="header">
                <div class="caption">
                    <h1 class="caption-title caption-title-md caption-title-left">Обновления</h1>
                </div>
            </div>

            <div class="activity__cards">
                <div class="activity-card__item">
                    <div class="card__header">
                        <p class="title">Моб Психо 100 - 3</p>
                        <p class="description"> Добавлена 5 серия</p>
                    </div>
                    <div class="card__footer padding">
                        <a href="#" class="title">
                            Подробнее
                        </a>
                    </div>
                </div>

                <div class="activity-card__item">
                    <div class="card__footer">
                        <a href="#" class="title">
                            Вся активность
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.activity-card__item {
    background: var(--color-background-block);
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: .6rem;
    border-left: 14px solid var(--c-status-danger);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.activity-card__item>.card__header>.title {
    margin: 0;
    padding: 0;
}

.activity-card__item>.card__header>.description {
    color: #9590A0;
    margin: 8px 0 0px 0;
}

.activity-card__item>.card__footer.padding {
    padding-top: 24px;
}
</style>