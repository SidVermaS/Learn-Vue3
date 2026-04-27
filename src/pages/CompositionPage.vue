<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'
import { ref, onMounted, watch, reactive, computed, toRef, toRefs } from 'vue'

//#region ref
const count = ref(0)
function increment() {
  count.value++
}
const profile = ref({
  name: 'John Doe',
  age: 18,
})

function ageIncrement() {
  profile.value.age++
}
const inputNameRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputNameRef.value?.focus()
})
watch(count, (newValue, oldValue) => {
  console.log(oldValue, '→', newValue)
})
//#endregion ref

// #region reactive
const profileDetails = reactive({
  name: 'John Doe',
  age: 18,
  stats: {
    followers: 30,
  },
})
function follow() {
  profileDetails.stats.followers++
}
const fruits = reactive(['Apple', 'Banana', 'Cherry'])
function addFruit() {
  fruits.push('Mango')
}
// #endregion reactive

// #region computed
const price = ref(100)
const quantity = ref(2)

const total = computed(() => {
  return price.value * quantity.value
})
const firstName = ref('John')
const lastName = ref('Doe')
                                                                                                     
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(value) {
    const parts = value.split(' ')
    if (parts[0]) {
      firstName.value = parts[0]
    }
    if (parts[1]) {
      lastName.value = parts[1]
    }
  },
})
// #endregion computed
// #region Composables
const { count: count1, increment: increment1, decrement, reset } = useCounter()
// #endregion Composables
// #region toRef
const profileName=toRef(profileDetails,'name')
// #endregion toRef
// #region toRefs
const {age}=toRefs(profileDetails)
// #endregion toRefs

</script>
<template>
  <div class="p-2">
    <h1 class="text-3xl font-bold">Composition</h1>
    <div class="p-2 border">
      <h2 class="text-xl font-bold">ref</h2>
      <button @click="increment">Count: {{ count }}</button>
      <p>Name: {{ profile.name }} Age: {{ profile.age }}</p>
      <button @click="ageIncrement">Age Increment</button><br />
      <input ref="inputNameRef" type="text" placeholder="Enter name" />
    </div>
    <div class="p-2 border">
      <h2 class="text-xl font-bold">reactive</h2>
      <p>Name: {{ profileDetails.name }} Age: {{ profileDetails.age }}  Followers: {{ profileDetails.stats.followers }}</p>
      <button @click="follow">Follow</button>

      <ul>
        <li v-for="fruit in fruits" :key="fruit">
          {{ fruit }}
        </li>
      </ul>
      <button @click="addFruit">Add Fruit</button>
    </div>
    <div class="p-2 border">
      <h2 class="text-xl font-bold">computed</h2>
      <input v-model.number="price" type="number" placeholder="Enter price" />
      <input v-model.number="quantity" type="number" placeholder="Enter quantity" />
      <p>total: {{ total }}</p>
      <input v-model="fullName" />
      <p>{{ firstName }} {{ lastName }}</p>
    </div>

    <div class="p-2 border">
      <h2 class="text-xl font-bold">Composables</h2>
      <div class="flex flex-row gap-2">
        <button @click="decrement">-</button>
        <span>{{ count1 }}</span>
        <button @click="increment1">+</button>
      </div>
      <br />
      <button @click="reset">Reset</button>
    </div>
     <div class="p-2 border">
      <h2 class="text-xl font-bold">Reactivity</h2>
      <div>
        <input v-model="profileName" type="text" placeholder="Enter profile name" />
        <input v-model="age" type="number" placeholder="Enter age" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
