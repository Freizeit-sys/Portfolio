<template>
  <div role="main">
    <section class="contact">
      <div class="container">
        <h1>Contact</h1>
				<div class="card">
					<div class="card-body">
						<ContactForm v-model="form" @submit="submit"/>
					</div>
				</div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
	components: {
		ContactForm
	},
	layout() {
    return 'contact'
  },
	data() {
		return {
			form: {
				name: "",
				email: "",
				message: ""
			}
		}
	},
	head() {
    return {
      title: 'Contact',
    }
  },
	methods: {
		submit($v) {
			console.log($v.form.$model) // eslint-disable-line no-console
			this.$router.push({ name: 'thankyou' })
		}
	},
}
</script>

<style scoped>
.contact {
  position: relative;
  margin: 3% 0 5%;
  text-align: center;
}
.contact h1 {
  color: #333;
  text-align: center;
  font-family: Baskerville, sans-serif;
  font-weight: 400;
  font-size: 7rem;
  margin-bottom: 2%;
}
.container {
  max-width: 1000px;
  margin: auto;
}
.card {
  position: relative;
  width: 58%;
	min-width: 480px;
  margin-top: 8%;
	margin-left: auto;
	margin-right: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
}
.card-body {
  position: relative;
  width: 70%;
  margin: auto;
  padding: 64px 0;
}

/* タブレット */
@media (max-width: 959px) {
	.container {
		max-width: 960px;
	}
	.contact h1 {
		font-size: 4.8rem;
	}
}

/* スマホ */
@media (max-width: 480px) {
	.container {
		max-width: 480px;
	}
	.contact h1 {
		font-size: 3.2rem;
	}
	.card {
		width: 50%;
		min-width: 300px;
	}
	.card-body {
		width: 80%;
		padding: 24px 0;
	}
}
</style>
