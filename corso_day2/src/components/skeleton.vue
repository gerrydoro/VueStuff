<template>
    <div class="container h-100 w-100" style="height: 50vh; margin-bottom: 5vh;">
        <div class="row">
            <div class="col-4 card h-100">
                <h1>Menu</h1>
                <slot name="menu"></slot>
            </div>
            <div class="col-8 card h-100">
                <h2>Content</h2>
                <slot name="content"></slot>
            </div>
        </div>
        <div class="container" style="text-align: center; padding: 3.5rem;">
            <slot name="footer"></slot>
        </div>
    </div>
</template>