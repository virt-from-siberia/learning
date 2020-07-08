<template>
	<div class="form-group">
        <label>{{ name }}</label>
        <span class="fa" :class="validClass" v-if="activated">
        </span>
        <input type="text" 
        	   class="form-control"
			   :value="value"
			   @input="onInput"
        	   >
    </div>
</template>

<script>
	export default {
		props: ['name', 'value', 'pattern'],
		data(){
			return {
				activated: this.value != ''
			}
		},
		computed: {
			validClass(){
				return this.pattern.test(this.value) ? 
						'fa-check-circle text-success' :
						'fa-exclamation-circle text-danger';
			}
		},
		methods: {
			onInput(e){
				this.activated = true;

				this.$emit('changedata', {
					value: e.target.value,
					valid: this.pattern.test(e.target.value)
				});
			}
		}
	}
</script>