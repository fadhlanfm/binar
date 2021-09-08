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

function createPost(post) {
  return new Promise ((resolve,reject)=>{
      setTimeout(() => {
          posts.push(post);
          let err = false;

          if (err == false) {
            resolve() // penuhin janji
          } else {
            reject("Error something went wrong !") // janji tidak terpenuhi
          }
      }, 2000)
  })   
}

async function main(){ 
    await createPost({ title: "Post Three", body: "This is post three" })
    getPosts()
}
main();
