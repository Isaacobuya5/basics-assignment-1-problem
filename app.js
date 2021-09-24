Vue.createApp({
  data() {
    return {
      name: "Isaac Juma",
      age: 25,
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/05/14/01/56/child-6252212_960_720.jpg",
    };
  },
  methods: {
    favNumber() {
      const random = Math.random();
      return random;
    },
  },
}).mount("#assignment");
