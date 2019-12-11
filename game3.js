
var div1;

//player character
var adventurer = {
    
    name: "none",
    gold: 100,
    equipment: [],
}
   //easily calling object
    var money = adventurer.gold;
    var equipment = adventurer.equipment;
   //doesn"t allow money to go negative
    if (money <= 0){

      money=0;
    }
    //shows name form
    function startUp(){
       document.getElementById("gameStart").style.display = "none";
       document.getElementById("start").style.display = "block";
    }



    //Starts the adventure
    function startQuest(){
        

    var playerName = document.getElementById("newName").elements[0].value;
    adventurer.name = playerName;
    console.log(playerName);
    document.getElementById("start").style.display = "none";
    //Clears the existing text with new
    //reset gear
    money = 100;
    equipment = []
    //starting cave
    div1 = document.getElementById("cave1");    
    div1.style.display = "block";
    div1.innerHTML = "<p>Hello, " + adventurer.name + "." + " You awaken in a dark cave, your head is pounding as you get to your feet. As you check your belongings, you find that your sword and armor are missing. The only thing on your person is a bag of 100 gold. As your eyes adjust to the dark, you see three doorways in the rocks.</p> <p><button onclick = 'goLeft();'>Left</button><button onclick='goStraight();'>Straight ahead</button> <button onclick = 'goRight();'>Right</button></p>";
    }
    //go through the left doorway
    function goLeft(){

        div1.innerHTML = "<p>You go through the left passage. After 100 meters, you arrive at a dead end</p><button onclick = 'goBack();'>Turn around</button>";
        
     }
     //back to the start
     function goBack(){

        div1.innerHTML = "<p>You arrive back in the original cave. You see three doorways in the rocks.</p> <p><button onclick = 'goLeft();'>Left</button><button onclick='goStraight();'>Straight ahead</button> <button onclick = 'goRight();'>Right</button></p>";
     }
     //enter the right doorway
     function goRight(){

        div1.innerHTML = "<p> You enter another cave.</p><p>A large lake with jet black water sits in the middle.</p><p>Across the lake, you see a sliver of light coming from a break in the rocks illuminating a golden treasure chest.</p><button onclick = 'goBack();'>Turn around</button><button onclick = 'swim();'>Swim Across</button><button onclick = 'climb();'>Climb Around</button>";
     }
     //attempt to swim across the lake
     function swim(){

        div1.innerHTML = "<p> You attempt to swim across the vast lake.</p><p>You make it halfway before feeling the water move around you.</p><p>A giant tentacle wraps itself around you, and drags you underneath. You struggle to fight back until all your strength is gone.</p> <h2>You have drowned</h2><button onclick = 'startQuest();'>Restart</button>";
     }
     //attempt to climb around the lake
     function climb(){

        div1.innerHTML = "<p>You decide to keep whatever clothes you have left dry, and try to climb around the lake.</p><p>Having never been a proficient climber, you are amazed by how easily you can navigate the wall.</p><p>As you pick up speed, you grab a rock that comes free from the wall.</p><p>You hear a loud rumbling, and as you look up, the last thing you ever see is a boulder falling towards your head.</p> <h2>You have been crushed</h2><button onclick ='startQuest();'>Restart</button>";
     }
     //Takes you to the main chamber
     function goStraight(){

        div1.innerHTML = "<p>You enter a massive, well lit cavern.</p><p>The walls are lined with burning torches, and a gigantic fire roars in the middle of the room</p><p>On either side of the cavern, you see two large tents. According to the signs, on the left is a casino, and the right, a shop.</p><p>On the far side of the cave, you see a large doorway</p><button onclick = 'casino();'>Casino</button><button onclick = 'door();'>Leave the cave</button><button onclick = 'goBack();'>Turn around</button><button onclick = 'shop();'>Shop</button>";
     }
     //Takes you to the casino
     function casino(){

        div1.innerHTML = "<p>This so-called 'casino' is a sad sight.</p><p>One table sits in the middle of the room, with a single die on it.</p><p>'Hello, friend. Would you like to test your luck?'</p><p>You look around to find the source of the voice.</p><p>As you look down, you see a bright green goblin smiling with his large, pointy teeth.</p><p>'The game is simple. You name a number, and if the die lands on that number, you win!'</p><button onclick = 'playGame();'>Play game</button><button onclick = 'leave();'>Leave</button>";   
     }

     function playGame(){
        
        document.getElementById("playgame").style.display = "block";
        document.getElementById("currentgold").style.display = "block";
        document.getElementById("currentgold").innerHTML = "Current gold:" + money;

        if (money <= 0){

            broke();
        } 

     }
