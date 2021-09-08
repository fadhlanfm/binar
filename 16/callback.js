const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
]

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post)
    })
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
}

// versi handling asynchronous
createPost({ title: "Post Three", body: "This is post three" }, getPosts) // get post ngeluarin 3 post

// versi tanpa handling asynchronous
createPost({ title: "Post Three", body: "This is post three" })
getPosts() // get post hanya ngeluarin 2 posts

// function insertElementToArr(arr, el) {
//   if (!arr.length) {
//     return "input salah"
//   }
//   arr.push(el)
//   console.log(arr)
// }

// insertElementToArr([0], 1)
// console.log(insertElementToArr({ "0": 0 }, 1))
