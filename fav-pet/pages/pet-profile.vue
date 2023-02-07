<template>
    <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
        <header class=" dark:bg-teal-500 text-white sticky top 0 z-10">
            <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 class="text-3xl font-medium transition duration-500 scale-150 md:hover:scale-110">
                    <img class="h-8" src="../assets/img/logo-h.svg" />
                </h1>
                <div>
                    <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                        &#9776
                    </button>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <nuxt-link to="/support"
                            class="transition duration-500 hover:scale-110 ml-8 whitespace-nowrap text-base font-medium text-black dark:text-white-100 hover:text-gray-900">
                            Support
                        </nuxt-link>
                        <nuxt-link v-if="!user" to="/login"
                            class="transition duration-500 hover:scale-110 whitespace-nowrap text-base ml-8 font-medium text-black dark:text-white-100 hover:text-gray-900">
                            Sign
                            in
                        </nuxt-link>

                        <User v-if="user" :user="user" />


                        <nuxt-link v-if="!user" to="/register"
                            class="transition duration-500 hover:scale-110 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign up
                        </nuxt-link>
                    </div>
                </div>
            </section>
        </header>
        <section class="w-full bg-gray-700 text-white">
            <div class="container py-6">
                <p class="text-center mb-0 text-lg">
                    Winner will be featured in Dogster Magazine, and take home $5,000!
                </p>
            </div>
        </section>
        <section class="flex items-center justify-center text-center text-black dark:text-white py-20">
    <div class="w-full max-w-sm">
      <h2 class="text-4xl font-medium mb-4">Vote for</h2>
      <h1 class="text-3xl font-medium mb-4">Gizmo</h1>
      <p class="text-base font-medium mb-8">
        Gizmo loves to give kisses, play, chew on his bones, eat, long walks, meeting new people, and making friend with everyone he meets
      </p>
      <div class="flex justify-center">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Famericasfavpet.com%2F2023%2Fgizmo-1dd3">
          <img
            src="https://americasfavpet.com/media/img/facebook-share.png"
            height="27"
            class="cursor-pointer"
            id="share-on-facebook"
          />
        </a>
      </div>
    </div>
  </section>
  <section class="text-black dark:text-white d-flex items-center">
  <div class="container mx-auto p-0">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-7/12 p-0">
        <img src="https://cdn.americasfavpet.com/6f706e6595635f32003f1942fa657bd6.png" class="w-full h-auto object-cover rounded-3xl">
      </div>
      <div class="w-full lg:w-5/12 p-0">
        <div class="px-6 py-6 text-center">
          <h2 class="text-3xl mb-5 mt-20">
            <span class="border-b-2 border-gray-200" id="competitor-position">Currently 2nd</span>
          </h2>
          <h5 class="text-xl"> in 
            <a href="https://americasfavpet.com/browse/2023/dog-group-488828ef" class="font-medium">their group</a>
          </h5>
          <br>
          <div class="mb-6">
            <button href="#vote" class="block mx-auto w-60 py-2 px-6 font-bold text-xl rounded-md bg-amber-500">PAWS Vote</button>
            <div class="animate-characters text-sm">LIMITED-TIME: 2X VOTES</div>
          </div>
          <p class="mb-0">
            <button href="https://americasfavpet.com/vote/options/2023/gizmo-1dd3" class="block mx-auto w-60 py-2 px-6 font-bold text-xl rounded-md bg-blue-400">Free Daily Vote</button>
            <small>Verification required</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  <section class="bg-color1 p-6">
    <div class="container mx-auto text-center">
      <h5 class="text-black text-xl">Voting for TOP 10 ends February 9th at 7PM PST</h5>
      <div class="flex justify-center mt-20">
        <UITicker />
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="text-center py-10 max-w-500 mx-auto text-2xl">
        <p class="mb-5 text-black dark:text-white">Want to learn more about our competition?</p>
        <nuxt-link
          class="text-indigo-100 bg-indigo-500 hover:bg-indigo-600 text-uppercase py-3 px-5 rounded-lg"
          to="/"
        >
          Learn More
        </nuxt-link>
      </div>
    </div>
  </section>
  <section class="bg-gray-100">
  <div class="container p-10">
    <div class="text-center">
      <h5 class="border-b border-gray-300 mb-5 text-2xl">What's Gizmo’s favorite toy?</h5>
      <p class="text-gray-700 text-3xl">Any hard bone or hard squeaky ball</p>
      <h5 class="mt-10 border-b border-gray-300 mb-5 text-2xl">Why should they be the favorite dog?</h5>
      <p class="text-gray-700 text-3xl">Gizmo should be America’s favorite dog because he is protective, friendly, energetic, full of life and brings a smile to everyone he meets</p>
    </div>
  </div>
