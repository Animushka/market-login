<template>
		<div class="row justify-center items-center">
			<div class="column">
				<div class="row">
					<q-card bordered class="q-pa-lg shadow-1" square>
						<q-card-section>
							<q-form class="q-gutter-md">
								<h5 class="text-h5 q-my-md">Market Login</h5>
								<q-input v-model="login" clearable filled label="login" square type="email"/>
								<q-input v-model="password" clearable filled label="password" square type="password"/>
							</q-form>
						</q-card-section>
						<q-card-actions class="q-px-md">
							<q-btn class="full-width" color="green" label="Login" size="lg" unelevated/>
              <q-btn class="full-width q-mt-lg"  color="primary" label="OAuth2.1" size="lg" unelevated @click="oauth2"/>
						</q-card-actions>
					</q-card>
				</div>
			</div>
		</div>
</template>

<script lang="ts" setup>

import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from 'vue-router';
import axios from 'axios';

const login = ref('')
const password = ref('')

const route = useRoute();

const code = computed(() => {
  var regExpMatchArray = route.fullPath.match(/code=(.*)/);
  if (regExpMatchArray) {
    return regExpMatchArray[1];
  }

  return undefined;
});

onBeforeMount(() => {
  if (code.value) {
    getBearerToken();
  }
})


const url = 'http://localhost:9000/oauth2/authorize?response_type=code&client_id=sandwich-admin-client&scope=writeIngredients deleteIngredients&redirect_uri=http://127.0.0.1:9001/login'

const oauth2 = () => {
  window.open(url, "_self");
}

const getBearerToken = () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code.value);
  params.append('redirect_uri', 'http://127.0.0.1:9001/login');
  axios.post('http://127.0.0.1:9000/oauth2/token', params, {
    auth: {
      username: 'sandwich-admin-client',
      password: 'secret',
    }
  }).then(response => localStorage.setItem('TOKEN', JSON.stringify(response.data))).catch(error => {
    console.log(error);
  })
}

</script>

<style>
.q-card {
	width: 360px;
}
</style>
