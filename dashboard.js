db = [];
db = JSON.parse(localStorage.getItem("users"));
console.log(db);

tweetDB = [];
tweetDB = JSON.parse(localStorage.getItem("tweets"));

let tweetId = tweetDB.length;
let findMail = document.URL.split("?");
let takeMail = findMail.slice(1);

let showMyTweets = 0;

let user = db.find(val => val.mail == takeMail);
console.log(user);
// Buttonlar 

let mainCard = document.getElementById("mainCard");

const myTweets = document.getElementById('myTweets');
const myFavorites = document.getElementById('myFavorites');
const myRetweets = document.getElementById('myRetweets');
const allTweets = document.getElementById('allTweets');

// Alanlar

const streamMyTweets = document.getElementById('streamMyTweets');
const streamMyFavorites = document.getElementById('streamMyFavorites');
const streamMyRetweet = document.getElementById('streamMyRetweet');

// Butonlar ile tweetleri filtreleme

allTweets.addEventListener('click',()=>{
    mainCard.style.display = "block";
    streamMyRetweet.style.display = "none";
    streamMyFavorites.style.display = "none";
})

myTweets.addEventListener('click',()=>{
    showMyTweets++;
    console.log("My Tweets");
    mainCard.style.display = "none";
    streamMyFavorites.style.display = "none";
    streamMyRetweet.style.display = "none";

    

    let myTweetsFilter = tweetDB.filter(val => val[0].whoTweeted == user.username);
    console.log(myTweetsFilter);


    if(myTweetsFilter != null && showMyTweets == 1){
       
        myTweetsFilter.forEach(element => {
            console.log(element);
            let findUser = element[0].whoTweeted;
            console.log(findUser);
            let findEd = db.filter(val => val.username == findUser);
            console.log(findEd[0].mail);
            let streamMyTweets = document.getElementById("streamMyTweets");
            let twCard = document.createElement('div');
            twCard.className = 'card mt-3';
            streamMyTweets.prepend(twCard);
            let twCardBody = document.createElement('div');
            twCardBody.className = "card-body mt-1";
            twCard.appendChild(twCardBody);
            let twTopArea = document.createElement('div');
            twTopArea.className = "username";
            twCardBody.appendChild(twTopArea);
            let twImageDiv = document.createElement('div');
            twImageDiv.className = "mr-3";
            twImageDiv.innerHTML = `<img class="rounded-circle" src="${findEd[0].username}.jpg" width="60" height="60">`;
            twTopArea.appendChild(twImageDiv);
            let twTwBody = document.createElement('div');
            let twTopContent = document.createElement('div');
            twTopContent.className = "username";
            twTwBody.appendChild(twTopContent);
            twTopArea.appendChild(twTwBody);
            let twUsernameDiv = document.createElement('div');
            twUsernameDiv.innerHTML = `<p><b>${findEd[0].name +" "+ findEd[0].lastname +" "+ element[0].tweetId}</b></p>`;
            twTopContent.appendChild(twUsernameDiv);
            let twUsernameAtDiv = document.createElement('div');
            twUsernameAtDiv.className = "ml-1";
            twUsernameAtDiv.innerHTML = `<i>@${findEd[0].username}</i>`;
            twTopContent.appendChild(twUsernameAtDiv);
            let twTweetOwn = document.createElement('div');
            twTweetOwn.innerHTML = `${element[0].tweet}`;
            twTwBody.appendChild(twTweetOwn);
            let twIconsDiv = document.createElement('div');
            twIconsDiv.className = "mt-3";
            let twIconSetDiv = document.createElement('div');
            twIconSetDiv.className = 'icon-set';


            let icComment =  document.createElement ('i');
            icComment.className = 'fa fa-comment-o';
            icComment.setAttribute('aria-hidden','true')
            let icRetweet = document.createElement('i');
            icRetweet.setAttribute('aria-hidden','true');
            icRetweet.className = 'fa fa-retweet';
            let icFavorite = document.createElement('i');
            icFavorite.setAttribute('aria-hidden','true');
            //icFavorite.className = 'fa fa-heart-o';

            let favoriteFind = user.favorites;
            console.log('Favorite Find ',favoriteFind);
            
            

            console.log('Varmı', favoriteFind.includes(element[0].tweetId));
            console.log('Tweet ID',element[0].tweetId);
            
            let bul = favoriteFind.includes(element[0].tweetId);

            if(bul){
                icFavorite.className = 'fa fa-heart';
            }else{
                icFavorite.className = 'fa fa-heart-o';

            }


            console.log("Tweet Döndğ");
           

            
            
            twIconSetDiv.appendChild(icComment);
            twIconSetDiv.appendChild(icRetweet);

            // Favoriyi veritabanından alıp, eğer favoriye eklendiyse iconu değiştir.

           

            //console.log(findEd[0].favorites);
            



            twIconSetDiv.appendChild(icFavorite);

            icComment.addEventListener('click',() =>{
                console.log("Comment Tıklandı");
                
            })

            icRetweet.addEventListener('click',() =>{
                console.log("Reteweet Tıklandı");
                
            })


   
            


            twIconsDiv.appendChild(twIconSetDiv);
            twTwBody.appendChild(twIconsDiv);
        });
    }




    
})

