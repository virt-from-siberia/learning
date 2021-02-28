import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";

Vue.component("loader", {
  template: `
  <div stype="display : flex; justify- content: center; align-items: center" class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
  </div>
   `,
});

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: "",
      },
      contacts: [],
      loading: true,
    };
  },
  computed: {
    canCreate() {
      return this.form.value.trim() && this.form.name.trim();
    },
  },
  methods: {
    async createContact() {
      const { ...contact } = this.form;

      const newContact = await request("/api/contacts", "POST", contact);

      this.contacts.push(newContact);
      this.form.name = this.form.value = "";
    },
    markContact(id) {
      const contact = this.contacts.find((c) => c.id === id);
      contact.marked = !contact.marked;
    },
    async removeContact(id) {
      await request(`/api/contacts/${id}`, "DELETE");
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
  async mounted() {
    const data = await request("/api/contacts");
    console.log(data);
    this.contacts = data;
    this.loading = false;
  },
});

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    return await response.json();
  } catch (error) {
    console.warn("ERROR", error.message);
  }
}
