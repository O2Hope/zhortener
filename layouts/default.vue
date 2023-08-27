<template >
    <div class="h-screen flex flex-col gap-6">
        <header class="shadow-sm bg-white px-4">
            <nav class="container mx-auto py-4 flex justify-between">
                <NuxtLink class="font-bold" to="/">Zhortener</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn btn-primary" to="/urls">Login</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="container mx-auto flex flex-col flex-1 px-4 ">
            <slot />
        </main>
        <footer class="p-4 bg-gray-800 shadow-sm text-white text-center text-xs">
            <b>Zhortener</b> is a free and open-source project built with passion ❤️ by Agustin Ruiz. Follow me on <a class="underline" href="https://github.com/O2Hope">Github</a>
            &#x1F431;
        </footer>
    </div>
</template>

<style scoped></style>