myFavorites.addEventListener('click', ()=>{
    console.log("My Favorites");
    
})

myRetweets.addEventListener('click', ()=>{
    console.log("My Retweets");
    
})
//Iconlar İçin
let favClicked = false;



const tweetButton = document.getElementById("tweetButton");
const tweetText = document.getElementById("tweetText");
const btneditProfile = document.getElementById('btneditProfile');

tweetButton.addEventListener("click", tweetle);
btneditProfile.addEventListener('click', updateProfile);

getTweetsFromDB();

function getTweetsFromDB(){
    if(tweetDB != null){
        tweetDB.forEach(element => {
            console.log(element);
            let findUser = element[0].whoTweeted;
            console.log(findUser);
            let findEd = db.filter(val => val.username == findUser);
            console.log(findEd[0].mail);
            let mainCard = document.getElementById("mainCard");
            let twCard = document.createElement('mainTweet');
            twCard.className = 'card mt-3';
            mainCard.prepend(twCard);
            let twCardBody = document.createElement('div');
            twCardBody.className = "card-body mt-1";
            twCard.appendChild(twCardBody);
            let twTopArea = document.createElement('div');
            twTopArea.className = "username";
            twCardBody.appendChild(twTopArea);
            let twImageDiv = document.createElement('div');
            twImageDiv.className = "mr-3";
            twImageDiv.innerHTML = `<img class="rounded-circle" src="${findEd[0].username}.jpg" width="60" height="60">`;
            twTopArea.appendChild(twImageDiv);
            let twTwBody = document.createElement('div');
            let twTopContent = document.createElement('div');
            twTopContent.className = "username";
            twTwBody.appendChild(twTopContent);
            twTopArea.appendChild(twTwBody);
            let twUsernameDiv = document.createElement('div');
            twUsernameDiv.innerHTML = `<p><b>${findEd[0].name +" "+ findEd[0].lastname +" "+ element[0].tweetId}</b></p>`;
            twTopContent.appendChild(twUsernameDiv);
            let twUsernameAtDiv = document.createElement('div');
            twUsernameAtDiv.className = "ml-1";
            twUsernameAtDiv.innerHTML = `<i>@${findEd[0].username}</i>`;
            twTopContent.appendChild(twUsernameAtDiv);
            let twTweetOwn = document.createElement('div');
            twTweetOwn.innerHTML = `${element[0].tweet}`;
            twTwBody.appendChild(twTweetOwn);
            let twIconsDiv = document.createElement('div');
            twIconsDiv.className = "mt-3";
            let twIconSetDiv = document.createElement('div');
            twIconSetDiv.className = 'icon-set';


            let icComment =  document.createElement ('i');
            icComment.className = 'fa fa-comment-o';
            icComment.setAttribute('aria-hidden','true')
            let icRetweet = document.createElement('i');
            icRetweet.setAttribute('aria-hidden','true');
            icRetweet.className = 'fa fa-retweet';
            let icFavorite = document.createElement('i');
            icFavorite.setAttribute('aria-hidden','true');
            //icFavorite.className = 'fa fa-heart-o';

            let favoriteFind = user.favorites;
            console.log('Favorite Find ',favoriteFind);
            
            

            console.log('Varmı', favoriteFind.includes(element[0].tweetId));
            console.log('Tweet ID',element[0].tweetId);
            
            let bul = favoriteFind.includes(element[0].tweetId);

            if(bul){
                icFavorite.className = 'fa fa-heart';
            }else{
                icFavorite.className = 'fa fa-heart-o';

            }


            console.log("Tweet Döndğ");
            

            //console.log('FavoriteFind', favoriteFind[0]);
            
            /*if(element[0].tweetId)

            if(findEd[0].favorites >0){
                console.log("Favori sayısı 0 dan büyük");
                console.log(findEd[0].favorites);
                
                icFavorite.className = 'fa fa-heart-o';
                

                
            }else{
                console.log("Favori sayısı 0 dan küçük");
               
                icFavorite.className = 'fa fa-heart';
            }*/


            
            
            twIconSetDiv.appendChild(icComment);
            twIconSetDiv.appendChild(icRetweet);

            // Favoriyi veritabanından alıp, eğer favoriye eklendiyse iconu değiştir.

           

            //console.log(findEd[0].favorites);
            



            twIconSetDiv.appendChild(icFavorite);

            icComment.addEventListener('click',() =>{
                console.log("Comment Tıklandı");
                
            })

            icRetweet.addEventListener('click',() =>{
                console.log("Reteweet Tıklandı");
                
            })

            icFavorite.addEventListener('click',(e) =>{

                if(e.target.className == "fa fa-heart"){
                    e.target.className = "fa fa-heart-o";
                    console.log("1");

                    // Favoriden çıkarma işlemi
                    const index = user.favorites.indexOf(element[0].tweetId);
                    if (index > -1) {
                        user.favorites.splice(index, 1);
                    }
                    
                    localStorage.setItem('users', JSON.stringify(db));
                    

                }else if(e.target.className == "fa fa-heart-o"){
                    e.target.className = "fa fa-heart";
                    console.log("2");
                    console.log(`Tweet ID: ${element[0].tweetId}`);
                    findEd[0].favorites.push();
                    user.favorites.push(element[0].tweetId);
                    localStorage.setItem('users', JSON.stringify(db));
                    
                }

               

                
                
            }
                
            )
            
            


            twIconsDiv.appendChild(twIconSetDiv);
            twTwBody.appendChild(twIconsDiv);
        });
    }
}

