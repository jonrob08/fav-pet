<template>
  <div>
    <div>
      <span class="relative flex-none bg-gray-700 text-white rounded-lg px-2 py-3 text-4xl">{{ timer.days }}</span>:<span
        class="relative flex-none bg-gray-700 text-white rounded-lg px-2 py-3 text-4xl">
        {{ timer.hours }}</span>:<span
        class="relative flex-none bg-gray-700 text-white rounded-lg px-2 py-3 text-4xl">
        {{ timer.minutes }}</span>:<span
        class="relative flex-none bg-gray-700 text-white rounded-lg px-2 py-3 text-4xl">
        {{ timer.seconds }}</span>
    </div>

    <button @click="timer.start()" hidden>Start</button>
    <br>
    <button @click="timer.pause()" hidden>Pause</button>
    <br>
    <button @click="timer.resume()" hidden>Resume</button>

    <button @click="restartFive()" hidden>Restart</button>


  </div>
</template>
<script setup>
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';

const time = new Date();
time.setSeconds(time.getSeconds() + 300000); // 10 minutes timer
const timer = useTimer(time);

const restartFive = () => {
  // Restarts to 5 minutes timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300000);
  timer.restart(time);
}

onMounted(() => {
  watchEffect(() => {
    if (timer.isExpired.value) {
      console.warn('IsExpired');
    }
  });
});
</script>