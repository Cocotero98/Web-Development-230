let cards=document.querySelector('.cards');
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function(respone){return respone.json()})
    .then(function(jsonObject){
        console.table(jsonObject)
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
    })

    function displayProphets(prophet) {
        // Create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p= document.createElement('p');
        let p2= document.createElement('p');
        let portrait = document.createElement('img');
      
        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`

        //Change the textContent property of both p elements to contain the date and place of birth
        p.textContent = `Date of birth: ${prophet.birthdate}`
        p2.textContent = `Place of birth: ${prophet.birthplace}`

        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);        
        card.appendChild(portrait);

      
        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);
      }