function tweetle(){
    if(tweetText.value ==  ""){
        alert("Boş tweet atamazsın")
    }else{

   
    console.log(tweetText.value);
    let mainCard = document.getElementById("mainCard");
    let twCard = document.createElement('mainTweet');
    twCard.className = 'card mt-3';
    mainCard.prepend(twCard);
    let twCardBody = document.createElement('div');
    twCardBody.className = "card-body mt-1";
    twCard.appendChild(twCardBody);
    let twTopArea = document.createElement('div');
    twTopArea.className = "username";
    twCardBody.appendChild(twTopArea);
    let twImageDiv = document.createElement('div');
    twImageDiv.className = "mr-3";
    twImageDiv.innerHTML = `<img class="rounded-circle" src="avatar.jpg" width="60" height="60">`;
    twTopArea.appendChild(twImageDiv);
    let twTwBody = document.createElement('div');
    let twTopContent = document.createElement('div');
    twTopContent.className = "username";
    twTwBody.appendChild(twTopContent);
    twTopArea.appendChild(twTwBody);
    let twUsernameDiv = document.createElement('div');
    twUsernameDiv.innerHTML = `<p><b>${user.name + " " + user.lastname}</b></p>`;
    twTopContent.appendChild(twUsernameDiv);
    let twUsernameAtDiv = document.createElement('div');
    twUsernameAtDiv.className = "ml-1";
    twUsernameAtDiv.innerHTML = `<i>@${user.username}</i>`;
    twTopContent.appendChild(twUsernameAtDiv);
    let twTweetOwn = document.createElement('div');
    twTweetOwn.innerHTML = `${tweetText.value}`;
    twTwBody.appendChild(twTweetOwn);
    let twIconsDiv = document.createElement('div');
    twIconsDiv.className = "mt-3";
    let twIconSetDiv = document.createElement('div');
    twIconSetDiv.className = 'icon-set';
    twIconSetDiv.innerHTML = ` <i class="fa fa-comment-o" aria-hidden="true"></i>
    <i class="fa fa-retweet" aria-hidden="true"></i>
    <i class="fa fa-heart-o" aria-hidden="true"></i>`
    twIconsDiv.appendChild(twIconSetDiv);
    twTwBody.appendChild(twIconsDiv);
    tweet = [
        {
            tweetId : tweetId++,
            tweet : tweetText.value,
            whoTweeted : user.username,
            
        }
    ]
    tweetDB.push(tweet);
    console.log(tweetDB);
    localStorage.setItem("tweets",JSON.stringify(tweetDB));
    tweetText.value = "";
}


}

function updateProfile(){
    let modalName = document.getElementById('modalName');
    let modalLastName = document.getElementById('modalLastName');
    let modalMail = document.getElementById('modalMail');
    let modalPassword = document.getElementById('modalPassword');
    let modalUsername = document.getElementById('modalUsername'); 

    modalName.value =  user.name;
    modalLastName.value = user.lastname;
    modalMail.value = user.mail;
    modalPassword.value = user.pssword;
    modalUsername.value = user.username;

    document.getElementById('modalSave').addEventListener('click', ()=>{
        console.log('eski user', user);
        
        user.username = modalUsername.value;
        user.mail =  modalMail.value;
        user.name = modalName.value;
        user.lastname =  modalLastName.value;
        user.pssword = modalPassword.value;

        console.log('yeni user', user);
        console.log('db', db);

        localStorage.setItem('users', JSON.stringify(db));
        console.log('local users', localStorage.getItem('users'));

        console.log("1");
       
       
        $('#exampleModal').modal('hide');
    });
}































