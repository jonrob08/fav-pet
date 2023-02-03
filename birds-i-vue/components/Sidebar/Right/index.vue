<template>
    <div class="flex flex-col">
        <!-- Preview Card: What's Happening? -->
        <SidebarRightPreviewCard title="What's Happening?" >
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <h2>{{ whatsHappening.title }}</h2>
                <p>{{ whatsHappening.count }}</p>
            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>
        <!-- Preview Card: Who to Follow -->
        <SidebarRightPreviewCard title="Who to Follow" >
            <SidebarRightPreviewCardItem></SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>
    </div>
</template>
<script setup>
const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
    {
        title: '#VueIsFun',
        count: '10.3k Tweets'
    },
    {
        title: '#tailwindforall',
        count: '20.4k Tweets'
    }
])

</script>