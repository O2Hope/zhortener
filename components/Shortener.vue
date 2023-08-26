<template>
    <Card>

        <form @submit="shorten">
            <label class="block text-gray-700 text-xl font-bold mb-2" for="link">
                Link
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="link" name="link" placeholder="Paste your link here" type="text" />
            <button class="btn btn-primary btn-fluid btn-icon mt-4 " type="submit">
                <i class="material-icons">content_cut</i>
                Shorten
            </button>
            <div>
                {{data}}
            </div>
        </form>
    </Card>
</template>

<script setup>

const shorten = async(e) => {
    e.preventDefault()
    
    const { data } = await useFetch('/api/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            link: e.target.link.value
        }
    })

    alert(data.value.link)
}
</script>

<style scoped></style>