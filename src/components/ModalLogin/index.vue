<template>
	<div class="flex justify-between">
		<h1 class="text-3xl font-black text-gray-800">Entre na sua conta</h1>
		<button @click="close()" class="text-4xl text-gray-600 focus:outline-none">&times;</button>
	</div>

	<div class="mt-16">
		<form @submit.prevent="handleSubmit">
			<label class="block">
				<span class="text-lg font-medium text-gray-800">Email</span>
				<input
					type="email"
					class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
					:class="{'border-brand-danger': !!state.email.errorMessage}"
					placeholder="email@gmail.com"
					v-model="state.email.value"
				/>
				<span
					v-if="!!state.email.errorMessage"
					class="block font-medium text-brand-danger"
				>{{state.email.errorMessage}}</span>
			</label>

			<label class="block mt-9">
				<span class="text-lg font-medium text-gray-800">Senha</span>
				<input
					type="password"
					class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
					:class="{'border-brand-danger': !!state.password.errorMessage}"
					v-model="state.password.value"
				/>
				<span
					v-if="!!state.password.errorMessage"
					class="block font-medium text-brand-danger"
				>{{state.password.errorMessage}}</span>
			</label>

			<button
				:disabled="state.isLoading"
				type="submit"
				:class="{'opacity-50': state.isLoading}"
				class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
			>Enviar</button>
		</form>
	</div>
</template>

<script>
import { reactive } from "vue";
import useModal from "@/hooks/useModal";
import { useField } from "vee-validate";
import { validateEmptyAndLength3, validateEmptyAndEmail } from "../../utils/validators";

export default {
	setup() {
		const modal = useModal();

		const { value: emailValue, errorMessage: emailErrorMessage } = useField("email", validateEmptyAndEmail);
		const { value: passwordValue, errorMessage: passwordErrorMessage } = useField("password", validateEmptyAndLength3);

		const state = reactive({
			hasErrors: false,
			isLoading: false,
			email: {
				value: emailValue,
				errorMessage: emailErrorMessage,
			},
			password: {
				value: passwordValue,
				errorMessage: passwordErrorMessage,
			},
		});

		function handleSubmit() {}

		return {
			state,
			handleSubmit,
			close: modal.close,
		};
	},
};
</script>

<style>
</style>