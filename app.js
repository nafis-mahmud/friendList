const app = Vue.createApp({
    data() {
      return {
        detailsAreVisible: false,
        friends: [
          {
            id: "Nafis",
            name: "Nafis Mahmud",
            phone: "01798722721",
            email: "nafis@aidocbuilder.com",
          },
          {
            id: "nnnnnn",
            name: "shbvfscbs  sjfbsjcbs",
            phone: "01700000001",
            email: "xxx@aidocbuilder.com",
          },
        ],
      };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    }
  });
  
  app.mount("#app");
  