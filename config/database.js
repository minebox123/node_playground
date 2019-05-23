if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://Ilya:Iliah@vidjot-prod-qkyke.mongodb.net/test?retryWrites=true"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/vidjot-dev" };
}