var numGuess
var bet
     function roll(){

       numGuess = Number(document.getElementById("test2").value);
       bet = Number(document.getElementById("test1").value);
        
        
         if(money-1 < 0){

               
            broke();

      }
            

        
        if (money >= bet){
      
        var result = Math.floor(Math.random() * 6);
        money = (money-bet);
        
      }
           
        document.getElementById("currentgold").innerHTML = "Current gold: " + money;

            if(result == numGuess){

               money = money + (bet * 6);
               
            }
         }

         function broke(){
               
            document.getElementById("playgame").style.display = "none";
            div1.innerHTML = "<p>'No gold? No play.'</p><p>'Get out of here, you degenerate!'</p><button onclick = 'leave();'>Leave</button>"

         }  
        

        function leave(){
            
            document.getElementById("playgame").style.display = "none";
            document.getElementById("currentgold").style.display = "none";
            div1.innerHTML = "<p>You are back in the giant cavern</p><button onclick = 'casino();'>Casino</button><button onclick='door();'>Leave the cave</button><button onclick = 'goBack();'>Go back</button><button onclick = 'shop();'>Shop</button>"
        }

        function shop(){

         div1.innerHTML = "<p>You enter the tent.</p><p>Bottles filled with mystery liquids cover shelves on every wall, spanning from floor to ceiling.</p><p>Behind a counter stands a bearded gnome.</p><p>On the counter, you see your missing longsword.Attached to the hilt, a price tag of 100 gold pieces.</p><p>'Welcome to my shop, I am Markin.'</p><p>'Let me know if you see anything you like'</p><button onclick = 'sword();'>Sword</button><button onclick='leave();'>Leave</button>";

         document.getElementById("currentgold").style.display = "block";
         document.getElementById("currentgold").innerHTML = "Current gold: " + money;

        }

        function sword(){

         div1.innerHTML = "<p>'Ahhh, a fine choice. I picked that up from a traveler just this morning.'</p><p>'Hard as diamonds, sharp as a razor. That will be 100 gold.'</p><button onclick='buySword();'>Buy</button><button onclick='stealSword();'>Steal and run</button><button onclick='leave();'>Leave</button>";      
        }

        function buySword(){

         if (money<100){

            div1.innerHTML="<p>'Quit wasting my time.'</p><p>'Come back when you have some money to spend.'</p><button onclick ='stealSword();'>Steal and run</button><button onclick ='leave();'>Leave</button>"

         }

         else{
         
            div1.innerHTML = "<p>You feel ripped off, but there was no telling what could happen if you tried to take your sword back.</p><p>You recieve: Longsword</p><button onclick='leave();'>Leave</button>"
         money = money - 100;
         document.getElementById("currentgold").innerHTML = "Current gold: " + money;
         equipment.push("Longsword");
        }

      }

      function stealSword(){

         document.getElementById("currentgold").style.display = "none";
         div1.innerHTML = "<p>You make a break for the door.</p><p>Almost to freedom, you feel glass break between your shoulderblades.</p><p>You look down, and see acid eating a hole through your chest.</p><p>As you die, you hear the laughter of the Gnome behind you.</p><h2>It's been nice to Gnome you.</h2><button onclick='startQuest();'>Restart</button>";
      }

      function door(){

         div1.innerHTML = "<p>You walk through the door on the far side of the cavern, and start climbing a winding staircase.</p><p>As you climb, you hear a gentle rumbling, the sound of snoring.</p><p>You come out at the top into a smaller chamber.</p><p>The chamber is lit softly with a small amount of torches.</p><p>You see a sleeping troll off to the side of the cave, across from you, another doorway.</p><p>Beside it, a log the size of an average human leans against the wall.</p><button onclick='sneak();'>Try to sneak past</button><button onclick='fight();'>Prepare for a fight</button>";
      }

      function sneak(){

         var result = Math.floor(Math.random() * 10);

         if (result < 8){

            goSneak();
         }
           
         else{

            div1.innerHTML = "<p>You successfully snuck past the troll</p><button onclick = 'end();'>Continue on</button>"
         }
      }

      function goSneak(){

         if(equipment.includes("Longsword")){

            div1.innerHTML ="<p>You attempt to sneak past the sleeping troll.</p><p>As you watch the troll for any signs of life, you kick a previously unseen bucket in the middle of the floor.</p><p>With a loud clang, the bucket hits the wall, eliminating any chance of getting by unnoticed.</p><p>The troll awakens, and with surprising speed, it grabs its club, and charges towards you.</p><p>You draw your sword in time for the troll to swing.</p><p>Your sword meets the club, but the force is too great.</p><p>The impact sends your sword back towards you, taking your head clean off.</p><p>The troll sits down to eat its unexpected snack.</p><h2>Heads will troll.</h2><button onclick='startQuest();'>Restart</button>";
            }

            else{

               div1.innerHTML = "<p>You attempt to sneak past the sleeping troll.</p><p>As you watch the troll for any signs of life, you kick a previously unseen bucket in the middle of the floor.</p><p>With a loud clang, the bucket hits the wall, eliminating any chance of getting by unnoticed.</p><p>The troll awakens, and with surprising speed, it grabs its club, and charges towards you.</p><p>Having no weapon to defend yourself with, you collapse from a single blow of the troll's makeshift club.</p><p>The troll sits down to eat its unexpected snack.</p><h2>You got Trolled</h2><button onclick='startQuest();'>Restart</button>"; 
         }
      }

      function fight(){

         if(equipment.includes("Longsword")){

              div1.innerHTML ="<p>You draw your sword and approach the sleeping troll.</p><p>You raise your sword high above your head, and prepare to deliver a killing blow.</p><p>The troll's eyes snap open and it puts both arms up to defned itself.</p><p>Your sword goes through one of the arms, as the other wraps around your neck, pulling you closer.</p><p>You quickly point your sword towards the troll's chest, and drive it home.</p><p>The trolls grip loosens, and you fall backwards, exhausted.</p><p>The door across the room now stands unguarded.</p><button onclick='end();'>Continue on</button>"

      }

      else{
      
         div1.innerHTML="<p>You foolishly approach the sleeping troll, unarmed, and unprepared.</p><p>As you stand above the troll considering you next move, the troll's eyes snap open, and it lunges towards you, grabbing your throat.</p><p>You struggle to retain consciousness as the troll squeezes.</p><p>Your vision fades to black.</p><h2>Why would you try to fistfight a troll?</h2>";

      }

   }


   function end(){

      div1.innerHTML="<p>As you leave the room, you enter into a long, winding tunnel.</p><p>As you walk, you tightly grip your sword, preparing for whatever lies ahead.</p><h2>To be continued...</h2>";

   }

   (function() {
      var x = new Date()
      var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
      document.getElementById('date').innerText = "Site last updated: " + x1;
      display_c();
       })();

       