document.addEventListener("DOMContentLoaded",function(){
      const searchBtn=document.getElementById("search-btn");
      const usernameInput=document.getElementById("user-input");
      const statsContainer=document.querySelector(".stas-container");

      const easyProgressCircle=document.querySelector(".easy-progress");
      const mediumProgressCircle=document.querySelector(".medium-progress");
      const hardProgressCircle=document.querySelector(".hard-progress");

      const easyLabel=document.getElementById("easy-label");
      const mediumLabel=document.getElementById("medium-label");
      const hardLabel=document.getElementById("hard-label");
      const cardStatsContainer=document.querySelector(".stats-cards");

      //return t or f based on regex
      function validateUsername(username){
        if(username.trim()===""){
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9-_]{1,15}$/;
        const isMatching=regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;

      }

      async function fetchUserDetails(username) {
            
          const url=`https://leetcode-stats-api.herokuapp.com/${username}`;
          try{
            searchBtn.textContent="Searching..";
            searchBtn.disabled=true;
            
            const response=await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch user");
            }
            const data=await response.json();
            console.log("Logging data: ",data);
          }
          catch(error){
               
          }
          finally{

          }

      }
      searchBtn.addEventListener('click',function(){
        const username=usernameInput.value;
        console.log(username);
        if(validateUsername(username)){
               fetchUserDetails(username);
        }
      })
      
      
    
});