</section>
            <hr class="mx-auto bg-black dark:bg-white w-1/2">
            <hr class="mx-auto bg-black dark:bg-white w-1/2">

            <section class="relative">

            <img src="../assets/img/paws-3x1.png" class="w-full">

        <div class="container max-w-4xl mx-auto h-128 bg-white dark:bg-dim-900 absolute bottom-0 top-20 left-0 right-0 text-center p-8">
            <div class="p-8 text-center">
                <h3 class="text-xl font-bold">Vote by Donation</h3>
                <p class="text-base">
                    Help Gizmo be the next America's Favorite Pet with a tax-deductible donation
                    supporting PAWS.org in their mission to help sick, injured, and orphaned animals.
                    <span class="text-amber-600">Limited-time: Receive two votes for every dollar donated. Promotion ends Monday at 11PM PST.</span>
                </p>
                <br>
                <form method="post" action="">
                    <input type="hidden">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="p-4 bg-white dark:bg-teal-800 rounded shadow shadow-amber-500">
                            <div class="text-xl font-bold">20</div>
                            <div class="text-base">votes</div>
                            <button value="10" type="submit" class="bg-amber-500 text-white p-2 rounded hover:bg-teal-800 dark:hover:bg-dim-900">Donate $10</button>
                        </div>
                        <div class="p-4 bg-white dark:bg-teal-800 text-black dark:text-white rounded shadow shadow-amber-500">
                            <div class="text-xl font-bold">50</div>
                            <div class="text-base">votes</div>
                            <button name="votes" value="25" type="submit" class="bg-amber-500 text-white p-2 rounded hover:bg-teal-800 dark:hover:bg-dim-900">Donate $25</button>
                        </div>
                        <div class="p-4 bg-white dark:bg-teal-800 text-black dark:text-white rounded shadow shadow-amber-500">
                            <div class="text-xl font-bold">100</div>
                            <div class="text-base">votes</div>
                            <button name="votes" value="50" type="submit" class="bg-amber-500 text-white p-2 rounded hover:bg-teal-800 dark:hover:bg-dim-900">Donate $50</button>
                        </div>
                        <div class="p-4 bg-white dark:bg-teal-800 text-black dark:text-white rounded shadow shadow-amber-500">
                            <div class="text-xl font-bold">200</div>
                            <div class="text-base">votes</div>
                            <button name="votes" value="100" type="submit" class="bg-amber-500 text-white p-2 rounded hover:bg-teal-800 dark:hover:bg-dim-900">Donate $100</button>
                        </div>
                        <div class="p-4 bg-white dark:bg-teal-800 text-black dark:text-white rounded shadow shadow-amber-500">
                            <div class="text-xl font-bold">500</div>
                            <div class="text-base">votes</div>
                            <button name="votes" value="250" type="submit" class="bg-amber-500 text-white p-2 rounded hover:bg-teal-800 dark:hover:bg-dim-900">Donate $250</button>
                        </div>
                    </div>
                </form>
                <br>
                <form class="votes-to-purchase-form" method="post" action="https://americasfavpet.com/vote/payment/2023/gizmo-1dd3/">
                    <input type="hidden" name="csrf" value="534366b7676e710005af1f32be871c06">
                    <p class="text-center text-lg font-medium">Or enter amount ($1 donation per 2 votes)</p>
                    <div class="flex justify-center mx-auto max-w-xs">
                        <input type="tel" class="w-full max-w-sm" name="votes" value="" placeholder="Enter amount" data-min-votes="10" data-max-votes="1000">
                        <span class="input-group-btn">
                        <button class="btn bg-primary text-white" type="submit">Donate</button>
                    </span>
                    </div>
                    <div class="text-danger text-center" id="purchase-error"></div>
                </form>
            </div>
        </div>
    </section>


            <section id="contact" class="p-6 my-12 pt-80">
                <footer class="text-center py-8">
                    <div class="flex justify-center">
                        <nuxt-link to="#" class="mr-6">
                            <i class="fab fa-instagram text-2xl"></i>
                        </nuxt-link>
                        <nuxt-link to="#">
                            <i class="fab fa-facebook text-2xl"></i>
                        </nuxt-link>
                    </div>
                    <div class="mt-6 flex justify-center">
                        <nuxt-link to="#" class="mr-8">Rules</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Terms</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Privacy</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Disclosures</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Support</nuxt-link>
                        <nuxt-link to="#">Login</nuxt-link>
                    </div>
                    <div class="mt-8 text-sm">
                        General footer stuff
                    </div>
                </footer>
            </section>


    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})

const tick = { value: '' };

function handleTickInit() {
  const t = new Date();
  const seconds = 271098;
  t.setSeconds(t.getSeconds() + seconds);
  const countFormat = ['d', 'h' ,'m', 's'];
  const counter = Tick.count.down(t, { format: countFormat });
  counter.onupdate = function(value) {
    tick.value = value;
  };
  counter.onended = function() {
    location.reload();
  };
}
</script>