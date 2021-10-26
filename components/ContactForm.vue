<template>
	<form v-if="form" name="contact-form" method="post" action="/thankyou">
		<div class="form-group">
			<label for="name">Name</label>
			<span>
				<input
					id="name"
					v-model="$v.form.name.$model"
					type="text"
					name="name"
					placeholder=""
					autocomplete="name"
				/>
				<p v-if="$v.form.name.$error && !$v.form.name.required" class="text-danger">
					The Name field is required
				</p>
			</span>
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<span>
				<input
					id="email"
					v-model="$v.form.email.$model"
					type="email"
					name="email"
					placeholder=""
					autocomplete="email"
				/>
				<p v-if="$v.form.email.$error && !$v.form.email.required" class="text-danger">
					The Email filed is required
				</p>
				<p v-if="$v.form.email.$error && !$v.form.email.email" class="text-danger">
					The Email address is not valid
				</p>
			</span>
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<span>
				<textarea
					id="message"
					v-model="$v.form.message.$model"
					name="message"
					rows="5"
				></textarea>
				<p
					v-if="$v.form.message.$error && !$v.form.message.required"
					class="text-danger"
				>
					The Message field is required
				</p>
				<p
					v-if="$v.form.message.$error && !$v.form.message.minLength"
					class="text-danger"
				>
					The Message field must be least 100 characters
				</p>
			</span>
		</div>
		<button type="submit" class="btn" :disabled="!changed" @click.prevent="submit">Send</button>
	</form>
</template>

<script>
import { email, minLength, required } from 'vuelidate/lib/validators'

export default {
  props: {
    value: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
			changed: false,
      form: null
    }
  },
	watch: {
		form: {
      handler() {
        // using lodash to compare original form data and current form data
        this.changed = !this.$v.$invalid
      },
      // useful to watch deeply nested properties on a data variable
      deep: true,
    },
	},
  mounted() {
    this.form = { ...this.value }
  },
  methods: {
    submit() {
      // 入力せず「送信」ボタンをクリックした場合、全てのエラー項目のエラーメッセージが表示
      this.$v.$touch()
      if (this.$v.invalid) {
        console.log("バリデーションエラー") // eslint-disable-line no-console
      } else {
        this.$emit("submit", this.$v)
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
				email,
      },
      message: {
        required,
        minLength: minLength(100),
      },
    },
  },
}
</script>

<style>
.form-group {
	margin-bottom: 20px;
}
form label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-family: Krungthep, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
}
form input {
  background: #fff;
  width: 100%;
  border: solid 1px #979797;
  padding: 10px;
  border-radius: 4px;
  text-align: left;
}
form textarea {
  background: #fff;
  min-width: 100%;
  max-width: 100%;
  min-height: 120px;
  max-height: 300px;
  height: 120px;
  border: solid 1px #979797;
  padding: 10px;
  border-radius: 4px;
  text-align: left;
}
form button,
form input,
form textarea {
  color: #333;
  font-size: 1.4rem;
  font-family: inherit;
}
.btn {
  display: inline-block;
  position: relative;
  text-align: center;
  margin: auto;
  width: auto;
  padding: 10px 20px;
  background: #0bd;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0, 0, 0 / 30%);
  transition: 0.3s;
}
.btn:disabled {
  background: #ccc;
  color: #fff;
}
.text-danger {
	margin-top: 10px;
	font-size: 1.2rem;
	color: #dc3545;
}

/* タブレット */
@media (max-width: 959px) {
	form label {
		font-size: 1.3rem;
	}
}

/* スマホ */
@media (max-width: 480px) {
	.form-group {
		margin-bottom: 16px;
	}
	form label {
		font-size: 1.2rem;
	}
	form button,
	form input,
	form textarea {
		font-size: 1.2rem;
	}
	form textarea {
		min-height: 100px;
		max-height: 150px;
	}
	.text-danger {
		font-size: 1.1rem;
	}
	.btn {
		padding: 8px 16px;
		font-size: 1.1rem;
	}
}
</style>
