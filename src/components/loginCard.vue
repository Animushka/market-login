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
						</q-card-actions>
					</q-card>
				</div>
			</div>
		</div>
</template>

<script lang="ts" setup>

import { ref } from "vue";

const login = ref('')
const password = ref('')

</script>

<style>
.q-card {
	width: 360px;
}
</style>
