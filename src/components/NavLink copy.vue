<script setup>
    defineProps({
    url: {
        type: String,
        required: false,
        default: '',
    },
    text: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    });
</script>

<template>
    <li class="list-none">
<a class="block px-4 py-2 text-red-500"
:class="{
    'text-blue-600 font-semibold': isActive,
    'text-gray-500 pointer-events-none opacity-50':isDisabled
}" 

aria-current="page"
:href="url"
:isDisabled="isDisabled"
:aria-disabled="isDisabled"
>
{{ text }}
</a>
</li>

</template>