//Ahora te pido modelar objetos de las siguientes plataformas: Twitter, Facebook, Uber.

//Twitter
//User
const user = {
    user:"Mauricio",
    user_name:"MauricioMG9",
    bio:"Nothing here",
    age:"20",

    getInfo: function(){
        return `The owner of this Twitter account is ${this.user} who is ${this.age} years old, with the username ${this.user_name}, with the bio ${this.bio}.`
    }
    
}
console.log(`Twitter account\n` + user.getInfo())

//Trending topic
const trending_topic = {
    name:"FelizMiercoles",
    tweets: 17700,
    ranking: 4,
    country: "Mexico",

    getTrending: function(){
        return `The trending topic ${this.name} has ${this.tweets} tweets and it's No. ${this.ranking} in ${this.country}.`
    }
}
console.log(trending_topic.getTrending())

//Facebook
//User
const f_user = {
    name:"Mauricio",
    addres: "Ignacio Allende, México",
    friends: 384,
    getInfo: function(){
        return `This profile of Facebook belongs to ${this.name} with addres ${this.addres} and has ${this.friends} friends.`
    }
}
console.log(f_user.getInfo())

//Post
const f_post = {
    message: "Todo se destruye a mi alrededor",
    feeling: "Sad",
    public: "Just friends",
    getPost: function(){
        return `The post says "${this.message}", the feeling is ${this.feeling} and it's for ${this.public}.`
    }
}
console.log(f_user.name + " just made a new post.\n" + f_post.getPost())

//Uber
//Profile
const profile = {
    name: "Mauricio Munguia",
    stars: 4.82,
    uber_rewards: 1440,
    cellphone: 5574003774,
    getInfoForDriver: function(){
        return 
    }
}