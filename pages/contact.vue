<template>
  <div role="main">
    <section class="contact">
      <div class="container">
        <h1>Contact</h1>
        <div class="card">
          <div class="card-body">
            <form name="contact-form">
              <div>
                <label for="name">Name</label>
                <span>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder=""
                    autocomplete="name"
                  />
                  <p class="" style="display: none"></p>
                </span>
              </div>
              <div>
                <label for="email">Email</label>
                <span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=""
                    autocomplete="email"
                  />
                  <p class="" style="display: none"></p>
                </span>
              </div>
              <div>
                <label for="message">Message</label>
                <span>
                  <textarea
                    id="message"
                    name="message"
                    cols=""
                    rows="5"
                  ></textarea>
                  <p class="" style="display: none"></p>
                </span>
              </div>
              <button type="submit" disabled="disabled" class="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout() {
    return 'contact'
  },
  head() {
    return {
      title: 'Contact',
    }
  },
}
</script>

<style>
.contact {
  position: relative;
  margin: 8% 0 5%;
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
  max-width: 580px;
  margin: auto;
}
.card {
  position: relative;
  width: 100%;
  min-height: 285.7px;
  margin-top: 8%;
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

/* Contact Form */
form label {
  display: block;
  margin-bottom: 5px;
	text-align: left;
	font-family: Krungthep, sans-serif;
	font-weight: bold;
	font-size: 1.5rem;
}
form input {
  background: #fff;
	width: 100%;
  border: solid 1px #979797;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
	text-align: left;
}
form button,
form input,
form textarea {
  font-size: 1.4rem;
  font-family: inherit;
}
.btn {
	display: inline-block;
	position: relative;
	text-align: center;
	margin: auto;
	background: #0bd;
	color: #fff;
	border-radius: 5px;
	box-shadow: 0 1px 3px rgb(0, 0, 0 / 30%);
	transition: .3s;
}
.btn:disabled {
	background: #ccc;
	color: #fff;
	width: auto;
	padding: 10px 20px;
}
</style>
